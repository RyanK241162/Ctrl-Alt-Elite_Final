//This script is completely hyperthetical as the current html and css setup makes it almost impossible to implement ( I would have to almost completely rewrite the html and css aleady created)

// Function to add a movie to the watchlist
function addToWatchlist(movie) {
    // Movie data (hypothetical structure)
    const movieData = {
        title: movie.title,
        posterUrl: movie.posterUrl
    };

    // This should get the current watchlist from LocalStorage or create an array if it cant find anything
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist.push(movieData);

    // Save the updated watchlist back to localStorage
    localStorage.setItem('watchlist', JSON.stringify(watchlist));

    console.log(`${movie.title} added to watchlist!`);
}

function displayWatchlist() {
    // Get the watchlisl
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    // Hypothetical container for displaying watchlist items
    const watchlistContainer = document.getElementById('watchlist-container'); // Ensure this ID exists in your HTML

    //goodbye dupes
    watchlistContainer.innerHTML = '';

    // Loop through the watchlist and create elements for each movie
    watchlist.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card'); // Hypothetical class

        const moviePoster = document.createElement('img');
        moviePoster.src = movie.posterUrl;
        moviePoster.alt = `${movie.title} Poster`;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        watchlistContainer.appendChild(movieCard);
    });
}
