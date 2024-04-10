// Configure the navigation bar for smartphones
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

// Add activeNav classlist on navigation bar
const navLinks = document.querySelectorAll("nav a");
const windowPathName = window.location.pathname;

navLinks.forEach((navLink) => {
  const navLinkPathName = new URL(navLink.href).pathname;
  if (windowPathName === navLinkPathName) {
    navLink.classList.add("activeNav");
  }
});
