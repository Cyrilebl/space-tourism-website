const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");

let clicked = false;

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("mobile");

  if (!clicked) {
    hamburger.src = "./assets/shared/icon-close.svg";
    hamburger.style.opacity = "0.1";
    clicked = true;
  } else {
    hamburger.src = "./assets/shared/icon-hamburger.svg";
    hamburger.style.opacity = "1";
    clicked = false;
  }
});
