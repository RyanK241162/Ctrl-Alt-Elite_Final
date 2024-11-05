document
  .querySelector(".login-submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");
    const feedback = document.getElementById("feedback-message");

    // check both fields have input
    if (!usernameInput.value || !passwordInput.value) {
      feedback.textContent = "Please enter both username and password.";
      return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    //Data from local storage
    const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers")) || {};

    // Check if username exists and password matches
    if (loggedUsers[username] === password) {
      feedback.textContent = "Login successful! Redirecting...";

      //Short delay cause im cool like that
      setTimeout(() => {
        window.location.href = "movieLibrary.html";
      }, 1000);
    } else {
      feedback.textContent = "Credentials do not match an existing user.";
    }
  });
