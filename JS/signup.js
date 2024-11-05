document.querySelector('.signup-submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const usernameInput = document.getElementById('signup-username'); 
    const passwordInput = document.getElementById('signup-password'); 
    const feedback = document.querySelector('.feedback-message'); 

    // check both fields have input
    if (!usernameInput.value || !passwordInput.value) {
        feedback.textContent = "Please enter both a username and password.";
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Retrieve current "loggedUsers" data from localStorage
    let loggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || {};

    // Check if username already exists in local storage"
    if (loggedUsers[username]) {
        feedback.textContent = "Username already exists. Please choose a different one.";
    } else {
        // Add new username and password to local storage
        loggedUsers[username] = password;

        // Save updated "loggedUsers" back to localStorage
        localStorage.setItem('loggedUsers', JSON.stringify(loggedUsers));

        feedback.textContent = "Signup successful! Redirecting...";

         //Short delay cause im cool like that
        setTimeout(() => {
            window.location.href = 'movieLibrary.html';
        }, 1000);
    }
});
