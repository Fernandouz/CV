// Affiche les contact
const contactItems = document.querySelectorAll(".flex-contact");

const ok = contactItems[0];

function contactReveal() {
  let element = contactItems[0];
  element.style.visibility = "visible";
  element.style.animation = "contactAnimation 2s";
  const int = setInterval(() => {
    element = element.nextElementSibling;
    element.style.visibility = "visible";
    element.style.animation = "contactAnimation 2s";
    if (element === contactItems[3]) {
      clearInterval(int);
    }
  }, 800);
}
contactReveal();

//================ Afficher les items sur la page
const items = document.querySelectorAll(".item");

/**
 * callback pour l'IntersectionObserver affiche les items sur la page
 * @param {*} entries parametre pour l'observer
 * @param {*} observer permet de supprimer l'observer
 */
function visibility(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target === document.querySelector(".experience")) {
        entry.target.classList.add("reveal-l-visible");
        //observer.unobserve(entry.target);
      } else if (entry.target === document.querySelector(".diplome")) {
        entry.target.classList.add("reveal-r-visible");
      } else if (entry.target === document.querySelector(".competence")) {
        entry.target.classList.add("reveal-l-visible");
      }
    }
  });
}
//Boucle pour parcourir et observer les items
items.forEach((item) => {
  const observer = new IntersectionObserver(visibility);
  observer.observe(item);
});

//============================Partie Exp=============================//

const expBlock = document.querySelectorAll(".experience li");
const template1 = document.querySelector(".temp1").content.cloneNode(true);
const template2 = document.querySelector(".temp2").content.cloneNode(true);
const template3 = document.querySelector(".temp3").content.cloneNode(true);
const template4 = document.querySelector(".temp4").content.cloneNode(true);

expBlock.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget === expBlock[0]) {
      const parag = document.createElement("p");
      parag.append(template1);
      item.appendChild(parag);
    } else if (e.currentTarget === expBlock[1]) {
      const parag = document.createElement("p");
      parag.append(template2);
      item.appendChild(parag);
    } else if (e.currentTarget === expBlock[2]) {
      const parag = document.createElement("p");
      parag.append(template3);
      item.appendChild(parag);
    } else if (e.currentTarget === expBlock[3]) {
      const parag = document.createElement("p");
      parag.append(template4);
      item.appendChild(parag);
    }
  });
});

// ================================Partie Diplomes ================================== //

const diplome = document.querySelectorAll(".diplome li");
const diplomeReveal = document.querySelector(".diplome-reveal");

//boucle qui permet d'afficher le diplome en fonction du hover
diplome.forEach((dipl) => {
  dipl.addEventListener("mouseover", (e) => {
    if (e.target === diplome[1]) {
      diplomeReveal.innerHTML = `<img src="content/bac.png" class="baccalaureat" />`;
      diplomeReveal.style.opacity = "1";
      setTimeout(function () {
        document.querySelector(".diplome-reveal").style.opacity = "0";
      }, 3000);
    } else if (e.target === diplome[2]) {
      diplomeReveal.innerHTML = `<img src="content/brevet.jpg" class="baccalaureat" />`;
      diplomeReveal.style.opacity = "1";
      setTimeout(function () {
        document.querySelector(".diplome-reveal").style.opacity = "0";
      }, 3000);
    }
  });
});

//=======================Partie centre d'interet=========================//
let id = null;
const interestPoints = document.querySelectorAll(".interest li");
const revealItems = document.querySelectorAll(".interest-reveal div");

//Boucle pour lister les element du li et les reveler
interestPoints.forEach((point) => {
  point.addEventListener("mouseover", (e) => {
    revealItems.forEach((item) => {
      item.style.opacity = "0";
    });
    id = e.target.getAttribute("id");
    const active = document.querySelector(`.${id}`);
    active.style.opacity = "1";
    setTimeout(() => {
      active.style.opacity = "0";
    }, 2000);
  });
});

//============= langues ==================//

const langueLoader = document.querySelector(".langue");

function load(entrie, observer) {
  entrie.isIntersecting;
}

const langueObserver = new IntersectionObserver(load);
