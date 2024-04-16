// Select the menu toggle element
const menuToggle = document.querySelector(".menu-toggle");

// Select the buttons inside the header nav link
const headerNavButtons = document.querySelectorAll(".header-nav-link button");

// Select the input field
const inputField = document.querySelector(".search-input-field");

// Function to handle clicks anywhere else on the document
function handleClickOutside(event) {
  // Check if the clicked element is not the menu toggle, its child, one of the buttons, or the input field
  if (
    !menuToggle.contains(event.target) &&
    ![...headerNavButtons, inputField].includes(event.target)
  ) {
    // Collapse the menu by removing the 'active' class from the menu toggle
    menuToggle.classList.remove("active");
  }
}

// Function to collapse the menu when the screen is resized
function handleResize() {
  // Check if the menu toggle has the 'active' class
  if (menuToggle.classList.contains("active")) {
    // Collapse the menu by removing the 'active' class from the menu toggle
    menuToggle.classList.remove("active");
  }
}

// Add click event listener to the document body to handle clicks anywhere else on the document
document.body.addEventListener("click", handleClickOutside);

// Add click event listener to the menu toggle to toggle its 'active' class
menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
});

// Add resize event listener to the window object to handle screen resizing
window.addEventListener("resize", handleResize);

// Letters displaying function
document.addEventListener("DOMContentLoaded", function () {
  function showTextLetterByLetter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.textContent = "";

    let i = 0;
    const intervalId = setInterval(function () {
      element.textContent += text[i++];
      if (i === text.length) clearInterval(intervalId);
    }, speed);
  }

  showTextLetterByLetter(
    "subText",
    "Sign up or Login and start a discussion",
    40
  );
});

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let titleForm = document.getElementById("titleForm");
let LostPassword = document.getElementById("LostPassword");
let PasswordRequirements = document.getElementById("PasswordRequirements");
let SignUpButton = document.getElementById("SignUpButton");
let SignInButton = document.getElementById("SignInButton");

signupBtn.onclick = function () {
  nameField.style.display = ""; // Restore the default display property
  LostPassword.style.display = "none";
  PasswordRequirements.style.display = "block";
  titleForm.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  LostPassword.classList.add("disable");
};

signinBtn.onclick = function () {
  nameField.style.display = "none"; // Hide the nameField
  LostPassword.style.display = "block";
  PasswordRequirements.style.display = "none";
  titleForm.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

// Update href attributes to "#" to prevent redirection
SignUpLink.href = "/Signup-Login/Signup.html";
SignInLink.href = "/Signup-Login/Login.html";

// Add click event listeners to handle the buttons
SignUpButton.addEventListener("click", function () {
  nameField.style.display = "";
  LostPassword.style.display = "";
  PasswordRequirements.style.display = "block";
  titleForm.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
});

SignInButton.addEventListener("click", function () {
  nameField.style.display = "none";
  LostPassword.style.display = "block";
  PasswordRequirements.style.display = "none";
  titleForm.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
});
