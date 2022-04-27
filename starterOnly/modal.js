function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// Form Elements
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const mail = document.getElementById("email");

const checkbox1 = document.getElementById("checkbox1");

// Regex
const formatMail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  if (prenom.value == "") {
    alert("Veuillez remplir votre prénom");
    prenom.focus();
    return false;
  } if (prenom.value.length < 2) {
    alert("Le prénom doit contenir au moins 2 caractères");
    prenom.focus();
    return false;
  } if (nom.value == "") {
    alert("Veuillez remplir votre nom");
    prenom.focus();
    return false;
  } if (nom.value.length < 2) {
    alert("Le nom doit contenir au moins 2 caractères");
    prenom.focus();
    return false;
  } if (mail.value != "" && mail.match(formatMail)) {
    alert("Veuillez saisir une adresse mail valide");
    prenom.focus();
    return false;
  } if (!checkbox1.checked) {
    alert("Veuillez accepter les CGU");
    checkbox1.focus();
    return false;
  }
  return true;
}