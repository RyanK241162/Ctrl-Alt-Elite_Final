const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "D5jgFjdgUucCeXb1TNpXK8EsLsNY8rEVLnsIuIPY4ueFx5x0l4");
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "06344c37-2a53-4936-be17-34568bdc31ab");
myHeaders.append("Content-Type", "application/json");

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
    const posterElement = document.querySelector('.movie-poster');
    if (posterElement) posterElement.style.backgroundImage = `url(${movie.i.imageUrl})`;
  }