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
var database = firebase.database;
var user = database.ref("/userData");

$("#submit-userData").on("click", function(event) {
  event.preventDefault();
  var username = $("#email-sign-up").val().trim();
  var password = $("#password-sign-up").val().trim();

  console.log("Username: " + username);
  console.log("Password: " + password);  

  var userData = {
    username: username,
    password: password
  };
  database.push(userData);

});