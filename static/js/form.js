window.addEvent("domready", function() {
    ajax_submit = function(event, error_callbacks) {
	var form = event.target;
	var myid = form.get("id");

	event.stop();
	form.set('send', {
	    onSuccess: function(responseText) {
		var response = JSON.decode(responseText);

                if (response.status == "ko") {
                    $(document.body).set("html", response.content);
		    $(document.body).addEvent("submit", default_submit);
		    if ($defined(error_callbacks[myid])) {
			error_callbacks[myid]();
		    }
                } else {
                    if (response.url != "") {
                        parent.location.href = response.url;			
		    }
                    parent.SqueezeBox.close();
                }
            },
	    onFailure: function(xhr) {
		parent.document.getElement('iframe').setStyles({width: 800, height: 600});
		$(document.body).set("html", xhr.responseText);
	    }
        });
        form.send();
    };

    default_submit = function(event) {
	var error_callbacks = {
	    mbaliasform: function() {
		if ($("id_domain").value == 0) {
		    $("id_mboxes").set("html", "");
		}
		mbaliasform_init();
	    },
	    armform: function() {
		new Calendar({id_untildate: "Y-m-d"}, {
		    tweak: {x: -100, y:-100}
		});
	    },
	    permform: function() {
		if ($defined($("id_domain"))) {
		    $("id_domain").options[0].setProperty("selected", "selected");
		    domadminform_init();
		}
	    }
	};

	ajax_submit(event, error_callbacks);
    };

    $(document.body).addEvent("submit", default_submit);

    $$("input[type!=submit]", "select").each(function(elt) {
        if ($(elt.name + "_helptext")) {
            elt.store("tip:title", gettext("Help"));
            elt.store("tip:text", $(elt.name + "_helptext").get("html"));
        }
    });
    var tip = new Tips($$("input[type!=submit]", "select"));
});
