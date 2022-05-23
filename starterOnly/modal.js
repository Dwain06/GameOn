// Menu burger mobile
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.querySelector(".bground").style.transform = "translateY(250px)";
  } else {
    x.className = "topnav";
    document.querySelector(".bground").style.transform = "translateY(20px)";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const modalClose = document.querySelector(".close");
const confirmClose = document.querySelector(".close-confirm");
const confirmCloseBtn = document.querySelector(".bground-confirm input");
const confirmForm = document.querySelector(".bground-confirm");
const btnSubmit = document.querySelector(".btn-submit");

// Form Elements
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const mail = document.getElementById("email");
const naissance = document.getElementById("birthdate");
const quantite = document.getElementById("quantity");
const tournois = document.querySelectorAll(".checkbox-input[name=location]");
const cgu = document.getElementById("checkbox1");

// Messages d'erreur
let error = {
  prenom: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
  nom: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
  mail: 'Veuillez saisir un email valide',
  naissance : 'Vous devez entrer votre date de naissance.',
  quantite: 'Veuillez indiquer un nombre.',
  tournois: 'Vous devez choisir une option.',
  cgu: 'Vous devez vérifier que vous acceptez les termes et conditions.'
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// close confirm form
confirmClose.addEventListener('click', function closeConfirmModal(){
  confirmForm.style.display = "none";
});
confirmCloseBtn.addEventListener('click', function closeConfirmModal(){
  confirmForm.style.display = "none";
});

// Ajout ou suppression message d'erreur selon les données du champ formulaire
function unvalidInput(element, message) {
	element.parentNode.setAttribute("data-error-visible", true);
	element.parentNode.setAttribute("data-error", message);
}

function validInput(element) {
	element.parentNode.removeAttribute("data-error-visible");
	element.parentNode.removeAttribute("data-error");
}

// Conditions pour valider les données
function isPrenomValid() {
  let regex = /^([a-zA-Z\-]+)$/;
  return prenom.value !== null && prenom.value.length >= 2 && prenom.value.trim() !=="" && regex.test(prenom.value) == true;    
};

function isNomValid() {
  let regex = /^([a-zA-Z\-]+)$/;
  return nom.value !== null && nom.value.length >= 2 && nom.value.trim() !=="" && regex.test(nom.value) == true;
};

function isMailValid() {
  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return regex.test(mail.value);
};

function isNaissanceValid() {
  let regex = /^([1-2]([0-9]{3})\-[0-1][0-9])\-([0-3][0-9])$/;
	return regex.test(naissance.value);
};

function isQuantiteValid() {
  let regex = /^[0-9]+$/;
	return regex.test(quantite.value);
};

function isTournoisValid() {
  for (let eltTournois of tournois) {
    if (eltTournois.checked === true) {
      return true;
    }
  }
};

function isCguValid() {
	return cgu.checked;
};

function confirmMessage() {
  confirmForm.style.display = "block";
};

// Validation du formulaire
function validateForm(event) {

  event.preventDefault();

  if (isPrenomValid()) {
		validInput(prenom);
	} else {
    unvalidInput(prenom, error.prenom);
  }

  if (isNomValid()) {
		validInput(nom);
	} else {
    unvalidInput(nom, error.nom);
  }

  if (isMailValid()) {
		validInput(mail);
	} else {
    unvalidInput(mail, error.mail);
  }

  if (isNaissanceValid()) {
		validInput(naissance);
	} else {
    unvalidInput(naissance, error.naissance);
  }

  if (isQuantiteValid()) {
		validInput(quantite);
	} else {
    unvalidInput(quantite, error.quantite);
  }

  if (isTournoisValid()) {
		validInput(tournois[0]);
	} else {
    unvalidInput(tournois[0], error.tournois);
  }

  if (isCguValid()) {
		validInput(cgu);
	} else {
    unvalidInput(cgu, error.cgu);
  }

  // Si toutes les conditions sont remplies, on autorise l'envoi du formulaire
  if (isPrenomValid() && isNomValid() && isMailValid() && isNaissanceValid() && isQuantiteValid() && isTournoisValid() && isCguValid()){
    closeModal();
    confirmMessage();
  }
};

btnSubmit.addEventListener("click", validateForm);

