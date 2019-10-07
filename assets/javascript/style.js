$(document).ready(function(){
  $(".get-started").show();
  $("#food-input").hide();
  $("#movie-input").hide();
  $("#food-display").hide();
  $("#movie-display").hide();
  $(".get-started").show();

  $(".netflix-logo").on("click", function(event){
    $(".get-started").hide();
    $("#food-input").show();
    $("#movie-input").hide();
    $("#food-display").hide();
    $("#movie-display").hide();

    $("#food-submit-btn").on("click", function(event){
      $(".get-started").hide();
      $("#food-input").hide();
      $("#movie-input").show();
      $("#food-display").hide();
      $("#movie-display").hide();
    });
    
    $("#movie-submit-btn").on("click", function(event){
      $(".get-started").hide();
      $("#food-input").hide();
      $("#movie-input").hide();
      $("#food-display").show();
      $("#movie-display").show();
    });
  });
});


