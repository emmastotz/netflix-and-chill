$(document).ready(function(){
  $("#food-input").hide();
  $("#movie-input").hide();
  $("#food-display").hide();
  $("#movie-display").hide();

  $(".netflix-logo").on("click", function(event){
    $("#food-input").show();
    $("#movie-input").hide();
    $("#food-display").hide();
    $("#movie-display").hide();

    $("#food-submit-btn").on("click", function(event){
      $("#food-input").hide();
      $("#movie-input").show();
      $("#food-display").hide();
      $("#movie-display").hide();
    });
    
    $("#movie-submit-btn").on("click", function(event){
      $("#food-input").hide();
      $("#movie-input").hide();
      $("#food-display").show();
      $("#movie-display").show();
    });
  });
});


