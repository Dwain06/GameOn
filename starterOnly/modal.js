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

// RegExp
// let formatMail = new RegExp("^[a-zA-Z0-9_-.]+[@]{1}[a-zA-Z0-9_-.]+[.]{1}[a-zA-Z]{2,5}$", "g");

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


function unvalidInput(element, message) {
	element.parentNode.setAttribute("data-error-visible", true);
	element.parentNode.setAttribute("data-error", message);
}
function validInput(element) {
	element.parentNode.removeAttribute("data-error-visible");
	element.parentNode.removeAttribute("data-error");
}

function isPrenomValid() {
  return prenom.value !== null && prenom.value.length >= 2;
}

function validateForm() {
  console.warn("validate")
  let isValid = true;
	if (!isPrenomValid()) {
    isValid = false;
		unvalidInput(prenom, "Veuillez entrer un prénom");
	} else {
    validInput(prenom);
  }

  return isValid;
}


// function validate() {
//   if (prenom.value == "") {
//     alert("Veuillez remplir votre prénom");
//     prenom.focus();
//     return false;
//   } if (prenom.value.length < 2) {
//     alert("Le prénom doit contenir au moins 2 caractères");
//     prenom.focus();
//     return false;
//   } if (nom.value == "") {
//     alert("Veuillez remplir votre nom");
//     prenom.focus();
//     return false;
//   } if (nom.value.length < 2) {
//     alert("Le nom doit contenir au moins 2 caractères");
//     prenom.focus();
//     return false;
//   } if (mail.value != "" && mail.match(formatMail)) {
//     alert("Veuillez saisir une adresse mail valide");
//     prenom.focus();
//     return false;
//   } if (!checkbox1.checked) {
//     alert("Veuillez accepter les CGU");
//     checkbox1.focus();
//     return false;
//   }
//   return true;
// }