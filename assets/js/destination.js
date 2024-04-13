async function fetchData(index) {
  try {
    const data = await fetch("data.json").then((data) => data.json());

    generateDestinations(data.destinations[index]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function generateDestinations(destinations) {
  const image = document.querySelector(".image");
  const text = document.querySelector(".text");

  const distance = document.querySelector(".distance");
  const travel = document.querySelector(".travel");

  const ditanceData = distance.querySelector("h6");
  const travelData = travel.querySelector("h6");

  image.innerHTML = "";
  text.innerHTML = "";
  if (ditanceData) {
    distance.removeChild(ditanceData);
  }
  if (travelData) {
    travel.removeChild(travelData);
  }

  const imgElement = document.createElement("img");
  imgElement.src = destinations.images.webp;
  imgElement.alt = `${destinations.name} planet image`;
  image.appendChild(imgElement);

  const nameElement = document.createElement("h2");
  nameElement.innerText = destinations.name;
  text.appendChild(nameElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = destinations.description;
  text.appendChild(descriptionElement);

  const distanceElement = document.createElement("h6");
  distanceElement.innerText = destinations.distance;
  distance.appendChild(distanceElement);

  const travelElement = document.createElement("h6");
  travelElement.textContent = destinations.travel;
  travel.appendChild(travelElement);

  main.querySelectorAll(":not(h5):not(strong)").forEach(function (element) {
    element.classList.toggle("anim");
  });
}

////// Add active classList and change content //////

function removeActiveClass() {
  links.forEach((link) => {
    link.classList.remove("active");
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

    links[currentIndex].classList.add("active");
    fetchData(currentIndex);
  }
}

// Default content
window.onload = () => {
  fetchData(0);
};

// Content on click and keydown
let links = document.querySelectorAll(".link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
    fetchData(i);

    removeActiveClass();
    links[i].classList.add("active");
  });
}

document.addEventListener("keydown", keyboardNavigation);
