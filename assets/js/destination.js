async function fetchData(index) {
  try {
    const data = await fetch("data.json").then((data) => data.json());

    generateDestinations(data.destinations[index]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

window.onload = () => {
  fetchData(0);
};

const moon = document.querySelector(".link:nth-child(1)");
const mars = document.querySelector(".link:nth-child(2)");
const europa = document.querySelector(".link:nth-child(3)");
const titan = document.querySelector(".link:nth-child(4)");

moon.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(0);
});
mars.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(1);
});
europa.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(2);
});
titan.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(3);
});

function generateDestinations(destinations) {
  const image = document.querySelector("main img");
  const text = document.querySelector(".text");
  const distance = document.querySelector(".distance h6");
  const travel = document.querySelector(".travel h6");

  image.innerHTML = "";
  text.innerHTML = "";
  travel.innerHTML = "";
  distance.innerHTML = "";

  image.src = destinations.images.webp;
  image.alt = `${destinations.name} planet image`;

  const nameElement = document.createElement("h2");
  nameElement.innerText = destinations.name;
  text.appendChild(nameElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = destinations.description;
  text.appendChild(descriptionElement);

  distance.innerText = destinations.distance;

  travel.innerText = destinations.travel;
}
