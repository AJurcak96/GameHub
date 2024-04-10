document.querySelector(".menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
});

// Select the menu toggle element
const menuToggle = document.querySelector(".menu-toggle");

// Select the buttons inside the header nav link
const headerNavButtons = document.querySelectorAll(".header-nav-link button");

// Function to handle clicks anywhere else on the screen
function handleClickOutside(event) {
  // Check if the clicked element is not the menu toggle, its child, or one of the buttons
  if (
    !menuToggle.contains(event.target) &&
    ![...headerNavButtons].includes(event.target)
  ) {
    // Remove the 'active' class from the menu toggle
    menuToggle.classList.remove("active");
  }
}

// Add click event listener to the document body
document.body.addEventListener("click", handleClickOutside);
