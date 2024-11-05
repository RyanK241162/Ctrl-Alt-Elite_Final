// Search function
document
  .querySelector(".topSearch input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const query = event.target.value.trim();
      if (query) {
        // Redirect to individualMovie.html with query as URL, i dont really know why that is, but google is cool
        window.location.href = `individualMovie.html?query=${encodeURIComponent(
          query
        )}`;
      }
    }
  });
