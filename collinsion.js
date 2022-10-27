jQuery(document).ready(function ($) {
  $("#helpdesk_ticket_subject").closest(".form-group").hide();
  if ($("#title").hasClass("ColumbusItaly")) {
    $("button.new-ticket-submit-button")
      .hide()
      .after(
        '<span class="btn fw-primary-button new-ticket-submit-button new-ticket-dummy">Sottoscrivi</span>'
      );
  } else {
    $("button.new-ticket-submit-button")
      .hide()
      .after(
        '<span class="btn fw-primary-button new-ticket-submit-button new-ticket-dummy">Submit</span>'
      );
  }

  let AuthorizationKey = "";
  let ClaimInitiatedNumber = "";
  let bankResult = "";
  let countryPortal = {
    SagaPostOfficeColumbusUK: "GB",
    VHI: "IE",
  };
  let succesStatus = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
  getJWTToken();
  function getJWTToken(fieldId) {
    var test=false;
var contentType;
var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    fetch(
      "https://claim-api-lower.collinsonnis.com/authenticate",
      requestOptions
    )
      
.then((response) => {
        console.log("response -->",response);
      contentType = response.status;
     if (!response.ok) {
       test=true;
     }
     return response.json();
  })
      .then(function (result) {
      console.log("--Policy details->",result)
            console.log("--Policy details->",test)
      AuthorizationKey = result.token
       if (fieldId) {
          $(fieldId).trigger("click");
        }
       if(test) {
          console.log("Please refresh the page ",contentType);
        }
      })
      .catch((error) => console.log(error));
 
   
  }
  //email verification function
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  //get date today
  var today = new Date();

  $(".form-group.helpdesk_ticket_email").hide();

  //bank API dependancies - for Columbus Italy and VHI
  

  //____________________________________________________SECTION 1 Start - Your Policy______________________________________________
  $("#new_helpdesk_ticket").wrapAll('<div id="accordion">');
  //identify Policy Number Parent DIV

  //check for portal
  if ($("#title").hasClass("VHI") || $("#title").hasClass("ColumbusItaly")){
    var PolicyNumberParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_policy_number_2321673"
    ).parentElement;
    PolicyNumberParent.classList.add("for-section-1");

    var DOBParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_date_of_birth_2321673"
    ).parentElement;
    DOBParent.classList.add("for-section-1");
    
  } else if ($("#title").hasClass("EasyJet")) {
    var PolicyNumberParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_policy_number_2321673"
    ).parentElement;
    PolicyNumberParent.classList.add("for-section-1");
    
    var PostcodeParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_postcode68273_2321673"
    ).parentElement;
    PostcodeParent.classList.add("for-section-1");
  }
  
  //add save and continue button - add section 1
  if ($("#title").hasClass("ColumbusItaly")) {
    $(
      '<button id="save_and_continue1" class="btn btn-primary for-section-1 save_and_continue" type="button">Trova la politica</button>'
    ).insertAfter("#helpdesk_ticket_custom_field_cf_date_of_birth_2321673");
  }else if ($("#title").hasClass("EasyJet")) {
    $(
      '<button id="save_and_continue1" class="btn btn-primary for-section-1 save_and_continue" type="button">Find Policy</button>'
    ).insertAfter("#helpdesk_ticket_custom_field_cf_postcode68273_2321673");
  }
  else {
    $(
      '<button id="save_and_continue1" class="btn btn-primary for-section-1 save_and_continue" type="button">Find Policy</button>'
    ).insertAfter("#helpdesk_ticket_custom_field_cf_date_of_birth_2321673");
  }
  //____________________________________________________SECTION 2 Start -  About You______________________________________________
  //identify Email Parent DIV
  var EmailParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_email_address_2321673"
  ).parentElement;
  EmailParent.classList.add("for-section-2");
  //identify Email Parent DIV 2 -confirmation
  var EmailConfirmationParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_confirm_email_address_2321673"
  ).parentElement;
  EmailConfirmationParent.classList.add("for-section-2");
  //phone number
  var NumberParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_mobile_number_2321673"
  ).parentElement;
  NumberParent.classList.add("for-section-2");
  //save and continue section 2
  if ($("#title").hasClass("ColumbusItaly")) {
    $(
      '<button id="save_and_continue2" class="btn btn-primary for-section-2 save_and_continue" type="button" >Salva e continua</button>'
    ).insertAfter("#helpdesk_ticket_custom_field_cf_mobile_number_2321673");
  } else {
    $(
      '<button id="save_and_continue2" class="btn btn-primary for-section-2 save_and_continue" type="button" >Save & Continue</button>'
    ).insertAfter("#helpdesk_ticket_custom_field_cf_mobile_number_2321673");
  }
  //____________________________________________________SECTION 3 Start - About Your Trip ____________________________________________
  //Destination
  var DestinationParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_your_destination_2321673"
  ).parentElement.parentElement.parentElement;
  // $('.helpdesk_ticket_custom_field_cf_your_destination_2321673').addClass('for-section-3')
  DestinationParent.classList.add("for-section-3");
  //Departure Date
  var DespartureParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_your_departure_date_2321673"
  ).parentElement;
  DespartureParent.classList.add("for-section-3");
  //Return Date
  var ReturnParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_your_return_date_2321673"
  ).parentElement;
  ReturnParent.classList.add("for-section-3");
  //Booking Date
  var BookingParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_your_booking_date_2321673"
  ).parentElement;
  BookingParent.classList.add("for-section-3");
  //Incident Date
  var IncidentParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_your_incident_date_2321673"
  ).parentElement;
  IncidentParent.classList.add("for-section-3");
  //Reason for claim
  $(
    ".form-group.helpdesk_ticket_custom_field_cf_reason_for_claim_2321673"
  ).addClass("for-section-3");
  //save and coninue for Section 3
  if ($("#title").hasClass("ColumbusItaly")) {
    $(
      '<button id="save_and_continue3" class="btn btn-primary for-section-3 save_and_continue" type="button" >Salva e continua</button>'
    ).insertAfter(
      ".form-group.helpdesk_ticket_custom_field_cf_reason_for_claim_2321673.for-section-3"
    );
  } else {
    $(
      '<button id="save_and_continue3" class="btn btn-primary for-section-3 save_and_continue" type="button" >Save & Continue</button>'
    ).insertAfter(
      ".form-group.helpdesk_ticket_custom_field_cf_reason_for_claim_2321673.for-section-3"
    );
  }
  //____________________________________________________SECTION 4 Start - Tell us what happened____________________________________________
  $(
    ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
  ).addClass("for-section-4");

  if ($("#title").hasClass("ColumbusItaly")) {
    $(
      '<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button">Salva e continua</button>'
    ).insertAfter(
      ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
    );
  } else {
    $(
      '<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button">Save &amp; Continue</button>'
    ).insertAfter(
      ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
    );
  }
  //____________________________________________________SECTION 5 Start - Your Documents____________________________________________
  //for-section-5 attachment group
  //___________________________________new_section 5_______________________________________________________

  $(
    '<div id="mock-doc" class="form-group attachments-container for-section-5"><span class="d-none"><input id="upload_file" type="file" multiple="false"><input id="files_list" type="file" name="helpdesk_ticket[attachments][][resource]" multiple="false"></span><div class="dropdown"><button class="btn btn-link " type="button" id="attach_btn" data-attach-type="file"><span class="file-upload-btn" tabindex="0"><img data-src="/glyphs/vectors/attachment.svg" loading="lazy" alt="Attachment" class="icon ls-is-cached lazyloaded" src="/glyphs/vectors/attachment.svg">Attachment</span></button><ul class="dropdown-menu" aria-labelledby="attach_btn"><li><a class="dropdown-item" href="#" data-attach-type="file">Attach a file</a></li></ul></div><div id="attachments_list" class="files-container"></div><div><div id="cumulative_error_heading" class="error-heading"></div><div id="cumulative_error_attachments_list" class="files-container"></div></div><div><div id="individual_error_heading" class="error-heading"></div><div id="individual_error_attachments_list" class="files-container"></div></div></div>'
  ).insertAfter(
    ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
  );
  $(".form-group.attachments-container").addClass("for-section-5");

  if ($("#title").hasClass("ColumbusItaly")) {
    $(
      '<button class="save_and_continue5 btn btn-primary for-section-5 save_and_continue" type="button" >Salva e continua</button>'
    ).insertAfter(".form-group.attachments-container.for-section-5");
  } else {
    $(
      '<button class="save_and_continue5 btn btn-primary for-section-5 save_and_continue" type="button" >Save & Continue</button>'
    ).insertAfter(".form-group.attachments-container.for-section-5");
  }
  $("#mock-doc").remove();
  $(".save_and_continue5").first().hide();

  // addImages();
  //____________________________________________________SECTION 6 Start - payment details____________________________________________
  var accHolderParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_name_of_account_holder_2321673"
  ).parentElement;
  accHolderParent.classList.add("for-section-6");
  //check for portal
  if ($("#title").hasClass("VHI") || $("#title").hasClass("ColumbusItaly")){
    //Name of acc holder - put in section 6
    var accHolderParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_name_of_account_holder_2321673"
    ).parentElement;
    accHolderParent.classList.add("for-section-6");
    //IBAN
    var ibanNumber = document.getElementById(
      "helpdesk_ticket_custom_field_cf_iban_number_2321673"
    ).parentElement;
    ibanNumber.classList.add("for-section-6");
  } else if ($("#title").hasClass("EasyJet")) {
    //Name of acc holder - put in section 6
    var accHolderParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_name_of_account_holder_2321673"
    ).parentElement;
    //acount number
    var AccNumParent = document.getElementById(
      "helpdesk_ticket_custom_field_cf_account_number_2321673"
    ).parentElement;
    AccNumParent.classList.add("for-section-6");
     //sort code
  var SortCodeParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_sort_code659991_2321673"
  ).parentElement;
  SortCodeParent.classList.add("for-section-6");
  }

  //save and continue 6
  if ($("#title").hasClass("ColumbusItaly")) {
    $(
      '<button id="save_and_continue6" class="btn btn-primary for-section-6 save_and_continue" type="button" >Salva e continua</button>'
    ).insertAfter(ibanNumber);
  } else  if ($("#title").hasClass("VHI")){
    $(
      '<button id="save_and_continue6" class="btn btn-primary for-section-6 save_and_continue" type="button" >Save & Continue</button>'
    ).insertAfter(ibanNumber);
  }
  else if ($("#title").hasClass("EasyJet")){
    $(
      '<button id="save_and_continue6" class="btn btn-primary for-section-6 save_and_continue" type="button" >Save & Continue</button>'
    ).insertAfter(SortCodeParent);
  }
  //____________________________________________________SECTION 7 Start - Summary Section____________________________________________
  $("#helpdesk_ticket_form_id").addClass("for-section-7");
  $(".form-group.helpdesk_ticket_email").addClass("for-section-7");
  $(".btn.fw-primary-button.new-ticket-submit-button").addClass(
    "for-section-7"
  );
  $("a.btn.fw-secondary-button").addClass("for-section-7");

  //__________________________________________________________________________________
  //cleaner
  function addErrorMessage(ID, errorMessage) {
    $("+" + ID).addClass("invalid");
    $(".invalid-feedback." + ID).addClass("d-block");
    $(".invalid-feedback." + ID).text(errorMessage);
  }
  //include italy
  var italy_titles = [
    "In merito alla tua polizza",
    "Su di te",
    "Riguardo al tuo viaggio",
    "Che cosa è accaduto",
    "I tuoi documenti",
    "I tuoi dettagli bancari",
    "Descrizione del tuo sinistro",
  ];
  //include italy

  var titles = [
    "Your policy",
    "About you",
    "About your trip",
    "Tell us what happened",
    "Your documents",
    "Your payment details",
    "Your claim summary",
  ];
  function thisDiv(number, title) {
    $(".for-section-" + number).wrapAll(
      '<div class="collapse" id="collapseSection' +
        number +
        '" data-parent="#accordion" aria-labelledby="overall_div_' +
        number +
        '"><div class="card-body ins-card">'
    );
    $(
      '<div class="card ins-card">' +
        '<div id="overall_div_' +
        number +
        '" class="card-header ins-div"> ' +
        '<h5 class="mb-0 header-text">' +
        title +
        "</h5>" +
        '<div id="section-' +
        number +
        '-button" class="ins-col-test collapsed  col align-self-end"  data-target="#collapseSection' +
        number +
        '" aria-expanded="false">' +
        '<span class="plus-sign fas fa-plus"></span>' +
        "</div>" +
        "</div>" +
        "</div>"
    ).insertBefore("#collapseSection" + number);
  }
  //check if Italian Portal for headings
  if ($("#title").hasClass("ColumbusItaly")) {
    for (var i = 0; i < italy_titles.length; ++i) {
      thisDiv(i + 1, italy_titles[i]);
    }
  } else {
    //invoke for English portals
    for (var i = 0; i < titles.length; ++i) {
      thisDiv(i + 1, titles[i]);
    }
  }

  function checkedfilled(list_of_elements) {
    result = true;
    for (var i = 0; i < list_of_elements.length; ++i) {
      if ($("#" + list_of_elements[i]).val() == "") {
        result = false;
      }
    }
    return result;
  }

  function dateLogic(departure_date, return_date, booking_date, incident_date) {
    result = false;
    departure_date = new Date($("#" + departure_date).val());
    return_date = new Date($("#" + return_date).val());
    booking_date = new Date($("#" + booking_date).val());
    incident_date = new Date($("#" + incident_date).val());

    if (
      departure_date < return_date &&
      return_date > departure_date &&
      booking_date < departure_date &&
      incident_date < return_date
    ) {
      result = true;
    }

    return result;
  }
  function show_and_hide(
    elements_to_toggle,
    element_to_check,
    condition_to_check_for
  ) {
    //hide by default
    for (let i = 0; i < elements_to_toggle.length; i++) {
      $(elements_to_toggle[i]).hide();
    }
    $(element_to_check).change(function () {
      if ($(element_to_check).val() == condition_to_check_for) {
        for (let i = 0; i < elements_to_toggle.length; i++) {
          $(elements_to_toggle[i]).show();
        }
      } else {
        for (let i = 0; i < elements_to_toggle.length; i++) {
          $(elements_to_toggle[i]).hide();
        }
      }
    });
  }
  function date_past_present(element_ID) {
    $("#" + element_ID).focusout(function () {
      test_date = $("#" + element_ID).val();
      test_date = new Date(test_date);
      if (today < test_date) {
        addErrorMessage(element_ID, "Date must be in past or present.");
      }
    });
  }

  function cannot_be_zero(ID) {
    $("#" + ID).focusout(function () {
      var value_int = parseInt($("#" + ID).val());
      if (value_int == 0) {
        addErrorMessage(ID, "Value cannot be 0.");
      }
    });
  }

  function cant_be_more_than(value, comparison_value) {
    $("#" + value).focusout(function () {
      if ($("#" + comparison_value).val() == "") {
        addErrorMessage(comparison_value, "Pease fill in this field first.");
      } else {
        if ($("#" + value).val() > $("#" + comparison_value).val()) {
          addErrorMessage(
            value,
            "The value of this field not be more than value of previous field."
          );
        }
      }
    });
    $("#" + comparison_value).focusout(function () {
      if ($("#" + value).val() > $("#" + comparison_value).val()) {
        addErrorMessage(
          value,
          "The value of this field not be more than value of previous field."
        );
      } else {
        $(".invalid-feedback." + value).removeClass("d-block");
      }
    });
  }

  function clearError(list) {
    for (let i = 0; i < list.length; i++) {
      $(".invalid-feedback." + list[i]).removeClass("d-block");
    }
  }

  $(".ins-col-test").click(function () {
    //get element id
    var id = $(this).attr("id");

    if (
      !$("#" + id)
        .children(":first")
        .hasClass("fa-pen")
    ) {
      if (
        $("#" + id)
          .children(":first")
          .hasClass("fa-plus") &&
        $("#" + id).hasClass("collapsed") &&
        $("#" + id).attr("data-toggle")
      ) {
        $("#" + id)
          .children(":first")
          .removeClass("fa-plus")
          .addClass("fa-minus");
      } else if (
        $("#" + id)
          .children(":first")
          .hasClass("fa-minus") &&
        !$("#" + id).hasClass("collapsed") &&
        $("#" + id).attr("data-toggle")
      ) {
        $("#" + id)
          .children(":first")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      }
    }
  });

  function open_next(section_number) {
    //close current, open next
    $("#collapseSection" + section_number).removeClass("show");
    //sign swap
    $("#section-" + section_number + "-button")
      .children(":first")
      .removeClass("fa-minus");
    $("#section-" + section_number + "-button")
      .children(":first")
      .addClass("fa-plus");
    //ENABLE NEXT SECTION +!
    $("#section-" + (section_number + 1) + "-button").attr(
      "data-toggle",
      "collapse"
    );
    $("#collapseSection" + (section_number + 1)).addClass("show");
    //sign swap
    $("#section-" + (section_number + 1) + "-button")
      .children(":first")
      .removeClass("fa-plus");
    $("#section-" + (section_number + 1) + "-button")
      .children(":first")
      .addClass("fa-minus");
  }

  function summary_section_start() {
    //START SUMMARY SECTION
    if ($("#summary_intro").length) {
    } else {

      if ($("#title").hasClass("ColumbusItaly")) {
        $(
          "<p id='summary_intro'>Ti preghiamo di dedicare un momento a ricontrollare le tue informazioni: l'accuratezza ci aiuta a elaborare rapidamente la tua richiesta</p>"
        ).insertBefore(".form-group.helpdesk_ticket_email.for-section-7");
      }else{
        $(
          '<p id="summary_intro">Please take a moment to double check your information - accuracy helps us process your claim quickly.</p>'
        ).insertBefore(".form-group.helpdesk_ticket_email.for-section-7");
      }
    }
  }

  //BY DEFAULT -  add attribute to section-1-button and section-7-button
  $("#section-1-button").attr("data-toggle", "collapse");
  $("#section-7-button").attr("data-toggle", "collapse");

  //________________________________________________________________________________________________________________________________
  //section 1 continue
  //on CHANGE OF DATE OF BIRTH - check any of the two inputs is empty, if it is remove attr, else add it
  $("#save_and_continue1").click(function () {
    if ($("#title").hasClass("EasyJet")){
      if (
        $("#helpdesk_ticket_custom_field_cf_policy_number_2321673").val() == "" ||
        $("#helpdesk_ticket_custom_field_cf_postcode68273_2321673").val() == ""
      ) {
        addErrorMessage(
          "helpdesk_ticket_custom_field_cf_policy_number_2321673",
          "Please fill in all fields"
        );
        addErrorMessage(
          "helpdesk_ticket_custom_field_cf_postcode68273_2321673",
          "Please fill in all fields"
        );
      } else {
        //check LENGTH OF POLICY NUMBER - 7 DIGITS
        if (
          $("#helpdesk_ticket_custom_field_cf_policy_number_2321673").val()
            .length < 7 ) 
            {
              addErrorMessage(
              "helpdesk_ticket_custom_field_cf_policy_number_2321673",
              "Policy Number must be at least 7 digits."
            );
            $("#save_and_continue1").removeAttr("data-target");
            $("#save_and_continue1").removeAttr("data-toggle");

            }else if ($("#helpdesk_ticket_custom_field_cf_postcode68273_2321673").val()
            .length < 6) {
              addErrorMessage(
              "helpdesk_ticket_custom_field_cf_postcode68273_2321673",
              "Postcode must be at least 6 characters."
            );
            $("#save_and_continue1").removeAttr("data-target");
            $("#save_and_continue1").removeAttr("data-toggle");

        } else {

            //create variables for invoke
            let policyNumber = $(
              "#helpdesk_ticket_custom_field_cf_policy_number_2321673"
            ).val();
            let postCode = $(
              "#helpdesk_ticket_custom_field_cf_policy_number_2321673"
            ).val();
            //getPolicy INVOKE HERE!!
            //
            $("#save_and_continue1").attr("data-target", "#agreementModal");
            $("#save_and_continue1").attr("data-toggle", "modal");
            clearError([
              "helpdesk_ticket_custom_field_cf_postcode68273_2321673",
              "helpdesk_ticket_custom_field_cf_policy_number_2321673",
            ]);
          }
        }

         if ($("#cb").prop("checked") == true) {
        $("#continue").attr("data-dismiss", "modal");
        //grey out continue - opposite - for different schemes
        if ($("#title").hasClass("VHI")) {
          $("#continue").css("background-color", "#38133E");
        } else if ($("#title").hasClass("EasyJet")) {
          $("#continue").css("background-color", "#FF6600");
        } else if ($("#title").hasClass("CollinsonUK")) {
          $("#continue").css("background-color", "#FFFFFF");
        } else if ($("#title").hasClass("ColumbusItaly")) {
          $("#continue").css("background-color", "#083050");
        }
      } else {
        $("#continue").removeAttr("data-dismiss");
        //grey out continue
        $("#continue").css("background-color", "grey");
        $("#continue").removeAttr("data-dismiss");
      }

    }
    else if ($("#title").hasClass("VHI") || $("#title").hasClass("ColumbusItaly") ) {
    if (
      $("#helpdesk_ticket_custom_field_cf_policy_number_2321673").val() == "" ||
      $("#helpdesk_ticket_custom_field_cf_date_of_birth_2321673").val() == ""
    ) {
      addErrorMessage(
        "helpdesk_ticket_custom_field_cf_policy_number_2321673",
        "Please fill in all fields"
      );
      addErrorMessage(
        "helpdesk_ticket_custom_field_cf_date_of_birth_2321673",
        "Please fill in all fields"
      );
    } else {
      //check LENGTH OF POLICY NUMBER - 7 DIGITS
      if (
        $("#helpdesk_ticket_custom_field_cf_policy_number_2321673").val()
          .length >= 7
      ) {
        birthdate = $(
          "#helpdesk_ticket_custom_field_cf_date_of_birth_2321673"
        ).val();
        bday = new Date(birthdate);
        if (today < bday) {
          addErrorMessage(
            "helpdesk_ticket_custom_field_cf_date_of_birth_2321673",
            "Invalid Birthday"
          );
          $("#save_and_continue1").removeAttr("data-target");
          $("#save_and_continue1").removeAttr("data-toggle");
        } else if (today > bday) {
          let policyNumber = $(
            "#helpdesk_ticket_custom_field_cf_policy_number_2321673"
          ).val();
          let dateOfBirth = $(
            "#helpdesk_ticket_custom_field_cf_date_of_birth_2321673"
          ).val();
          getPolicyDetails(policyNumber, dateOfBirth, "#save_and_continue1");
          $("#save_and_continue1").attr("data-target", "#agreementModal");
          $("#save_and_continue1").attr("data-toggle", "modal");
          clearError([
            "helpdesk_ticket_custom_field_cf_date_of_birth_2321673",
            "helpdesk_ticket_custom_field_cf_policy_number_2321673",
          ]);
        } else {
          addErrorMessage(
            "helpdesk_ticket_custom_field_cf_date_of_birth_2321673",
            "Invalid Birthday"
          );
          $("#save_and_continue1").removeAttr("data-target");
          $("#save_and_continue1").removeAttr("data-toggle");
        }
      } else {
        addErrorMessage(
          "helpdesk_ticket_custom_field_cf_policy_number_2321673",
          "Policy Number must be at least 7 digits."
        );
        $("#save_and_continue1").removeAttr("data-target");
        $("#save_and_continue1").removeAttr("data-toggle");
      }
    }
    if ($("#cb").prop("checked") == true) {
      $("#continue").attr("data-dismiss", "modal");
      //grey out continue - opposite - for different schemes
      if ($("#title").hasClass("VHI")) {
        $("#continue").css("background-color", "#38133E");
      } else if ($("#title").hasClass("EasyJet")) {
        $("#continue").css("background-color", "#FF6600");
      } else if ($("#title").hasClass("CollinsonUK")) {
        $("#continue").css("background-color", "#FFFFFF");
      } else if ($("#title").hasClass("ColumbusItaly")) {
        $("#continue").css("background-color", "#083050");
      }
    } else {
      $("#continue").removeAttr("data-dismiss");
      //grey out continue
      $("#continue").css("background-color", "grey");
      $("#continue").removeAttr("data-dismiss");
    }
    }
  });
   function getPolicyDetails(policyNumber, dateOfBirth, fieldId) {
      console.log("---> policy inside token", AuthorizationKey);
      var flag=false;
      let statusCode;
      var myHeaders = new Headers();
      myHeaders.append("Cache-Control", "no-cache");
      myHeaders.append("Authorization", AuthorizationKey);
        var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
        "https://claim-api-lower.collinsonnis.com/api/policy?policyNumber=" +
        policyNumber +
        "%25&dob=" +
        dateOfBirth,
      requestOptions
    )  .then((response) => {
        console.log(response);
        statusCode = response.status;
     if (!response.ok) {
        flag=true;
     }
     return response.json();
  })
      .then(function (result) {
          console.log("Policy details",result)
          if(flag) {
            console.log("Need to show error ",statusCode);
            if(statusCode==401){
                console.log("error",result.error)
                getJWTToken(fieldId);
            }else if(statusCode==404){
                console.log("error 404 -->",result.body)
            }
          }else{
            buildPolicyUI(result);
          }
      })
      .catch((error) => console.log(error));
    }
    function buildPolicyUI(policyData) {
      let policyDetails = policyData.Insured;
      console.log(policyDetails);
      let InternalPolicyNumber = policyData.InternalPolicyNumber;
      let options = "";
      options +=
        '<div class="form-group"><label class="form-label"> Name(s) of the Insured</label>';
      policyDetails.forEach(function (element, index) {
        options +=
          '<div class="list-claim"><input type="checkbox" class="check-box" id=' +
          index +
          ' name="insured_1" data-isPolicyHolder=' +
          element.IsPolicyHolder +
          " value=" +
          element.FirstName +
          " data-clientId=" +
          element.ClientId +
          " data-PolicyNumber=" +
          InternalPolicyNumber +
          "><span>" +
          " " +
          element.FirstName +
          " " +
          element.LastName +
          "</span></div>";
      });
      options += "</div>";
      $(".list-policy-names").remove();
      $("#collapseSection2 .card-body").prepend(
        "<div class='list-policy-names'>" + options + "</div>"
      );
      $("#collapseSection2 .list-policy-names .form-group").append(
        "<div class='invalid-feedback check-finder'></div>"
      );
    }

