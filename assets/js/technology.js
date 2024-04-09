async function fetchData(index) {
  try {
    const data = await fetch("data.json").then((data) => data.json());

    generateDestinations(data.technology[index]);
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

function generateDestinations(technology) {
  const x = window.matchMedia("(max-width: 1360px)");

  const title = document.querySelector(".text h3");
  const text = document.querySelector(".text p");
  const image = document.querySelector("main img");

  image.innerHTML = "";
  text.innerHTML = "";

  title.innerText = technology.name;

  text.innerText = technology.description;

  if (x.matches) {
    image.src = technology.images.landscape;
  } else {
    image.src = technology.images.portrait;
  }
  image.alt = `${technology.name} planet image`;
}
