async function fetchData(index) {
  try {
    const data = await fetch("data.json").then((data) => data.json());

    generateDestinations(data.crew[index]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function generateDestinations(crew) {
  const text = document.querySelector(".text");
  const image = document.querySelector(".image");

  image.innerHTML = "";
  text.innerHTML = "";

  const roleElement = document.createElement("h4");
  roleElement.innerText = crew.role;
  text.appendChild(roleElement);

  const nameElement = document.createElement("h3");
  nameElement.innerText = crew.name;
  text.appendChild(nameElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = crew.bio;
  text.appendChild(descriptionElement);

  const imageElement = document.createElement("img");
  imageElement.src = crew.images.webp;
  imageElement.alt = `${crew.name} planet image`;
  image.appendChild(imageElement);

  main.querySelectorAll(":not(h5):not(strong)").forEach(function (element) {
    element.classList.toggle("anim");
  });
}

////// Add active classList and change content //////

function removeActiveClass() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

let currentIndex = 0;

// Function to handle navigation with keyboard
function keyboardNavigation(e) {
  // Check if left or right arrow key is pressed
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    removeActiveClass();

    // Update currentIndex with constraint
    currentIndex = Math.max(
      0,
      Math.min(currentIndex + (e.key === "ArrowLeft" ? -1 : 1), 3)
    );

    btns[currentIndex].classList.add("active");
    fetchData(currentIndex);
  }
}

// Default content
window.onload = () => {
  fetchData(0);
};

// Content on click and keydown
let btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    fetchData(i);

    removeActiveClass();
    btns[i].classList.add("active");
  });
}

document.addEventListener("keydown", keyboardNavigation);
