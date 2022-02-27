/* SWIPER JS */
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});

/* IMPRIMER LA PAGE */

function imprimer_page(){
  var bouton = document.getElementsByClassName('imprimer');
  bouton.window.print();
}


/* VOIR PLUS D'ARTICLE & MODIFIER LE NOMBRE DE RÉSULTATS */

const btn = document.querySelector('.bouton-afficher');
const articles = document.querySelector('.voir-articles');

btn.addEventListener('click', () => {
  // Afficher plus d'article avec un toggle de class
  articles.classList.toggle('is-visible');
  // Modifier la valeur du résultat 
  var resultats = document.getElementById("resultats");
  if (resultats.innerHTML === "Vous avez 6 résultats sur 12") {
    resultats.innerHTML = "Vous avez 12 résultats sur 12";
  } else {
    resultats.innerHTML = "Vous avez 6 résultats sur 12";
  }
  // Modifier le contenu du bouton
  if (btn.innerHTML === "Afficher plus") {
    btn.innerHTML = "Afficher moins";
  } else {
    btn.innerHTML = "Afficher plus";
  }
});

/* OUVERTURE FERMETURE CHECKBOX PLUS DE FILTRES */

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

