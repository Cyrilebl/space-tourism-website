async function fetchData(index) {
  try {
    const data = await fetch("data.json").then((data) => data.json());

    generateDestinations(data.crew[index]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

window.onload = () => {
  fetchData(0);
};

const firstBtn = document.querySelector(".btn:nth-child(1)");
const secondBtn = document.querySelector(".btn:nth-child(2)");
const thirdBtn = document.querySelector(".btn:nth-child(3)");
const fourthBtn = document.querySelector(".btn:nth-child(4)");

firstBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(0);
});
secondBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(1);
});
thirdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(2);
});
fourthBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(3);
});

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
}
