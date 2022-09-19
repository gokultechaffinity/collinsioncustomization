jQuery(document).ready(function ($) {
  console.log("entering --->");
  let AuthorizationKey = "";
  getJWTToken();
  function getJWTToken() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    fetch(
      "https://pintstg.techaffinity.us/collinson-app/authenticate?username=techaffinity&password=cTkdpBQe02QvMkwZ0jCB",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        AuthorizationKey = JSON.parse(result).token;
        console.log("--->", AuthorizationKey);
        //ValidateBankMethodOne()
        // ValidateBankMethodTwo()
      })
      .catch((error) => console.log("error", error));
  }
  //email verification function
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  //get date today
  var today = new Date();

  $(".form-group.helpdesk_ticket_email").hide();

  //____________________________________________________SECTION 1 Start - Your Policy______________________________________________
  $("#new_helpdesk_ticket").wrapAll('<div id="accordion">');
  //identify Policy Number Parent DIV
  var PolicyNumberParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_policy_number_2321673"
  ).parentElement;
  // add for-section-1 tag
  PolicyNumberParent.classList.add("for-section-1");
  //identify DOB Parent DIV
  var DOBParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_date_of_birth_2321673"
  ).parentElement;
  // add for-section-1 tag
  DOBParent.classList.add("for-section-1");
  //add save and continue button - add section 1
  $(
    '<button id="save_and_continue1" class="btn btn-primary for-section-1 save_and_continue" type="button">Find Policy</button>'
  ).insertAfter("#helpdesk_ticket_custom_field_cf_date_of_birth_2321673");
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
  $(
    '<button id="save_and_continue2" class="btn btn-primary for-section-2 save_and_continue" type="button" >Save & Continue</button>'
  ).insertAfter("#helpdesk_ticket_custom_field_cf_mobile_number_2321673");
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
  $(
    '<button id="save_and_continue3" class="btn btn-primary for-section-3 save_and_continue" type="button" >Save & Continue</button>'
  ).insertAfter(
    ".form-group.helpdesk_ticket_custom_field_cf_reason_for_claim_2321673.for-section-3"
  );

  //____________________________________________________SECTION 4 Start - Tell us what happened____________________________________________
  $(
    ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
  ).addClass("for-section-4");
  $(
    '<button id="save_and_continue4" class="btn btn-primary for-section-4 save_and_continue" type="button">Save &amp; Continue</button>'
  ).insertAfter(
    ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
  );
  //____________________________________________________SECTION 5 Start - Your Documents____________________________________________
  //for-section-5 attachment group
  //___________________________________new_section 5_______________________________________________________

  $(
    '<div id="mock-doc" class="form-group attachments-container for-section-5"><span class="d-none"><input id="upload_file" type="file" multiple="false"><input id="files_list" type="file" name="helpdesk_ticket[attachments][][resource]" multiple="false"></span><div class="dropdown"><button class="btn btn-link " type="button" id="attach_btn" data-attach-type="file"><span class="file-upload-btn" tabindex="0"><img data-src="/glyphs/vectors/attachment.svg" loading="lazy" alt="Attachment" class="icon ls-is-cached lazyloaded" src="/glyphs/vectors/attachment.svg">Attachment</span></button><ul class="dropdown-menu" aria-labelledby="attach_btn"><li><a class="dropdown-item" href="#" data-attach-type="file">Attach a file</a></li></ul></div><div id="attachments_list" class="files-container"></div><div><div id="cumulative_error_heading" class="error-heading"></div><div id="cumulative_error_attachments_list" class="files-container"></div></div><div><div id="individual_error_heading" class="error-heading"></div><div id="individual_error_attachments_list" class="files-container"></div></div></div>'
  ).insertAfter(
    ".helpdesk_ticket_custom_field_cf_reason_for_claim_2321673_section_wrapper"
  );
  $(".form-group.attachments-container").addClass("for-section-5");
  $(
    '<button class="save_and_continue5 btn btn-primary for-section-5 save_and_continue" type="button" >Save & Continue</button>'
  ).insertAfter(".form-group.attachments-container.for-section-5");
  $("#mock-doc").remove();
  $(".save_and_continue5").first().hide();

  // addImages();
  //____________________________________________________SECTION 6 Start - payment details____________________________________________
  var accHolderParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_name_of_account_holder_2321673"
  ).parentElement;
  accHolderParent.classList.add("for-section-6");
  var SortCodeParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_sort_code659991_2321673"
  ).parentElement;
  SortCodeParent.classList.add("for-section-6");
  var AccNumParent = document.getElementById(
    "helpdesk_ticket_custom_field_cf_account_number_2321673"
  ).parentElement;
  AccNumParent.classList.add("for-section-6");
  var ibanNumber = document.getElementById(
    "helpdesk_ticket_custom_field_cf_iban_number_2321673"
  ).parentElement;
  ibanNumber.classList.add("for-section-6");
  //save and continue 6
  $(
    '<button id="save_and_continue6" class="btn btn-primary for-section-6 save_and_continue" type="button" >Save & Continue</button>'
  ).insertAfter(SortCodeParent);

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

  //invoke!
  for (var i = 0; i < titles.length; ++i) {
    thisDiv(i + 1, titles[i]);
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
    var attr1 = $(this).attr("aria-expanded");

    if (attr1 == "true") {
      $(this).children(":first").removeClass("fa-minus");
      $(this).children(":first").addClass("fa-plus");
    } else {
      if ($(this).attr("data-toggle")) {
        $(this).children(":first").removeClass("fa-plus");
        $(this).children(":first").addClass("fa-minus");
      } else {
        //do nothing
        console.log("Open condition right here!");
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
      $(
        '<p id="summary_intro">Please take a moment to double check your information - accuracy helps us process your claim quickly.</p>'
      ).insertBefore(".form-group.helpdesk_ticket_email.for-section-7");
    }
  }

  //BY DEFAULT -  add attribute to section-1-button and section-7-button
  $("#section-1-button").attr("data-toggle", "collapse");
  $("#section-7-button").attr("data-toggle", "collapse");

  //________________________________________________________________________________________________________________________________
  //section 1 continue
  //on CHANGE OF DATE OF BIRTH - check any of the two inputs is empty, if it is remove attr, else add it
  $("#save_and_continue1").click(function () {
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
          getPolicyDetails(policyNumber, dateOfBirth);
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
      //grey out continue - opposite
      $("#continue").css("background-color", "#38133E");
    } else {
      $("#continue").removeAttr("data-dismiss");
      //grey out continue
      $("#continue").css("background-color", "grey");
      $("#continue").removeAttr("data-dismiss");
    }
  });
  function getPolicyDetails(policyNumber, dateOfBirth) {
    var myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Authorization", AuthorizationKey);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      "https://pintstg.techaffinity.us/collinson-app/api/policy?policyNumber=" +
        policyNumber +
        "%25&dob=" +
        dateOfBirth,
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        if (JSON.parse(result).status != 401) {
          buildPolicyUI(result);
        } else {
          getJWTToken();
          $("#save_and_continue1").trigger("click");
        }
      })
      .catch((error) => console.log("error", error));
  }
  function buildPolicyUI(policyData) {
    let policyDetails = JSON.parse(policyData).Insured;
    let InternalPolicyNumber = JSON.parse(policyData).InternalPolicyNumber;
    let options = "";
    options +=
      '<div class="form-group"><label class="form-label"> Name(s) of the Insured</label>';
    policyDetails.forEach(function (element, index) {
      options +=
        '<div class="list-claim"><input type="checkbox" class="" id=' +
        index +
        ' name="insured_1" data-clientId=' +
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
    $("#collapseSection2 .card-body").prepend(options);
  }
  //on click of agreement check box- check if checked or not- if checked enable continue button otherwise disable
  $("#cb").click(function () {
    if ($("#cb").prop("checked") == true) {
      //ad attribute to dismiss modal
      $("#continue").attr("data-dismiss", "modal");
      //grey out continue - opposite
      $("#continue").css("background-color", "#38133E");
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
          open_next(2);

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
            var number_elements = $("#collapseSection2")
              .children(".card-body.ins-card")
              .children("div").length;

            for (let i = 1; i < number_elements + 1; i++) {
              var label = $("#collapseSection2")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("label")
                .text();
              var value = $("#collapseSection2")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("input")
                .val();
              $(
                "<p class='section_2_line'>" + label + " : " + value + "</p>"
              ).insertBefore("#great_line_2");
            }
          }

          function update_section_2() {
            //for loops
            var number_elements = $("#collapseSection2")
              .children(".card-body.ins-card")
              .children("div").length;
            $("p").remove(".section_2_line");
            for (let i = 1; i < number_elements + 1; i++) {
              var label = $("#collapseSection2")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("label")
                .text();
              var value = $("#collapseSection2")
                .children(".card-body.ins-card")
                .children("div:nth-child(" + i + ")")
                .children("input")
                .val();
              $(
                "<p class='section_2_line'>" + label + " : " + value + "</p>"
              ).insertBefore("#great_line_2");
            }
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
          claimObject["incidentCountryCode"] = $(
            "#helpdesk_ticket_custom_field_cf_your_destination_2321673"
          ).val();
          claimObject["incidentDate"] = $(
            "#helpdesk_ticket_custom_field_cf_your_incident_date_2321673"
          ).val();
          claimObject["coverCause"] = $(
            "#helpdesk_ticket_custom_field_cf_reason_for_claim_2321673"
          ).val();
          claimObject["clientId"] = $("#" + i).attr("data-clientId");
          claimObject["InternalPolicyNumber"] = $("#" + i).attr(
            "data-PolicyNumber"
          );
          createClaimRequest(claimObject);
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
  function createClaimRequest(claimObject) {
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

    fetch(
      "https://pintstg.techaffinity.us/collinson-app/api/claim",
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log("claim response created -->", result);
        //if(JSON.parse(result).status==401){
        //   getJWTToken();
        // $( "#save_and_continue3" ).trigger( "click" );
        // }
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
      update_section_4();
    } else {
      add_section_4();
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
    function add_section_5() {
      $("<strong id='section_5_header'>" + titles[4] + "</strong>").insertAfter(
        "#great_line_4"
      );
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

    if ($("#section_5_header").length) {
      update_section_5();
    } else {
      add_section_5();
    }
    open_next(5);
  });

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
