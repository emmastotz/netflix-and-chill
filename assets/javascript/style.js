$(document).ready(function() {
  $("#food-input").show();
  $("#movie-input").hide();
  $("#food-display").hide();
  $("#movie-display").hide();
  $(".container-user-info").show();
  $(".container-sign-up").hide();
  $(".container-login").hide();
  $(".saved-items-container").hide();

  $(document).on("click", ".recipe-btn", function(event){
    // $(".get-started").hide();
    $("#food-input").hide();
    $("#movie-input").show();
    $("#food-display").hide();
    $("#movie-display").hide();
    $(".container-user-info").show();
    $(".container-sign-up").hide();
    $(".container-login").hide();
    $(".saved-items-container").hide();
  });
    
  $("#movie-submit-btn").on("click", function(event){
    // $(".get-started").hide();
    $("#food-input").hide();
    $("#movie-input").hide();
    $("#food-display").show();
    $("#movie-display").show();
    $(".container-user-info").show();
    $(".container-sign-up").hide();
    $(".container-login").hide();
    $(".saved-items-container").hide();
  });

  $("#back").on("click", function(event){
    // $(".get-started").hide();
    $("#food-input").hide();
    $("#movie-input").hide();
    $("#food-display").show();
    $("#movie-display").show();
    $(".container-user-info").show();
    $(".container-sign-up").hide();
    $(".container-login").hide();
    $(".saved-items-container").hide();
  });

  // Sign Up ================================
  $(".sign-up").on("click", function(event) {
    // $(".get-started").hide();
    $("#food-input").hide();
    $("#movie-input").hide();
    $("#food-display").hide();
    $("#movie-display").hide();
    $(".container-user-info").hide();
    $(".container-sign-up").show();
    $(".container-login").hide();
    $(".saved-items-container").hide();
  });

  $("#submit-sign-up").on("click", function(event) {
    // $(".get-started").hide();
    $("#food-input").show();
    $("#movie-input").hide();
    $("#food-display").hide();
    $("#movie-display").hide();
    $(".container-user-info").show();
    $(".container-sign-up").hide();
    $(".container-login").hide();
    $(".saved-items-container").hide();
  })

  // Log In ================================
  $(".login").on("click", function(event) {
    // $(".get-started").hide();
    $("#food-input").hide();
    $("#movie-input").hide();
    $("#food-display").hide();
    $("#movie-display").hide();
    $(".container-user-info").hide();
    $(".container-sign-up").hide();
    $(".container-login").show();
    $(".saved-items-container").hide();
  });
  
  $("#submit-login").on("click", function(event) {
    // $(".get-started").hide();
    $("#food-input").hide();
    $("#movie-input").hide();
    $("#food-display").hide();
    $("#movie-display").hide();
    $(".container-user-info").hide();
    $(".container-sign-up").hide();
    $(".container-login").show();
    $(".saved-items-container").hide();
  });
});


