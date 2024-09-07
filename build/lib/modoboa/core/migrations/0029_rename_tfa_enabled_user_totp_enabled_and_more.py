# Generated by Django 4.2.13 on 2024-06-21 15:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0028_userfidokeys"),
    ]

    operations = [
        migrations.RenameField(
            model_name="user",
            old_name="tfa_enabled",
            new_name="totp_enabled",
        ),
        migrations.AddField(
            model_name="user",
            name="webauthn_enabled",
            field=models.BooleanField(default=False),
        ),
    ]
