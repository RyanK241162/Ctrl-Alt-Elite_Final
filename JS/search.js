// Search function to redirect with query
document.querySelector('.topSearch input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query) {
            // Redirect to individualMovie.html with query as a URL parameter
            window.location.href = `individualMovie.html?query=${encodeURIComponent(query)}`;
        }
    }
});
