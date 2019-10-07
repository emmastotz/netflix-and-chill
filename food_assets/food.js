$(document).ready(function(){
    var recipes = ["italian","french","seafood","vegetarian","keto","mexican","mediterranean","chinese","thai","indian","ethiopian","japanese"];
    // Handles whenever user submits a search of food choices 
    
    $(document).on("click", ".recipe-btn", function(event){
        // Use this variable to store whatever we should send to the api as the search info
        var mealButtonSelected = $(this).attr("data-name");
        
        // Other API-relatwed stuff
        var url = 'https://api.edamam.com/search';
        var app_id = 'e5297c2f';
        var app_key = "4b3cd83b0938c956f1c7a9fba2f74101";
        var queryUrl = url + "?q=" + mealButtonSelected + "&app_id=" + app_id + "&app_key=" + app_key;
        
        // Make an ajax call on page load and populate a div
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function(response) {
            console.log(response.hits);
            
            // Create a variable for the div that holds all the individual recipe divs
            var allRecipesDiv = $(".recipe");

            // All recipes returned by the search are stored in response.hits
            var allRecipes = response.hits;

            // Loop through all recipes and get the info we need for each one
            for( var i=0; i < allRecipes.length; i++ ){
                var thisRecipeLabel = allRecipes[i].recipe.label;
                var thisRecipeImage = allRecipes[i].recipe.image;

                // Create div for this specific recipe
                var recipeDiv = $("<div>");
                recipeDiv.addClass('recipe-item');

                // Create an H3 tag for the recipe title/label
                var recipeTitle = $("<h3>");
                recipeTitle.text(thisRecipeLabel);

                // Create an image tag for the recipe
                var recipeImage = $("<img>");
                recipeImage.attr("src", thisRecipeImage);

                recipeDiv.append(recipeTitle);
                recipeDiv.append(recipeImage);

                allRecipesDiv.append(recipeDiv);
            } 
        });
    });
    // End of food-search function

    // Function for displaying recipe data
    function renderButtons() {
        // Deleting the recipe buttons prior to adding new recipe 
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of recipes
        for (var i = 0; i < recipes.length; i++) {
            // Then dynamicaly generating buttons for each recipe in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. 
            // (<button></button>)
            var a = $("<button>");
            // Adding a class of movie-btn to our button
            a.addClass("recipe-btn");
            a.addClass("btn");
            a.addClass("btn-secondary");
            // Adding a data-attribute
            a.attr("data-name", recipes[i]);
            a.attr("id", "food-submit-btn");
            // Providing the initial button text
            a.text(recipes[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
            console.log(a);
        }
    }

    // This function handles events where a recipe button is clicked
    $(".recipe-btn").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var recipe = $("#food-input").val().trim();

        // Adding movie from the textbox to our array
        recipes.push(recipe);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

    // Adding a click event listener to all elements with a class of "recipe-btn"
    // $(document).on("click", ".recipe-btn", displayRecipeInfo);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();
});