// Meny
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Meny

// --- Interaktiv Hantverksprocess (Startsidan) ---
const processData = [
  {
    tag: "Steg 1 av 5",
    title: "Lera & Drejning",
    desc: "Allting börjar med noggrant utvald stengodslera. Leran knådas fri från luftbubblor innan den centreras på drejskivan, där formen växer fram för hand med fokus på balans och funktion.",
    img: "Images/Koppar.jpg",
  },
  {
    tag: "Steg 2 av 5",
    title: "Torkning & Skulptering",
    desc: "När föremålet har torkat till s.k. läderhård status beskäras botten och detaljer som öron eller handtag monteras fast med lekande precision och lerslamma.",
    img: "Images/Skålar.jpg",
  },
  {
    tag: "Steg 3 av 5",
    title: "Skröjbränning",
    desc: "Föremålen torkar helt och bränns sedan i ugnen på cirka 950 grader (skröjbränning). Detta gör keramiken porös men tålig nog att hanteras under glaseringen.",
    img: "Images/Tallrikar.jpg",
  },
  {
    tag: "Steg 4 av 5",
    title: "Glasering",
    desc: "Nu doppas, penslas eller hälls glasyren över föremålet. Det är här färgerna, glansen och de unika skiftningarna skapas beroende på hur glasyren reagerar.",
    img: "Images/Ljusstakar.jpg",
  },
  {
    tag: "Steg 5 av 5",
    title: "Glasyrbränning",
    desc: "Sista steget! Keramiken bränns upp till 1240–1280 grader. Vid denna höga temperatur smälter glasyren och stengodset sintrar, vilket gör det helt vattentätt och färdigt för ditt hem.",
    img: "Images/doftljus.jpg",
  },
];

function switchStep(index) {
  const stepButtons = document.querySelectorAll(".process-section .step-btn");
  const imgElement = document.getElementById("processImg");
  const tagElement = document.getElementById("processStepTag");
  const titleElement = document.getElementById("processTitle");
  const descElement = document.getElementById("processDesc");
  const textBox = document.querySelector(
    ".process-section .process-text-wrapper",
  );
  const imgBox = document.querySelector(
    ".process-section .process-image-wrapper",
  );

  if (!imgElement) return; // Avbryt om vi inte är på startsidan

  stepButtons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  textBox.classList.remove("fade-in");
  imgBox.classList.remove("fade-in");
  void textBox.offsetWidth;
  void imgBox.offsetWidth;
  textBox.classList.add("fade-in");
  imgBox.classList.add("fade-in");

  const data = processData[index];
  tagElement.innerText = data.tag;
  titleElement.innerText = data.title;
  descElement.innerText = data.desc;
  imgElement.src = data.img;
}

// --- Interaktiv "Om oss"-sektion (Förslag 2) ---
const aboutTabData = [
  {
    tag: "Perspektiv 1 av 3",
    title: "Tidlös skönhet",
    desc: "Vi tror på att skapa brukskonst som håller över tid. Föremål som inte bara står framme som dekoration, utan som används, åldras med värdighet och skapar en ombonad känsla i hemmet.",
    img: "Images/Koppar.jpg",
  },
  {
    tag: "Perspektiv 2 av 3",
    title: "Noggrant utvalt stengods",
    desc: "All keramik skapas av slitstark stengodslera. Vi blandar egna glasyrer för att få fram de unika färgskiftningarna och den ljuvliga ytstrukturen som kännetecknar våra kollektioner.",
    img: "Images/Skålar.jpg",
  },
  {
    tag: "Perspektiv 3 av 3",
    title: "Hållbarhet i fokus",
    desc: "Hantverk handlar om omtanke. Vi bränner våra verk energieffektivt, minimerar spill i ateljén och tar tillvara på varje lerrest för att värna om vår miljö.",
    img: "Images/Tallrikar.jpg",
  },
];

function switchAboutTab(index) {
  // Letar efter knappar specifikt inuti Om oss-sidan
  const stepButtons = document.querySelectorAll(".process-section .step-btn");
  const imgElement = document.getElementById("aboutImg");
  const tagElement = document.getElementById("aboutTag");
  const titleElement = document.getElementById("aboutTitle");
  const descElement = document.getElementById("aboutDesc");
  const textBox = document.querySelector(
    ".process-section .process-text-wrapper",
  );
  const imgBox = document.querySelector(
    ".process-section .process-image-wrapper",
  );

  if (!imgElement) return; // Avbryt om vi inte är på om oss-sidan

  stepButtons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  textBox.classList.remove("fade-in");
  imgBox.classList.remove("fade-in");
  void textBox.offsetWidth;
  void imgBox.offsetWidth;
  textBox.classList.add("fade-in");
  imgBox.classList.add("fade-in");

  const data = aboutTabData[index];
  tagElement.innerText = data.tag;
  titleElement.innerText = data.title;
  descElement.innerText = data.desc;
  imgElement.src = data.img;
}

// Footer prenumerera
const form = document.getElementById("newsletterForm");
const thankYouMsg = document.getElementById("thank-you-msg");
const emailInput = document.getElementById("emailInput");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (emailInput.value.trim() !== "") {
      form.style.display = "none";
      thankYouMsg.style.display = "block";
    }
  });
}
