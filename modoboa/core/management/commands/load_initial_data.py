"""
A management command to load Modoboa initial data.

* Create a default super admin if none exists
* Create groups and permissions

"""

from functools import reduce
import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import Group
from django.core.management import call_command
from django.core.management.base import BaseCommand

from oauth2_provider.models import get_application_model

from modoboa.lib.permissions import add_permissions_to_group
from ... import constants, extensions, models, signals


class Command(BaseCommand):
    """Command definition."""

    help = "Load Modoboa initial data"  # NOQA:A003

    def add_arguments(self, parser):
        """Add extra arguments to command."""
        parser.add_argument(
            "--name", help="The name of your Modoboa instance", default="instance"
        )
        parser.add_argument(
            "--admin-username",
            default="admin",
            help="Username of the initial super administrator.",
        )
        (
            parser.add_argument(
                "--extra-fixtures",
                action="store_true",
                default=False,
                help="Also load some fixtures from the admin application.",
            ),
        )
        parser.add_argument(
            "--dev",
            action="store_true",
            default=False,
            help="Setup dev environment. DO NOT USE IN PRODUCTION",
        )

    def handle(self, *args, **options):
        """Command entry point."""
        extensions.exts_pool.load_all()

        if not models.User.objects.filter(is_superuser=True).count():
            admin = models.User(username=options["admin_username"], is_superuser=True)
            admin.set_password("password")
            admin.save()
            models.ObjectAccess.objects.create(
                user=admin, content_object=admin, is_owner=True
            )

        groups = list(constants.PERMISSIONS.keys())
        for groupname in groups:
            group, created = Group.objects.get_or_create(name=groupname)
            results = signals.extra_role_permissions.send(
                sender=self.__class__, role=groupname
            )
            permissions = constants.PERMISSIONS.get(groupname, [])
            if results:
                permissions += reduce(
                    lambda a, b: a + b, [result[1] for result in results]
                )
            if not permissions:
                continue
            add_permissions_to_group(group, permissions)

        for extname in list(extensions.exts_pool.extensions.keys()):
            extension = extensions.exts_pool.get_extension(extname)
            try:
                extension.load_initial_data()
            except Exception as e:
                self.stderr.write(
                    "Unable to load initial data for '{}' ({}).".format(extname, str(e))
                )
            else:
                signals.initial_data_loaded.send(sender=self.__class__, extname=extname)

        base_frontend_dir = os.path.join(
            os.path.dirname(__file__), "../../frontend_dist/"
        )
        if os.path.exists(base_frontend_dir):
            frontend_target_dir = "{}/frontend".format(options["name"])
            shutil.copytree(base_frontend_dir, frontend_target_dir)

        app_model = get_application_model()
        allowed_host = settings.get("ALLOWED_HOSTS")
        if allowed_host is not None:
            allowed_host = allowed_host[0]
        else:
            allowed_host = input("What will be the hostname used to access Modoboa? ")
            if not allowed_host:
                allowed_host = "localhost"
        frontend_path = settings.get("NEW_ADMIN_URL", "new-admin")
        redirect_uri = f"https://{allowed_host}/{frontend_path}/login/logged"
        client_id = str(uuid.uuid4())
        frontend_application = app_model.objects.filter(name="frontend")
        if not frontend_application.exists():
            self._exec_django_command(
                "createapplication",
                "frontend",
                "--name",
                "Modoboa frontend",
                "--client-id",
                client_id,
                "--skip-authorization",
                "--algorithm",
                "RS256",
                "--redirect-uris",
                redirect_uri,
                "public",
                "authorization-code",
            )

        else:
            client_id = frontend_application.first().client_id

        with open("{}/config.json".format(frontend_target_dir), "w") as fp:
            fp.write(
                f"""{{
                        "API_BASE_URL": "https://{allowed_host}/api/v2",
                        "OAUTH_AUTHORITY_URL": "https://{allowed_host}/api/o",
                        "OAUTH_CLIENT_ID": "{client_id}",
                        "OAUTH_REDIRECT_URI": "{redirect_uri}"
                        }}
                """
            )

        if options["extra_fixtures"]:
            from modoboa.admin import factories

            factories.populate_database()

        if options["dev"]:
            app_model = get_application_model()
            if not app_model.objects.filter(name="frontend").exists():
                call_command(
                    "createapplication",
                    "--algorithm=RS256",
                    "--redirect-uris=https://localhost:3000/login/logged",
                    "--name=frontend",
                    "--client-id=LVQbfIIX3khWR3nDvix1u9yEGHZUxcx53bhJ7FlD",
                    "public",
                    "authorization-code",
                )
