async function fetchData(index) {
  try {
    const data = await fetch("data.json").then((data) => data.json());

    generateDestinations(data.technology[index]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function generateDestinations(technology) {
  const x = window.matchMedia("(max-width: 1260px)");

  const text = document.querySelector(".text");
  const image = document.querySelector(".image");

  const title = text.querySelector("h3");
  const description = text.querySelector("p");

  image.innerHTML = "";
  if (title) {
    text.removeChild(title);
  }
  if (description) {
    text.removeChild(description);
  }

  const nameElement = document.createElement("h3");
  nameElement.innerText = technology.name;
  text.appendChild(nameElement);

  const textElement = document.createElement("p");
  textElement.textContent = technology.description;
  text.appendChild(textElement);

  const imageElement = document.createElement("img");
  if (x.matches) {
    imageElement.src = technology.images.landscape;
  } else {
    imageElement.src = technology.images.portrait;
  }
  imageElement.alt = `${technology.name} planet image`;
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
      Math.min(currentIndex + (e.key === "ArrowLeft" ? -1 : 1), 2)
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
