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
const naissance = document.getElementById("birthdate");
const quantite = document.getElementById("quantity");
// const tournois = document.querySelectorAll(".checkbox-input[type=radio]");
const cgu = document.getElementById("checkbox1");

// const checkbox1 = document.getElementById("checkbox1");

// Messages d'erreur

let error = {
  prenom: 'Veuillez saisir votre prénom avec au moins 2 caractères',
  nom: 'Veuillez saisir votre nom avec au moins 2 caractères',
  mail: 'Veuillez saisir un email valide',
  quantite: 'Veuillez indiquer un nombre',
  tournois: 'Veuillez cocher une case',
  cgu: 'Merci d\'accepter les conditions générales'
}

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

// Erreurs sur éléments parents
function unvalidInput(element, message) {
	element.parentNode.setAttribute("data-error-visible", true);
	element.parentNode.setAttribute("data-error", message);
}

// Suppression erreurs
function validInput(element) {
	element.parentNode.removeAttribute("data-error-visible");
	element.parentNode.removeAttribute("data-error");
}

// Conditions données valides
function isPrenomValid() {
    return prenom.value !== null && prenom.value.length >= 2;
  }

function isNomValid() {
    return nom.value !== null && nom.value.length >= 2;
  }

function isMailValid() {
  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return regex.test(mail.value);
  }

function isQuantiteValid() {
  let regex = /^[0-9]+$/;
	return regex.test(quantite.value);
  }

// function isTournoisValid() {
//   for (let eltTournois of tournois) {
//     if (eltTournois.checked) {
//       return true;
//     }
// }

// function isTournoisValid() {
// 	for (let radio of tournois) {
// 		if (radio.checked) 
//   }
//   return false;
// }


function isCguValid() {
	return cgu.checked;
  }


// Validation du formulaire
function validateForm() {
  console.warn("validate")
  let isValid = true;

	if (!isPrenomValid()) {
    isValid = false;
		unvalidInput(prenom, error.prenom);
	} else {
    validInput(prenom);
  }

  if (!isPrenomValid()) {
    isValid = false;
		unvalidInput(nom, error.nom);
	} else {
    validInput(nom);
  }

  if (!isMailValid()) {
    isValid = false;
		unvalidInput(mail, error.mail);
	} else {
    validInput(mail);
  }

  if (!isQuantiteValid()) {
    isValid = false;
		unvalidInput(quantite, error.quantite);
	} else {
    validInput(quantite);
  }

  // if (!isTournoisValid()) {
  //   isValid = false;
	// 	unvalidInput(tournois, error.tournois);
  //   console.warn("etape1")
	// } else {
  //   validInput(tournois);
  // }

  if (!isCguValid()) {
    isValid = false;
		unvalidInput(cgu, error.cgu);
	} else {
    validInput(cgu);
  }

  return isValid;
}