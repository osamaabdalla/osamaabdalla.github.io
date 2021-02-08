/* ========================================================================
 * Page.js
 * Copyright 2014 pampersdry.info
 * ========================================================================
 *
 * This is the place where all the page related javascript is reside. You can
 * see example usage of plugin here :)
 * ======================================================================== */

if (typeof jQuery === "undefined") { throw new Error("This application requires jQuery"); }



/* ========================================================================
 * Page: form-wizard.html
 * Plugin: steps, parsley
 * ======================================================================== */
;(function ($, window, document, undefined) {
    if ($("body").data("page") === "form-wizard") {
        // Log page name
        // ================================
        console.log("Page: " + $("body").data("page") + ".html");

        // Form wizard with no validation
        // ================================
        $("#wizard").steps({
            headerTag: ".wizard-title",
            bodyTag: ".wizard-container",
            onFinished: function () {
                // do anything here ;)
                alert("finished!");
				$("#wizard").submit();
            }
        });

        // Form wizard with validation
        // ================================
        $("#wizard-validate").steps({
            headerTag: ".wizard-title",
            bodyTag: ".wizard-container",
            transitionEffect: "fade",
            onStepChanging: function (event, currentIndex, newIndex) {
                console.log(currentIndex);
				return true;
                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex) {
                    return true;
                }

                // Forbid next action on "Warning" step if the user is to young
                if (newIndex === 3 && Number($("#age-2").val()) < 18) {
                    return true;
                }

                // NOTE: Use parsley group(data-parsley-group) to validate form group
                // and move to next container if validation is passed. No need to init
                // parsley validation plugin on the form. Just put the parsley built-in
                // validator(eg:data-parsley-required="true") to the form input.
                // ======================================================================
                // SAMPLE: <input type="text" name="first-name" class="form-control" placeholder="First Name" data-parsley-group="{group-name}" data-parsley-required>

                // validate "order" section: data-parsley-group="order"
               /* if ((currentIndex === 0)) {
                    return $(this).parsley().validate("order");
                }

                // validate "information" section: data-parsley-group="information"
                if ((currentIndex === 1)) {
                    return $(this).parsley().validate("information");
                }

                // validate "payment" section: data-parsley-group="payment"
                if ((currentIndex === 2)) {
                    return $(this).parsley().validate("payment");
                }*/
            },
            onStepChanged: function (event, currentIndex, priorIndex) {
                // Used to skip the "Warning" step if the user is old enough.
                /*if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
                    $("#form-3").steps("next");
                }

                // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
                if (currentIndex === 2 && priorIndex === 3) {
                    $("#form-3").steps("previous");
                }*/
            },
            onFinishing: function (event, currentIndex, newIndex) {
                // revalidate the whole form
                return $(this).parsley().validate();
            },
            onFinished: function () {
                // yayyy! all validation is pass.. now we can send data to server
                // or display message ;)

                $('li.last').removeClass("done");

				var countcheck = $("[id^=chkbx_]:checked ").length;
				if(countcheck == 0){
					bootbox.alert("<h4 style='font-size: 13px;' class='modal-title'>Your app can't have no features! </h4>");
				}
				else{
				$("#wizard-validate").submit();
				/*
				bootbox.confirm("<h4 style='font-size: 13px;' class='modal-title'>Are you sure you want to submit the details?</h4>", function(result){
				  if(result)
				  {
					$("#wizard-validate").submit();
				  }



				});
				*/



					//var confirmtxt = "Are you sure you want to submit the details?";
					//var confirmok = confirm(confirmtxt);
					//if(confirmok)
						//$("#wizard-validate").submit();
				}

            }
        });
    }
})(jQuery, window, document);




