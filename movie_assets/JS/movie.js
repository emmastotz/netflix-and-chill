$(document).ready(function(){
    // Clickable event
    
    $('#movie-submit-btn').on('click', function(event){
        event.preventDefault();
        console.log("What is your favorite movie")
        var search = $('#searchMovie').val().trim()
        console.log('Tell me you favorite movie:    ', search)
        getSubject(search);
       
    });
    });
    
    
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
                <div class="movieEdit card">
                  <img src="${movie.Poster}">
                  <h3>${movie.Title}</h3>
                  <a onclick="movieSelected('${movie.imdbID}')" id="theMovie" class="btn btn-primary" href="#">Movie Info</a>   
                </div>  
                `;
            });
            $('#movies-output').html(movieCont);
        });
      
    }
    
    // Select a movie with link to imbID. Use movie.HTML html and use sessionStorage.
    
    function movieSelected(value){
        sessionStorage.setItem('movieId', value);
        window.location = 'movie.html';
        return false
    }
    
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
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="thumbnail">
                </div>
                <div class="col-md-8">
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
              <div class="col-md-8">
                <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
              </div>
            </div>
          `;
    
          $('#movies').html(movieChoice);
    
    
        });
    
      
    
    }