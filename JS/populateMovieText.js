const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "C2zTxZ8U8Mmx37xMJiO2vR-DkgsfDErhw0nljLPYFn7Nud2ut6");
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "06344c37-2a53-4936-be17-34568bdc31ab");
myHeaders.append("Content-Type", "application/json");

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to load queried movie and display details
function loadQueriedMovie() {
  const query = getQueryParam('query');
  if (query) {
      fetchMovieData(query).then(data => {
          if (data.movies && data.movies.length > 0) {
              populateMovieDetails(data.movies[0]); // Display the first matching result
          } else {
              console.error('No movie found for the query:', query);
          }
      });
  }
}

function fetchMovieData(query) {
  const raw = JSON.stringify({ "query": query }); // Request payload
  const requestOptions = { method: "POST", headers: myHeaders, body: raw, redirect: "follow" };

  // Fetch movie data
  fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/search-movies-by-query", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log("API Data:", data);
      // Check if `data.d` exists and has at least one movie
      if (data.d && data.d.length > 0) {
        populateMovieDetails(data.d[0]); // Use the first movie in `d` array
      } else {
        console.error('No movies found for the query:', query);
      }
    })
    .catch(error => console.error('Error fetching movie data:', error));
}
  
  function populateMovieDetails(movie) {
    // Populate title if .name element exists
    const titleElement = document.querySelector('.name');
    if (titleElement) titleElement.innerText = movie.l; // title is under `l`
  
    // Populate timeline if .movie-length element exists (no exact match in API, so skipping)
    const lengthElement = document.querySelector('.movie-length');
    if (lengthElement) lengthElement.innerText = "N/A"; // Placeholder as timeline isn’t provided
  
    // Populate release year if .movie-year element exists
    const yearElement = document.querySelector('.movie-year');
    if (yearElement) yearElement.innerText = movie.y; // year is under `y`
  
    // Populate IMDb rating if .movie-rating element exists
    const ratingElement = document.querySelector('.movie-rating');
    if (ratingElement) ratingElement.innerText = movie.rank || "N/A"; // rank as a placeholder for rating
  
    // Set the poster image if `.movie-poster` element exists (optional)
    const posterImage = document.querySelector('.moviePoster img');
    if (posterImage) posterImage.src = movie.i.imageUrl; // Set new src from API result

    const descriptionElement = document.querySelector('.description');
    if (descriptionElement) {
        descriptionElement.innerText = movie.s ? `Main Actors: ${movie.s}` : "Main Actors: N/A"; // Display main actors
    }

    
  }
  document.addEventListener('DOMContentLoaded', loadQueriedMovie);