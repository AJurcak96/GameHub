// Like Button Script 
const hearts = document.querySelectorAll(".heart");
const animationHearts = document.querySelectorAll(".animation-heart");

hearts.forEach((heart, index) => {
  heart.addEventListener("click", () => {
    animationHearts[index].classList.add("animation");
    heart.classList.add("fill-color");
  });
});

animationHearts.forEach((animationHeart, index) => {
  animationHeart.addEventListener("click", () => {
    animationHeart.classList.remove("animation");
    animationHeart.previousElementSibling.classList.remove("fill-color");
  });
});