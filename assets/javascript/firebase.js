$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyDIegJe2UhHCr7-CI5NhvkJ4AsGh5zFwIM",
    authDomain: "netflix-and-chill-41f4b.firebaseapp.com",
    databaseURL: "https://netflix-and-chill-41f4b.firebaseio.com",
    projectId: "netflix-and-chill-41f4b",
    storageBucket: "",
    messagingSenderId: "317026206291",
    appId: "1:317026206291:web:5a32074206fc16e94fbca6"
  }
  
  firebase.initializeApp(config);
  var database = firebase.database();
  var user = database.ref("/user");
// ==================================================================
  // Sign-Up Function
  $("#submit-sign-up").on("click", function(event) {
    event.preventDefault();
    var username = $("#email-sign-up").val().trim();
    var password = $("#password-sign-up").val().trim();
  
    console.log("Username: " + username);
    console.log("Password: " + password);  
  
    var userData = {
      username: username,
      password: password
    };

    user.push(userData);
  });
// ==================================================================
  // Login Function
  $("#submit-login").on("click", function(event) {
    event.preventDefault();
    
    var username = $("#email-login").val().trim();
    var password = $("#password-login").val().trim();
    
    user.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        var childUserName = childData.username;
        var childPassword = childData.password;
        console.log("Username and Password: " + childUserName,childPassword);

        if ((childUserName === username) && (childPassword === password)) {
          console.log("Welcome back " + childUserName);
          var savedRecipeDiv = $("<div>");
          savedRecipeDiv.addClass("saved-recipe");
          // Call on the recipe objects saved in Firebase. Need loop?
          
          var savedMovieDiv = $("<div>");
          savedMovieDiv.addClass("saved-movie");
          // Call on the movie objects saved in Firebase. Need loop?

          $(".recipe-row").append(savedRecipeDiv);
          $(".movie-row").append(savedMovieDiv);
        }
      });
    });
    
  });
// ==================================================================
  // Save Recipes Function
  $(".save").on("click", function(event){
    var recipe = {
      recipeObject: $(".recipe").val()
    }
    console.log("You saved: " + recipe);
    //user.push(recipe);
  })

// ==================================================================
  // Save Movies Function
  $(".save-movie").on("click", function(event){
    
    var movie = {
      movieObject: $(".movieEdit").val()
    }
    console.log("You saved: " + movie);
    //user.push(movie);
  })
});