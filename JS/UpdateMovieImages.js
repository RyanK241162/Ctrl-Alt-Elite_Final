
function updateMovieImages(genre) {
  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "C2zTxZ8U8Mmx37xMJiO2vR-DkgsfDErhw0nljLPYFn7Nud2ut6"
  );
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "dae9e3d3-6b6c-4fde-b298-ada2806ae563");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/get-by-genre?genre=${genre}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const movies = data.movies;

      // Select all img with 'movie' tag
      const imgElements = document.querySelectorAll("td.movie img");

      // Update imgs
      imgElements.forEach((img, index) => {
        if (movies[index] && movies[index].image) {
          img.src = movies[index].image;
          img.alt = movies[index].title; // alt text cause im cool like that
        }
      });
    })
    .catch((error) => console.error("Error fetching movie data:", error));
}

//CURRENTLY IMPOSSIBLE TO IMPLEMENT DUE TO HTML AND CSS :(
function updateMovieTitles(genre) {
  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "C2zTxZ8U8Mmx37xMJiO2vR-DkgsfDErhw0nljLPYFn7Nud2ut6"
  );
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "dae9e3d3-6b6c-4fde-b298-ada2806ae563");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/get-by-genre?genre=${genre}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const movies = data.movies;
      const imgElements = document.querySelectorAll("td.movie img");

      imgElements.forEach((img, index) => {
        if (movies[index] && movies[index].title) {
          let titleElement = img.nextElementSibling;
          if (
            !titleElement ||
            !titleElement.classList.contains("movie-title")
          ) {
            //movie-title is a real thing lol
            titleElement = document.createElement("div");
            titleElement.classList.add("movie-title");
            img.parentNode.appendChild(titleElement);
          }
          titleElement.textContent = movies[index].title; // Set title text
        }
      });
    })
    .catch((error) => console.error("Error fetching movie data:", error));
}

function updateTopMovies() {
  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "C2zTxZ8U8Mmx37xMJiO2vR-DkgsfDErhw0nljLPYFn7Nud2ut6"
  );
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "d3ee0b1f-e51c-46bc-99eb-c660726b0a1b");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-250-movies",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const movies = data.movies;
      const imgElements = document.querySelectorAll("td.movie-rec img");

      imgElements.forEach((img, index) => {
        if (movies[index] && movies[index].image) {
          img.src = movies[index].image;
          img.alt = movies[index].title; //alt text cause im cool like that
        }
      });
    })
    .catch((error) => console.error("Error fetching top movies:", error));
}
