const API_URL = "https://planets-api.vercel.app/api/v1/planets/";

const listItem = document.querySelector(".list-item");
const headingPrimary = document.querySelector(".heading-primary");
const infoText = document.querySelector(".info-text");
const source = document.querySelector(".source1");
const rotationDays = document.querySelector("#rotation-days");
const revolutionDays = document.querySelector("#revolution-days");
const radius = document.querySelector("#radius-km");
const averTemp = document.querySelector("#average-temp");

const planetPicture = document.querySelector(".img");
const structure = document.querySelector("#structure");
const overview = document.querySelector("#overview");
const surface = document.querySelector("#surface");

const activeBtn = document.querySelector("btn");

const overviewHighlight = document.querySelector(".overview-info");
const structureHighlight = document.querySelector(".structure-info");
const surfaceHighlight = document.querySelector(".surface-info");

const getPlanet = async (name = "Mercury") => {
  const response = await fetch(API_URL + name);
  const data = await response.json();
  render(data);
  console.log(data);
};

const render = (data) => {
  planetPicture.innerHTML = `<img class="planet-picture"
  src= "${data.images.planet}" />`;
  headingPrimary.textContent = data.name.toUpperCase();
  const planetDetails = (infoText.textContent = data.overview.content);
  source.href = `${data.overview.source}`;
  rotationDays.textContent = data.rotation;
  revolutionDays.textContent = data.revolution;
  radius.textContent = data.radius;
  averTemp.textContent = data.temperature;
  console.log(data);

  structure.addEventListener("click", () => {
    infoText.textContent = data.structure.content;
    source.href = `${data.structure.source}`;
    planetPicture.innerHTML = `  <img class="planet-picture"
  src= "${data.images.internal}" />`;
    structureHighlight.classList.add("btn-active");
    surfaceHighlight.classList.remove("btn-active");
    overviewHighlight.classList.remove("btn-active");
  });

  surface.addEventListener("click", () => {
    infoText.textContent = data.geology.content;
    source.href = `${data.geology.source}`;
    planetPicture.innerHTML = `
  <img class="geology-pic"
  src= "${data.images.geology}" />
  <img class="planet-picture" src= "${data.images.planet}" />   `;
    surfaceHighlight.classList.add("btn-active");
    overviewHighlight.classList.remove("btn-active");
    structureHighlight.classList.remove("btn-active");
  });
  overview.addEventListener("click", () => {
    infoText.textContent = data.overview.content;
    source.href = `${data.overview.source}`;
    planetPicture.innerHTML = `<img class="planet-picture"
  src= "${data.images.planet}" />
  `;
    overviewHighlight.classList.add("btn-active");
    structureHighlight.classList.remove("btn-active");
    surfaceHighlight.classList.remove("btn-active");
  });
};
getPlanet();

const planets = document.querySelectorAll(".list-item");

for (let i = 0; i < planets.length; i++) {
  const activePlanet = planets[i];
  activePlanet.addEventListener("click", () => {
    getPlanet((name = activePlanet.textContent));
    console.log(activePlanet.textContent);

    if (overviewHighlight.classList.contains("btn-active")) {
      overviewHighlight.classList.remove("btn-active");
    }
    if (structureHighlight.classList.contains("btn-active")) {
      structureHighlight.classList.remove("btn-active");
    }
    if (surfaceHighlight.classList.contains("btn-active")) {
      surfaceHighlight.classList.remove("btn-active");
    }
  });
}

const navMenu = document.querySelector(".menu-bar");
const navBtn = document.querySelector(".menu-icon");
const navMenuItem = document.querySelector(".menu-item");
const planet = document.querySelector(".menu-planet");
const venus = document.querySelector(".VENUS");
const earth = document.querySelector(".EARTH");
const mars = document.querySelector(".MARS");
const jupiter = document.querySelector(".JUPITER");
const saturn = document.querySelector(".SATURN");
const uranus = document.querySelector(".URANUS");
const neptune = document.querySelector(".NEPTUNE");
const mainNav = document.querySelector(".main");
const secNav = document.querySelector("section");

navBtn.addEventListener("click", () => {
  if (navMenu.classList.contains("menu-open")) {
    navMenu.classList.remove("menu-open");
  } else {
    navMenu.classList.add("menu-open");
    mainNav.classList.add("active");
    secNav.classList.add("active");
  }
});

planet.addEventListener("click", () => {
  getPlanet((name = planet.textContent));
  navMenu.classList.remove("menu-open");
  console.log(planet.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});

venus.addEventListener("click", () => {
  getPlanet((name = venus.textContent));
  navMenu.classList.remove("menu-open");
  console.log(venus.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
earth.addEventListener("click", () => {
  getPlanet((name = earth.textContent));
  navMenu.classList.remove("menu-open");
  console.log(earth.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
mars.addEventListener("click", () => {
  getPlanet((name = mars.textContent));
  navMenu.classList.remove("menu-open");
  console.log(mars.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
jupiter.addEventListener("click", () => {
  getPlanet((name = jupiter.textContent));
  navMenu.classList.remove("menu-open");
  console.log(jupiter.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
saturn.addEventListener("click", () => {
  getPlanet((name = saturn.textContent));
  navMenu.classList.remove("menu-open");
  console.log(saturn.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
uranus.addEventListener("click", () => {
  getPlanet((name = uranus.textContent));
  navMenu.classList.remove("menu-open");
  console.log(uranus.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
neptune.addEventListener("click", () => {
  getPlanet((name = neptune.textContent));
  navMenu.classList.remove("menu-open");
  console.log(neptune.textContent);
  mainNav.classList.remove("active");
  secNav.classList.remove("active");
});
