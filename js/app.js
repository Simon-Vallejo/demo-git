"use strict";
const refSectionEnigmes = document.getElementById("section-enigmes");
const refEnigmeCourante = document.getElementById("enigme-courante");
const arrEnigmesPigees = new Array();
const arrReponsesEnigmesPigees = new Array();
let indexEnigmeCourante = 0;

// Gestion des clics de souris
document
  .getElementById("bouton-repondre")
  .addEventListener("click", validerReponseEnigme);
document.querySelector("form").addEventListener("submit", empecherEnvoiForm);

initialiserEnigmes();

function empecherEnvoiForm(objEvenement) {
  objEvenement.preventDefault();
}

function obtenirNombreEntierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

///////////////////////////////
// Section du code à compléter
function initialiserEnigmes() {
  const NB_ENIGMES_PIGEES = 5;

  for (let i = 0; i < NB_ENIGMES_PIGEES; i++) {
    let indexAleatoire = obtenirNombreEntierAleatoire(0, arrEnigmes.length - 1);

    arrEnigmesPigees.push(arrEnigmes[indexAleatoire]);
    arrReponsesEnigmesPigees.push(arrReponsesEnigmes[indexAleatoire]);

    arrEnigmes.splice(indexAleatoire, 1);
    arrReponsesEnigmes.splice(indexAleatoire, 1);

    console.log(indexAleatoire);
    console.log(i);
    console.log(arrEnigmesPigees[i]);
    console.log(arrReponsesEnigmesPigees[i]);
  }
  // À compléter
  refEnigmeCourante.textContent = arrEnigmesPigees[0];
}

function validerReponseEnigme() {
  const refCommentaireEnigme = document.getElementById("commentaire-enigme");
  const refChampReponseEnigme = document.getElementById("champ-reponse-enigme");
  const strReponseEntree = refChampReponseEnigme.value;
  const strReponseAttendue = arrReponsesEnigmesPigees[indexEnigmeCourante];

  if (strReponseEntree.toLowerCase() === strReponseAttendue.toLowerCase()) {
    // bonne reponse:
    refCommentaireEnigme.textContent = "Correct! t bin bon !";
    refCommentaireEnigme.classList.remove("erreur");

    indexEnigmeCourante++;
    if (indexEnigmeCourante < arrEnigmesPigees.length) {
      refEnigmeCourante.textContent = arrEnigmesPigees[indexEnigmeCourante];
      refChampReponseEnigme.value = "";
    } 
    else {
      // Fin
      document.getElementById("zone-enigme").classList.add("cacher");
      document.getElementById("message-succes").classList.remove("cacher");
    }
  } else {
    // mauvaise rep:
    refCommentaireEnigme.textContent = "Désolé, ce n'est pas la bonne réponse.";
    refCommentaireEnigme.classList.add("erreur");
    refChampReponseEnigme.value = ""; // Réinitialiser le champ de saisie
  }
  // À compléter
}
///////////////////////////////