//   function getPolicyDetails(policyNumber, dateOfBirth, fieldId) {
//     console.log("---> policy inside token", AuthorizationKey);
//     var myHeaders = new Headers();
//     myHeaders.append("Cache-Control", "no-cache");
//     myHeaders.append("Authorization", AuthorizationKey);
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch(
//       "https://claim-api-lower.collinsonnis.com/api/policy?policyNumber=" +
//         policyNumber +
//         "%25&dob=" +
//         dateOfBirth,
//       requestOptions
//     )
//       .then((response) => response.text())
//       .then(function (result) {
//         if (JSON.parse(result).status != 401) {
//           //diable
//           // $("#section-2-button").removeClass("disabled")
//           // $("#section-2-button").addClass("disabled")
//           buildPolicyUI(result);
//         } else {
//           getJWTToken(fieldId);
//           console.log("Please try again after sometime");
//           // $("#save_and_continue1").trigger("click");
//         }
//       })
//       .catch((error) => console.log("error", error));
//   }
//   function buildPolicyUI(policyData) {
//     let policyDetails = JSON.parse(policyData).Insured;
//     console.log(policyDetails);
//     let InternalPolicyNumber = JSON.parse(policyData).InternalPolicyNumber;
//     let options = "";
//     options +=
//       '<div class="form-group"><label class="form-label"> Name(s) of the Insured</label>';
//     policyDetails.forEach(function (element, index) {
//       options +=
//         '<div class="list-claim"><input type="checkbox" class="check-box" id=' +
//         index +
//         ' name="insured_1" data-isPolicyHolder=' +
//         element.IsPolicyHolder +
//         " value=" +
//         element.FirstName +
//         " data-clientId=" +
//         element.ClientId +
//         " data-PolicyNumber=" +
//         InternalPolicyNumber +
//         "><span>" +
//         " " +
//         element.FirstName +
//         " " +
//         element.LastName +
//         "</span></div>";
//     });
//     options += "</div>";
//     $(".list-policy-names").remove();
//     $("#collapseSection2 .card-body").prepend(
//       "<div class='list-policy-names'>" + options + "</div>"
//     );
//     $("#collapseSection2 .list-policy-names .form-group").append(
//       "<div class='invalid-feedback check-finder'></div>"
//     );
//   }
  //on click of agreement check box- check if checked or not- if checked enable continue button otherwise disable
  $("#cb").click(function () {
    if ($("#cb").prop("checked") == true) {
      //ad attribute to dismiss modal
      $("#continue").attr("data-dismiss", "modal");
      //grey out continue - opposite
      if ($("#title").hasClass("VHI")) {
        $("#continue").css("background-color", "#38133E");
      } else if ($("#title").hasClass("EasyJet")) {
        $("#continue").css("background-color", "#FF6600");
      } else if ($("#title").hasClass("CollinsonUK")) {
        $("#continue").css("background-color", "#FFFFFF");
      } else if ($("#title").hasClass("ColumbusItaly")) {
        $("#continue").css("background-color", "#083050");
      }
    } else {
      $("#continue").removeAttr("data-dismiss");
      //grey out continue
      $("#continue").css("background-color", "grey");
      $("#continue").removeAttr("data-dismiss");
    }
  });

  //Consent "Continue" - section NOW GOOD!
  $("#continue").click(function () {
    if ($("#cb").prop("checked") == true) {
      //start summary section
      summary_section_start();

      function add_section_1() {
        $(
          "<strong id='section_1_header'>" + titles[0] + "</strong>"
        ).insertAfter("#summary_intro");
        $("<hr class='summary_divider' id='great_line_1'>").insertAfter(
          "#section_1_header"
        );
        //for loops
        var number_elements = $("#collapseSection1")
          .children(".card-body.ins-card")
          .children("div").length;

        for (let i = 1; i < number_elements + 1; i++) {
          var label = $("#collapseSection1")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection1")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("input")
            .val();
          $(
            "<p class='section_1_line'>" + label + " : " + value + "</p>"
          ).insertBefore("#great_line_1");
        }
      }

      function update_section_1() {
        //for loops
        var number_elements = $("#collapseSection1")
          .children(".card-body.ins-card")
          .children("div").length;
        $("p").remove(".section_1_line");
        for (let i = 1; i < number_elements + 1; i++) {
          var label = $("#collapseSection1")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection1")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("input")
            .val();
          $(
            "<p class='section_1_line'>" + label + " : " + value + "</p>"
          ).insertBefore("#great_line_1");
        }
      }

      if ($("#section_1_header").length) {
        update_section_1();
      } else {
        add_section_1();
      }
      //invoke open_next here!
      open_next(1);
    }

    //change to pencil icon - first remove class that changes between plus and minus

    $("#section-1-button").children(":first").removeClass("fa-plus");
    $("#section-1-button").children(":first").removeClass("fas");

    $("#section-1-button").children(":first").addClass("fa-solid");
    $("#section-1-button").children(":first").addClass("fa-pen");
  });
  //____________________________________________________SECTION 1 End - Your Policy______________________________________________
  //continue section 2
  var emailAddress = "helpdesk_ticket_custom_field_cf_email_address_2321673";
  var confirm_emailAddress =
    "helpdesk_ticket_custom_field_cf_confirm_email_address_2321673";
  var mobileNumber = "helpdesk_ticket_custom_field_cf_mobile_number_2321673";

  list_to_check1 = [emailAddress, confirm_emailAddress, mobileNumber];

  $("#save_and_continue2").click(function () {
    //check they are filled
    var len = document.querySelectorAll(
      '.list-policy-names input[type="checkbox"]:checked'
    ).length;
    if (len <= 0) {
      addErrorMessage("check-finder", "Please select at least one client");
    } else {
      let errorMessage = ["check-finder"];
      clearError(errorMessage);
    }
    if (
      $("#" + emailAddress).val() != "" &&
      $("#" + confirm_emailAddress).val() != "" &&
      $("#" + mobileNumber).val() != ""
    ) {
      if (
        isEmail($("#" + emailAddress).val()) == true &&
        isEmail($("#" + confirm_emailAddress).val()) == true
      ) {
        //if both emails, check if both are equal
        if (
          $("#" + emailAddress).val() == $("#" + confirm_emailAddress).val()
        ) {
          //close current, open next
          if (len != 0) {
            open_next(2);
          }

          //remove errors
          clearError(list_to_check1);

          //CONTINUE SUMMARY SECTION - set value for dependant field
          $("#helpdesk_ticket_email").val(
            $("#helpdesk_ticket_custom_field_cf_email_address_2321673").val()
          );

          function add_section_2() {
            $(
              "<strong id='section_2_header'>" + titles[1] + "</strong>"
            ).insertAfter("#great_line_1");
            $("<hr class='summary_divider' id='great_line_2'>").insertAfter(
              "#section_2_header"
            );
            //for loops

            $("#collapseSection2 input").each(function () {
              if ($(this).hasClass("check-box")) {
                var label = $(this).closest(".form-group").find("label").text();
                var value = $(this).val();
                if ($(this).prop("checked")) {
                  $(
                    "<p class='section_2_line'>" +
                      label +
                      " : " +
                      value +
                      "</p>"
                  ).insertBefore("#great_line_2");
                }
              } else {
                var label = $(this).closest(".form-group").find("label").text();
                var value = $(this).val();
                $(
                  "<p class='section_2_line'>" + label + " : " + value + "</p>"
                ).insertBefore("#great_line_2");
              }
            });
          }

          function update_section_2() {
            //for loops
            $("p").remove(".section_2_line");
            $("#collapseSection2 input").each(function () {
              if ($(this).hasClass("check-box")) {
                var label = $(this).closest(".form-group").find("label").text();
                var value = $(this).val();
                if ($(this).prop("checked")) {
                  $(
                    "<p class='section_2_line'>" +
                      label +
                      " : " +
                      value +
                      "</p>"
                  ).insertBefore("#great_line_2");
                }
              } else {
                var label = $(this).closest(".form-group").find("label").text();
                var value = $(this).val();
                $(
                  "<p class='section_2_line'>" + label + " : " + value + "</p>"
                ).insertBefore("#great_line_2");
              }
            });
          }

          if ($("#section_2_header").length) {
            update_section_2();
          } else {
            add_section_2();
          }
        } else {
          //ERROR Messaging
          addErrorMessage(
            "helpdesk_ticket_custom_field_cf_email_address_2321673",
            "Please make sure email and confirmation email are the same."
          );
          addErrorMessage(
            "helpdesk_ticket_custom_field_cf_confirm_email_address_2321673",
            "Please make sure email and confirmation email are the same."
          );
        }
      } else {
        addErrorMessage(
          "helpdesk_ticket_custom_field_cf_email_address_2321673",
          "Please make sure both values are emails"
        );
        addErrorMessage(
          "helpdesk_ticket_custom_field_cf_confirm_email_address_2321673",
          "Please make sure both values are emails"
        );
      }
    } else {
      //ERROR Messaging
      for (var i = 0; i < list_to_check1.length; i++) {
        addErrorMessage(list_to_check1[i], "Please fill in all fields");
        $("#save_and_continue3").removeAttr("data-target");
        $("#save_and_continue3").removeAttr("data-toggle");
      }
    }
  });
  //____________________________________________________SECTION 2 End  -  About You ______________________________________________
  //section 3 continue
  var ClaimReason = [
    {
      id: "01_02_Canx",
      name_eng: "Any CANCELLATION claim due to COVID-19",
      name_ita: "Sinistri relativi a Covid 19 – Cancellazione",
    },
    {
      id: "01_03_BagDamNonCarr",
      name_eng: "Baggage - personal items damaged",
      name_ita: "Danneggiamento bagaglio o effetti personali",
    },
    {
      id: "01_02_BagL",
      name_eng: "Baggage - personal items lost or stolen",
      name_ita: "Furto o perdita del bagaglio o di effetti personali",
    },
    {
      id: "01_02_BagD",
      name_eng: "Baggage - suitcase hasn't arrived on time",
      name_ita: "Ritardo del bagaglio all’arrivo a destinanzione",
    },
    {
      id: "01_03_CxIllClnt",
      name_eng: "Cancelled trip - (NOT related to COVID-19)",
      name_ita:
        "Annullamento dell'intero viaggio (non correlato al Coronavirus)",
    },
    {
      id: "01_02_Curt",
      name_eng: "Curtailment – returned home early",
      name_ita: "Terminato il viaggio anticipatamente per tornare a casa",
    },
    {
      id: "01_02_Dental",
      name_eng: "Dental expenses whilst abroad",
      name_ita: "Costi di cure odontoiatriche di emergenza",
    },
    {
      id: "01_02_Delay",
      name_eng: "Flight or Travel delayed",
      name_ita: "Viaggio cancellato e voli in ritardo o cancellati",
    },
    {
      id: "01_02_Med",
      name_eng: "Medical expenses abroad & repatriation cost",
      name_ita:
        "Spese mediche causate da malattia/infortunio/Covid-19 - Prolungamento del soggiorno inlcuso",
    },
    {
      id: "01_03_MDDelPrvbT",
      name_eng: "Missed flight or departure",
    },
    {
      id: "01_06_OthSubsAcc",
      name_eng:
        "Substitute Accommodation - change to accommodation during trip",
    },
    {
      id: "01_02_Winter",
      name_eng: "Winter sports - lift pass, equipment or piste closure",
      name_ita:
        "Sport Invernali (Ski Pack, attrezzatura, chiusura delle piste)",
    },
  ];

  var Destination = [
    {
      id: "AF",
      name_eng: "Afghanistan",
      lang_ita: "Afghanistan",
    },
    {
      id: "AL",
      name_eng: "Albania",
      lang_ita: "Albania",
    },
    {
      id: "DZ",
      name_eng: "Algeria",
      lang_ita: "Algeria",
    },
    {
      id: "AD",
      name_eng: "Andorra",
      lang_ita: "Andorra",
    },
    {
      id: "AO",
      name_eng: "Angola",
      lang_ita: "Angola",
    },
    {
      id: "AI",
      name_eng: "Anguilla",
      lang_ita: "Anguilla",
    },
    {
      id: "AQ",
      name_eng: "Antarctica",
      lang_ita: "Antartide",
    },
    {
      id: "AG",
      name_eng: "Antigua and Barbuda",
      lang_ita: "Antigua e Barbuda",
    },
    {
      id: "AR",
      name_eng: "Argentina",
      lang_ita: "Argentina",
    },
    {
      id: "AM",
      name_eng: "Armenia",
      lang_ita: "Armenia",
    },
    {
      id: "AW",
      name_eng: "Aruba",
      lang_ita: "Aruba",
    },
    {
      id: "AU",
      name_eng: "Australia",
      lang_ita: "Australia",
    },
    {
      id: "AT",
      name_eng: "Austria",
      lang_ita: "Austria",
    },
    {
      id: "AZ",
      name_eng: "Azerbaijan",
      lang_ita: "Azerbaigian",
    },
    {
      id: "BS",
      name_eng: "Bahamas",
      lang_ita: "Bahamas",
    },
    {
      id: "BH",
      name_eng: "Bahrain",
      lang_ita: "Bahrain",
    },
    {
      id: "BD",
      name_eng: "Bangladesh",
      lang_ita: "Bangladesh",
    },
    {
      id: "BB",
      name_eng: "Barbados",
      lang_ita: "Barbados",
    },
    {
      id: "BY",
      name_eng: "Belarus",
      lang_ita: "Bielorussia",
    },
    {
      id: "BE",
      name_eng: "Belgium",
      lang_ita: "Belgio",
    },
    {
      id: "BZ",
      name_eng: "Belize",
      lang_ita: "Belize",
    },
    {
      id: "BJ",
      name_eng: "Benin",
      lang_ita: "Benin",
    },
    {
      id: "BM",
      name_eng: "Bermuda",
      lang_ita: "Bermuda",
    },
    {
      id: "BT",
      name_eng: "Bhutan",
      lang_ita: "Bhutan",
    },
    {
      id: "BO",
      name_eng: "Bolivia",
      lang_ita: "Bolivia",
    },
    {
      id: "BQ",
      name_eng: "Bonaire",
      lang_ita: "Bonaire",
    },
    {
      id: "BA",
      name_eng: "Bosnia and Herzegovina",
      lang_ita: "Bosnia Erzegovina",
    },
    {
      id: "BW",
      name_eng: "Botswana",
      lang_ita: "Botswana",
    },
    {
      id: "BR",
      name_eng: "Brazil",
      lang_ita: "Brasile",
    },
    {
      id: "VG",
      name_eng: "British Virgin Islands",
      lang_ita: "Isole Vergini Britanniche",
    },
    {
      id: "BN",
      name_eng: "Brunei",
      lang_ita: "Brunei",
    },
    {
      id: "BG",
      name_eng: "Bulgaria",
      lang_ita: "Bulgaria",
    },
    {
      id: "BF",
      name_eng: "Burkina Faso",
      lang_ita: "Burkina Faso",
    },
    {
      id: "BI",
      name_eng: "Burundi",
      lang_ita: "Burundi",
    },
    {
      id: "KH",
      name_eng: "Cambodia",
      lang_ita: "Cambogia",
    },
    {
      id: "CM",
      name_eng: "Cameroon",
      lang_ita: "Camerun",
    },
    {
      id: "CA",
      name_eng: "Canada",
      lang_ita: "Canada",
    },
    {
      id: "CV",
      name_eng: "Cape Verde",
      lang_ita: "capo Verde",
    },
    {
      id: "KY",
      name_eng: "Cayman Islands",
      lang_ita: "Isole Cayman",
    },
    {
      id: "CF",
      name_eng: "Central African Republic",
      lang_ita: "Repubblica Centrafricana",
    },
    {
      id: "TD",
      name_eng: "Chad",
      lang_ita: "Chad",
    },
    {
      id: "CL",
      name_eng: "Chile",
      lang_ita: "Chile",
    },
    {
      id: "CN",
      name_eng: "China",
      lang_ita: "Cina",
    },
    {
      id: "CO",
      name_eng: "Colombia",
      lang_ita: "Colombia",
    },
    {
      id: "KM",
      name_eng: "Comoros",
      lang_ita: "Comore",
    },
    {
      id: "CK",
      name_eng: "Cook Islands",
      lang_ita: "Isole Cook",
    },
    {
      id: "CR",
      name_eng: "Costa Rica",
      lang_ita: "Costa Rica",
    },
    {
      id: "HR",
      name_eng: "Croatia",
      lang_ita: "Croazia",
    },
    {
      id: "CU",
      name_eng: "Cuba",
      lang_ita: "Cuba",
    },
    {
      id: "CW",
      name_eng: "Curacao",
      lang_ita: "Curacao",
    },
    {
      id: "CY",
      name_eng: "Cyprus",
      lang_ita: "Cipro",
    },
    {
      id: "CZ",
      name_eng: "Czechia",
      lang_ita: "Czechia",
    },
    {
      id: "CD",
      name_eng: "Democratic Republic of the Congo",
      lang_ita: "Repubblica Democratica del Congo",
    },
    {
      id: "DK",
      name_eng: "Denmark",
      lang_ita: "Danimarca",
    },
    {
      id: "DJ",
      name_eng: "Djibouti",
      lang_ita: "Gibuti",
    },
    {
      id: "DM",
      name_eng: "Dominica",
      lang_ita: "Dominica",
    },
    {
      id: "DO",
      name_eng: "Dominican Republic",
      lang_ita: "Repubblica Dominicana",
    },
    {
      id: "EC",
      name_eng: "Ecuador",
      lang_ita: "Ecuador",
    },
    {
      id: "EG",
      name_eng: "Egypt",
      lang_ita: "Egitto",
    },
    {
      id: "SV",
      name_eng: "El Salvador",
      lang_ita: "El Salvador",
    },
    {
      id: "GQ",
      name_eng: "Equatorial Guinea",
      lang_ita: "Guinea Equatoriale",
    },
    {
      id: "ER",
      name_eng: "Eritrea",
      lang_ita: "Eritrea",
    },
    {
      id: "EE",
      name_eng: "Estonia",
      lang_ita: "Estonia",
    },
    {
      id: "ET",
      name_eng: "Ethiopia",
      lang_ita: "Etiopia",
    },
    {
      id: "FK",
      name_eng: "Falkland Islands",
      lang_ita: "Isole Falkland",
    },
    {
      id: "FO",
      name_eng: "Faroe Islands",
      lang_ita: "Isole Faroe",
    },
    {
      id: "FJ",
      name_eng: "Fiji",
      lang_ita: "Figi",
    },
    {
      id: "FI",
      name_eng: "Finland",
      lang_ita: "Finlandia",
    },
    {
      id: "FR",
      name_eng: "France",
      lang_ita: "Francia",
    },
    {
      id: "GA",
      name_eng: "Gabon",
      lang_ita: "Gabon",
    },
    {
      id: "GM",
      name_eng: "Gambia",
      lang_ita: "Gambia",
    },
    {
      id: "GE",
      name_eng: "Georgia",
      lang_ita: "Georgia",
    },
    {
      id: "DE",
      name_eng: "Germany",
      lang_ita: "Germania",
    },
    {
      id: "GH",
      name_eng: "Ghana",
      lang_ita: "Ghana",
    },
    {
      id: "GI",
      name_eng: "Gibraltar",
      lang_ita: "Gibilterra",
    },
    {
      id: "GR",
      name_eng: "Greece",
      lang_ita: "Grecia",
    },
    {
      id: "GL",
      name_eng: "Greenland",
      lang_ita: "Groenlandia",
    },
    {
      id: "GD",
      name_eng: "Grenada",
      lang_ita: "Grenada",
    },
    {
      id: "GP",
      name_eng: "Guadeloupe",
      lang_ita: "Guadalupa",
    },
    {
      id: "GU",
      name_eng: "Guam",
      lang_ita: "Guam",
    },
    {
      id: "GT",
      name_eng: "Guatemala",
      lang_ita: "Guatemala",
    },
    {
      id: "GG",
      name_eng: "Guernsey",
      lang_ita: "Guernsey",
    },
    {
      id: "GN",
      name_eng: "Guinea",
      lang_ita: "Guinea",
    },
    {
      id: "GW",
      name_eng: "Guinea-Bissau",
      lang_ita: "Guinea-Bissau",
    },
    {
      id: "GY",
      name_eng: "Guyana",
      lang_ita: "Guyana",
    },
    {
      id: "HT",
      name_eng: "Haiti",
      lang_ita: "Haiti",
    },
    {
      id: "HN",
      name_eng: "Honduras",
      lang_ita: "Honduras",
    },
    {
      id: "HK",
      name_eng: "Hong Kong",
      lang_ita: "Hong Kong",
    },
    {
      id: "HU",
      name_eng: "Hungary",
      lang_ita: "Ungheria",
    },
    {
      id: "IS",
      name_eng: "Iceland",
      lang_ita: "Islanda",
    },
    {
      id: "IN",
      name_eng: "India",
      lang_ita: "India",
    },
    {
      id: "ID",
      name_eng: "Indonesia",
      lang_ita: "Indonesia",
    },
    {
      id: "IR",
      name_eng: "Iran",
      lang_ita: "Iran",
    },
    {
      id: "IQ",
      name_eng: "Iraq",
      lang_ita: "Iraq",
    },
    {
      id: "IE",
      name_eng: "Ireland",
      lang_ita: "Irlanda",
    },
    {
      id: "IM",
      name_eng: "Isle of Man",
      lang_ita: "Isola di Man",
    },
    {
      id: "IL",
      name_eng: "Israel",
      lang_ita: "Israele",
    },
    {
      id: "IT",
      name_eng: "Italy",
      lang_ita: "Italia",
    },
    {
      id: "CI",
      name_eng: "Ivory Coast",
      lang_ita: "Costa d'Avorio",
    },
    {
      id: "JM",
      name_eng: "Jamaica",
      lang_ita: "Giamaica",
    },
    {
      id: "JP",
      name_eng: "Japan",
      lang_ita: "Giappone",
    },
    {
      id: "JE",
      name_eng: "Jersey",
      lang_ita: "Jersey",
    },
    {
      id: "JO",
      name_eng: "Jordan",
      lang_ita: "Giordania",
    },
    {
      id: "KZ",
      name_eng: "Kazakhstan",
      lang_ita: "Kazakistan",
    },
    {
      id: "KE",
      name_eng: "Kenya",
      lang_ita: "Kenya",
    },
    {
      id: "KI",
      name_eng: "Kiribati",
      lang_ita: "Kiribati",
    },
    {
      id: "XK",
      name_eng: "Kosovo",
      lang_ita: "Kosovo",
    },
    {
      id: "KW",
      name_eng: "Kuwait",
      lang_ita: "Kuwait",
    },
    {
      id: "KG",
      name_eng: "Kyrgyzstan",
      lang_ita: "Kirghizistan",
    },
    {
      id: "LA",
      name_eng: "Laos",
      lang_ita: "Laos",
    },
    {
      id: "LV",
      name_eng: "Latvia",
      lang_ita: "Lettonia",
    },
    {
      id: "LB",
      name_eng: "Lebanon",
      lang_ita: "Libano",
    },
    {
      id: "LS",
      name_eng: "Lesotho",
      lang_ita: "Lesotho",
    },
    {
      id: "LR",
      name_eng: "Liberia",
      lang_ita: "Liberia",
    },
    {
      id: "LY",
      name_eng: "Libya",
      lang_ita: "Libia",
    },
    {
      id: "LI",
      name_eng: "Liechtenstein",
      lang_ita: "Liechtenstein",
    },
    {
      id: "LT",
      name_eng: "Lithuania",
      lang_ita: "Lituania",
    },
    {
      id: "LU",
      name_eng: "Luxembourg",
      lang_ita: "Luxembourg",
    },
    {
      id: "MK",
      name_eng: "Macedonia",
      lang_ita: "Macedonia",
    },
    {
      id: "MG",
      name_eng: "Madagascar",
      lang_ita: "Madagascar",
    },
    {
      id: "MW",
      name_eng: "Malawi",
      lang_ita: "Malawi",
    },
    {
      id: "MY",
      name_eng: "Malaysia",
      lang_ita: "Malaysia",
    },
    {
      id: "MV",
      name_eng: "Maldives",
      lang_ita: "Maldives",
    },
    {
      id: "ML",
      name_eng: "Mali",
      lang_ita: "Mali",
    },
    {
      id: "MT",
      name_eng: "Malta",
      lang_ita: "Malta",
    },
    {
      id: "MQ",
      name_eng: "Martinique",
      lang_ita: "Martinica",
    },
    {
      id: "MR",
      name_eng: "Mauritania",
      lang_ita: "Mauritania",
    },
    {
      id: "MU",
      name_eng: "Mauritius",
      lang_ita: "Maurizio",
    },
    {
      id: "YT",
      name_eng: "Mayotte",
      lang_ita: "Mayotte",
    },
    {
      id: "MX",
      name_eng: "Mexico",
      lang_ita: "Messico",
    },
    {
      id: "FM",
      name_eng: "Micronesia",
      lang_ita: "Micronesia",
    },
    {
      id: "MD",
      name_eng: "Moldova",
      lang_ita: "Moldova",
    },
    {
      id: "MC",
      name_eng: "Monaco",
      lang_ita: "Monaco",
    },
    {
      id: "MN",
      name_eng: "Mongoilia",
      lang_ita: "Mongoilia",
    },
    {
      id: "ME",
      name_eng: "Montenegro",
      lang_ita: "Montenegro",
    },
    {
      id: "MS",
      name_eng: "Montserrat",
      lang_ita: "Montserrat",
    },
    {
      id: "MA",
      name_eng: "Morocco",
      lang_ita: "Marocco",
    },
    {
      id: "MZ",
      name_eng: "Mozambique",
      lang_ita: "Mozambico",
    },
    {
      id: "MM",
      name_eng: "Myanmar",
      lang_ita: "Myanmar",
    },
    {
      id: "NA",
      name_eng: "Namibia",
      lang_ita: "Namibia",
    },
    {
      id: "NR",
      name_eng: "Nauru",
      lang_ita: "Nauru",
    },
    {
      id: "NP",
      name_eng: "Nepal",
      lang_ita: "Nepal",
    },
    {
      id: "NL",
      name_eng: "Netherlands",
      lang_ita: "Olanda",
    },
    {
      id: "NZ",
      name_eng: "New Zealand",
      lang_ita: "Nuova Zelanda",
    },
    {
      id: "NI",
      name_eng: "Nicaragua",
      lang_ita: "Nicaragua",
    },
    {
      id: "NE",
      name_eng: "Niger",
      lang_ita: "Niger",
    },
    {
      id: "NG",
      name_eng: "Nigeria",
      lang_ita: "Nigeria",
    },
    {
      id: "KP",
      name_eng: "North Korea",
      lang_ita: "Corea del nord",
    },
    {
      id: "NO",
      name_eng: "Norway",
      lang_ita: "Norvegia",
    },
    {
      id: "OM",
      name_eng: "Oman",
      lang_ita: "Oman",
    },
    {
      id: "PK",
      name_eng: "Pakistan",
      lang_ita: "Pakistan",
    },
    {
      id: "PW",
      name_eng: "Palau",
      lang_ita: "Palau",
    },
    {
      id: "PS",
      name_eng: "Palestinian Territory",
      lang_ita: "Territori palestinesi",
    },
    {
      id: "PA",
      name_eng: "Panama",
      lang_ita: "Panama",
    },
    {
      id: "PG",
      name_eng: "Papua New Guinea",
      lang_ita: "Papua Nuova Guinea",
    },
    {
      id: "PY",
      name_eng: "Paraguay",
      lang_ita: "Paraguay",
    },
    {
      id: "PE",
      name_eng: "Peru",
      lang_ita: "Perù",
    },
    {
      id: "PH",
      name_eng: "Philippines",
      lang_ita: "Filippine",
    },
    {
      id: "PL",
      name_eng: "Poland",
      lang_ita: "Polonia",
    },
    {
      id: "PT",
      name_eng: "Portugal",
      lang_ita: "Portogallo",
    },
    {
      id: "PR",
      name_eng: "Puerto Rico",
      lang_ita: "Porto Rico",
    },
    {
      id: "QA",
      name_eng: "Qatar",
      lang_ita: "Qatar",
    },
    {
      id: "RW",
      name_eng: "Rawanda",
      lang_ita: "Ruanda",
    },
    {
      id: "CG",
      name_eng: "Republic of the Congo",
      lang_ita: "Repubblica del Congo",
    },
    {
      id: "RE",
      name_eng: "Reunion",
      lang_ita: "Riunione",
    },
    {
      id: "RO",
      name_eng: "Romania",
      lang_ita: "Romania",
    },
    {
      id: "RU",
      name_eng: "Russia",
      lang_ita: "Russia",
    },
    {
      id: "KN",
      name_eng: "Saint Kitts and Nevis",
      lang_ita: "Saint Kitts e Nevis",
    },
    {
      id: "LC",
      name_eng: "Saint Lucia",
      lang_ita: "Santa Lucia",
    },
    {
      id: "MF",
      name_eng: "Saint Martin",
      lang_ita: "Saint Martin",
    },
    {
      id: "WS",
      name_eng: "Samoa",
      lang_ita: "Samoa",
    },
    {
      id: "SM",
      name_eng: "San Marino",
      lang_ita: "San Marino",
    },
    {
      id: "SA",
      name_eng: "Saudi Arabia",
      lang_ita: "Arabia Saudita",
    },
    {
      id: "SN",
      name_eng: "Senegal",
      lang_ita: "Senegal",
    },
    {
      id: "RS",
      name_eng: "Serbia",
      lang_ita: "Serbia",
    },
    {
      id: "SC",
      name_eng: "Seychelles",
      lang_ita: "Seychelles",
    },
    {
      id: "SL",
      name_eng: "Sierra Leone",
      lang_ita: "Sierra Leone",
    },
    {
      id: "SG",
      name_eng: "Singapore",
      lang_ita: "Singapore",
    },
    {
      id: "SK",
      name_eng: "Slovakia",
      lang_ita: "Slovacchia",
    },
    {
      id: "SI",
      name_eng: "Slovenia",
      lang_ita: "Slovenia",
    },
    {
      id: "SB",
      name_eng: "Solomon Islands",
      lang_ita: "Isole Salomone",
    },
    {
      id: "SO",
      name_eng: "Somalia",
      lang_ita: "Somalia",
    },
    {
      id: "ZA",
      name_eng: "South Africa",
      lang_ita: "Sud Africa",
    },
    {
      id: "KR",
      name_eng: "South Korea",
      lang_ita: "Corea del Sud",
    },
    {
      id: "SS",
      name_eng: "South Sudan",
      lang_ita: "Sudan del Sud",
    },
    {
      id: "ES",
      name_eng: "Spain",
      lang_ita: "Spagna",
    },
    {
      id: "LK",
      name_eng: "Sri Lanka",
      lang_ita: "Sri Lanka",
    },
    {
      id: "SD",
      name_eng: "Sudan",
      lang_ita: "Sudan",
    },
    {
      id: "SR",
      name_eng: "Suriname",
      lang_ita: "Suriname",
    },
    {
      id: "SJ",
      name_eng: "Svalbard and Jan Mayen",
      lang_ita: "Svalbard e Jan Mayen",
    },
    {
      id: "SZ",
      name_eng: "Swaziland",
      lang_ita: "Swaziland",
    },
    {
      id: "SE",
      name_eng: "Sweden",
      lang_ita: "Svezia",
    },
    {
      id: "CH",
      name_eng: "Switzerland",
      lang_ita: "Svizzera",
    },
    {
      id: "SY",
      name_eng: "Syria",
      lang_ita: "Siria",
    },
    {
      id: "TW",
      name_eng: "Taiwan",
      lang_ita: "Taiwan",
    },
    {
      id: "TJ",
      name_eng: "Tajikistan",
      lang_ita: "Tagikistan",
    },
    {
      id: "TZ",
      name_eng: "Tanzania",
      lang_ita: "Tanzania",
    },
    {
      id: "TH",
      name_eng: "Thailand",
      lang_ita: "Tailandia",
    },
    {
      id: "TG",
      name_eng: "Togo",
      lang_ita: "Andare",
    },
    {
      id: "TO",
      name_eng: "Tonga",
      lang_ita: "Tonga",
    },
    {
      id: "TT",
      name_eng: "Trinidad and Tobago",
      lang_ita: "Trinidad e Tobago",
    },
    {
      id: "TN",
      name_eng: "Tunisia",
      lang_ita: "Tunisia",
    },
    {
      id: "TR",
      name_eng: "Turkey",
      lang_ita: "Tacchina",
    },
    {
      id: "TM",
      name_eng: "Turkmenistan",
      lang_ita: "Turkmenistan",
    },
    {
      id: "VI",
      name_eng: "U.S. Virgin Islands",
      lang_ita: "Isole Vergini Americane",
    },
    {
      id: "UG",
      name_eng: "Uganda",
      lang_ita: "Uganda",
    },
    {
      id: "UA",
      name_eng: "Ukraine",
      lang_ita: "Ucraina",
    },
    {
      id: "AE",
      name_eng: "United Arab Emirates",
      lang_ita: "Emirati Arabi Uniti",
    },
    {
      id: "GB",
      name_eng: "United Kingdom",
      lang_ita: "Regno Unito",
    },
    {
      id: "US",
      name_eng: "United States",
      lang_ita: "stati Uniti",
    },
    {
      id: "UY",
      name_eng: "Uruguay",
      lang_ita: "Uruguay",
    },
    {
      id: "UZ",
      name_eng: "Uzbekistan",
      lang_ita: "Uzbekistan",
    },
    {
      id: "VU",
      name_eng: "Vanuatu",
      lang_ita: "Vanuatu",
    },
    {
      id: "VA",
      name_eng: "Vatican",
      lang_ita: "Vaticano",
    },
    {
      id: "VE",
      name_eng: "Venezuela",
      lang_ita: "Venezuela",
    },
    {
      id: "VN",
      name_eng: "Vietnam",
      lang_ita: "Vietnam",
    },
    {
      id: "EH",
      name_eng: "Western Sahara",
      lang_ita: "Sahara occidentale",
    },
    {
      id: "YE",
      name_eng: "Yemen",
      lang_ita: "Yemen",
    },
    {
      id: "ZM",
      name_eng: "Zambia",
      lang_ita: "Zambia",
    },
    {
      id: "ZW",
      name_eng: "Zimbabwe",
      lang_ita: "Zimbabwe",
    },
  ];

  var MedicalCondition = [
    {
      id: "AcidReflux",
      name_eng: "Acid reflux",
      lang_ita: "Riflusso acido",
    },
    {
      id: "Allergies",
      name_eng: "Allergies",
      lang_ita: "Allergia",
    },
    {
      id: "Angina",
      name_eng: "Angina",
      lang_ita: "Angina",
    },
    {
      id: "AnxietyDepressionStress",
      name_eng: "Anxiety / Depression / Stress",
      lang_ita: "Ansia / Depressione / Fatica",
    },
    {
      id: "Appendicitis",
      name_eng: "Appendicitis",
      lang_ita: "Appendicite",
    },
    {
      id: "Arthritis",
      name_eng: "Arthritis",
      lang_ita: "Artrite",
    },
    {
      id: "Asthma",
      name_eng: "Asthma",
      lang_ita: "Asma",
    },
    {
      id: "Atrialfibrillation",
      name_eng: "Atrial fibrillation",
      lang_ita: "Fibrillazione atriale",
    },
    {
      id: "Bladderinfection",
      name_eng: "Bladder infection",
      lang_ita: "Infezione della vescica",
    },
    {
      id: "BowelObstruction",
      name_eng: "Bowel Obstruction",
      lang_ita: "Occlusione intestinale",
    },
    {
      id: "Cancer",
      name_eng: "Cancer",
      lang_ita: "Cancro",
    },
    {
      id: "Cardiacarrhythmia",
      name_eng: "Cardiac arrhythmia",
      lang_ita: "Aritmia cardiaca",
    },
    {
      id: "ChestInfection",
      name_eng: "Chest Infection",
      lang_ita: "Infezione toracica",
    },
    {
      id: "ChickenPox",
      name_eng: "Chicken Pox",
      lang_ita: "Varicella",
    },
    {
      id: "Cholesterol",
      name_eng: "Cholesterol",
      lang_ita: "Colesterolo",
    },
    {
      id: "COPD",
      name_eng: "Chronic obstructive pulmonary disease (COPD)",
      lang_ita: "Malattia polmonare ostruttiva cronica (COPD)",
    },
    {
      id: "ColdFlu",
      name_eng: "Cold/Flu",
      lang_ita: "Raffreddore/Influenza",
    },
    {
      id: "Colitis",
      name_eng: "Colitis",
      lang_ita: "Colite",
    },
    {
      id: "Conjunctivitis",
      name_eng: "Conjunctivitis",
      lang_ita: "Congiuntivite",
    },
    {
      id: "Coronavirus",
      name_eng: "Coronavirus",
      lang_ita: "Coronavirus",
    },
    {
      id: "LongCovid",
      name_eng: "Coronavirus - Long Covid",
      lang_ita: "Diagnosticato con lungo Covid",
    },
    {
      id: "Crohns",
      name_eng: "Crohn's disease",
      lang_ita: "Morbo di Crohn",
    },
    {
      id: "Diabetes",
      name_eng: "Diabetes",
      lang_ita: "Diabete",
    },
    {
      id: "EarInfection",
      name_eng: "Ear Infection",
      lang_ita: "Infezione alle orecchie",
    },
    {
      id: "Eczema",
      name_eng: "Eczema",
      lang_ita: "Eczema",
    },
    {
      id: "Epilepsy",
      name_eng: "Epilepsy",
      lang_ita: "Epilessia",
    },
    {
      id: "Foodpoisoning",
      name_eng: "Food poisoning",
      lang_ita: "Intossicazione alimentare",
    },
    {
      id: "Gastroenteritis",
      name_eng: "Gastroenteritis",
      lang_ita: "Gastroenterite",
    },
    {
      id: "Headache",
      name_eng: "Headache",
      lang_ita: "Mal di testa",
    },
    {
      id: "HeartAttack",
      name_eng: "Heart attack",
      lang_ita: "Attacco cardiaco",
    },
    {
      id: "HeartBlock",
      name_eng: "Heart block",
      lang_ita: "Arresto cardiaco",
    },
    {
      id: "Hernia",
      name_eng: "Hernia",
      lang_ita: "Ernia",
    },
    {
      id: "Thyroidism",
      name_eng: "Hyper/Hypo thyroidism",
      lang_ita: "Iper/Ipo tiroidismo",
    },
    {
      id: "Hypertension",
      name_eng: "Hypertension",
      lang_ita: "Ipertensione",
    },
    {
      id: "KidneyGalStones",
      name_eng: "Kidney/ Gal Stones",
      lang_ita: "Calcoli renali",
    },
    {
      id: "laryngitis",
      name_eng: "laryngitis",
      lang_ita: "Laringite",
    },
    {
      id: "Migrane",
      name_eng: "Migraine",
      lang_ita: "Emicrania",
    },
    {
      id: "TestAndInvestigations",
      name_eng: "Ongoing Test & Investigations",
      lang_ita: "Test e investigazioni continuativi",
    },
    {
      id: "Osteoporosis",
      name_eng: "Osteoporosis",
      lang_ita: "Osteoporosi",
    },
    {
      id: "Other",
      name_eng: "Other",
      lang_ita: "Altro",
    },
    {
      id: "RheumatoidArthritis",
      name_eng: "Rheumatoid arthritis",
      lang_ita: "Artrite reumatoide",
    },
    {
      id: "Sciatica",
      name_eng: "Sciatica",
      lang_ita: "Sciatica",
    },
    {
      id: "Seizures",
      name_eng: "Seizures",
      lang_ita: "Convulsioni",
    },
    {
      id: "SicknessDiarrhoea",
      name_eng: "Sickness / Diarrhoea",
      lang_ita: "Malattia / Diarrea",
    },
    {
      id: "Stroke",
      name_eng: "Stroke",
      lang_ita: "Ictus",
    },
    {
      id: "Tonsillitis",
      name_eng: "Tonsillitis",
      lang_ita: "Tonsillite",
    },
    {
      id: "TIA",
      name_eng: "Transient ischaemic attack (TIA)",
      lang_ita: "Attacco ischemico transitorio",
    },
    {
      id: "Vertigo",
      name_eng: "Vertigo",
      lang_ita: "Vertigine",
    },
    {
      id: "ViralInfection",
      name_eng: "Viral Infection",
      lang_ita: "Infezione virale",
    },
  ];

  var CurrencyType = [
    {
      id: "USD",
      name_eng: "United States Dollar",
      lang_ita: "Dollaro americano",
    },
    {
      id: "EUR",
      name_eng: "Euro",
      lang_ita: "Euro",
    },
    {
      id: "GBP",
      name_eng: "British Pound",
      lang_ita: "Sterlina Britannica",
    },
    {
      id: "AUD",
      name_eng: "Australian Dollar",
      lang_ita: "Dollaro Australiano",
    },
    {
      id: "CAD",
      name_eng: "Canadian Dollar",
      lang_ita: "Dollaro Canadese",
    },
    {
      id: "AFN",
      name_eng: "Afghan Afghani",
      lang_ita: "Afgano",
    },
    {
      id: "ALL",
      name_eng: "Albanian Lek",
      lang_ita: "Lek Albanese",
    },
    {
      id: "DZD",
      name_eng: "Algerian Dinar",
      lang_ita: "Dinaro Algerino",
    },
    {
      id: "AED",
      name_eng: "Arab Emirates Dirham",
      lang_ita: "Dirham degli Emirati Arabi Uniti",
    },
    {
      id: "ARS",
      name_eng: "Argentine Peso",
      lang_ita: "Peso argentino",
    },
    {
      id: "AMD",
      name_eng: "Armenian Dram",
      lang_ita: "Dramma armeno",
    },
    {
      id: "AZN",
      name_eng: "Azerbaijani Manat",
      lang_ita: "Manat azero",
    },
    {
      id: "BSD",
      name_eng: "Bahamian Dollar",
      lang_ita: "Dollaro delle Bahamas",
    },
    {
      id: "BHD",
      name_eng: "Bahraini Dinar",
      lang_ita: "Dinaro Bahreinita",
    },
    {
      id: "BDT",
      name_eng: "Bangladeshi Taka",
      lang_ita: "Taka bengalese",
    },
    {
      id: "BBD",
      name_eng: "Barbados Dollar",
      lang_ita: "Dollaro di Barbados",
    },
    {
      id: "BYN",
      name_eng: "Belarusian Ruble",
      lang_ita: "Rublo bielorusso",
    },
    {
      id: "BZD",
      name_eng: "Belize Dollar",
      lang_ita: "Dollaro del Belize",
    },
    {
      id: "BMD",
      name_eng: "Bermudan Dollar",
      lang_ita: "Dollaro Bermudiano",
    },
    {
      id: "BOB",
      name_eng: "Bolivian Boliviano",
      lang_ita: "Boliviano",
    },
    {
      id: "BAM",
      name_eng: "Bosnia-Herzegovina Convertible Mark",
      lang_ita: "Marco convertibile della Bosnia Erzegovina",
    },
    {
      id: "BWP",
      name_eng: "Botswanan Pula",
      lang_ita: "Pula del Botswana",
    },
    {
      id: "BRL",
      name_eng: "Brazilian Real",
      lang_ita: "Real brasiliano",
    },
    {
      id: "BND",
      name_eng: "Brunei Dollar",
      lang_ita: "Dollaro del Brunei",
    },
    {
      id: "BGN",
      name_eng: "Bulgarian Lev",
      lang_ita: "Lev bulgaro",
    },
    {
      id: "KHR",
      name_eng: "Cambodian riel",
      lang_ita: "Riel Cambogiano",
    },
    {
      id: "CVE",
      name_eng: "Cape Verdean Escudo",
      lang_ita: "Escudo Capoverdiano",
    },
    {
      id: "XAF",
      name_eng: "Central African CFA franc",
      lang_ita: "Franco CFA dell'Africa Centrale",
    },
    {
      id: "XOF",
      name_eng: "Central African CFA franc",
      lang_ita: "Franco CFA dell'Africa Centrale",
    },
    {
      id: "XPF",
      name_eng: "CFP franc",
      lang_ita: "Franco CFP",
    },
    {
      id: "CLP",
      name_eng: "Chilean Peso",
      lang_ita: "Peso cileno",
    },
    {
      id: "CNY",
      name_eng: "Chinese Yuan",
      lang_ita: "Yuan cinese",
    },
    {
      id: "COP",
      name_eng: "Colombian Peso",
      lang_ita: "Peso colombiano",
    },
    {
      id: "CDF",
      name_eng: "Congolese Franc",
      lang_ita: "Franco Congolese",
    },
    {
      id: "CRC",
      name_eng: "Costa Rican Colón",
      lang_ita: "Colón costaricano",
    },
    {
      id: "HRK",
      name_eng: "Croatian Kuna",
      lang_ita: "Kuna Croata",
    },
    {
      id: "CUP",
      name_eng: "Cuban Convertible Peso",
      lang_ita: "Peso Cubano Convertibile",
    },
    {
      id: "CZK",
      name_eng: "Czech Koruna",
      lang_ita: "Corona Ceca",
    },
    {
      id: "DKK",
      name_eng: "Danish Krone",
      lang_ita: "Corona danese",
    },
    {
      id: "DOP",
      name_eng: "Dominican Peso",
      lang_ita: "Peso Dominicano",
    },
    {
      id: "XCD",
      name_eng: "Eastern Caribbean dollar",
      lang_ita: "Dollaro dei Caraibi Orientali",
    },
    {
      id: "EGP",
      name_eng: "Egyptian Pound",
      lang_ita: "Sterlina Egiziana",
    },
    {
      id: "ETB",
      name_eng: "Ethiopian Birr",
      lang_ita: "Birr Etiope",
    },
    {
      id: "FJD",
      name_eng: "Fijian Dollar",
      lang_ita: "Dollaro Fijiano",
    },
    {
      id: "GMD",
      name_eng: "Gambian dalasi",
      lang_ita: "Dalasi Gambese",
    },
    {
      id: "GEL",
      name_eng: "Georgian Lari",
      lang_ita: "Lari Georgiano",
    },
    {
      id: "GHS",
      name_eng: "Ghanaian Cedi",
      lang_ita: "Cedi Ghanese",
    },
    {
      id: "GIP",
      name_eng: "Gibraltar pound",
      lang_ita: "Sterlina Gibilterrina",
    },
    {
      id: "GTQ",
      name_eng: "Guatemalan Quetzal",
      lang_ita: "Quetzal Guatemalteco",
    },
    {
      id: "GNF",
      name_eng: "Guinean Franc",
      lang_ita: "Franco Guineano",
    },
    {
      id: "GYD",
      name_eng: "Guyanaese Dollar",
      lang_ita: "Dollaro della guyana",
    },
    {
      id: "HTG",
      name_eng: "Haitian Gourde",
      lang_ita: "Gourde Haitiano",
    },
    {
      id: "HNL",
      name_eng: "Honduran Lempira",
      lang_ita: "Lempira honduregna",
    },
    {
      id: "HKD",
      name_eng: "Hong Kong Dollar",
      lang_ita: "Dollaro Hongkonghese",
    },
    {
      id: "HUF",
      name_eng: "Hungarian Forint",
      lang_ita: "Fiorino Ungherese",
    },
    {
      id: "ISK",
      name_eng: "Icelandic Króna",
      lang_ita: "Corona islandese",
    },
    {
      id: "INR",
      name_eng: "Indian Rupee",
      lang_ita: "Rupia indiana",
    },
    {
      id: "IDR",
      name_eng: "Indonesian Rupiah",
      lang_ita: "Rupia Indonesia",
    },
    {
      id: "IRR",
      name_eng: "Iranian Rial",
      lang_ita: "Rial iraniano",
    },
    {
      id: "IQD",
      name_eng: "Iraqi Dinar",
      lang_ita: "Dinaro iracheno",
    },
    {
      id: "ILS",
      name_eng: "Israeli New Shekel",
      lang_ita: "Nuovo shekel israeliano",
    },
    {
      id: "JMD",
      name_eng: "Jamaican Dollar",
      lang_ita: "Dollaro Giamaicano",
    },
    {
      id: "JPY",
      name_eng: "Japanese Yen",
      lang_ita: "Yen giapponese",
    },
    {
      id: "JOD",
      name_eng: "Jordanian Dinar",
      lang_ita: "Dinaro giordano",
    },
    {
      id: "KZT",
      name_eng: "Kazakhstani Tenge",
      lang_ita: "Tenge Kazako",
    },
    {
      id: "KES",
      name_eng: "Kenyan Shilling",
      lang_ita: "Scellino Keniota",
    },
    {
      id: "KWD",
      name_eng: "Kuwaiti Dinar",
      lang_ita: "Dinaro Kuwaitiano",
    },
    {
      id: "LBP",
      name_eng: "Lebanese pound",
      lang_ita: "Sterlina Libanese",
    },
    {
      id: "LRD",
      name_eng: "Liberian Dollar",
      lang_ita: "Dollaro Liberiano",
    },
    {
      id: "LYD",
      name_eng: "Libyan dinar",
      lang_ita: "Dinaro Libico",
    },
    {
      id: "MKD",
      name_eng: "Macedonian Denar",
      lang_ita: "Dinaro Macedone",
    },
    {
      id: "MGA",
      name_eng: "Malagasy ariary",
      lang_ita: "Ariary malgascio",
    },
    {
      id: "MWK",
      name_eng: "Malawian kwacha",
      lang_ita: "Kwacha Malawiano",
    },
    {
      id: "MYR",
      name_eng: "Malaysian ringgit",
      lang_ita: "Ringgit Malese",
    },
    {
      id: "MVR",
      name_eng: "Maldivian rufiyaa",
      lang_ita: "Rupie Maldiviane",
    },
    {
      id: "MUR",
      name_eng: "Mauritian Rupee",
      lang_ita: "Rupia Mauriziana",
    },
    {
      id: "MXN",
      name_eng: "Mexican peso",
      lang_ita: "Peso Messicano",
    },
    {
      id: "MDL",
      name_eng: "Moldovan leu",
      lang_ita: "Leu Moldavo",
    },
    {
      id: "MNT",
      name_eng: "Mongolian tögrög",
      lang_ita: "Tögrög Mongolo",
    },
    {
      id: "MAD",
      name_eng: "Moroccan dirham",
      lang_ita: "Dirham Marocchina",
    },
    {
      id: "MZN",
      name_eng: "Mozambican metical",
      lang_ita: "Metical mozambicano",
    },
    {
      id: "NAD",
      name_eng: "Namibian dollar",
      lang_ita: "Dollaro namibiano",
    },
    {
      id: "NPR",
      name_eng: "Nepalese Rupee",
      lang_ita: "Rupia Nepalese",
    },
    {
      id: "TWD",
      name_eng: "New Taiwan dollar",
      lang_ita: "Nuovo Dollaro taiwanese",
    },
    {
      id: "NZD",
      name_eng: "New Zealand Dollar",
      lang_ita: "Dollaro Neozelandese",
    },
    {
      id: "NGN",
      name_eng: "Nigerian Naira",
      lang_ita: "Naira Nigeriana",
    },
    {
      id: "KPW",
      name_eng: "North Korean won",
      lang_ita: "Won Nord Coreano",
    },
    {
      id: "NOK",
      name_eng: "Norwegian Krone",
      lang_ita: "Corona norvegese",
    },
    {
      id: "OMR",
      name_eng: "Omani Rial",
      lang_ita: "Rial Omanita",
    },
    {
      id: "PKR",
      name_eng: "Pakistani Rupee",
      lang_ita: "Rupia Pakistana",
    },
    {
      id: "PAB",
      name_eng: "Panamanian Balboa",
      lang_ita: "Balboa panamense",
    },
    {
      id: "PGK",
      name_eng: "Papua New Guinean Kina",
      lang_ita: "Kina Papuana",
    },
    {
      id: "PYG",
      name_eng: "Paraguayan Guarani",
      lang_ita: "Guarani paraguaiano",
    },
    {
      id: "PEN",
      name_eng: "Peru Sol",
      lang_ita: "Sol peruviano",
    },
    {
      id: "PHP",
      name_eng: "Philippine peso",
      lang_ita: "Pesos Filippino",
    },
    {
      id: "PLN",
      name_eng: "Poland zloty",
      lang_ita: "Zloty Polacchi",
    },
    {
      id: "QAR",
      name_eng: "Qatari Rial",
      lang_ita: "Riyal del Qatar",
    },
    {
      id: "RON",
      name_eng: "Romanian Leu",
      lang_ita: "Leu romeno",
    },
    {
      id: "RUB",
      name_eng: "Russian Ruble",
      lang_ita: "Rublo russo",
    },
    {
      id: "RWF",
      name_eng: "Rwandan franc",
      lang_ita: "Franco Ruandese",
    },
    {
      id: "WST",
      name_eng: "Samoan tala",
      lang_ita: "Tala di Samoa",
    },
    {
      id: "SAR",
      name_eng: "Saudi Riyal",
      lang_ita: "Riyal Saudita",
    },
    {
      id: "RSD",
      name_eng: "Serbian Dinar",
      lang_ita: "Dinaro serbo",
    },
    {
      id: "SCR",
      name_eng: "Seychellois Rupee",
      lang_ita: "Rupie delle Seychelles",
    },
    {
      id: "SLL",
      name_eng: "Sierra Leonean Leone",
      lang_ita: "Sierraleonese",
    },
    {
      id: "SGD",
      name_eng: "Singapore Dollar",
      lang_ita: "Dollaro Singaporiano",
    },
    {
      id: "ZAR",
      name_eng: "South African Rand",
      lang_ita: "Rand Sudafricano",
    },
    {
      id: "KRW",
      name_eng: "South Korean won",
      lang_ita: "Won Sudcoreano",
    },
    {
      id: "LKR",
      name_eng: "Sri Lankan Rupee",
      lang_ita: "Rupia dello Sri Lanka",
    },
    {
      id: "SDG",
      name_eng: "Sudanese pound",
      lang_ita: "Sudanese pound",
    },
    {
      id: "SZL",
      name_eng: "Swazi lilangeni",
      lang_ita: "Lilangeni dello Swatziland",
    },
    {
      id: "SEK",
      name_eng: "Swedish Krona",
      lang_ita: "Corona Svedese",
    },
    {
      id: "CHF",
      name_eng: "Swiss Franc",
      lang_ita: "Franco Svizzero",
    },
    {
      id: "SYP",
      name_eng: "Syrian pound",
      lang_ita: "Pound siriano",
    },
    {
      id: "TJS",
      name_eng: "Tajikistani somoni",
      lang_ita: "Somoni Tagiko",
    },
    {
      id: "TZS",
      name_eng: "Tanzanian Shilling",
      lang_ita: "Scellinno tanzaniano",
    },
    {
      id: "THB",
      name_eng: "Thai baht",
      lang_ita: "Baht Thailandese",
    },
    {
      id: "TTD",
      name_eng: "Trinidad & Tobago Dollar",
      lang_ita: "Dollaro del Trinidad e Tobago",
    },
    {
      id: "TND",
      name_eng: "Tunisian Dinar",
      lang_ita: "Dinaro Tunisino",
    },
    {
      id: "TRY",
      name_eng: "Turkish lira",
      lang_ita: "Lira Turca",
    },
    {
      id: "TMT",
      name_eng: "Turkmenistan manat",
      lang_ita: "Manat Turkmeno",
    },
    {
      id: "UGX",
      name_eng: "Ugandan shilling",
      lang_ita: "Scellino Ugandese",
    },
    {
      id: "UAH",
      name_eng: "Ukrainian hryvnia",
      lang_ita: "Grivna ucraina",
    },
    {
      id: "UYU",
      name_eng: "Uruguayan Peso",
      lang_ita: "Peso uruguaiano",
    },
    {
      id: "UZS",
      name_eng: "Uzbekistani Som",
      lang_ita: "Som uzbeko",
    },
    {
      id: "VES",
      name_eng: "Venezuelan soberano",
      lang_ita: "Venezuelano boliviano",
    },
    {
      id: "VND",
      name_eng: "Vietnamese dong",
      lang_ita: "Dong Vietnamita",
    },
    {
      id: "ZMW",
      name_eng: "Zambian kwacha",
      lang_ita: "Kwacha Zambiano",
    },
    {
      id: "ZWL",
      name_eng: "Zimbabwean dollar",
      lang_ita: "Dollaro Zimbabwese",
    },
  ];

  var CoronaReason = [
    {
      id: "FCOAdvice",
      name_eng: "FCDO/DFA restricted travel to my destination",
      name_ita: "La Farnesina suggerisce di non viaggiare",
    },
    {
      id: "HealthCondition",
      name_eng: "Doctor advised as a precaution not to travel",
      name_ita: "Il medico ha raccomandato di non viaggiare",
    },
    {
      id: "PostiveCovidTest",
      name_eng: "A POSITIVE Coronavirus test result",
      name_ita: "Un test POSITIVO per il Coronavirus",
    },
    {
      id: "UnableToIsolate",
      name_eng: "Unable to self isolate after trip",
      name_ita: "Impossibilitato all'auto-isolamento dopo il viaggio",
    },
    {
      id: "CovidCertificate",
      name_eng:
        "Unable to obtain COVID travel documents (test results, vaccine pass)",
      name_ita: "Impossibilitato ad ottenere un certificato per Coronavirus",
    },
    {
      id: "LongCovid",
      name_eng: "Diagnosed with Long Covid",
      name_ita: "Diagnosticato con lungo Covid",
    },
    {
      id: "NHSTestAndTrace",
      name_eng: "Advised to Isolate by Test and Trace",
      name_ita: "Isolamento",
    },
  ];

  var WhoTestedPositive = [
    {
      id: "Insured",
      name_eng: "Myself or another travelling insured",
      name_ita: "Io di un altro viaggiante assicurato",
    },
    {
      id: "CloseRelative",
      name_eng: "A close relative (not travelling)",
      name_ita: "Un parente stretto (non viaggiante)",
    },
    {
      id: "ThirdPartyTravelling",
      name_eng: "Someone else (travelling)",
      name_ita: "Qualcun altro (viaggiatore)",
    },
    {
      id: "ThirdPartyNotTravelling",
      name_eng: "Someone else (not travelling)",
      name_ita: "Qualcun altro (non viaggiante)",
    },
  ];

  var WhatTypeOfCovidTest = [
    {
      id: "NHSpcr",
      name_eng: "PCR governativa",
      name_ita: "NHS/HSE PCR",
    },
    {
      id: "NHSlateralflow",
      name_eng: "NHS/HSE Lateral flow",
      name_ita: "Flusso laterale del governo",
    },
    {
      id: "PrivatePCR",
      name_eng: "Privately booked PCR",
      name_ita: "PCR privato",
    },
    {
      id: "PrivateLateralFlow",
      name_eng: "Privately booked Lateral flow",
      name_ita: "Flusso laterale privato",
    },
  ];

  var COVIDTypeOfTrip = [
    {
      id: "PackageBooking",
      name_eng:
        "Package booking (e.g. flights and accommodation or flights and cruise)",
      name_ita:
        "Prenotazione di pacchetti (ad es. voli e alloggio o voli e crociera)",
    },
    {
      id: "IndependentBooking",
      name_eng:
        "Independent booking (travel and accommodation booked separately)",
      name_ita:
        "Prenotazione indipendente (viaggio e alloggio prenotati separatamente)",
    },
    {
      id: "AccommodationBooking",
      name_eng: "Accommodation ONLY (no travel costs)",
      name_ita: "SOLO alloggio (senza spese di viaggio) ",
    },
    {
      id: "TravelBooking",
      name_eng: "Travel ONLY (e.g flights or ferry) ",
      name_ita: "SOLO viaggi (ad es. voli o traghetti)",
    },
  ];

  var COVIDTripTransportType = [
    {
      id: "Flights",
      name_eng: "Flights",
      name_ita: "Volo",
    },
    {
      id: "Train",
      name_eng: "Train",
      name_ita: "Treno",
    },
    {
      id: "Ferry",
      name_eng: "Ferry",
      name_ita: "Traghetto",
    },
    {
      id: "CoachBus",
      name_eng: "Coach or bus",
      name_ita: "Pullman o Autobus",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
  ];

  var TripPaymentMethod = [
    {
      id: "Cash",
      name_eng: "Cash",
      name_ita: "Contanti",
    },
    {
      id: "DebitCard",
      name_eng: "Debit Card",
      name_ita: "Carta di debito",
    },
    {
      id: "CreditCard",
      name_eng: "Credit Card",
      name_ita: "Carta di credito",
    },
  ];

  var yesNo = [
    {
      id: "Yes",
      name_eng: "Yes",
      name_ita: "Si",
    },
    {
      id: "No",
      name_eng: "No",
      name_ita: "No",
    },
  ];

  /* 5.1 Start */
  var LossOrTheft = [
    {
      id: "Loss",
      name_eng: "Loss",
      name_ita: "Perdita",
    },
    {
      id: "Theft",
      name_eng: "Theft",
      name_ita: "Furto",
    },
  ];
  var LossTheftWhere = [
    {
      id: "InVehicle",
      name_eng: "From your own or a rental vehicle",
      name_ita: "Dal tuo veicolo di proprietà o in affitto",
    },
    {
      id: "InCareOfTransportProvider",
      name_eng: "Checked-in luggage (In my suitcase)",
      name_ita:
        "Durante l'affidamento al vettore (es. Compagnia aerea: bagaglio in stiva)",
    },
    {
      id: "Pickpocketed",
      name_eng: "Pickpocketed or Stolen whilst in your possession",
      name_ita: "Sottratto mentre era sotto il tuo controllo",
    },
    {
      id: "AtBeach",
      name_eng: "Checked-in luggage (In my suitcase)",
      name_ita: "Sulla spiaggia",
    },
    {
      id: "AtPoolSide",
      name_eng: "By the pool side",
      name_ita: "Dal lato piscina",
    },
    {
      id: "OnPublicTransport",
      name_eng: "Left on public transport (Flight, Bus, Train or Taxi)",
      name_ita: "Lasciato sul mezzo di trasporto (Bus, Treno o Taxi)",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
    {
      id: "HotelRoom",
      name_eng: "Hotel room",
      name_ita: "Camera d'albergo",
    },
    {
      id: "SafetyDepositBox",
      name_eng: "Safety deposit box",
      name_ita: "Cassetta di sicurezza",
    },
  ];
  var LossTheftVehicle = [
    {
      id: "BackSeat",
      name_eng: "Back Seat",
      name_ita: "Sedile posteriore",
    },
    {
      id: "FootWell",
      name_eng: "Foot Well",
      name_ita: "Poggiapiedi",
    },
    {
      id: "GloveBox",
      name_eng: "Glove Box",
      name_ita: "Cruscotto / Vano portaoggetti",
    },
    {
      id: "FrontSeat",
      name_eng: "Front Seat",
      name_ita: "Posto di fronte",
    },
    {
      id: "Boot",
      name_eng: "Boot",
      name_ita: "Portabagagli",
    },
  ];
  var LossTheftReportedTo = [
    {
      id: "Hotel",
      name_eng: "Hotel (Duty manager, receptionist etc)",
      name_ita: "Hotel",
    },
    {
      id: "Airline",
      name_eng: "Airline (Baggage desk, flight attendant etc)",
      name_ita: "Compagnia aerea",
    },
    {
      id: "Police",
      name_eng: "Police",
      name_ita: "Polizia",
    },
    {
      id: "TourOperator",
      name_eng: "Tour Operator (Travel representative etc)",
      name_ita: "Tour operator",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
  ];
  var NoReportReason = [
    {
      id: "RemoteLocation",
      name_eng: "Loss occurred in a remote location",
      name_ita: "Posizione remota",
    },
    {
      id: "NotEnoughTime",
      name_eng: "Insufficient time to report loss",
      name_ita: "Tempo insufficiente",
    },
    {
      id: "NotAware",
      name_eng: "Unaware loss report was required",
      name_ita: "Segnalazione non consapevole richiesta",
    },
    {
      id: "AtSea",
      name_eng: "Item was lost at sea/overboard",
      name_ita: "Dispersi in mare",
    },
    {
      id: "Other",
      name_eng: "Other reason",
      name_ita: "Altro",
    },
  ];
  var ItemType = [
    {
      id: "Gadgets",
      name_eng: "Gadgets",
      name_ita: "Apaprecchi garantiti",
    },
    {
      id: "Jewellery",
      name_eng: "Jewellery",
      name_ita: "Gioielleria",
    },
    {
      id: "Electronics",
      name_eng: "Electronics",
      name_ita: "Elettronica",
    },
    {
      id: "MobilePhone",
      name_eng: "Mobile Phone",
      name_ita: "Cellulare",
    },
    {
      id: "PersonalPossessions",
      name_eng: "Personal Possessions",
      name_ita: "Effetti Personali",
    },
    {
      id: "Cosmetics",
      name_eng: "Cosmetics",
      name_ita: "Cosmetici",
    },
    {
      id: "PersonalMoneyCurrency",
      name_eng: "Personal Money/Currency",
      name_ita: "Denaro personale/Valuta",
    },
    {
      id: "LostPassport",
      name_eng: "Passport (Old)",
      name_ita: "Passaporto (Vecchio)",
    },
    {
      id: "NewPassport",
      name_eng: "Passport (New)",
      name_ita: "Passaporto (Nuovo)",
    },
    {
      id: "GolfEquipment",
      name_eng: "Golf Equipment",
      name_ita: "Attrezzatura Golf",
    },
    {
      id: "WinterSportsEquipment",
      name_eng: "Winter Sports Equipment",
      name_ita: "Attrezzatura Sport Invernali",
    },
    {
      id: "MedicalFittingsEquipment",
      name_eng: "Medical Fittings or Equipment",
      name_ita: "Attrezzatura medica",
    },
  ];
  var ItemOwner = [
    {
      id: "Myself",
      name_eng: "Myself",
      name_ita: "Io",
    },
    {
      id: "InsuredAdult",
      name_eng: "An Insured Adult",
      name_ita: "Adulto assicurato",
    },
    {
      id: "Hired",
      name_eng: "Hired Item",
      name_ita: "Affittato",
    },
    {
      id: "BorrowedOrLoaned",
      name_eng: "Borrowed or Loaned Item",
      name_ita: "In prestito",
    },
  ];
  /* 5.1 End */

  /* 5.2 Start */
  var ItemTypeDamaged = ItemType;
  var DamageItemOwner = ItemOwner;
  /* 5.2 End */

  /* 5.3 Start */
  var CancellationPerson = [
    {
      id: "Insured",
      name_eng: "Myself or another insured person",
      name_ita: "Io o un altro assicurato",
    },
    {
      id: "TravellingCompanion",
      name_eng: "Travelling companion (not on this policy)",
      name_ita: "Compagno di viaggio (non in questa polizza)",
    },
    {
      id: "CloseRelative",
      name_eng: "Close relative (not on this policy)",
      name_ita: "Parente stretto (non su questa polizza)",
    },
    {
      id: "PersonStayingWith",
      name_eng: "Someone you were intending to stay with",
      name_ita: "Qualcuno con cui avevi intenzione di restare",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
  ];
  var ReasonForCancellation = [
    {
      id: "Illness",
      name_eng: "Unforseen death",
      name_ita: "Malattia imprevista",
    },
    {
      id: "Injury",
      name_eng: "Unforseen injury",
      name_ita: "Ferita imprevista",
    },
    {
      id: "Death",
      name_eng: "Unforseen illness",
      name_ita: "Morte imprevista",
    },
    {
      id: "Redundancy",
      name_eng: "Redundancy from work",
      name_ita: "Ridondanza dal lavoro",
    },
    {
      id: "JuryServiceOrWitness",
      name_eng: "Called for jury service or as a witness",
      name_ita: "Essere chiamato per il servizio di giuria o come testimone",
    },
    {
      id: "HomeOrBusiness",
      name_eng: "Your home or business premises being uninhabitable",
      name_ita: "La tua casa o i tuoi locali commerciali sono inabitabili",
    },
    {
      id: "Pregnancy",
      name_eng: "Pregnancy",
      name_ita: "Gravidanza",
    },
    {
      id: "CancellationOfLeave",
      name_eng: "Cancellation of leave by emergency services or armed forces",
      name_ita:
        "Annullamento del congedo da parte dei servizi di emergenza o delle forze armate",
    },
    {
      id: "Other",
      name_eng: "Other reason",
      name_ita: "Altro",
    },
    {
      id: "CancellationCoronavirus",
      name_eng: "Coronavirus",
      name_ita: "Coronavirus",
    },
  ];
  var CancellationIllnessCondition = MedicalCondition;
  var WhoAdvisedToCancel = [
    {
      id: "GeneralPractitioner",
      name_eng: "Doctor",
      name_ita: "Dottore",
    },
    {
      id: "Hospital",
      name_eng: "Hospital",
      name_ita: "Ospedale",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
    {
      id: "None",
      name_eng: "No treatment",
      name_ita: "Nessun Trattamento",
    },
  ];
  var CancellationTypeOfTrip = [
    {
      id: "PackageBooking",
      name_eng:
        "Package booking (e.g. flights and accommodation or flights and cruise)",
      name_ita:
        "Prenotazione di pacchetti (ad es. voli e alloggio o voli e crociera)",
    },
    {
      id: "IndependentBooking",
      name_eng:
        "Independent booking (travel and accommodation booked separately)",
      name_ita:
        "Prenotazione indipendente (viaggio e alloggio prenotati separatamente)",
    },
    {
      id: "AccommodationBooking",
      name_eng: "Accommodation ONLY (no travel costs)",
      name_ita: "SOLO alloggio (senza spese di viaggio)",
    },
    {
      id: "TravelBooking",
      name_eng: "Travel ONLY (e.g flights or ferry)",
      name_ita: "SOLO viaggi (ad es. voli o traghetti)",
    },
  ];
  var TripTransportType = COVIDTripTransportType;
  /* 5.3 End */

  /* 5.5 Start */
  var MissedDepartureReason = [
    {
      id: "PubTransportDelay",
      name_eng: "Public transport delay/cancellation",
      name_ita: "Public transport delay/cancellation",
    },
    {
      id: "ConnectingFlightDelay",
      name_eng: "Delay to a connecting flight",
      name_ita: "Delay to a connecting flight",
    },
    {
      id: "VehicleAccident",
      name_eng: "Vehicle you were travelling in was in an accident",
      name_ita: "Vehicle you were travelling in was in an accident",
    },
    {
      id: "VehicleBreakdown",
      name_eng: "Vehicle you were travelling in broke down",
      name_ita: "Vehicle you were travelling in broke down",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Other",
    },
    {
      id: "DeniedBoarding",
      name_eng: "Denied boarding",
      name_ita: "Denied boarding",
    },
    {
      id: "DepartureQueues",
      name_eng: "Queues at departure point",
      name_ita: "Queues at departure point",
    },
    {
      id: "DocumentIssue",
      name_eng: "Passport/visa/document issue",
      name_ita: "Passport/visa/document issue",
    },
    {
      id: "FailedHealthScreening",
      name_eng: "Failed health screening",
      name_ita: "Failed health screening",
    },
    {
      id: "DelayedTestResults",
      name_eng: "Delayed test results",
      name_ita: "Delayed test results",
    },
    {
      id: "TrafficRoadClosure",
      name_eng: "Traffic or road closure",
      name_ita: "Traffic or road closure",
    },
  ];
  var MissedDepDelayReason = [
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Other",
    },
    {
      id: "AdverseWeather",
      name_eng: "Adverse Weather",
      name_ita: "Adverse Weather",
    },
    {
      id: "Strike",
      name_eng: "Strike",
      name_ita: "Strike",
    },
    {
      id: "IndustrialAction",
      name_eng: "Industrial Action",
      name_ita: "Industrial Action",
    },
    {
      id: "Mechanical",
      name_eng: "Mechanical Breakdown",
      name_ita: "Mechanical Breakdown",
    },
    {
      id: "AirTrafficControl",
      name_eng: "Failure Air Traffic Control",
      name_ita: "Failure Air Traffic Control",
    },
  ];
  var MissedDepWhichJourney = [
    {
      id: "MissedDepartureOutbound",
      name_eng: "First Outbound from your Home Country",
      name_ita: "First Outbound from your Home Country",
    },
    {
      id: "MissedDepartureInbound",
      name_eng: "Final Inbound to your Home Country",
      name_ita: "Final Inbound to your Home Country",
    },
    {
      id: "MissedDepartureConnection",
      name_eng: "Connection",
      name_ita: "Connection",
    },
  ];
  var MissedDepExpenseType = [
    {
      id: "Accommodation",
      name_eng: "Accommodation",
      name_ita: "Accommodation",
    },
    {
      id: "TravelAndAccommodation",
      name_eng: "Travel and Accommodation",
      name_ita: "Travel and Accommodation",
    },
    {
      id: "Travel",
      name_eng: "Travel",
      name_ita: "Travel",
    },
  ];
  /* 5.5 End */

  /* 5.6 Start */
  var WhoMedicalExpenses = [
    {
      id: "Insured",
      name_eng: "Myself",
      name_ita: "Me stessa",
    },
    {
      id: "AnotherInsured",
      name_eng: "Another travelling insured",
      name_ita: "Un altro viaggio assicurato",
    },
  ];
  var MedicalInjuryIllness = [
    {
      id: "Illness",
      name_eng: "Illness",
      name_ita: "Malattia",
    },
    {
      id: "Injury",
      name_eng: "Injury",
      name_ita: "Infortunio",
    },
    {
      id: "Coronavirus",
      name_eng: "Coronavirus (COVID-19)",
      name_ita: "Coronavirus (COVID-19)",
    },
  ];
  var MedicalExpensesCondition = MedicalCondition;
  var MedicalFirstExpenseType = [
    {
      id: "Outpatient",
      name_eng: "Outpatient hospital visit (not admitted overnight)",
      name_ita: "Visita Ospedaliera (senza ricovero durante la notte)",
    },
    {
      id: "Doctor",
      name_eng: "Doctor visit / clinic",
      name_ita: "Visita dal dottore/clinica",
    },
    {
      id: "Medication",
      name_eng: "Medication / Prescription",
      name_ita: "Farmaco/Prescrizione",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
    {
      id: "Inpatient",
      name_eng: "Inpatient hospital visit (admitted overnight)",
      name_ita: "Visita Ospedaliera (ricoverato durante la notte)",
    },
    {
      id: "Travel",
      name_eng: "Unplanned travel costs (taxi fees to the hospital etc)",
      name_ita:
        "Spese di viaggio non pianificate (spese di taxi per l'ospedale ecc.)",
    },
    {
      id: "Equipment",
      name_eng: "Medical equipment (wheelchair, crutches, splint)",
      name_ita: "Attrezzatura medica (sedia a rotelle, stampelle, steccatura)",
    },
    {
      id: "CovidTest",
      name_eng: "Covid Test",
      name_ita: "Prova Covid",
    },
    {
      id: "Physiotherapy",
      name_eng: "Physiotherapy charges",
      name_ita: "Spese di fisioterapia",
    },
    {
      id: "Chiropractor",
      name_eng: "Chiropractor charges",
      name_ita: "Accuse di chiropratico",
    },
  ];
  /* 5.6 End */

  /* 5.7 Start */
  var CURTAILMENTREASON = [
    {
      id: "CancellationOfLeave",
      name_eng: "Cancellation of leave by emergency services or armed forces",
      name_ita:
        "Cancellazione del congedo da parte dei servizi di emergenza o dele forze armate",
    },
    {
      id: "Quarantine",
      name_eng: "Your compulsory quarantine",
      name_ita: "Your compulsory quarantine",
    },
    {
      id: "HomeWorkUninhabitable",
      name_eng: "You home or business premisses being uninhabitable",
      name_ita: "Your home or business premises being uninhabitable",
    },
    {
      id: "Redundancy",
      name_eng: "Redundancy from work",
      name_ita: "Licenziamento",
    },
    {
      id: "Witness",
      name_eng: "Being called as a witness",
      name_ita: "Essere chiamato come testimone",
    },
    {
      id: "JuryService",
      name_eng: "Jury Service",
      name_ita: "Servizio di giuria",
    },
    {
      id: "IllnessInjuryDeathCloseRelative",
      name_eng: "Illness, Injury or Death of a Close Relative",
      name_ita: "Malattia, infortunio o morte di un parente strettp",
    },
    {
      id: "InjuryIllnessDeathTravellingCompanion",
      name_eng: "Injury, Illness or Death of a Travelling Companion",
      name_ita: "Infortunio, malattia o decesso di un compagno di viaggio",
    },
    {
      id: "InjuryIllnessInsured",
      name_eng: "Injury or Illness of yourself",
      name_ita: "Il tuo infortunio o malattia",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
    {
      id: "Coronavirus",
      name_eng: "Coronavirus (COVID-19)",
      name_ita: "Coronavirus (COVID-19)",
    },
    {
      id: "CurtailmentFCOAdfvice",
      name_eng: "FCO Advice against travel",
      name_ita: "La Farnesina sconsiglia di viaggiare",
    },
  ];
  /* 5.7 End */

  /* 5.8 Start */
  var SubAccomReason = [
    {
      id: "Fire",
      name_eng: "Fire",
      name_ita: "Fire",
    },
    {
      id: "Flood",
      name_eng: "Flood",
      name_ita: "Flood",
    },
    {
      id: "Storm",
      name_eng: "Storm",
      name_ita: "Storm",
    },
    {
      id: "NaturalCastrophe",
      name_eng: "Natural Catastrophe",
      name_ita: "Natural Catastrophe",
    },
    {
      id: "InfectiousDisease",
      name_eng: "Outbreak of infectious disease",
      name_ita: "Outbreak of infectious disease",
    },
    {
      id: "IndustrialAction",
      name_eng: "Industrial Action",
      name_ita: "Industrial Action",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Other",
    },
  ];
  var SubAccomTripType = [
    {
      id: "PackageBooking",
      name_eng:
        "Package booking (e.g. flights and accommodation or flights and cruise)",
      name_ita:
        "Package booking (e.g. flights and accommodation or flights and cruise)",
    },
    {
      id: "IndependentBooking",
      name_eng:
        "Independent booking (travel and accommodation booked separately)",
      name_ita:
        "Independent booking (travel and accommodation booked separately)",
    },
    {
      id: "AccommodationBooking",
      name_eng: "Accommodation ONLY (no travel costs)",
      name_ita: "Accommodation ONLY (no travel costs)",
    },
    {
      id: "TravelBooking",
      name_eng: "Travel ONLY (e.g flights or ferry)",
      name_ita: "Travel ONLY (e.g flights or ferry)",
    },
  ];
  /* 5.8 End */

  /* 5.9 Start */
  var SkiPackClaimReason = [
    {
      id: "ClosureofPiste",
      name_eng: "Closure of Piste",
      name_ita: "Chiusura delle piste",
    },
    {
      id: "CanxLessonPass",
      name_eng: "Cancellation of Lessons or Lift Pass - Ski Pack",
      name_ita: "Annulamento lezioni o skipass - Ski Pack",
    },
    {
      id: "SkiEquipment",
      name_eng: "Equipment - Lost, Stolen or Damaged",
      name_ita: "Attrezzatura-perduto, rubato o danneggiato",
    },
    {
      id: "Morethanone",
      name_eng: "More than one item listed",
      name_ita: "Più di un oggetto elencato",
    },
  ];
  /* 5.9 End */

  /* 5.10 Start */
  var TransportationMethod = [
    {
      id: "Areoplane",
      name_eng: "Aeroplane",
      name_ita: "Areoplano",
    },
    {
      id: "Ferry",
      name_eng: "Ferry",
      name_ita: "Traghetto",
    },
    {
      id: "Coach",
      name_eng: "Coach",
      name_ita: "Autobus",
    },
    {
      id: "Train",
      name_eng: "Train",
      name_ita: "Treno",
    },
    {
      id: "Cruise",
      name_eng: "Cruise",
      name_ita: "Crociera",
    },
  ];
  var ReasonForDelay = [
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
    {
      id: "AdverseWeather",
      name_eng: "Adverse Weather",
      name_ita: "Tempo Climatico avverso",
    },
    {
      id: "Strike",
      name_eng: "Strike",
      name_ita: "Sciopero",
    },
    {
      id: "IndustrialAction",
      name_eng: "Industrial Action",
      name_ita: "Azione industriale / Azione sindacale",
    },
    {
      id: "Mechanical",
      name_eng: "Mechanical Breakdown",
      name_ita: "Guasto Meccanico",
    },
    {
      id: "AirTrafficControl",
      name_eng: "Failure of Air Traffic Control",
      name_ita: "Problemi con il Controllo del Traffico Aereo",
    },
    {
      id: "CrewShortage",
      name_eng: "Equipaggio o carenza di personale",
      name_ita: "Crew or Staff shortage",
    },
  ];
  // var WhichJourneyNew = [{"id":"Connecting","name_eng":"Connecting journey","name_ita":"Viaggio di collegamento"},{"id":"Inbound","name_eng":"Final inbound journey to your Home Country","name_ita":"Ultima tratta di ritorno al Suo paese di residenza"},{"id":"Outbound","name_eng":"First outbound journey from your Home Country","name_ita":"Ultima tratta del viaggio di ritorno alla tua nazione di residenza"}]
  var WhichJourneyNew = [
    {
      id: "Inbound",
      name_eng: "On the return journey back home",
      name_ita:
        "Prima tratta internazionale del tuo itinerario di ritorno vero l'Italia",
    },
    {
      id: "Outbound",
      name_eng: "On the outward journey to my destination",
      name_ita:
        "Prima tratta internazionale del tuo itinerario di andata verso l'estero",
    },
  ];
  /* 5.10 End */

  /* 5.11 Start */
  // var WhoDentalExpenses = WhoMedicalExpenses;
  var WhoDentalExpenses = [
    {
      id: "Insured",
      name_eng: "Myself",
      name_ita: "Me stessa",
    },
    {
      id: "AnotherInsured",
      name_eng: "Another travelling insured",
      name_ita: "Un altro viaggio assicurato",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
  ];

  var DentalTreatment = [
    {
      id: "TreatmentForPainDiscomfort",
      name_eng: "Emergency Dental Treatment For Pain/Discomfort",
      name_ita: "Trattamento dentale di emergenza per dolore / disagio",
    },
    {
      id: "EmergencyRepairsToDentures",
      name_eng: "Emergency Repairs to Dentures",
      name_ita: "Riparazioni di emergenza per protesi dentarie",
    },
    {
      id: "EmergencyRepairsToOrthodonticAppliances",
      name_eng: "Emergency Repairs to Orthodontic Appliances",
      name_ita: "Riparazioni di emergenza ad un apparecchio ortodontico",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
  ];
  /* 5.11 End */

  /* 5.12 Start */
  // var BaggageDelayLeg = WhichJourneyNew;
  var BaggageDelayLeg = [
    {
      id: "InwardJourney",
      name_eng: "On the return journey back home",
      name_ita: "Ultima tratta di ritorno al Suo paese di residenza",
    },
    {
      id: "OutwardJourney",
      name_eng: "On the outward journey to my destination",
      name_ita:
        "Ultima tratta del viaggio di ritorno alla tua nazione di residenza",
    },
  ];

  var TransportationMethodDelayed = [
    {
      id: "Areoplane",
      name_eng: "Areoplane",
      name_ita: "Areoplano",
    },
    {
      id: "Ferry",
      name_eng: "Ferry",
      name_ita: "Traghetto",
    },
    {
      id: "Coach",
      name_eng: "Coach",
      name_ita: "Autobus",
    },
    {
      id: "Train",
      name_eng: "Train",
      name_ita: "Treno",
    },
    {
      id: "Other",
      name_eng: "Other",
      name_ita: "Altro",
    },
  ];
  /* 5.12 End */

  var qarray = [
    /* 5.1 Start */
    {
      id: "ClaimReason",
      name_eng: "helpdesk_ticket_custom_field_cf_reason_for_claim_2321673",
    },
    {
      id: "Destination",
      name_eng: "helpdesk_ticket_custom_field_cf_your_destination_2321673",
    },
    {
      id: "CurrencyType",
      name_eng: "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
    },
    {
      id: "MedicalExpensesCondition",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_condition_has_resulted_in_the_medical_expenses_2321673",
    },
    {
      id: "LossOrTheft",
      name_eng:
        "helpdesk_ticket_custom_field_cf_are_you_claiming_for_a_loss_or_theft_2321673",
    },
    {
      id: "LossTheftWhere",
      name_eng:
        "helpdesk_ticket_custom_field_cf_where_did_the_loss_or_theft_take_place_2321673",
    },
    {
      id: "InVehicleAtTimeOfTheft",
      name_eng:
        "helpdesk_ticket_custom_field_cf_were_you_in_the_vehicle_at_the_time_of_the_theft_2321673",
    },
    {
      id: "LossTheftVehicle",
      name_eng:
        "helpdesk_ticket_custom_field_cf_whereabouts_in_the_vehicle_was_the_items_when_stolen_2321673",
    },
    {
      id: "LossTheftVehicleForce",
      name_eng:
        "helpdesk_ticket_custom_field_cf_was_there_physical_damage_to_the_vehicle_2321673",
    },
    {
      id: "LossTheftTransportGadget",
      name_eng:
        "helpdesk_ticket_custom_field_cf_are_any_of_the_items_lost_defined_as_a_valuable_gadgetelectrical_as_shown_within_your_policy_wording_2321673",
    },
    {
      id: "TransportGadgetItems",
      name_eng:
        "helpdesk_ticket_custom_field_cf_are_you_claiming_for_more_than_1_item_2321673",
    },
    {
      id: "LossTheftReport",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_report_the_loss_or_theft_2321673",
    },
    {
      id: "LossTheftReportedTo",
      name_eng:
        "helpdesk_ticket_custom_field_cf_who_did_you_report_it_to_2321673",
    },
    {
      id: "NoReportReason",
      name_eng:
        "helpdesk_ticket_custom_field_cf_please_confirm_why_you_did_not_report_the_loss_or_theft6975_2321673",
    },
    {
      id: "LossTheftNumberOfItems",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673",
    },
    {
      id: "ItemType",
      name_eng: "helpdesk_ticket_custom_field_cf_item_type870706_2321673",
    },
    {
      id: "BaggageLossIMEIBlocked",
      name_eng:
        "helpdesk_ticket_custom_field_cf_have_you_blocked_imei_with_your_provider_2321673",
    },
    {
      id: "ItemOwner",
      name_eng:
        "helpdesk_ticket_custom_field_cf_who_owns_the_item86910_2321673",
    },
    {
      id: "HomeInsurance",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_home_contents_insurance_2321673",
    },
    {
      id: "DualInsurance",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy_2321673",
    },
    {
      id: "TripPaymentMethod",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip396837_2321673",
    },
    {
      id: "CreditCardAmount",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673",
    },
    /* 5.1 End */
    /* 5.2 Start */
    {
      id: "DamageOnPerson",
      name_eng:
        "helpdesk_ticket_custom_field_cf_was_the_items_with_you_when_it_was_damaged_2321673",
    },
    {
      id: "TransportProviderDamage",
      name_eng:
        "helpdesk_ticket_custom_field_cf_was_the_items_with_your_transport_provider_when_damaged_eg_airline_checkedin_luggage_2321673",
    },
    {
      id: "DamageTransportGadget",
      name_eng:
        "helpdesk_ticket_custom_field_cf_is_the_damaged_items_listed_as_valuable_gadgetelectrical_in_your_policy_wording_2321673",
    },
    {
      id: "DamageReport",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_tell_your_transport_provider_about_the_damage_2321673",
    },
    {
      id: "DamageNumberOfItems",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673",
    },
    {
      id: "DamageRepairEstimate",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_get_a_repair_estimate_2321673",
    },
    {
      id: "DamageItemRepairable",
      name_eng:
        "helpdesk_ticket_custom_field_cf_can_the_item_be_repaired_2321673",
    },
    {
      id: "ItemTypeDamaged",
      name_eng: "helpdesk_ticket_custom_field_cf_item_type_2321673",
    },
    {
      id: "DamageItemOwner",
      name_eng: "helpdesk_ticket_custom_field_cf_who_owns_the_item_2321673",
    },
    /* 5.2 End */
    /* 5.3 Start */
    {
      id: "CancellationPerson",
      name_eng:
        "helpdesk_ticket_custom_field_cf_who_has_caused_the_cancellation_2321673",
    },
    {
      id: "ReasonForCancellation",
      name_eng:
        "helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
    },
    {
      id: "CancellationIllnessCondition",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_medical_condition_has_resulted_in_cancellation748907_2321673",
    },
    {
      id: "InjuryThirdPartyInvolved",
      name_eng:
        "helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_sustaining_the_injury_2321673",
    },
    {
      id: "WhoAdvisedToCancel",
      name_eng: "helpdesk_ticket_custom_field_cf_who_advised_to_cancel_2321673",
    },
    {
      id: "RedundancyPayment",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_qualify_for_redundancy_payment_under_current_legislation_2321673",
    },
    {
      id: "StableAtTimeofBooking",
      name_eng:
        "helpdesk_ticket_custom_field_cf_to_the_best_of_your_knowledge_were_you_or_this_person_considered_stable_at_the_time_of_booking_the_trip_2321673",
    },
    {
      id: "CancellationTypeOfTrip",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book137913_2321673",
    },
    {
      id: "CancellationBookingNoPeople",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_many_people_are_there_on_the_booking_2321673",
    },
    {
      id: "CancellationInsuredNoClaiming",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_many_people_on_the_booking_are_insured_by_this_policy514961_2321673",
    },
    {
      id: "TripTransportType",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking146711_2321673",
    },
    {
      id: "DualInsurance",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy400572_2321673",
    },
    {
      id: "TripPaymentMethod",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip913590_2321673",
    },
    {
      id: "CreditCardAmount",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673",
    },
    /* 5.3 End */
    /* 5.4 Start */
    {
      id: "CoronaReason",
      name_eng:
        "helpdesk_ticket_custom_field_cf_why_did_you_cancel_your_trip_2321673",
    },
    {
      id: "WhoTestedPositive",
      name_eng:
        "helpdesk_ticket_custom_field_cf_who_has_tested_positive_for_coronavirus_2321673",
    },
    {
      id: "WhatTypeOfCovidTest",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_test_was_taken_2321673",
    },
    {
      id: "CovidTestEvidence",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_evidence_from_either_the_nhshse_private_testing_company_or_your_doctor_confirming_the_positive_covid_test_email_letter_sms_2321673",
    },
    {
      id: "COVIDTypeOfTrip",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book877716_2321673",
    },
    {
      id: "COVIDTripTransportType",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking_2321673",
    },
    {
      id: "CancellationBookingNoPeople",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_many_people_are_there_on_the_booking166234_2321673",
    },
    {
      id: "CancellationInsuredNoClaiming",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_many_people_on_the_booking_are_insured_by_this_policy_2321673",
    },
    /* 5.4 End */
    /* 5.5 Start */
    {
      id: "MissedDepartureReason",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673",
    },
    {
      id: "MissedDepThirdParty",
      name_eng:
        "helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_the_accident_2321673",
    },
    {
      id: "MissedDepDelayReason",
      name_eng:
        "helpdesk_ticket_custom_field_cf_please_confirm_the_reason_for_delay_2321673",
    },
    {
      id: "MissedDepReasonReport",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_a_report_confirming_the_reason_for_the_delay_2321673",
    },
    {
      id: "MissedDepWhichJourney",
      name_eng:
        "helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_did_you_miss_your_departure_2321673",
    },
    {
      id: "MissedDepSufficientTime",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_allow_yourself_sufficient_time_to_reach_your_international_departure_point_2321673",
    },
    {
      id: "MissedDepExpenseType",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_additional_expenses_are_you_claiming_for_2321673",
    },
    /* 5.5 End */
    /* 5.6 Start */
    {
      id: "MedicalStillAbroad",
      name_eng:
        "helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad93386_2321673",
    },
    {
      id: "WhoMedicalExpenses",
      name_eng:
        "helpdesk_ticket_custom_field_cf_who_incurred_medical_expenses_2321673",
    },
    {
      id: "MedicalInjuryIllness",
      name_eng:
        "helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673",
    },
    {
      id: "ThirdParty",
      name_eng:
        "helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_you_sustaining_the_injury_2321673",
    },
    {
      id: "MedicalInpatient",
      name_eng:
        "helpdesk_ticket_custom_field_cf_were_you_admitted_to_a_hospital_as_an_inpatient_overnight_2321673",
    },
    {
      id: "MedicalFirstExpenseType",
      name_eng: "",
    },
    {
      id: "DualInsurance",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy206683_2321673",
    },
    {
      id: "PrivateMedicalInsurance",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_you_have_private_medical_insurance_2321673",
    },
    {
      id: "TripPaymentMethod",
      name_eng:
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip257666_2321673",
    },
    {
      id: "CreditCardTransactions",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_use_your_credit_card_for_any_transactions_whilst_on_your_trip_2321673",
    },
    {
      id: "CreditCardAmount",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card_2321673",
    },
    {
      id: "MedicalCostCOVID",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_covid_tests_2321673",
    },
    {
      id: "MedicalCostPhysio",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_physiotherapy_or_chiropracter_2321673",
    },
    {
      id: "MedicalCostAccomm",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_accommodation555447_2321673",
    },
    {
      id: "MedicalCostTravel",
      name_eng:
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_travel_not_including_the_ambulance_or_taxi_to_the_hospital_2321673",
    },
    /* 5.6 End */
    /* 5.7 Start */
    {
      id: "CURTAILMENTREASON",
      name_eng:
        "helpdesk_ticket_custom_field_cf_why_did_you_shorten_your_trip_2321673",
    },
    {
      id: "CURTAILMENTADMITTED",
      name_eng: "",
    },
    {
      id: "CURTAILMENTNOTIFICATION",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_notify_us_of_the_need_to_curtail_before_making_arrangements_2321673",
    },
    /* 5.7 End */
    /* 5.8 Start */
    {
      id: "SubAccomReason",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_caused_you_to_leave_your_original_accommodation_2321673",
    },
    {
      id: "SubAccomTripType",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book_2321673",
    },
    /* 5.8 End */
    /* 5.9 Start */
    {
      id: "SkiPackClaimReason",
      name_eng:
        "helpdesk_ticket_custom_field_cf_which_winter_sports_item_are_you_claiming_for_2321673",
    },
    {
      id: "SkiPackReport",
      name_eng:
        "helpdesk_ticket_custom_field_cf_have_you_obtained_a_report_or_invoices_for_the_items_you_are_claiming_2321673",
    },
    /* 5.9 End */
    /* 5.10 Start */
    {
      id: "TransportationMethod",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_transport_was_delayed_2321673",
    },
    {
      id: "ReasonForDelay",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_was_the_reason_for_the_delay_2321673",
    },
    {
      id: "WhichJourneyNew",
      name_eng:
        "helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_were_you_delayed_2321673",
    },
    {
      id: "TravelDelayAdditionalCosts",
      name_eng:
        "helpdesk_ticket_custom_field_cf_were_there_any_additional_expenses_as_a_result_of_the_delay_2321673",
    },
    {
      id: "DelayOver24Hours",
      name_eng:
        "helpdesk_ticket_custom_field_cf_were_you_delayed_for_24_hours_or_more923623_2321673",
    },
    /* 5.10 End */
    /* 5.11 Start */
    {
      id: "WhoDentalExpenses",
      name_eng:
        "helpdesk_ticket_custom_field_cf_who_incurred_dental_expenses930485_2321673",
    },
    {
      id: "DentalTreatment",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_type_of_dental_treatment_did_you_need_2321673",
    },
    /* 5.11 End */
    /* 5.12 Start */
    {
      id: "BaggageDelayLeg",
      name_eng:
        "helpdesk_ticket_custom_field_cf_which_part_of_the_journey_did_your_baggage_arrive_late_2321673",
    },
    {
      id: "DelayedBagReturned",
      name_eng:
        "helpdesk_ticket_custom_field_cf_has_your_baggage_been_returned_to_you_2321673",
    },
    {
      id: "TransportationMethodDelayed",
      name_eng:
        "helpdesk_ticket_custom_field_cf_what_transport_type_was_your_baggage_delayed_on_2321673",
    },
    {
      id: "DelayReport",
      name_eng:
        "helpdesk_ticket_custom_field_cf_did_you_notify_your_transport_provider_about_the_delay_and_get_a_report_pir_2321673",
    },
    {
      id: "DelayedBaggageRefund",
      name_eng:
        "helpdesk_ticket_custom_field_cf_have_you_received_any_refund_from_your_transport_provider_2321673",
    },
    /* 5.12 End */
  ];

  function getAKey(id, array) {
    var getval = $("#" + id).val();
    var getitem = [];
    const obj = {};
    // var qkey,akey;
    qarray.forEach(function (item) {
      if (item.name_eng == id) {
        obj["qkey"] = item.id;
      }
    });
    array.forEach(function (item) {
      if (item.name_eng == getval || item.name_ita == getval) {
        obj["akey"] = item.id;
      }
    });
    getitem.push(obj);
    return getitem;
  }

  //check all previous sections are filled
  $("#save_and_continue3").click(function () {
    list_to_check2 = [
      "helpdesk_ticket_custom_field_cf_your_destination_2321673",
      "helpdesk_ticket_custom_field_cf_your_departure_date_2321673",
      "helpdesk_ticket_custom_field_cf_your_return_date_2321673",
      "helpdesk_ticket_custom_field_cf_your_booking_date_2321673",
      "helpdesk_ticket_custom_field_cf_your_incident_date_2321673",
      "helpdesk_ticket_custom_field_cf_reason_for_claim_2321673",
    ];

    if (checkedfilled(list_to_check2) == true) {
      //check dates
      if (
        dateLogic(
          "helpdesk_ticket_custom_field_cf_your_departure_date_2321673",
          "helpdesk_ticket_custom_field_cf_your_return_date_2321673",
          "helpdesk_ticket_custom_field_cf_your_booking_date_2321673",
          "helpdesk_ticket_custom_field_cf_your_incident_date_2321673"
        ) == true
      ) {
        //add attribute for modal to button
        clearError(list_to_check2);
        $("#save_and_continue3").attr("data-toggle", "modal");
        $("#save_and_continue3").attr("data-target", "ClaimAPIModal");
        let claimObject = {};
        for (let i = 0; i < $("input[name='insured_1']:checked").length; i++) {
          claimObject = {};
          claimObject["incidentCountryCode"] =
            countryPortal.VHI;

          claimObject["incidentDate"] = $(
            "#helpdesk_ticket_custom_field_cf_your_incident_date_2321673"
          ).val();
          let claimReason = getAKey(
            "helpdesk_ticket_custom_field_cf_reason_for_claim_2321673",
            ClaimReason
          );
          claimObject["coverCause"] = claimReason[0].akey;
          claimObject["clientId"] = $("#" + i).attr("data-clientId");
          claimObject["internalPolicyNumber"] = $("#" + i).attr(
            "data-PolicyNumber"
          );
          createClaimRequest(claimObject, "#save_and_continue3");
        }
        // we will make an api call to claim and sucess response open
        $("#ClaimAPIModal").modal("toggle");

        function add_section_3() {
          $(
            "<strong id='section_3_header'>" + titles[2] + "</strong>"
          ).insertAfter("#great_line_2");
          $("<hr class='summary_divider' id='great_line_3'>").insertAfter(
            "#section_3_header"
          );
          var number_elements = $("#collapseSection3")
            .children(".card-body.ins-card")
            .children("div").length;
          for (let i = 1; i < number_elements + 1; i++) {
            if (
              $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children(".choices.form-select").length
            ) {
              var label_dropdown = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("label")
                .text();
              var dropdown_value = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children(".choices.form-select")
                .children(".choices__inner")
                .children("select")
                .val();
              $(
                "<p class='section_3_line'>" +
                  label_dropdown +
                  " : " +
                  dropdown_value +
                  "</p>"
              ).insertBefore("#great_line_3");
            } else {
              var label = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("label")
                .text();
              var value = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("input")
                .val();
              $(
                "<p class='section_3_line'>" + label + " : " + value + "</p>"
              ).insertBefore("#great_line_3");
            }
          }
        }
        function update_section_3() {
          var number_elements = $("#collapseSection3")
            .children(".card-body.ins-card")
            .children("div").length;
          $("p").remove(".section_3_line");
          for (let i = 1; i < number_elements + 1; i++) {
            if (
              $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children(".choices.form-select").length
            ) {
              var label_dropdown = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("label")
                .text();
              var dropdown_value = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children(".choices.form-select")
                .children(".choices__inner")
                .children("select")
                .val();
              $(
                "<p class='section_3_line'>" +
                  label_dropdown +
                  " : " +
                  dropdown_value +
                  "</p>"
              ).insertBefore("#great_line_3");
            } else {
              var label = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("label")
                .text();
              var value = $("#collapseSection3")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("input")
                .val();
              $(
                "<p class='section_3_line'>" + label + " : " + value + "</p>"
              ).insertBefore("#great_line_3");
            }
          }
        }

        if ($("#section_3_header").length) {
          update_section_3();
        } else {
          add_section_3();
        }
      } else {
        for (var i = 1; i < list_to_check2.length - 1; i++) {
          addErrorMessage(
            list_to_check2[i],
            "Please check the dates entered and try again."
          );
          $("#save_and_continue3").removeAttr("data-target");
          $("#save_and_continue3").removeAttr("data-toggle");
        }
      }
    } else {
      //ERROR Messaging
      for (var i = 0; i < list_to_check2.length; i++) {
        addErrorMessage(list_to_check2[i], "Please fill in all fields");
        $("#save_and_continue3").removeAttr("data-target");
        $("#save_and_continue3").removeAttr("data-toggle");
      }
    }
  });
  function createClaimRequest(claimObject, fieldId) {
    $(".claim-number").empty();
    var myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Authorization", AuthorizationKey);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(claimObject);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://claim-api-lower.collinsonnis.com/api/claim", requestOptions)
      .then((response) => response.text())
      .then(function (result) {
        console.log(result);
        console.log(typeof result);
        if (JSON.parse(result).status == 401) {
          getJWTToken(fieldId);
          console.log("unauthorized token please try again sometime");
        } else if (JSON.parse(result).status == 500) {
          console.log("Internal Server Error");
        } else if (JSON.parse(result).status == 400) {
          $(".claim-number").empty();
          $(".claim-number").append(
            "Unable to create claim as per one claim per policy per day rule"
          );
          console.log(
            "Unable to create claim as per one claim per policy per day rule"
          );
        } else {
          console.log("else show claim number-->", JSON.parse(result));
          ClaimInitiatedNumber = JSON.parse(result).ClaimNumber;
          $("#helpdesk_ticket_subject").val(ClaimInitiatedNumber);
          $(".claim-number").empty();
          $(".claim-number").append(
            `Your ClaimNumber is ${ClaimInitiatedNumber}`
          );
        }
      })
      .catch((error) => console.log("error", error));
  }
  //do modal popup with claims statement
  $("#next").click(function () {
    $("#ClaimAPIModal").modal("toggle");
    //close current, open next
    open_next(3);
  });
  //____________________________________________________________________________________________________________________
  $("#save_and_continue4").click(function () {
    function add_section_4() {
      $("<strong id='section_4_header'>" + titles[3] + "</strong>").insertAfter(
        "#great_line_3"
      );
      $("<hr class='summary_divider' id='great_line_4'>").insertAfter(
        "#section_4_header"
      );
      //for loops
      var number_elements = $("#collapseSection4")
        .children(".card-body.ins-card")
        .children(
          "div.helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
        )
        .children(".form-group").length;

      for (let i = 1; i < number_elements + 1; i++) {
        if (
          $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children(".choices.form-select").length
        ) {
          var label = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children(".choices.form-select")
            .children(".choices__inner")
            .children("select")
            .val();
          if (value != "") {
            $(
              "<p class='section_4_line'>" + label + " : " + value + "</p>"
            ).insertBefore("#great_line_4");
          }
        } else if (
          $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("textarea").length
        ) {
          var label = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("textarea")
            .val();
          if (value != "") {
            $(
              "<p class='section_4_line'>" + label + " : " + value + "</p>"
            ).insertBefore("#great_line_4");
          }
        } else {
          var label = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("input")
            .val();
          if (value != "") {
            $(
              "<p class='section_4_line'>" + label + " : " + value + "</p>"
            ).insertBefore("#great_line_4");
          }
        }
      }
    }

    function update_section_4() {
      //for loops
      var number_elements = $("#collapseSection4")
        .children(".card-body.ins-card")
        .children(
          "div.helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
        )
        .children(".form-group").length;
      $("p").remove(".section_4_line");

      for (let i = 1; i < number_elements + 1; i++) {
        if (
          $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children(".choices.form-select").length
        ) {
          var label = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children(".choices.form-select")
            .children(".choices__inner")
            .children("select")
            .val();
          if (value != "") {
            $(
              "<p class='section_4_line'>" + label + " : " + value + "</p>"
            ).insertBefore("#great_line_4");
          }
        } else if (
          $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("textarea").length
        ) {
          var label = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("textarea")
            .val();
          if (value != "") {
            $(
              "<p class='section_4_line'>" + label + " : " + value + "</p>"
            ).insertBefore("#great_line_4");
          }
        } else {
          var label = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection4")
            .children(".card-body.ins-card")
            .children(
              ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
            )
            .children("div:nth-child(" + i + ")")
            .children("input")
            .val();
          if (value != "") {
            $(
              "<p class='section_4_line'>" + label + " : " + value + "</p>"
            ).insertBefore("#great_line_4");
          }
        }
      }
    }

    if ($("#section_4_header").length) {
      console.log("update section ---->");
      update_section_4();
    } else {
      add_section_4();
      console.log("add section ---->");
    }
    //close current section. open next
    open_next(4);
  });
  //____________________________________________________SECTION 3 End - About Your Trip____________________________________________
  //_________________________________________________reasonForClaimObj_________________________________________
  var reasonForClaimObj = {
    "Any CANCELLATION claim due to COVID-19": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Cancellation Invoice from each company you booked with verifying the cancellation charge.<br>Evidence of a Positive Covid test from the NHS/HSE, Private Testing company or your Doctor. We accept Email, Letter or SMS confirmation but we are unable to accept photographs of a home Lateral flow test on their own.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.<br>",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
    "Baggage - personal items damaged": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Confirmation from a trusted company confirming the cost of repair or that it's beyond economical repair.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.<br>",
      titles: ["Booking Invoice", "Report"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Report.png",
      ],
    },
    "Baggage - personal items lost or stolen": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Loss Report confirming the circumstances and the date/time at which you reported to the relevant person.<br>Proof of Ownership for the items being claimed.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Report"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Report.png",
      ],
    },
    "Baggage - suitcase hasn't arrived on time": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>A PIR (Property Irregularity Report) from your transport provider confirming your luggage was delayed.<br>Receipts for any emergency items you had to buy.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
    "Cancelled trip - (NOT related to COVID-19)": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Cancellation Invoice from each company you booked with verifying the cancellation charge.<br>Documents that show the need to cancel e.g. a Medical Letter or Delay Report.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Report"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Report.png",
      ],
    },
    "Curtailment â€“ returned home early": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates. <br>Any other relevant documentation to support your claim.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
    "Dental expenses whilst abroad": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Medical document from your treating dentist or medical facility.<br>Receipts and Invoices relating to the medical expenses you're claiming for.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
    "Flight or Travel delayed": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates. <br>A Delay Report or Evidence from the travel provider which confirms the reason and length of the delay.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Report"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Report.png",
      ],
    },
    "Medical expenses abroad & repatriation cost": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Medical document from your treating doctor or medical facility.<br>Receipts and Invoices relating to the medical expenses you're claiming for.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Doc", "Other invoice"],
      images: [
        " https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+invoice.png",
      ],
    },
    "Missed flight or departure": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Any other relevant documentation to support your claim.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
    "Substitute Accommodation - change to accommodation during trip": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Any other relevant documentation to support your claim.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
    "Winter sports - lift pass, equipment or piste closure": {
      paragraph:
        "We'll need these important documents to make a decision about your claim:<br>Your trip Booking Invoice showing the cost, your name and departure & return dates.<br>Any other relevant documentation to support your claim.<br>If you need to gather this information â€“ you can come to the Existing Claim section of our site and continue with your claim.",
      titles: ["Booking Invoice", "Other Docs"],
      images: [
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Booking+Invoices.png",
        "https://ins-multiforms.s3.eu-central-1.amazonaws.com/Document_Icons/Other+doc.png",
      ],
    },
  };

  function insertParagraph(text) {
    var para = '<div class="ins-para">' + text + "</div>";

    if ($(".ins-para").length) {
      $(".ins-para").remove();
      $(para).insertBefore(
        ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
      );
    } else {
      $(para).insertBefore(
        ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper.for-section-4"
      );
    }
  }

  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() !=
        ""
      ) {
        insertParagraph(
          reasonForClaimObj[
            $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val()
          ]["paragraph"]
        );
      }
    }
  );

  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() !=
        ""
      ) {
        var table = [];
        for (
          let i = 0;
          i <
          reasonForClaimObj[
            $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val()
          ]["titles"].length;
          i++
        ) {
          var image =
            reasonForClaimObj[
              $(
                "#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673"
              ).val()
            ]["images"][i];
          var text =
            reasonForClaimObj[
              $(
                "#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673"
              ).val()
            ]["titles"][i];
          table.push([image, text]);
        }
        if ($(".doc-wrapper").length) {
          $(".doc-wrapper").remove();
          for (let i = 0; i < table.length; i++) {
            $(
              "<div class='doc-wrapper'><span class='img_and_text' ><img  class='clickable_img' src =" +
                table[i][0] +
                "><strong> " +
                table[i][1] +
                "</strong></span></div>"
            ).insertBefore(".dropdown");
          }
        } else {
          for (let i = 0; i < table.length; i++) {
            $(
              "<div class='doc-wrapper'><span class='img_and_text' ><img  class='clickable_img' src =" +
                table[i][0] +
                "><strong> " +
                table[i][1] +
                "</strong></span></div>"
            ).insertBefore(".dropdown");
          }
        }
      }
    }
  );

  //____________________________________________________________________________________________________________________
  //section 5 continue
  $(".save_and_continue5").click(function () {
    var elem = document.getElementById("files_list");
    if (elem.files.length) {
      var files = [];
      var fileSize = [];
      for (var i = 0; i < elem.files.length; ++i) {
        files.push(elem.files[i].name);
        fileSize.push(elem.files[i].size);
      }
      var sum = fileSize.reduce(function (a, b) {
        return a + b;
      }, 0);
      console.log("sum tottal--->", sum);
      if (sum <= 4200000) {
        if ($("#section_5_header").length) {
          update_section_5();
        } else {
          add_section_5();
        }
        getUploadFiles(files, ".save_and_continue5");
        open_next(5);
      } else {
        console.log(
          " --------- Need to show error max file size should not more than 4 MB ----------------"
        );
      }
      console.log();
      function add_section_5() {
        $(
          "<strong id='section_5_header'>" + titles[4] + "</strong>"
        ).insertAfter("#great_line_4");
        $("<hr class='summary_divider' id='great_line_5'>").insertAfter(
          "#section_5_header"
        );
        var number_attachments = $("#attachments_list").children().length;
        console.log(number_attachments);
        for (let i = 1; i < number_attachments + 1; i++) {
          var document_name = $("#attachments_list")
            .children("#attachment_" + i)
            .children(
              ".attachment.file-container.file-props-font.d-inline-block.position-relative"
            )
            .children(".file-name.position-absolute.overflow-hidden ")
            .text();
          $("<p class='section_5_line'>" + document_name + "</p>").insertBefore(
            "#great_line_5"
          );
        }
      }

      function update_section_5() {
        var number_attachments = $("#attachments_list").children().length;
        console.log(number_attachments);
        $("p").remove(".section_5_line");
        for (let i = 1; i < number_attachments + 1; i++) {
          var document_name = $("#attachments_list")
            .children("#attachment_" + i)
            .children(
              ".attachment.file-container.file-props-font.d-inline-block.position-relative"
            )
            .children(".file-name.position-absolute.overflow-hidden ")
            .text();
          $("<p class='section_5_line'>" + document_name + "</p>").insertBefore(
            "#great_line_5"
          );
        }
      }
    } else {
      console.log(" --------- Need to show error message ----------------");
    }
  });
  function getUploadFiles(files, fieldId) {
    var formdata = new FormData();
    var myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Authorization", AuthorizationKey);
    formdata.append("claimNumber", ClaimInitiatedNumber);
    formdata.append("uploadedBy", "Collinson API");
    formdata.append("source", "OnlineClaims");
    formdata.append("subject", "Omni Documents");
    for (let file of files) {
      formdata.append("attachments[]", new File([""], file));
    }
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    console.log("--->", requestOptions);
    fetch(
      "https://claim-api-lower.collinsonnis.com/api/claim/uploadFiles",
      requestOptions
    )
 .then((response) => {
        console.log(response);
    statusCode = response.status;
     if (!response.ok) {
       test=true;
     }
     return response.json();
  })
      .then(function (result) {
      console.log("--Policy details->",result)
            console.log("--Policy details->",test)
          if(test){
              if(statusCode==401){
                  console.log("unauthorized")
                  getJWTToken(fieldId);
              }
          }
        
      })
      .catch((error) => console.log(error));
//       .then((response) => response.text())
//       .then(function (result) {
//         console.log("sucessfilly uploaded ----->", result);
//         if (JSON.parse(result).status == 401) {
//           getJWTToken(fieldId);
//         }
//       })
//       .catch((error) => console.log("error", error));
  }
  //____________________________________________________SECTION 5 End - Your Documents____________________________________________
  //____________________________________________________________________________________________________________________
  //section 6 continue
  $("#save_and_continue6").click(function () {
    payment_list = [
      "helpdesk_ticket_custom_field_cf_name_of_account_holder_2321673",
      "helpdesk_ticket_custom_field_cf_account_number_2321673",
      "helpdesk_ticket_custom_field_cf_iban_number_2321673",
      "helpdesk_ticket_custom_field_cf_sort_code659991_2321673",
    ];
    //check filled
    if (checkedfilled(payment_list) == true) {
      //clear errors
      clearError(payment_list);
      let accountNumber = $(
        "#helpdesk_ticket_custom_field_cf_account_number_2321673"
      ).val();
      let iBanNumber = $(
        "#helpdesk_ticket_custom_field_cf_iban_number_2321673"
      ).val();
      let sortCode = $(
        "#helpdesk_ticket_custom_field_cf_sort_code659991_2321673"
      ).val();
      let countryCode = countryPortal.VHI;
      console.log(accountNumber, iBanNumber, sortCode, countryCode);
      //method one params
      //iBan
      //CountryCode
      //method two params
      //accountNumber
      //sortCode
      //countryCode
      if (countryCode == "GB") {
        ValidateBankMethodTwo(
          accountNumber,
          sortCode,
          countryCode,
          "#save_and_continue6"
        );
      } else {
        ValidateBankMethodOne(iBanNumber, countryCode, "#save_and_continue6");
      }

      //add displaying
      function add_section_6() {
        var el_number = $("#collapseSection6")
          .children(".card-body.ins-card")
          .children(".form-group").length;
        $(
          "<strong id='section_6_header'>" + titles[5] + "</strong>"
        ).insertAfter("#great_line_5");
        $("<hr class='summary_divider' id='great_line_6'>").insertAfter(
          "#section_6_header"
        );

        for (let i = 1; i < el_number + 1; i++) {
          var label = $("#collapseSection6")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection6")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("input")
            .val();
          $(
            "<p class='section_6_line'>" + label + " : " + value + "</p>"
          ).insertBefore("#great_line_6");
        }
      }

      function update_section_6() {
        var el_number = $("#collapseSection6")
          .children(".card-body.ins-card")
          .children(".form-group").length;
        $("p").remove(".section_6_line");
        for (let i = 1; i < el_number + 1; i++) {
          var label = $("#collapseSection6")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("label")
            .text();
          var value = $("#collapseSection6")
            .children(".card-body.ins-card")
            .children("div:nth-child(" + i + ")")
            .children("input")
            .val();
          $(
            "<p class='section_6_line'>" + label + " : " + value + "</p>"
          ).insertBefore("#great_line_6");
        }
      }

      function addDeclaraion() {
        $("<strong id='declaration_header'>Declaration</strong>").insertAfter(
          "#great_line_6"
        );
        $("<hr class='summary_divider' id='great_line_7'>").insertAfter(
          "#declaration_header"
        );

        $(
          "<p>I declare that I have completed this form to the best of knowledge and have read and understood the contents of <br>this page and form. I consent to Collinson using my data to process this claim and am aware that this will involve <br>sending my data to my insurer along with my pet's clinical history. I am aware that my insurer will take any <br>excesses as per my policy. Details can be found in the Collinson Privacy Policy</p>"
        ).insertBefore("#great_line_7");
        $("<br>").insertBefore("#great_line_7");

        $(
          '<input class="ins_checkbox_paragraph" id="cb2" type="checkbox" ><p class="ins_consent_paragraph"> I consent</p<>'
        ).insertBefore("#great_line_7");
      }

      if ($("#section_6_header").length) {
        update_section_6();
      } else {
        add_section_6();
        addDeclaraion();
      }
    } else {
      //ERROR Messaging
      for (var i = 0; i < payment_list.length; i++) {
        addErrorMessage(payment_list[i], "Please fill in all fields");
      }
    }

    open_next(6);
  });
  function ValidateBankMethodOne(iBanNumber, countryCode, fieldId) {
    var myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Authorization", AuthorizationKey);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      "https://claim-api-lower.collinsonnis.com/api/bank/validateBankAccount?iBan=" +
        iBanNumber +
        "&countryCode=" +
        countryCode,
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log("bank detils validate method one -->", result);
        bankResult = result;
        if (JSON.parse(result).status == 401) {
          getJWTToken(fieldId);
        }
      })
      .catch((error) => console.log("error", error));
  }

  function ValidateBankMethodTwo(
    accountNumber,
    sortCode,
    countryCode,
    fieldId
  ) {
    var myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Authorization", AuthorizationKey);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      "https://claim-api-lower.collinsonnis.com/api/bank/validateBankAccount?accountNumber=" +
        accountNumber +
        "&sortCode=" +
        sortCode +
        "&countryCode=" +
        countryCode,
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log("bank detils validate method two -->", result);
        bankResult = result;
        if (JSON.parse(result).status == 401) {
          getJWTToken(fieldId);
        }
      })
      .catch((error) => console.log("error", error));
  }

  $(".new-ticket-dummy").click(function () {
    console.log("submit claim entered ");
    let policyNumber = $(
      "#helpdesk_ticket_custom_field_cf_policy_number_2321673"
    ).val();
    // claimnumber we can use global stored value
    console.log("Main ");
    let body = {
      internalpolicyNumber: policyNumber,
      ClaimNumber: ClaimInitiatedNumber,
      FromDate: $(
        "#helpdesk_ticket_custom_field_cf_your_departure_date_2321673"
      ).val(),
      ToDate: $(
        "#helpdesk_ticket_custom_field_cf_your_return_date_2321673"
      ).val(),
      UseContactInformationFromLeadInsured: true,
    };
    //otherclients senarios logic
    var yourArray = [];
    if ($("input[data-ispolicyholder='true']:checked").length) {
      body["MainContactClientId"] = $(
        "input[data-ispolicyholder='true']:checked"
      ).attr("data-clientId");
      $("input[name='insured_1']:checked").each(function () {
        yourArray.push($(this).attr("data-clientid"));
      });
      yourArray = yourArray.filter(function (val) {
        return body["MainContactClientId"].indexOf(val) == -1;
      });
      yourArray = yourArray.filter(
        (val) => !body["MainContactClientId"].includes(val)
      );
      body["OtherInsuredClientIds"] = yourArray;
    } else {
      $("input[name='insured_1']:checked").each(function (index) {
        if (index == 0) {
          body["MainContactClientId"] = $(this).attr("data-clientid");
        } else {
          yourArray.push($(this).attr("data-clientid"));
        }
      });
      body["OtherInsuredClientIds"] = yourArray;
    }
    console.log(body);
    //bank details senarios logic
    console.log(bankResult);
    console.log(typeof bankResult);
    if (bankResult) {
      let bankInfo = JSON.parse(bankResult);
      console.log("response sucessfull");
      let bankDetails = {};
      bankDetails["AccountHolder"] = $(
        "#helpdesk_ticket_custom_field_cf_name_of_account_holder_2321673"
      ).val();
      bankDetails["BankName"] = bankInfo.bankName;
      bankDetails["IBan"] = bankInfo.iBan;
      bankDetails["BankAddressLine1"] = bankInfo.bankAddressLine1;
      bankDetails["BankAddressLine2"] = bankInfo.bankAddressLine2;
      bankDetails["BankAddressLine3"] = bankInfo.bankAddressLine3;
      bankDetails["PostCode"] = bankInfo.postCode;
      bankDetails["City"] = bankInfo.city;
      bankDetails["Swift"] = bankInfo.swift;
      bankDetails["AccountNumber"] = bankInfo.accountNumber;
      bankDetails["SortCode"] = bankInfo.sortCode;
      bankDetails["CountryCode"] = bankInfo.countryCode;
      console.log("bank Details -->", bankDetails);
      body["BankAccountDetails"] = bankDetails;
      console.log("formed body -->", body);
    } else {
      console.log("Please validate bank details");
    }
    let reasonClaim = getAKey(
      "helpdesk_ticket_custom_field_cf_reason_for_claim_2321673",
      ClaimReason
    );
    let fieldTypeText = "Text";
    let fieldTypeDate = "Date";
    let ClaimQaAndAnswers = [];
    if (reasonClaim[0].akey == "01_02_Canx") {
      let coronaDateAware = submitClaimBody(
        "CoronaDateAware",
        $(
          "#helpdesk_ticket_custom_field_cf_when_were_you_initially_aware_that_you_needed_to_cancel_your_trip635242_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(coronaDateAware);
      let coronaDateCancelled = submitClaimBody(
        "CoronaDateCancelled",
        $(
          "#helpdesk_ticket_custom_field_cf_please_enter_the_date_you_asked_your_tour_operatortravel_provider_to_cancel_the_trip_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(coronaDateCancelled);
      let tripBookingCost = submitClaimBody(
        "TripBookingCost",
        $(
          "#helpdesk_ticket_custom_field_cf_total_trip_cost_the_amount_you_paid_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(tripBookingCost);
      let tripBookingRefund = submitClaimBody(
        "TripBookingRefund",
        $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(tripBookingRefund);
      let dualInsuranceName = submitClaimBody(
        "DualInsuranceName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider895583_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(dualInsuranceName);
      let cxBookingDate = submitClaimBody(
        "CanxBookingDate",
        $("#helpdesk_ticket_custom_field_cf_your_booking_date_2321673").val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(cxBookingDate);
      let dualInsuranceNumber = submitClaimBody(
        "DualInsuranceNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number964552_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(dualInsuranceNumber);
      let bankAccountType = submitClaimBody(
        "BankAccountType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_do_you_bank_with_and_what_type_of_account_do_you_have486839_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(bankAccountType);
      let travelProviderName = submitClaimBody(
        "TravelProviderName",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_name_of_the_trip_providers_and_the_booking_references342856_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(travelProviderName);
      let cancellationBookingNoPeople = submitClaimBody(
        "CancellationBookingNoPeople",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_people_are_there_on_the_booking166234_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(cancellationBookingNoPeople);
      let cancellationInsuredNoClaiming = submitClaimBody(
        "CancellationInsuredNoClaiming",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_people_on_the_booking_are_insured_by_this_policy_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(cancellationInsuredNoClaiming);
      let coronaReason = getAKey(
        "helpdesk_ticket_custom_field_cf_why_did_you_cancel_your_trip_2321673",
        CoronaReason
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          coronaReason[0].qkey,
          coronaReason[0].akey,
          fieldTypeText
        )
      );
      let covidTypeOfTrip = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book877716_2321673",
        COVIDTypeOfTrip
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          covidTypeOfTrip[0].qkey,
          covidTypeOfTrip[0].akey,
          fieldTypeText
        )
      );
      let covidTripTransportType = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking_2321673",
        COVIDTripTransportType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          covidTripTransportType[0].qkey,
          covidTripTransportType[0].akey,
          fieldTypeText
        )
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      let dualInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy400572_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          dualInsurance[0].qkey,
          dualInsurance[0].akey,
          fieldTypeText
        )
      );
      let tripPaymentMethod = getAKey(
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip913590_2321673",
        TripPaymentMethod
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          tripPaymentMethod[0].qkey,
          tripPaymentMethod[0].akey,
          fieldTypeText
        )
      );
      let creditCardType = submitClaimBody(
        "CreditCardType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card224630_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(creditCardType);
      let DateOfSymptoms = submitClaimBody(
        "DateOfSymptoms",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start939174_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DateOfSymptoms);
      let creditCardAmount = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          creditCardAmount[0].qkey,
          creditCardAmount[0].akey,
          fieldTypeText
        )
      );
      let positivePerson = getAKey(
        "helpdesk_ticket_custom_field_cf_who_has_tested_positive_for_coronavirus_2321673",
        WhoTestedPositive
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          positivePerson[0].qkey,
          positivePerson[0].akey,
          fieldTypeText
        )
      );
      let typeTest = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_test_was_taken_2321673",
        WhatTypeOfCovidTest
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(typeTest[0].qkey, typeTest[0].akey, fieldTypeText)
      );
      let testEmail = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_evidence_from_either_the_nhshse_private_testing_company_or_your_doctor_confirming_the_positive_covid_test_email_letter_sms_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(testEmail[0].qkey, testEmail[0].akey, fieldTypeText)
      );
      let testResultDate = submitClaimBody(
        "CoronaTestDate",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_the_test_results_confirming_coronavirus_infection_arrive_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(testResultDate);
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_03_BagDamNonCarr") {
      let PIRNumberDamage = submitClaimBody(
        "PIRNumberDamage",
        $(
          "#helpdesk_ticket_custom_field_cf_please_enter_the_report_reference_given_by_your_transport_provider_pir_reference_if_applicable_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(PIRNumberDamage);
      let RepairCost = submitClaimBody(
        "RepairCost",
        $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(RepairCost);
      let ItemDescription = submitClaimBody(
        "ItemDescription",
        $("#helpdesk_ticket_custom_field_cf_item_description_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(ItemDescription);
      let CreditCardType = submitClaimBody(
        "CreditCardType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card237678_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CreditCardType);
      let HomePolicyNumber = submitClaimBody(
        "HomePolicyNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number818860_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(HomePolicyNumber);
      let HomeInsurerName = submitClaimBody(
        "HomeInsurerName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider267746_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(HomeInsurerName);
      let BankAccountType = submitClaimBody(
        "BankAccountType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_do_you_bank_with_and_what_type_of_account_do_you_have87472_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BankAccountType);
      let DualInsuranceNumber = submitClaimBody(
        "DualInsuranceNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number832231_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DualInsuranceNumber);
      let DualInsuranceName = submitClaimBody(
        "DualInsuranceName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider610133_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DualInsuranceName);
      let DamageItemPurchasePrice = submitClaimBody(
        "DamageItemPurchasePrice",
        $(
          "#helpdesk_ticket_custom_field_cf_what_was_its_cost_when_you_bought_it_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DamageItemPurchasePrice);
      let BaggageClaimValueDamage = submitClaimBody(
        "BaggageClaimValueDamage",
        $(
          "#helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BaggageClaimValueDamage);
      let BaggageDamageOccur = submitClaimBody(
        "BaggageDamageOccur",
        $(
          "#helpdesk_ticket_custom_field_cf_how_did_the_damage_happen_well_need_as_much_information_as_you_can_give_please_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BaggageDamageOccur);
      let BaggageDamageItemDescription = submitClaimBody(
        "BaggageDamageItemDescription",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BaggageDamageItemDescription);
      let DamageNoReportReason = submitClaimBody(
        "DamageNoReportReason",
        $(
          "#helpdesk_ticket_custom_field_cf_let_us_know_why_you_didnt_report_the_damage_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DamageNoReportReason);
      let LossTheftPurchaseDate = submitClaimBody(
        "LossTheftPurchaseDate",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_you_buy_the_item_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(LossTheftPurchaseDate);
      let DamageNumberOfItems = submitClaimBody(
        "DamageNumberOfItems",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DamageNumberOfItems);
      let DamageOnPerson = getAKey(
        "helpdesk_ticket_custom_field_cf_was_the_items_with_you_when_it_was_damaged_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DamageOnPerson[0].qkey,
          DamageOnPerson[0].akey,
          fieldTypeText
        )
      );
      let DamageItemRepairable = getAKey(
        "helpdesk_ticket_custom_field_cf_can_the_item_be_repaired_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DamageItemRepairable[0].qkey,
          DamageItemRepairable[0].akey,
          fieldTypeText
        )
      );
      let DamageRepairEstimate = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_get_a_repair_estimate_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DamageRepairEstimate[0].qkey,
          DamageRepairEstimate[0].akey,
          fieldTypeText
        )
      );
      let ItemTypeDamagedItems = getAKey(
        "helpdesk_ticket_custom_field_cf_item_type_2321673",
        ItemTypeDamaged
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          ItemTypeDamagedItems[0].qkey,
          ItemTypeDamagedItems[0].akey,
          fieldTypeText
        )
      );
      let HomeInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_home_contents_insurance_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          HomeInsurance[0].qkey,
          HomeInsurance[0].akey,
          fieldTypeText
        )
      );
      let DualInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DualInsurance[0].qkey,
          DualInsurance[0].akey,
          fieldTypeText
        )
      );
      let TripPaymentMethodBaggageDamage = getAKey(
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip396837_2321673",
        TripPaymentMethod
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TripPaymentMethodBaggageDamage[0].qkey,
          TripPaymentMethodBaggageDamage[0].akey,
          fieldTypeText
        )
      );
      let CreditCardAmountBaggageDamage = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CreditCardAmountBaggageDamage[0].qkey,
          CreditCardAmountBaggageDamage[0].akey,
          fieldTypeText
        )
      );
      let DamageItemOwnerItems = getAKey(
        "helpdesk_ticket_custom_field_cf_who_owns_the_item_2321673",
        DamageItemOwner
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DamageItemOwnerItems[0].qkey,
          DamageItemOwnerItems[0].akey,
          fieldTypeText
        )
      );
      let TransportProviderDamage = getAKey(
        "helpdesk_ticket_custom_field_cf_was_the_items_with_your_transport_provider_when_damaged_eg_airline_checkedin_luggage_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TransportProviderDamage[0].qkey,
          TransportProviderDamage[0].akey,
          fieldTypeText
        )
      );
      let DamageTransportGadget = getAKey(
        "helpdesk_ticket_custom_field_cf_is_the_damaged_items_listed_as_valuable_gadgetelectrical_in_your_policy_wording_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DamageTransportGadget[0].qkey,
          DamageTransportGadget[0].akey,
          fieldTypeText
        )
      );
      let DamageReport = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_tell_your_transport_provider_about_the_damage_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DamageReport[0].qkey,
          DamageReport[0].akey,
          fieldTypeText
        )
      );
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_BagL") {
      let PoliceReference = submitClaimBody(
        "PoliceReference",
        $(
          "#helpdesk_ticket_custom_field_cf_police_or_crime_reference_number_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(PoliceReference);
      let BaggageLossItemDescription = submitClaimBody(
        "BaggageLossItemDescription",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BaggageLossItemDescription);
      let BaggageClaimValue = submitClaimBody(
        "BaggageClaimValue",
        $(
          "#helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BaggageClaimValue);
      let DualInsuranceNumber = submitClaimBody(
        "DualInsuranceNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number832231_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DualInsuranceNumber);
      let BankAccountType = submitClaimBody(
        "BankAccountType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_do_you_bank_with_and_what_type_of_account_do_you_have87472_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BankAccountType);
      let DualInsuranceName = submitClaimBody(
        "DualInsuranceName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider610133_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DualInsuranceName);
      let ItemDescription = submitClaimBody(
        "ItemDescription",
        $(
          "#helpdesk_ticket_custom_field_cf_item_description369043_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(ItemDescription);
      let TheftOccur = submitClaimBody(
        "TheftOccur",
        $(
          "#helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened994308_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(TheftOccur);
      let LossOccur = submitClaimBody(
        "LossOccur",
        $(
          "#helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened511569_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(LossOccur);
      let LossTheftNumberOfItems = submitClaimBody(
        "LossTheftNumberOfItems",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(LossTheftNumberOfItems);
      let LossOrTheftItems = getAKey(
        "helpdesk_ticket_custom_field_cf_are_you_claiming_for_a_loss_or_theft_2321673",
        LossOrTheft
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          LossOrTheftItems[0].qkey,
          LossOrTheftItems[0].akey,
          fieldTypeText
        )
      );
      let LossTheftWhereItems = getAKey(
        "helpdesk_ticket_custom_field_cf_where_did_the_loss_or_theft_take_place_2321673",
        LossTheftWhere
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          LossTheftWhereItems[0].qkey,
          LossTheftWhereItems[0].akey,
          fieldTypeText
        )
      );
      let InVehicleAtTimeOfTheft = getAKey(
        "helpdesk_ticket_custom_field_cf_were_you_in_the_vehicle_at_the_time_of_the_theft_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          InVehicleAtTimeOfTheft[0].qkey,
          InVehicleAtTimeOfTheft[0].akey,
          fieldTypeText
        )
      );
      let lossTheftReport = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_report_the_loss_or_theft_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          lossTheftReport[0].qkey,
          lossTheftReport[0].akey,
          fieldTypeText
        )
      );
      let lossTheftReportedTo = getAKey(
        "helpdesk_ticket_custom_field_cf_who_did_you_report_it_to_2321673",
        LossTheftReportedTo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          lossTheftReportedTo[0].qkey,
          lossTheftReportedTo[0].akey,
          fieldTypeText
        )
      );
      let itemType = getAKey(
        "helpdesk_ticket_custom_field_cf_item_type870706_2321673",
        ItemType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(itemType[0].qkey, itemType[0].akey, fieldTypeText)
      );
      let ItemOwners = getAKey(
        "helpdesk_ticket_custom_field_cf_who_owns_the_item86910_2321673",
        ItemOwner
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(ItemOwners[0].qkey, ItemOwners[0].akey, fieldTypeText)
      );
      let HomeInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_home_contents_insurance_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          HomeInsurance[0].qkey,
          HomeInsurance[0].akey,
          fieldTypeText
        )
      );
      let DualInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DualInsurance[0].qkey,
          DualInsurance[0].akey,
          fieldTypeText
        )
      );
      let TripPaymentMethodDisplay = getAKey(
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip396837_2321673",
        TripPaymentMethod
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TripPaymentMethodDisplay[0].qkey,
          TripPaymentMethodDisplay[0].akey,
          fieldTypeText
        )
      );
      let CreditCardAmount = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CreditCardAmount[0].qkey,
          CreditCardAmount[0].akey,
          fieldTypeText
        )
      );
      let NoReportReasonItems = getAKey(
        "helpdesk_ticket_custom_field_cf_please_confirm_why_you_did_not_report_the_loss_or_theft6975_2321673",
        NoReportReason
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          NoReportReasonItems[0].qkey,
          NoReportReasonItems[0].akey,
          fieldTypeText
        )
      );
      let LossTheftVehicleList = getAKey(
        "helpdesk_ticket_custom_field_cf_whereabouts_in_the_vehicle_was_the_items_when_stolen_2321673",
        LossTheftVehicle
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          LossTheftVehicleList[0].qkey,
          LossTheftVehicleList[0].akey,
          fieldTypeText
        )
      );
      let LossTheftVehicleForce = getAKey(
        "helpdesk_ticket_custom_field_cf_was_there_physical_damage_to_the_vehicle_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          LossTheftVehicleForce[0].qkey,
          LossTheftVehicleForce[0].akey,
          fieldTypeText
        )
      );
      let LossTheftPurchaseDate = submitClaimBody(
        "LossTheftPurchaseDate",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_you_purchase_the_item_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(LossTheftPurchaseDate);
      let CreditCardType = submitClaimBody(
        "CreditCardType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card237678_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CreditCardType);
      let HomePolicyNumber = submitClaimBody(
        "HomePolicyNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number818860_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(HomePolicyNumber);
      let HomeInsurerName = submitClaimBody(
        "HomeInsurerName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider267746_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(HomeInsurerName);
      let DamageItemPurchasePrice = submitClaimBody(
        "DamageItemPurchasePrice",
        $(
          "#helpdesk_ticket_custom_field_cf_what_was_its_cost_when_you_bought_it_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DamageItemPurchasePrice);
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_BagD") {
      let BaggageDelay = getAKey(
        "helpdesk_ticket_custom_field_cf_which_part_of_the_journey_did_your_baggage_arrive_late_2321673",
        BaggageDelayLeg
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          BaggageDelay[0].qkey,
          BaggageDelay[0].akey,
          fieldTypeText
        )
      );
      let DelayedBagReturned = getAKey(
        "helpdesk_ticket_custom_field_cf_has_your_baggage_been_returned_to_you_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DelayedBagReturned[0].qkey,
          DelayedBagReturned[0].akey,
          fieldTypeText
        )
      );
      let TransportationMethodDelay = getAKey(
        "helpdesk_ticket_custom_field_cf_what_transport_type_was_your_baggage_delayed_on_2321673",
        TransportationMethodDelayed
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TransportationMethodDelay[0].qkey,
          TransportationMethodDelay[0].akey,
          fieldTypeText
        )
      );
      let DelayReport = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_notify_your_transport_provider_about_the_delay_and_get_a_report_pir_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(DelayReport[0].qkey, DelayReport[0].akey, fieldTypeText)
      );
      let DelayedBaggageRefund = getAKey(
        "helpdesk_ticket_custom_field_cf_have_you_received_any_refund_from_your_transport_provider_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DelayedBaggageRefund[0].qkey,
          DelayedBaggageRefund[0].akey,
          fieldTypeText
        )
      );
      let BaggageDelayHours = submitClaimBody(
        "BaggageDelayHours",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_hours_was_your_baggage_delayed_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BaggageDelayHours);
      let PIRNumberDelay = submitClaimBody(
        "PIRNumberDelay",
        $(
          "#helpdesk_ticket_custom_field_cf_enter_the_report_reference_pir_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(PIRNumberDelay);
      let ItemTypeDelay = submitClaimBody(
        "ItemTypeDelay",
        $(
          "#helpdesk_ticket_custom_field_cf_please_list_all_replacement_items_purchased339565_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(ItemTypeDelay);
      let DelayPurchaseDate = submitClaimBody(
        "DelayPurchaseDate",
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_purchase_the_replacement_items_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DelayPurchaseDate);
      let DelayJourneyLegOther = submitClaimBody(
        "DelayJourneyLegOther",
        $(
          "#helpdesk_ticket_custom_field_cf_please_give_us_further_details469996_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DelayJourneyLegOther);
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      let DelayItemPurchasePrice = submitClaimBody(
        "DelayItemPurchasePrice",
        $(
          "#helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency527297_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DelayItemPurchasePrice);
      let DelayedBaggageRefundAmount = submitClaimBody(
        "DelayedBaggageRefundAmount",
        $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DelayedBaggageRefundAmount);

      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_03_CxIllClnt") {
      let TripBookingRefund = submitClaimBody(
        "TripBookingRefund",
        $(
          "#helpdesk_ticket_custom_field_cf_have_you_received_any_refunds_or_compensation702973_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(TripBookingRefund);
      let ReasonForCancellationDesc = submitClaimBody(
        "ReasonForCancellationDesc",
        $(
          "#helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(ReasonForCancellationDesc);
      let DateAdvisedOfRedundancy = submitClaimBody(
        "DateAdvisedOfRedundancy",
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_redundancy_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DateAdvisedOfRedundancy);
      let DateDiagnosis = submitClaimBody(
        "DateOfDiagnosis",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DateDiagnosis);
      let DateOfDeath = submitClaimBody(
        "DateOfDeath",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_death_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DateOfDeath);

      let CauseOfDeath = submitClaimBody(
        "CauseOfDeath",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_cause_of_death_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CauseOfDeath);

      let DateOfInjury = submitClaimBody(
        "DateOfInjury",
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_did_the_incident_causing_the_injury_happen_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DateOfInjury);
      let WhoAdvisedCancelOther = submitClaimBody(
        "WhoAdvisedCancelOther",
        $(
          "#helpdesk_ticket_custom_field_cf_please_give_us_further_details352533_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(WhoAdvisedCancelOther);
      let CancellationBookingNoPeople = submitClaimBody(
        "CancellationBookingNoPeople",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_people_are_there_on_the_booking_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CancellationBookingNoPeople);
      let CancellationInsuredNoClaiming = submitClaimBody(
        "CancellationInsuredNoClaiming",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_people_on_the_booking_are_insured_by_this_policy514961_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CancellationInsuredNoClaiming);

      let DateOfSymptoms = submitClaimBody(
        "DateOfSymptoms",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DateOfSymptoms);
      let TripProviderInfo = submitClaimBody(
        "TripProviderInfo",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_name_of_the_trip_providers_and_the_booking_references342856_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(TripProviderInfo);
      let tripBookingCost = submitClaimBody(
        "TripBookingCost",
        $(
          "#helpdesk_ticket_custom_field_cf_total_trip_cost_the_amount_you_paid_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(tripBookingCost);
      let DateCancelled = submitClaimBody(
        "DateCancelled",
        $(
          "#helpdesk_ticket_custom_field_cf_please_enter_the_date_you_asked_your_tour_operatortravel_provider_to_cancel_the_trip_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DateCancelled);
      let dualInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy400572_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          dualInsurance[0].qkey,
          dualInsurance[0].akey,
          fieldTypeText
        )
      );
      let dualInsuranceName = submitClaimBody(
        "DualInsuranceName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider895583_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(dualInsuranceName);
      let dualInsuranceNumber = submitClaimBody(
        "DualInsuranceNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number964552_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(dualInsuranceNumber);
      let bankAccountType = submitClaimBody(
        "BankAccountType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_do_you_bank_with_and_what_type_of_account_do_you_have486839_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(bankAccountType);
      let tripPaymentMethod = getAKey(
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip913590_2321673",
        TripPaymentMethod
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          tripPaymentMethod[0].qkey,
          tripPaymentMethod[0].akey,
          fieldTypeText
        )
      );
      let creditCardType = submitClaimBody(
        "CreditCardType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card224630_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(creditCardType);
      let creditCardAmount = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          creditCardAmount[0].qkey,
          creditCardAmount[0].akey,
          fieldTypeText
        )
      );
      let Cancellation = getAKey(
        "helpdesk_ticket_custom_field_cf_who_has_caused_the_cancellation_2321673",
        CancellationPerson
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          Cancellation[0].qkey,
          Cancellation[0].akey,
          fieldTypeText
        )
      );

      let ReasonCancellation = getAKey(
        "helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
        ReasonForCancellation
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          ReasonCancellation[0].qkey,
          ReasonCancellation[0].akey,
          fieldTypeText
        )
      );

      let RedundancyPayment = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_qualify_for_redundancy_payment_under_current_legislation_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          RedundancyPayment[0].qkey,
          RedundancyPayment[0].akey,
          fieldTypeText
        )
      );

      let StableAtTimeofBooking = getAKey(
        "helpdesk_ticket_custom_field_cf_to_the_best_of_your_knowledge_were_you_or_this_person_considered_stable_at_the_time_of_booking_the_trip_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          StableAtTimeofBooking[0].qkey,
          StableAtTimeofBooking[0].akey,
          fieldTypeText
        )
      );

      let InjuryThirdPartyInvolved = getAKey(
        "helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_sustaining_the_injury_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          InjuryThirdPartyInvolved[0].qkey,
          InjuryThirdPartyInvolved[0].akey,
          fieldTypeText
        )
      );

      let WhoAdvisedCancel = getAKey(
        "helpdesk_ticket_custom_field_cf_who_advised_to_cancel_2321673",
        WhoAdvisedToCancel
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          WhoAdvisedCancel[0].qkey,
          WhoAdvisedCancel[0].akey,
          fieldTypeText
        )
      );
      let CancellationType = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book137913_2321673",
        CancellationTypeOfTrip
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CancellationType[0].qkey,
          CancellationType[0].akey,
          fieldTypeText
        )
      );
      let CancellationIllness = getAKey(
        "helpdesk_ticket_custom_field_cf_what_medical_condition_has_resulted_in_cancellation748907_2321673",
        CancellationIllnessCondition
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CancellationIllness[0].qkey,
          CancellationIllness[0].akey,
          fieldTypeText
        )
      );
      let TripTransport = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking146711_2321673",
        TripTransportType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TripTransport[0].qkey,
          TripTransport[0].akey,
          fieldTypeText
        )
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_Curt") {
      let CURTAILMENTREFUND = submitClaimBody(
        "CURTAILMENTREFUND",
        $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CURTAILMENTREFUND);
      let CURTAILMENT = submitClaimBody(
        "CURTAILMENTDATEAWARE",
        $(
          "#helpdesk_ticket_custom_field_cf_detail_how_you_got_home_and_on_what_date_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CURTAILMENT);
      let CURTAILMENTREASONS = getAKey(
        "helpdesk_ticket_custom_field_cf_why_did_you_shorten_your_trip_2321673",
        CURTAILMENTREASON
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CURTAILMENTREASONS[0].qkey,
          CURTAILMENTREASONS[0].akey,
          fieldTypeText
        )
      );
      let CURTAILMENTNOTIFICATION = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_notify_us_of_the_need_to_curtail_before_making_arrangements_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CURTAILMENTNOTIFICATION[0].qkey,
          CURTAILMENTNOTIFICATION[0].akey,
          fieldTypeText
        )
      );

      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      let CURTAILMENTLOSSAMOUNT = submitClaimBody(
        "SkiPackClaimDetails",
        $(
          "#helpdesk_ticket_custom_field_cf_what_is_the_estimated_value_of_your_claim_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CURTAILMENTLOSSAMOUNT);
      let CURTAILMENTDESCRIPTION = submitClaimBody(
        "CURTAILMENTDESCRIPTION",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_detailed_description_of_the_reason_you_curtailed_your_trip272601_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CURTAILMENTDESCRIPTION);
      let CURTAILMENTDATE = submitClaimBody(
        "CURTAILMENTDATEAWARE",
        $(
          "#helpdesk_ticket_custom_field_cf_explain_when_you_were_aware_that_you_needed_to_return_home_please_confirm_the_date_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(CURTAILMENTDATE);
      let CURTAILMENTNOTIFICATIONREASON = submitClaimBody(
        "CURTAILMENTNOTIFICATIONREASON",
        $(
          "#helpdesk_ticket_custom_field_cf_please_give_a_full_and_detailed_explanation_of_why_you_did_not_contact_to_contact_our_emergency_service582069_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CURTAILMENTNOTIFICATIONREASON);

      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_Dental") {
      let DentalDate = submitClaimBody(
        "DentalDate",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start939174_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DentalDate);

      let DentalDescriptionExpenses = submitClaimBody(
        "DentalDescriptionExpenses",
        $(
          "#helpdesk_ticket_custom_field_cf_please_list_the_expenses_incurred_including_the_type_of_expense_and_the_name_of_the_dentist_or_company_that_provided_this_expense_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DentalDescriptionExpenses);
      let DentalPaymentAmount = submitClaimBody(
        "DentalPaymentAmount",
        $(
          "#helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency527297_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DentalPaymentAmount);

      let MedicalPaymentDate = submitClaimBody(
        "MedicalPaymentDate",
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_pay_the_dental_expenses_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(MedicalPaymentDate);
      let DentalExpenses = getAKey(
        "helpdesk_ticket_custom_field_cf_who_incurred_dental_expenses930485_2321673",
        WhoDentalExpenses
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DentalExpenses[0].qkey,
          DentalExpenses[0].akey,
          fieldTypeText
        )
      );
      let DTreatment = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_dental_treatment_did_you_need_2321673",
        DentalTreatment
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(DTreatment[0].qkey, DTreatment[0].akey, fieldTypeText)
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_Delay") {
      let TransportationMethodDelay = getAKey(
        "helpdesk_ticket_custom_field_cf_what_transport_was_delayed_2321673",
        TransportationMethod
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TransportationMethodDelay[0].qkey,
          TransportationMethodDelay[0].akey,
          fieldTypeText
        )
      );
      let ReasonDelay = getAKey(
        "helpdesk_ticket_custom_field_cf_what_was_the_reason_for_the_delay_2321673",
        ReasonForDelay
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(ReasonDelay[0].qkey, ReasonDelay[0].akey, fieldTypeText)
      );
      let WhichJourneyNewAdded = getAKey(
        "helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_were_you_delayed_2321673",
        WhichJourneyNew
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          WhichJourneyNewAdded[0].qkey,
          WhichJourneyNewAdded[0].akey,
          fieldTypeText
        )
      );
      let TravelDelayAdditionalCosts = getAKey(
        "helpdesk_ticket_custom_field_cf_were_there_any_additional_expenses_as_a_result_of_the_delay_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          TravelDelayAdditionalCosts[0].qkey,
          TravelDelayAdditionalCosts[0].akey,
          fieldTypeText
        )
      );
      let DelayOver24Hours = getAKey(
        "helpdesk_ticket_custom_field_cf_were_you_delayed_for_24_hours_or_more923623_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DelayOver24Hours[0].qkey,
          DelayOver24Hours[0].akey,
          fieldTypeText
        )
      );
      let HoursDelayed = submitClaimBody(
        "HoursDelayed",
        $(
          "#helpdesk_ticket_custom_field_cf_how_many_hours_were_you_delayed_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(HoursDelayed);
      let TravelDelayCostDescription = submitClaimBody(
        "TravelDelayCostDescription",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_information_about_the_additional_costs_including_the_travel_provider_booking_reference_and_the_amount_paid_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(TravelDelayCostDescription);
      let DelayAdvisedDateTime = submitClaimBody(
        "DelayAdvisedDateTime",
        $(
          "#helpdesk_ticket_custom_field_cf_what_date_were_you_advised_of_the_delay_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(DelayAdvisedDateTime);
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_Med") {
      let MedicalCostCOVID = getAKey(
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_covid_tests_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalCostCOVID[0].qkey,
          MedicalCostCOVID[0].akey,
          fieldTypeText
        )
      );
      let MedicalCostPhysio = getAKey(
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_physiotherapy_or_chiropracter_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalCostPhysio[0].qkey,
          MedicalCostPhysio[0].akey,
          fieldTypeText
        )
      );
      let MedicalExpCondition = getAKey(
        "helpdesk_ticket_custom_field_cf_what_condition_has_resulted_in_the_medical_expenses_2321673",
        MedicalExpensesCondition
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalExpCondition[0].qkey,
          MedicalExpCondition[0].akey,
          fieldTypeText
        )
      );
      let MedicalCostAccomm = getAKey(
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_accommodation555447_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalCostAccomm[0].qkey,
          MedicalCostAccomm[0].akey,
          fieldTypeText
        )
      );
      let MedicalCostTravel = getAKey(
        "helpdesk_ticket_custom_field_cf_do_any_of_the_costs_relate_to_travel_not_including_the_ambulance_or_taxi_to_the_hospital_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalCostTravel[0].qkey,
          MedicalCostTravel[0].akey,
          fieldTypeText
        )
      );
      let IncidentDate = submitClaimBody(
        "IncidentDate",
        $(
          "#helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start437132_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(IncidentDate);
      let NatureIllness = submitClaimBody(
        "NatureIllness",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_any_further_information_about_the_condition_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(NatureIllness);
      let MedicalDateOfDiagnosis = submitClaimBody(
        "MedicalDateOfDiagnosis",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(MedicalDateOfDiagnosis);
      let ExpenseDescription = submitClaimBody(
        "ExpenseDescription",
        $(
          "#helpdesk_ticket_custom_field_cf_please_list_the_expenses_incurred_including_the_type_of_expense_and_the_name_of_the_dentist_or_company_that_provided_this_expense90799_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(ExpenseDescription);
      let NatureInjury = submitClaimBody(
        "NatureInjury",
        $(
          "#helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened731291_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(NatureInjury);
      let DentalPaymentAmount = submitClaimBody(
        "DentalPaymentAmount",
        $(
          "#helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency527297_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DentalPaymentAmount);
      let MedicalPaymentDate = submitClaimBody(
        "MedicalPaymentDate",
        $(
          "#helpdesk_ticket_custom_field_cf_date_of_payment778903_2321673"
        ).val(),
        fieldTypeDate
      );
      ClaimQaAndAnswers.push(MedicalPaymentDate);
      let DualInsuranceName = submitClaimBody(
        "DualInsuranceName",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DualInsuranceName);
      let DualInsuranceNumber = submitClaimBody(
        "DualInsuranceNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number533894_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(DualInsuranceNumber);
      let PrivateMedicalPolicy = submitClaimBody(
        "PrivateMedicalPolicy",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider618179_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(PrivateMedicalPolicy);
      let PrivateMedicalNumber = submitClaimBody(
        "PrivateMedicalNumber",
        $("#helpdesk_ticket_custom_field_cf_policy_number701021_2321673").val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(PrivateMedicalNumber);
      let BankAccountType = submitClaimBody(
        "BankAccountType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_do_you_bank_with_and_what_type_of_account_do_you_have584479_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(BankAccountType);
      let CreditCardType = submitClaimBody(
        "CreditCardType",
        $(
          "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(CreditCardType);
      let MedicalStillAbroad = getAKey(
        "helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad93386_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalStillAbroad[0].qkey,
          MedicalStillAbroad[0].akey,
          fieldTypeText
        )
      );
      let MedicalExpenses = getAKey(
        "helpdesk_ticket_custom_field_cf_who_incurred_medical_expenses_2321673",
        WhoMedicalExpenses
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MedicalExpenses[0].qkey,
          MedicalExpenses[0].akey,
          fieldTypeText
        )
      );
      let InjuryIllness = getAKey(
        "helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673",
        MedicalInjuryIllness
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          InjuryIllness[0].qkey,
          InjuryIllness[0].akey,
          fieldTypeText
        )
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      let DualInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy206683_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          DualInsurance[0].qkey,
          DualInsurance[0].akey,
          fieldTypeText
        )
      );
      let PrivateMedicalInsurance = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_private_medical_insurance_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          PrivateMedicalInsurance[0].qkey,
          PrivateMedicalInsurance[0].akey,
          fieldTypeText
        )
      );

      let PaymentMethod = getAKey(
        "helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip257666_2321673",
        TripPaymentMethod
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          PaymentMethod[0].qkey,
          PaymentMethod[0].akey,
          fieldTypeText
        )
      );
      let CreditCardTransactions = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_use_your_credit_card_for_any_transactions_whilst_on_your_trip_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CreditCardTransactions[0].qkey,
          CreditCardTransactions[0].akey,
          fieldTypeText
        )
      );
      let CreditCardAmount = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          CreditCardAmount[0].qkey,
          CreditCardAmount[0].akey,
          fieldTypeText
        )
      );
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_03_MDDelPrvbT") {
      let MissedDepDelayOther = submitClaimBody(
        "MissedDepDelayOther",
        $(
          "#helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(MissedDepDelayOther);
      let MissedDepTestType = submitClaimBody(
        "MissedDepTestType",
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_test_type_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(MissedDepTestType);
      let MissedDepAccomProvider = submitClaimBody(
        "MissedDepAccomProvider",
        $(
          "#helpdesk_ticket_custom_field_cf_name_of_provider_please_list_all_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(MissedDepAccomProvider);
      let MissedDepAmount = submitClaimBody(
        "MissedDepAmount",
        $(
          "#helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(MissedDepAmount);
      let MissedRefundAmount = submitClaimBody(
        "MissedRefundAmount",
        $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(MissedRefundAmount);
      let MissedDeparture = getAKey(
        "helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673",
        MissedDepartureReason
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDeparture[0].qkey,
          MissedDeparture[0].akey,
          fieldTypeText
        )
      );
      let MissedDepDelay = getAKey(
        "helpdesk_ticket_custom_field_cf_please_confirm_the_reason_for_delay_2321673",
        MissedDepDelayReason
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDepDelay[0].qkey,
          MissedDepDelay[0].akey,
          fieldTypeText
        )
      );
      let MissedDepThirdParty = getAKey(
        "helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_the_accident_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDepThirdParty[0].qkey,
          MissedDepThirdParty[0].akey,
          fieldTypeText
        )
      );
      let MissedDepReasonReport = getAKey(
        "helpdesk_ticket_custom_field_cf_do_you_have_a_report_confirming_the_reason_for_the_delay_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDepReasonReport[0].qkey,
          MissedDepReasonReport[0].akey,
          fieldTypeText
        )
      );
      let MissedDepJourney = getAKey(
        "helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_did_you_miss_your_departure_2321673",
        MissedDepWhichJourney
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDepJourney[0].qkey,
          MissedDepJourney[0].akey,
          fieldTypeText
        )
      );
      let MissedDepSufficientTime = getAKey(
        "helpdesk_ticket_custom_field_cf_did_you_allow_yourself_sufficient_time_to_reach_your_international_departure_point_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDepSufficientTime[0].qkey,
          MissedDepSufficientTime[0].akey,
          fieldTypeText
        )
      );
      let MissedDepExpense = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_additional_expenses_are_you_claiming_for_2321673",
        MissedDepExpenseType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          MissedDepExpense[0].qkey,
          MissedDepExpense[0].akey,
          fieldTypeText
        )
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_06_OthSubsAcc") {
      let SubAccomCost = submitClaimBody(
        "SubAccomCost",
        $(
          "#helpdesk_ticket_custom_field_cf_what_is_the_estimated_value_of_your_claim_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(SubAccomCost);
      let SubAccomRefund = submitClaimBody(
        "SubAccomRefund",
        $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(SubAccomRefund);
      let SubAccReason = getAKey(
        "helpdesk_ticket_custom_field_cf_what_caused_you_to_leave_your_original_accommodation_2321673",
        SubAccomReason
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          SubAccReason[0].qkey,
          SubAccReason[0].akey,
          fieldTypeText
        )
      );
      let SubAccTripType = getAKey(
        "helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book_2321673",
        SubAccomTripType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          SubAccTripType[0].qkey,
          SubAccTripType[0].akey,
          fieldTypeText
        )
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      let SubAccomDate = submitClaimBody(
        "SubAccomDate",
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_leave_your_original_accommodation_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(SubAccomDate);
      let SubAccomDescription = submitClaimBody(
        "SubAccomDescription",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_detailed_description_of_the_reason_you_left_your_accommodation_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(SubAccomDescription);
      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    } else if (reasonClaim[0].akey == "01_02_Winter") {
      let SkiPckClaimReason = getAKey(
        "helpdesk_ticket_custom_field_cf_which_winter_sports_item_are_you_claiming_for_2321673",
        SkiPackClaimReason
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          SkiPckClaimReason[0].qkey,
          SkiPckClaimReason[0].akey,
          fieldTypeText
        )
      );
      let SkiPackReport = getAKey(
        "helpdesk_ticket_custom_field_cf_have_you_obtained_a_report_or_invoices_for_the_items_you_are_claiming_2321673",
        yesNo
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          SkiPackReport[0].qkey,
          SkiPackReport[0].akey,
          fieldTypeText
        )
      );
      let currencyType = getAKey(
        "helpdesk_ticket_custom_field_cf_currency_type637939_2321673",
        CurrencyType
      );
      ClaimQaAndAnswers.push(
        submitClaimBody(
          currencyType[0].qkey,
          currencyType[0].akey,
          fieldTypeText
        )
      );
      let SkiPackClaimDetails = submitClaimBody(
        "SkiPackClaimDetails",
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_detailed_description_of_the_reason_youre_making_a_claim_today_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(SkiPackClaimDetails);
      let ValueSkiEst = submitClaimBody(
        "ValueSkiEst",
        $(
          "#helpdesk_ticket_custom_field_cf_what_is_the_estimated_value_of_your_claim_2321673"
        ).val(),
        fieldTypeText
      );
      ClaimQaAndAnswers.push(ValueSkiEst);

      body["ClaimAnswers"] = ClaimQaAndAnswers;
      console.log("submit claim body --->", body);
    }

    createSubmitClaim(body, ".new-ticket-dummy");
  });

  function submitClaimBody(qkeyValue, akeyValue, fieldType) {
    console.log("submitClaimBody ---->", akeyValue);
    let temp = {};
    if (akeyValue == undefined) {
      akeyValue = "";
    }
    if (fieldType != "Date") {
      if (qkeyValue == "DamageNumberOfItems" && akeyValue == "1") {
        let arrayItems = [];
        let objectItems = {};
        temp["QuestionKey"] = "DamagedBags";
        let ItemTypeDamagedItems = getAKey(
          "helpdesk_ticket_custom_field_cf_item_type_2321673",
          ItemTypeDamaged
        );
        objectItems["ItemType"] = ItemTypeDamagedItems[0].akey;
        objectItems["PurchaseDate"] = $(
          "#helpdesk_ticket_custom_field_cf_when_did_you_buy_the_item_2321673"
        ).val();
        objectItems["purchasePrice"] = $(
          "#helpdesk_ticket_custom_field_cf_what_was_its_cost_when_you_bought_it_2321673"
        ).val();
        objectItems["Currency"] = null;
        objectItems["repairCost"] = $(
          "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back_2321673"
        ).val();
        arrayItems.push(objectItems);
        temp["items"] = arrayItems;
      } else {
        temp["QuestionKey"] = qkeyValue;
        temp["AnswerKey"] = akeyValue;
      }

      console.log(temp);
    } else {
      temp["QuestionKey"] = qkeyValue;
      temp["DateTimeAnswer"] = akeyValue;
    }
    return temp;
  }
  function createSubmitClaim(body, fieldId) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", AuthorizationKey);
    var raw = JSON.stringify(body);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://claim-api-lower.collinsonnis.com/api/claim/submission",
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log(result);
        // $(".new-ticket-submit-button").trigger("click");
        if (JSON.parse(result).status == 401) {
          getJWTToken(fieldId);
        }
      })
      .catch((error) => console.log("error", error));
  }
  $("#cb2").click(function () {
    console.log("checkbox changed!");
    if ($(this).is(":checked")) {
      console.log("checked");
    } else {
      console.log("unchecked");
    }
  });

  //____________________________________________________SECTION 6 End____________________________________________

  //___________________________________REASON LOGIC_____________________________________

  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      //__________________________section 5.12_____________________________
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Baggage - suitcase hasn't arrived on time"
      ) {
        var refund_parent = document.getElementById(
          "helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).parentElement;
        //save and coninue for Section 3
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(refund_parent);
        //Which part of the journey did your baggage arrive late? -dependancy
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_please_give_us_further_details469996_2321673"]',
            "#helpdesk_ticket_custom_field_cf_please_give_us_further_details469996_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_which_part_of_the_journey_did_your_baggage_arrive_late_2321673",
          "Other"
        );

        //How many hours was your baggage delayed? -  value cannot be 0
        cannot_be_zero(
          "helpdesk_ticket_custom_field_cf_how_many_hours_was_your_baggage_delayed_2321673"
        );

        //What transport type was your baggage delayed on?? -dependancy
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_please_give_us_further_details547533_2321673"]',
            "#helpdesk_ticket_custom_field_cf_please_give_us_further_details547533_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_what_transport_type_was_your_baggage_delayed_on_2321673",
          "Other"
        );

        //Did you notify your transport provider about the delay and get a report (PIR)? -dependancy
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_enter_the_report_reference_pir_2321673"]',
            "#helpdesk_ticket_custom_field_cf_enter_the_report_reference_pir_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_notify_your_transport_provider_about_the_delay_and_get_a_report_pir_2321673",
          "Yes"
        );

        //Have you received any refund from your transport provider? -dependancy
        //hide by default first
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"]',
            "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_have_you_received_any_refund_from_your_transport_provider_2321673",
          "Yes"
        );

        //On what date did you purchase the replacement item(s)? - date logic
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_purchase_the_replacement_items_2321673"
        ).focusout(function () {
          replacement_purchase = $(
            "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_purchase_the_replacement_items_2321673"
          ).val();
          replacement_purchase_date = new Date(replacement_purchase);
          var replacement_purchase_date = new Date(
            replacement_purchase_date.getFullYear() +
              "-" +
              replacement_purchase_date.getMonth() +
              "-" +
              replacement_purchase_date.getDate()
          );
          var new_today = new Date(
            today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
          );

          if (new_today < replacement_purchase_date) {
            //ERROR MESSAGING
            addErrorMessage(
              "helpdesk_ticket_custom_field_cf_on_what_date_did_you_purchase_the_replacement_items_2321673",
              "Date must be in the past."
            );
          } else if (new_today > replacement_purchase_date) {
            // do nothing
          } else {
            //assume equal
            //ERROR MESSAGING
            addErrorMessage(
              "helpdesk_ticket_custom_field_cf_on_what_date_did_you_purchase_the_replacement_items_2321673",
              "Date must be in the past."
            );
          }
        });
      }
    }
  );
  //__________________________section 5.11_____________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Dental expenses whilst abroad"
      ) {
        //save and coninue for Section 3
        var what_date_parent = document.getElementById(
          "helpdesk_ticket_custom_field_cf_on_what_date_did_you_pay_the_dental_expenses_2321673"
        ).parentElement;
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(what_date_parent);

        //when did the symptoms start date logic
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start939174_2321673"
        );
        //On what date did you pay the dental expenses
        $(
          "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_pay_the_dental_expenses_2321673"
        ).focusout(function () {
          payment_date_dental = $(
            "#helpdesk_ticket_custom_field_cf_on_what_date_did_you_pay_the_dental_expenses_2321673"
          ).val();
          payment_date_dental = new Date(payment_date_dental);

          var payment_date_dental = new Date(
            payment_date_dental.getFullYear() +
              "-" +
              payment_date_dental.getMonth() +
              "-" +
              payment_date_dental.getDate()
          );
          var new_today = new Date(
            today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
          );

          if (new_today < payment_date_dental) {
            addErrorMessage(
              "helpdesk_ticket_custom_field_cf_on_what_date_did_you_pay_the_dental_expenses_2321673",
              "Date must be in past."
            );
          } else if (new_today > payment_date_dental) {
            // do nothing
          } else {
            //assume equal
            //ERROR MESSAGING
            addErrorMessage(
              "helpdesk_ticket_custom_field_cf_on_what_date_did_you_pay_the_dental_expenses_2321673",
              "Date must be in past."
            );
          }
        });
        //What type of dental treatment did you need? - dependancy
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_please_give_us_further_details_2321673"]',
            "#helpdesk_ticket_custom_field_cf_please_give_us_further_details_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_what_type_of_dental_treatment_did_you_need_2321673",
          "Other"
        );
        //amount paid in local currency bannot be 0
        cannot_be_zero(
          "helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency527297_2321673"
        );
      }
    }
  );
  //__________________________section 5.10_____________________________
  //"helpdesk_ticket_custom_field_cf_what_date_were_you_advised_of_the_delay_2321673"

  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Flight or Travel delayed"
      ) {
        //save and coninue for Section 3
        var booking_ref_parent = document.getElementById(
          "helpdesk_ticket_custom_field_cf_please_provide_information_about_the_additional_costs_including_the_travel_provider_booking_reference_and_the_amount_paid_2321673"
        ).parentElement;
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(booking_ref_parent);
        //What date were you advised of the delay?
        date_past_present(
          "helpdesk_ticket_custom_field_cf_what_date_were_you_advised_of_the_delay_2321673"
        );
        //What was the reason for the delay? - dependancy
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_please_give_us_further_details_2321673"]',
            "#helpdesk_ticket_custom_field_cf_please_give_us_further_details_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_what_was_the_reason_for_the_delay_2321673",
          "Other"
        );
        //On which part of the journey were you delayed?
        //hide by default
        $(
          ".form-group.helpdesk_ticket_custom_field_cf_were_you_delayed_for_24_hours_or_more923623_2321673"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_were_you_delayed_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_were_you_delayed_2321673"
            ).val() == "Connecting journey" ||
            $(
              "#helpdesk_ticket_custom_field_cf_on_which_part_of_the_journey_were_you_delayed_2321673"
            ).val() == "Final inbound journey to your Home Country"
          ) {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_were_you_delayed_for_24_hours_or_more923623_2321673"
            ).show();
          } else {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_were_you_delayed_for_24_hours_or_more923623_2321673"
            ).hide();
          }
        });
        //Were there any additional expenses as a result of the delay?
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_please_provide_information_about_the_additional_costs_including_the_travel_provider_booking_reference_and_the_amount_paid_2321673"]',
            "#helpdesk_ticket_custom_field_cf_please_provide_information_about_the_additional_costs_including_the_travel_provider_booking_reference_and_the_amount_paid_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_were_there_any_additional_expenses_as_a_result_of_the_delay_2321673",
          "Yes"
        );
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_were_there_any_additional_expenses_as_a_result_of_the_delay_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_were_you_delayed_for_24_hours_or_more923623_2321673",
          "Yes"
        );
      }
    }
  );
  //_____________________________________________section 5.7 ___________________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Curtailment â€“ returned home early"
      ) {
        //save and continue 3 button
        var refunds_compensation_parent = document.getElementById(
          "helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).parentElement;
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(refunds_compensation_parent);
        //Did you notify us of the need to curtail before making arrangements? - dependancy
        show_and_hide(
          [
            'label[for="helpdesk_ticket_custom_field_cf_please_give_a_full_and_detailed_explanation_of_why_you_did_not_contact_to_contact_our_emergency_service582069_2321673"]',
            "#helpdesk_ticket_custom_field_cf_please_give_a_full_and_detailed_explanation_of_why_you_did_not_contact_to_contact_our_emergency_service582069_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_notify_us_of_the_need_to_curtail_before_making_arrangements_2321673",
          "No"
        );
      }
    }
  );
  //_____________________________________________section 5.6___________________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Medical expenses abroad & repatriation cost"
      ) {
        //save and continue 3 button
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card_2321673");
        //When did the symptoms start? - PAST PRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start437132_2321673"
        );
        //Are you claiming for an injury or illness? - dependacy - illness
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_what_condition_has_resulted_in_the_medical_expenses_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_please_provide_any_further_information_about_the_condition_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_provide_any_further_information_about_the_condition_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673",
          "Illness"
        );
        //Are you claiming for an injury or illness? - dependacy
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_you_sustaining_the_injury_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened731291_2321673']",
            "#helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened731291_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673",
          "Injury"
        );
        //Please confirm the first date of diagnosis for this condition? - PAST PRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673"
        );
        //dependancy covid and illness - diagnosis date
        //hide by default
        $(
          "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673"
        ).hide();

        $(
          "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673"
        ).change(function name() {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673"
            ).val() == "Illness" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_an_injury_or_illness644442_2321673"
            ).val() == "Coronavirus (COVID-19)"
          ) {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673"
            ).show();
          } else {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_please_confirm_the_first_date_of_diagnosis_for_this_condition_2321673"
            ).hide();
          }
        });
        //Total Amount paid in local currency - cannot be 0
        cannot_be_zero(
          "helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency527297_2321673"
        );
        //Date of Payment? - date logic
        $(
          "#helpdesk_ticket_custom_field_cf_date_of_payment778903_2321673"
        ).focusout(function () {
          purchase_date_medical = $(
            "#helpdesk_ticket_custom_field_cf_date_of_payment778903_2321673"
          ).val();
          purchase_date_medical = new Date(purchase_date_medical);

          var purchase_date_medical = new Date(
            purchase_date_medical.getFullYear() +
              "-" +
              purchase_date_medical.getMonth() +
              "-" +
              purchase_date_medical.getDate()
          );
          var new_today = new Date(
            today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
          );

          if (new_today < purchase_date_medical) {
            //ERROR MESSAGING
            addErrorMessage(
              "helpdesk_ticket_custom_field_cf_date_of_payment778903_2321673",
              "Date must be in the past."
            );
          } else if (new_today > purchase_date_medical) {
            $(
              ".invalid-feedback.helpdesk_ticket_custom_field_cf_date_of_payment778903_2321673"
            ).removeClass("d-block");
          } else {
            //assume equal
            //ERROR MESSAGING
            addErrorMessage(
              "helpdesk_ticket_custom_field_cf_date_of_payment778903_2321673",
              "Date must be in the past."
            );
          }
        });
        //Travel Insurance Policy - dependancy
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number533894_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number533894_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy206683_2321673",
          "Yes"
        );
        //Medical Policy - dependancy
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider618179_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider618179_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number701021_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number701021_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_private_medical_insurance_2321673",
          "Yes"
        );
        //How did you pay for your trip?
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_use_your_credit_card_for_any_transactions_whilst_on_your_trip_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card_2321673']",
            "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip257666_2321673",
          "Credit Card"
        );
      }
    }
  );
  //_____________________________________________section 5.5___________________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Missed flight or departure"
      ) {
        //save_and_continue4
        var refund_missed = document.getElementById(
          "helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673"
        ).parentElement;
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(refund_missed);

        //what caused you to miss your departure - dependancy 1
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_the_accident_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673",
          "Vehicle you were travelling in was in an accident"
        );
        //what caused you to miss your departure - dependancy 2
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_test_type_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_confirm_the_test_type_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673",
          "Delayed test results"
        );
        //what caused you to miss your departure - dependancy 3
        //hide by default
        $(
          ".form-group.helpdesk_ticket_custom_field_cf_please_confirm_the_reason_for_delay_2321673"
        ).hide();

        $(
          "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Public transport delay/cancellation" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Delay to a connecting flight"
          ) {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_please_confirm_the_reason_for_delay_2321673"
            ).show();
          } else {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_please_confirm_the_reason_for_delay_2321673"
            ).hide();
          }
        });
        //hide by default
        $(
          "label[for='helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673"
        ).hide();
        //what caused you to miss your departure - dependancy 4
        $(
          "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Other" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Denied boarding" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Queues at departure point" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Passport/visa/document issue" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_caused_you_to_miss_your_departure_2321673"
            ).val() == "Failed health screening"
          ) {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673"
            ).show();
          } else {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_please_give_us_further_details520238_2321673"
            ).hide();
          }
        });

        cannot_be_zero(
          "helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency_2321673"
        );

        cant_be_more_than(
          "helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673",
          "helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency_2321673"
        );
      }
    }
  );
  //___________________________________section 5.4______________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Any CANCELLATION claim due to COVID-19"
      ) {
        //save_and_continue4
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673");
        //A POSITIVE Coronavirus test result - dependancy
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_who_has_tested_positive_for_coronavirus_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start939174_2321673']",
            "#helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start939174_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_what_type_of_test_was_taken_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_do_you_have_evidence_from_either_the_nhshse_private_testing_company_or_your_doctor_confirming_the_positive_covid_test_email_letter_sms_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_when_did_the_test_results_confirming_coronavirus_infection_arrive_2321673']",
            "#helpdesk_ticket_custom_field_cf_when_did_the_test_results_confirming_coronavirus_infection_arrive_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_why_did_you_cancel_your_trip_2321673",
          "A POSITIVE Coronavirus test result"
        );

        //When did the test results confirming Coronavirus infection arrive? - PAST PRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_the_test_results_confirming_coronavirus_infection_arrive_2321673"
        );
        //When did the symptoms start? - PAST PRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start939174_2321673"
        );
        //When were you initially aware that you needed to cancel your trip?? - PAST PRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_were_you_initially_aware_that_you_needed_to_cancel_your_trip635242_2321673"
        );

        //Please enter the date you asked your tour operator/travel provider to cancel the trip? - PAST PRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_please_enter_the_date_you_asked_your_tour_operatortravel_provider_to_cancel_the_trip_2321673"
        );

        cannot_be_zero(
          "helpdesk_ticket_custom_field_cf_total_trip_cost_the_amount_you_paid_2321673"
        );

        cant_be_more_than(
          "helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back594804_2321673",
          "helpdesk_ticket_custom_field_cf_total_trip_cost_the_amount_you_paid_2321673"
        );

        //Do you have any other Travel Insurance Policy? - dependancy
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider895583_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider895583_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number964552_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number964552_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy400572_2321673",
          "Yes"
        );

        //How did you pay for your trip?
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card224630_2321673']",
            "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card224630_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip913590_2321673",
          "Credit Card"
        );
      }
    }
  );

  //___________________________________section 5.3______________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Cancelled trip - (NOT related to COVID-19)"
      ) {
        //save_and_continue4
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673");
        //Why did you cancel your trip? - dependancy 1
        //hide by default
        $(
          "label[for='helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Coronavirus" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Other reason" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Pregnancy" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Your home or business premises being uninhabitable" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() ==
              "Cancellation of leave by emergency services or armed forces"
          ) {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673"
            ).show();
          } else {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_in_your_own_words_please_explain_the_reason_for_cancelling_your_trip_2321673"
            ).hide();
          }
        });

        //Why did you cancel your trip? - dependancy 2
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start_2321673']",
            "#helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_what_medical_condition_has_resulted_in_cancellation748907_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
          "Unforseen illness"
        );
        //when did the symptoms start -past present
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_the_symptoms_start_2321673"
        );
        //Why did you cancel your trip? - dependancy 3
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_on_what_date_did_the_incident_causing_the_injury_happen_2321673']",
            "#helpdesk_ticket_custom_field_cf_on_what_date_did_the_incident_causing_the_injury_happen_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_was_someone_else_a_third_party_involved_in_sustaining_the_injury_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
          "Unforseen injury"
        );
        //on what date injury
        date_past_present(
          "helpdesk_ticket_custom_field_cf_on_what_date_did_the_incident_causing_the_injury_happen_2321673"
        );
        //Why did you cancel your trip? - dependancy 4
        //hide by default
        $(
          ".form-group.helpdesk_ticket_custom_field_cf_who_advised_to_cancel_2321673"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Unforseen illness" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Unforseen injury"
          ) {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_who_advised_to_cancel_2321673"
            ).show();
          } else {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_who_advised_to_cancel_2321673"
            ).hide();
          }
        });
        //who advised cancel dependancy
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_please_give_us_further_details352533_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_give_us_further_details352533_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_who_advised_to_cancel_2321673",
          "Other"
        );
        //why did you cancel your trip dependancy 5
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_redundancy_2321673']",
            "#helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_redundancy_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_do_you_qualify_for_redundancy_payment_under_current_legislation_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
          "Redundancy from work"
        );
        //on what date were you advised on the redundancy
        date_past_present(
          "helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_redundancy_2321673"
        );
        //why did you cancel your trip dependancy 6
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_jury_service_or_court_date_2321673']",
            "#helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_jury_service_or_court_date_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
          "Called for jury service or as a witness"
        );
        //jury date -past present
        date_past_present(
          "helpdesk_ticket_custom_field_cf_on_what_date_were_you_advised_of_the_jury_service_or_court_date_2321673"
        );
        //why did you cancel your trip dependancy 7
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_death_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_death_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_cause_of_death_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_confirm_the_cause_of_death_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673",
          "Unforseen death"
        );
        //please confirm date of death
        date_past_present(
          "helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_death_2321673"
        );
        //Please confirm the date of diagnosis for this condition
        date_past_present(
          "helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673"
        );

        //Why did you cancel your trip? - dependancy 8
        //hide by default
        $(
          "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673"
        ).hide();
        $(
          ".form-group.helpdesk_ticket_custom_field_cf_to_the_best_of_your_knowledge_were_you_or_this_person_considered_stable_at_the_time_of_booking_the_trip_2321673"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Unforseen illness" ||
            $(
              "#helpdesk_ticket_custom_field_cf_are_you_currently_still_abroad_2321673"
            ).val() == "Unforseen death"
          ) {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673"
            ).show();
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_to_the_best_of_your_knowledge_were_you_or_this_person_considered_stable_at_the_time_of_booking_the_trip_2321673"
            ).show();
          } else {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_please_confirm_the_date_of_diagnosis_for_this_condition_2321673"
            ).hide();
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_to_the_best_of_your_knowledge_were_you_or_this_person_considered_stable_at_the_time_of_booking_the_trip_2321673"
            ).hide();
          }
        });
        //What type of trip did you book?
        //hide by default
        $(
          ".form-group.helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking146711_2321673"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book137913_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book137913_2321673"
            ).val() ==
              "Package booking (e.g. flights and accommodation or flights and cruise)" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book137913_2321673"
            ).val() == "Travel ONLY (e.g flights or ferry)" ||
            $(
              "#helpdesk_ticket_custom_field_cf_what_type_of_trip_did_you_book137913_2321673"
            ).val() ==
              "Independent booking (travel and accommodation booked separately"
          ) {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking146711_2321673"
            ).show();
          } else {
            $(
              ".form-group.helpdesk_ticket_custom_field_cf_what_type_of_transport_was_included_in_your_booking146711_2321673"
            ).hide();
          }
        });
        //Do you have any other Travel Insurance Policy?
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider895583_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider895583_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number964552_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number964552_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy400572_2321673",
          "Yes"
        );
        //How did you pay for your trip?
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card224630_2321673']",
            "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card224630_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card401929_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip913590_2321673",
          "Credit Card"
        );
        //booking cost - cannot be 0
        cannot_be_zero(
          "helpdesk_ticket_custom_field_cf_total_trip_cost_the_amount_you_paid_2321673"
        );
        //cannot be more than
        cant_be_more_than(
          "helpdesk_ticket_custom_field_cf_have_you_received_any_refunds_or_compensation702973_2321673",
          "helpdesk_ticket_custom_field_cf_total_trip_cost_the_amount_you_paid_2321673"
        );
        //Please enter the date you asked your tour operator/travel provider to cancel the trip - PASTPRESENT
        date_past_present(
          "helpdesk_ticket_custom_field_cf_please_enter_the_date_you_asked_your_tour_operatortravel_provider_to_cancel_the_trip_2321673"
        );
      }
    }
  );
  //___________________________________section 5.2______________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Baggage - personal items damaged"
      ) {
        //save_and_continue 4
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673");
        //Was the item(s) with you when it was damaged? - dependancy
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_was_the_items_with_your_transport_provider_when_damaged_eg_airline_checkedin_luggage_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_was_the_items_with_you_when_it_was_damaged_2321673",
          "No"
        );
        //Is the damaged item(s) listed as 'valuable, gadget/electrical' in your policy wording? - dependancy
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_is_the_damaged_items_listed_as_valuable_gadgetelectrical_in_your_policy_wording_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_tell_your_transport_provider_about_the_damage_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_was_the_items_with_your_transport_provider_when_damaged_eg_airline_checkedin_luggage_2321673",
          "Yes"
        );
        //Did you tell your transport provider about the damage? - dependancy 1
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_let_us_know_why_you_didnt_report_the_damage_2321673']",
            "#helpdesk_ticket_custom_field_cf_let_us_know_why_you_didnt_report_the_damage_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_tell_your_transport_provider_about_the_damage_2321673",
          "No"
        );
        //Did you tell your transport provider about the damage? - dependancy 1
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_please_enter_the_report_reference_given_by_your_transport_provider_pir_reference_if_applicable_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_enter_the_report_reference_given_by_your_transport_provider_pir_reference_if_applicable_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_tell_your_transport_provider_about_the_damage_2321673",
          "Yes"
        );
        //did you get a repair estimat
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_who_owns_the_item_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_get_a_repair_estimate_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_item_type_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_item_description_2321673']",
            "#helpdesk_ticket_custom_field_cf_item_description_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_when_did_you_buy_the_item_2321673']",
            "#helpdesk_ticket_custom_field_cf_when_did_you_buy_the_item_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency_2321673']",
            "#helpdesk_ticket_custom_field_cf_amount_paid_in_local_currency_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673",
          "1"
        );
        //did you get a repair estimate - dependacy
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_can_the_item_be_repaired_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_get_a_repair_estimate_2321673",
          "Yes"
        );
        //23456789 dependancy
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back_2321673']",
            "#helpdesk_ticket_custom_field_cf_total_refund_vouchers_amount_the_amount_you_have_received_back_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_can_the_item_be_repaired_2321673",
          "Yes"
        );
        //Do you have Home Contents Insurance?
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider267746_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider267746_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number818860_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number818860_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_home_contents_insurance_2321673",
          "Yes"
        );
        //Do you have any other Travel Insurance Policy?
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider610133_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider610133_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number832231_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number832231_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy_2321673",
          "Yes"
        );
        //How did you pay for your trip?
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card237678_2321673']",
            "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card237678_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip396837_2321673",
          "Credit Card"
        );

        //hide by default
        $(
          "label[for='helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673"
        ).hide();
        $(
          "label[for='helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673"
        ).hide();

        $(
          "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "2" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "3" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "4" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "5" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "6" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "7" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "8" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for411795_2321673"
            ).val() == "9"
          ) {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673"
            ).show();
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673"
            ).show();
          } else {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_whats_the_total_amount_youre_claiming_2321673"
            ).hide();
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item_2321673"
            ).hide();
          }
        });

        //when did you buy that item - past present
        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_you_buy_the_item_2321673"
        );
      }
    }
  );
  //___________________________________section 5.1______________________________________________
  $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").change(
    function () {
      if (
        $("#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673").val() ==
        "Baggage - personal items lost or stolen"
      ) {
        //save_and_continue 4
        //$('<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button" >Save & Continue</button>').insertAfter(".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673");
        //theft or loss dependancy
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened994308_2321673']",
            "#helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened994308_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_a_loss_or_theft_2321673",
          "Theft"
        );
        //theft or loss dependancy 2
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened511569_2321673']",
            "#helpdesk_ticket_custom_field_cf_in_your_own_words_tell_us_what_happened511569_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_you_claiming_for_a_loss_or_theft_2321673",
          "Loss"
        );
        //theft or loss dependancy 3
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_were_you_in_the_vehicle_at_the_time_of_the_theft_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_where_did_the_loss_or_theft_take_place_2321673",
          "From your own or a rental vehicle"
        );
        //theft or loss dependancy 4
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_whereabouts_in_the_vehicle_was_the_items_when_stolen_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_was_there_physical_damage_to_the_vehicle_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_were_you_in_the_vehicle_at_the_time_of_the_theft_2321673",
          "No"
        );
        //theft or loss dependancy 5
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_are_any_of_the_items_lost_defined_as_a_valuable_gadgetelectrical_as_shown_within_your_policy_wording_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_where_did_the_loss_or_theft_take_place_2321673",
          "Checked-in luggage (In my suitcase)"
        );
        //theft or loss dependancy 6
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_are_you_claiming_for_more_than_1_item_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_are_any_of_the_items_lost_defined_as_a_valuable_gadgetelectrical_as_shown_within_your_policy_wording_2321673",
          "Yes"
        );
        //theft and loss dependancy 7
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_who_did_you_report_it_to_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_report_the_loss_or_theft_2321673",
          "Yes"
        );
        //theft and loss dependancy 8
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_please_confirm_why_you_did_not_report_the_loss_or_theft6975_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_did_you_report_the_loss_or_theft_2321673",
          "No"
        );
        //theft and loss dependancy 9
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_please_give_us_further_details341695_2321673']",
            "#helpdesk_ticket_custom_field_cf_please_give_us_further_details341695_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_who_did_you_report_it_to_2321673",
          "Other"
        );
        //theft and loss dependancy 10
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_police_or_crime_reference_number_2321673']",
            "#helpdesk_ticket_custom_field_cf_police_or_crime_reference_number_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_who_did_you_report_it_to_2321673",
          "Police"
        );
        //theft and loss dependancy 11
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_have_you_blocked_imei_with_your_provider_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_imei_number_2321673']",
            "#helpdesk_ticket_custom_field_cf_imei_number_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_item_type870706_2321673",
          "Mobile Phone"
        );
        //theft and loss dependancy 12
        show_and_hide(
          [
            ".form-group.helpdesk_ticket_custom_field_cf_who_owns_the_item86910_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673",
          "1"
        );
        //theft and loss dependancy 12
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider267746_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider267746_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number818860_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number818860_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_home_contents_insurance_2321673",
          "Yes"
        );
        //theft and loss dependancy 13
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_name_of_your_policy_provider610133_2321673']",
            "#helpdesk_ticket_custom_field_cf_name_of_your_policy_provider610133_2321673",
            "label[for='helpdesk_ticket_custom_field_cf_policy_number832231_2321673']",
            "#helpdesk_ticket_custom_field_cf_policy_number832231_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_do_you_have_any_other_travel_insurance_policy_2321673",
          "Yes"
        );
        //theft and loss dependancy 14
        show_and_hide(
          [
            "label[for='helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card237678_2321673']",
            "#helpdesk_ticket_custom_field_cf_who_is_the_provider_of_your_credit_card237678_2321673",
            ".form-group.helpdesk_ticket_custom_field_cf_did_you_pay_for_50_or_more_of_the_trip_with_a_credit_card824584_2321673",
          ],
          "#helpdesk_ticket_custom_field_cf_how_did_you_pay_for_your_trip396837_2321673",
          "Credit Card"
        );

        date_past_present(
          "helpdesk_ticket_custom_field_cf_when_did_you_purchase_the_item_2321673"
        );
        //hide by default
        $(
          "label[for='helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673"
        ).hide();

        $(
          "label[for='helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673']"
        ).hide();
        $(
          "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673"
        ).hide();

        $(
          "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
        ).change(function () {
          if (
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "2" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "3" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "4" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "5" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "6" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "7" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "8" ||
            $(
              "#helpdesk_ticket_custom_field_cf_how_many_items_are_you_claiming_for_2321673"
            ).val() == "9"
          ) {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673"
            ).show();
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673']"
            ).show();
            $(
              "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673"
            ).show();
          } else {
            $(
              "label[for='helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_what_is_the_total_amount_youre_claiming_2321673"
            ).hide();
            $(
              "label[for='helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673']"
            ).hide();
            $(
              "#helpdesk_ticket_custom_field_cf_please_provide_a_description_the_owner_the_purchase_date_and_purchase_price_of_each_item910226_2321673"
            ).hide();
          }
        });
      }
    }
  );
});
