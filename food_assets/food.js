$(document).ready(function(){
  var recipes = ["italian","french","seafood","vegetarian","keto","mexican","mediterranean","chinese","thai","indian","ethiopian","japanese"];
  // ================================================================  
  $(document).on("click", ".recipe-btn", function(event){
    // Use this variable to store whatever we should send to the api as the search info
    var mealButtonSelected = $(this).attr("data-name");
    
    // Other API-related stuff
    var url = 'https://api.edamam.com/search';
    var app_id = 'e5297c2f';
    var app_key = "4b3cd83b0938c956f1c7a9fba2f74101";
    var queryUrl = url + "?q=" + mealButtonSelected + "&app_id=" + app_id + "&app_key=" + app_key;
    // ================================================================
    // Make an ajax call on page load and populate a div
    $.ajax({
      url: queryUrl,
      method: "GET"
    })
    .then(function(response) {
      console.log(response.hits);
      // Create a variable for the div that holds all the individual recipe divs
      var allRecipesDiv = $(".container-recipes");
      // All recipes returned by the search are stored in response.hits
      var allRecipes = response.hits;
      // Loop through all recipes and get the info we need for each one
      for(var i = 0; i < allRecipes.length; i++){
        var recipeColDiv = $("<div>");
        // recipeColDiv.addClass("col-4");

        // Variable to hold the recipe label
        var recipeLabel = allRecipes[i].recipe.label;
        // Variable to hold the recipe image
        var thisRecipeImage = allRecipes[i].recipe.image;
        // Variable to hold the url of the recipe
        var recipeUrl = allRecipes[i].recipe.url;

        // Create div for this specific recipe
        var recipeDiv = $("<div>");
        recipeDiv.addClass("col-4");

        // Create an H4 tag for the recipe title/label
        var recipeTitle = $("<h4>");
        recipeTitle.text(recipeLabel);

        // Create an image tag for the recipe
        var recipeImage = $("<img>");
        recipeImage.attr("src", thisRecipeImage);

        // Create a button that holds the recipe url
        var recipeDetails = $("<button>");
        var recipeA = $("<a>");
        recipeA.attr("href", recipeUrl);
        recipeDetails.addClass("btn btn-secondary");
        recipeDetails.text("Details");
        recipeA.append(recipeDetails);

        // Create a button that will allow the user to save the recipe
        var recipeSave = $("<button>");
        recipeSave.addClass("btn btn-secondary save");
        recipeSave.text("Save");

        recipeDiv.append(recipeTitle);
        recipeDiv.append(recipeImage);
        recipeDiv.append(recipeDetails);
        recipeDiv.append(recipeSave);

        recipeDiv.append(recipeColDiv);
        allRecipesDiv.append(recipeDiv);
      } 
    });
  });
  // ================================================================
  // Function for displaying recipe data
  function renderButtons() {
  // Deleting the recipe buttons prior to adding new recipe
  $("#buttons-view").empty();

  // Looping through the array of recipes
    for (var i = 0; i < recipes.length; i++) {
      // Then dynamicaly generating buttons for each recipe in the array
      var a = $("<button>");
      // Adding a class of recipe-btn to our button
      a.addClass("recipe-btn");
      a.addClass("btn");
      a.addClass("btn-secondary");
      // Adding a data-attribute
      a.attr("data-name", recipes[i]);
      // Providing the initial button text
      a.text(recipes[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }
// ================================================================
  // This function handles events where a recipe button is clicked
  $("#food-submit-btn").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var recipe = $(".form-control").val().trim();
    var recipeLow = recipe.toLowerCase();

    // Adding movie from the textbox to our array
    recipes.push(recipeLow);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Calling the renderButtons function to display the intial buttons
  renderButtons();
});
// ================================================================