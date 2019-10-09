$(document).ready(function(){
  // Clickable event
  $('form').on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });
  $('#movie-submit-btn').on('click', function(event){
      event.preventDefault();
      // console.log("What is your favorite movie")
      var search = $('#searchMovie').val().trim()
      // console.log('Tell me you favorite movie:    ', search)
      getSubject(search);
  });
});
// ============================================================    
// pull API from OMBb.Use each loop and template string to append new elements.
apikey= "47aab339"
var queryURL = "http://www.omdbapi.com/?apikey=47aab339";
function getSubject(search){
  console.log(search);
  $.ajax({
    url: queryURL + "&s=" + search,
    method: "GET"
  }).then(function(response){
    console.log(response);
    var movies = response.Search;
    var movieCont = "";
    $.each(movies, function(index, movie){
      console.log(index +" :"+ movie)
      movieCont +=`
      <div class="movieEdit card-body col-4">
        <img src="${movie.Poster}">
        <a onclick="movieSelected('${movie.imdbID}')" id="theMovie" class="btn btn-secondary" href="#">Details</a>  
        <button class="btn btn-secondary save-movie col-text-center">Save</button>
      </div> 
      `;
    });
    $('#movies-output').html(movieCont);
  });
}
// ============================================================ 
// Select a movie with link to imbID. Use movie.HTML html and use sessionStorage.
function movieSelected(value){
  sessionStorage.setItem('movieId', value);
  window.location = 'movie.html';
  return false
}
// ============================================================ 
function getMovie(){
  var movieSelected = sessionStorage.getItem('movieId');
  $.ajax({
    url: queryURL + "&i=" + movieSelected,
    method: "GET"
  }).then(function(response){
    console.log(response);
    var movie= response;
    console.log(movie);
    var movieChoice =`
    <div class="container">
      <div class="row" id="movie-additional-info">
        <div class="col-md-6">
          <img src="${movie.Poster}" class="thumbnail">
        </div>
        <div class="col-md-6">
          <h2>${movie.Title}</h2>
          <ul class="list-group">
            <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
            <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
            <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
            <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
            <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
            <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
          </ul>
        </div>
        <div class="col-md-6">
          <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-secondary">View IMDB</a>
          <a href="home.html" target="_blank" class="btn btn-secondary" id="back">Back</a>
        </div>
      </div>
    </div>
  `;

  $('#movies').html(movieChoice);


  });

  

}