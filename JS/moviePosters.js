const myHeaders = new Headers();
myHeaders.append(
  "x-apihub-key",
  "D5jgFjdgUucCeXb1TNpXK8EsLsNY8rEVLnsIuIPY4ueFx5x0l4"
);
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "d3ee0b1f-e51c-46bc-99eb-c660726b0a1b");

fetch(
  "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-250-movies",
  {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
)
  .then((response) => response.json())
  .then((data) => displayMoviePosters(data))
  .catch((error) => console.error("Error fetching top movies:", error));

function displayMoviePosters(data) {
  const movieElements = document.querySelectorAll(".movie"); // get all `.movie` elements
  const movies = data.movies; // get the movies array from API data

  movies.slice(0, movieElements.length).forEach((movie, i) => {
    // apply poster as background for each element
    const posterUrl = movie.image;
    if (posterUrl) {
      movieElements[i].style.backgroundImage = `url(${posterUrl})`;
      movieElements[i].style.backgroundSize = "cover";
      movieElements[i].style.backgroundPosition = "center";
    }
  });
}
