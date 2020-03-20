$(document).ready(function () {

//gallery
  $("#next").on("click", function() {

    if ($("#haven-shabbat").is(":visible")) {
      $("#haven-shabbat").addClass("hidden");
      $("#haven-pumpkin").removeClass("hidden");
    } else if ( $("#haven-pumpkin").is(":visible")) {
      $("#haven-pumpkin").addClass("hidden");
      $("#haven-month").removeClass("hidden");
    } else if ( $("#haven-month").is(":visible")) {
      $("#haven-month").addClass("hidden");
      $("#haven-coming-out").removeClass("hidden");
    } else if ( $("#haven-coming-out").is(":visible")) {
      $("#haven-coming-out").addClass("hidden");
      $("#haven-shabbat").removeClass("hidden");
    }
  });

//mailing list options: when user selects yes
  $("#mailyes").on("input", function(){
    console.log("Mailing list selected");
    $("#mail-question").removeClass("hidden");
    $(".question").attr("required", true);
  })

//when user selects no
  $("#mailno").on("input", function(){
    console.log("Mailing List not selected");
    $("#mail-question").addClass("hidden");
    $(".question").attr("required", true);
  })

//Form validation, for when user submits form

  $("#feedbackForm").on("submit", function() {
    var formValid = true;
console.log(formValid);

//check if name is valid
  if ( $("#userName").prop("validity").valid) {
    $("#userNameError").addClass("hidden");
  } else {
    $("#userNameError").removeClass("hidden");
    formValid = false;
  }

//check if email is valid
  if ( $("#userEmail").prop("validity").valid) {
    $("#emailError").addClass("hidden");
  } else {
    $("#emailError").removeClass("hidden");
    formValid = false;
  }
//
// //check if mail letter subscription is answered
  if ( $("#mailyes").is(':checked') || $("#mailno").is(':checked')){
    $("#mailError").addClass("hidden");
  } else {
    $("#mailError").removeClass("hidden");
    formValid = false;
  }

//check at least one suborg is checked
  if ($("#ace").is(':checked') || $("#cba").is(':checked') || $("#crunch").is(':checked')|| $("#gavah").is(':checked')|| $("#lav").is(':checked')|| $("#mosiac").is(':checked')|| $("#out").is(':checked')|| $("#qpa").is(':checked')|| $("#oasis").is(':checked')|| $("#rain").is(':checked')|| $("#tango").is(':checked')){
    $("#suborgError").addClass("hidden");
  } else {
    $("#suborgError").removeClass("hidden");
    formValid = false;
  }

//send form to server if valid
  console.log("Submission attempted");
  return formValid;
  });

});
