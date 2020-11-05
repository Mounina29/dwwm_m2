// Language JS
// Equipe NBM : Mounina, Benoit et Nada

// Crée par: Benoit
// Fonction validation du formulaire
// qui va vérifier la valeur de chaque input.
// S'il n'y a rien, on affiche une message comme quoi la valeur est obligatoire pour valider le formulaire et return False.
// Sinon return True et une alert affiche un récaputilatif des valeurs saisis.

function validation() {
    if(document.getElementById("code").value == ""){
        document.getElementById("code").focus();
        document.getElementById("missCode").textContent="Attention, le code projet est obligatoire";
        document.getElementById("missCode").style.color="red";
        return false;
    }
    else {
        document.getElementById("missCode").textContent="";
    }

    if(document.getElementById("nom").value == "") {
        document.getElementById("nom").focus();
        document.getElementById("missNom").textContent="Attention, le nom du projet est obligatoire";
        document.getElementById("missNom").style.color="red";
        return false;
    }
    else {
        document.getElementById("missNom").textContent="";
    }

    if(document.getElementById("typeProjet").value == "") {
        document.getElementById("typeProjet").focus();
        document.getElementById("missTypeProjet").textContent="Attention, le type du projet est obligatoire";
        document.getElementById("missTypeProjet").style.color="red";
        return false;
    }
    else {
        document.getElementById("missTypeProjet").textContent="";
    }

    if(document.getElementById("secteurActivite").value == "") {
        document.getElementById("secteurActivite").focus();
        document.getElementById("missSecteurActivite").textContent="Attention, le secteur d'activité du projet est obligatoire";
        document.getElementById("missSecteurActivite").style.color="red";
        return false;
    }
    else {
        document.getElementById("missSecteurActivite").textContent="";
    }

    if(document.getElementById("chargeGlobale").value == "") {
        document.getElementById("chargeGlobale").focus();
        document.getElementById("missChargeGlobale").textContent="Attention, la charge globale du projet est obligatoire";
        document.getElementById("missChargeGlobale").style.color="red";
        return false;
    }
    else {
        document.getElementById("missChargeGlobale").textContent="";
    }

    if(document.getElementById("commercial").value == "") {
        document.getElementById("commercial").focus();
        document.getElementById("missCommercial").textContent="Attention, le commercial du projet est obligatoire";
        document.getElementById("missCommercial").style.color="red";
        return false;
    }
    else {
        document.getElementById("missCommercial").textContent="";
    }

    if(document.getElementById("po").value == "") {
        document.getElementById("po").focus();
        document.getElementById("missPo").textContent="Attention, le product owner du projet est obligatoire";
        document.getElementById("missPo").style.color="red";
        return false;
    }
    else {
        document.getElementById("missPo").textContent="";
    }

    if(document.getElementById("scrumMaster").value == "") {
        document.getElementById("scrumMaster").focus();
        document.getElementById("missScrumMaster").textContent="Attention, le scrum master du projet est obligatoire";
        document.getElementById("missScrumMaster").style.color="red";
        return false;
    }
    else {
        document.getElementById("missScrumMaster").textContent="";
    }

    if(document.getElementById("code").value != "" &&
    document.getElementById("nom").value != "" &&
    document.getElementById("typeProjet").value != "" &&
    document.getElementById("secteurActivite").value != "" &&
    document.getElementById("chargeGlobale").value != "" &&
    document.getElementById("commercial").value != "" &&
    document.getElementById("po").value != "" &&
    document.getElementById("scrumMaster").value !="") {
        alert("Création du projet réussi. \n\nLe code du projet est: " + document.getElementById("code").value +
        ".\nLe nom du projet est: " + document.getElementById("nom").value +
        ".\nLe type du projet est: " + document.getElementById("typeProjet").value +
        ".\nLe secteur d'acitvité du projet est: " + document.getElementById("secteurActivite").value +
        ".\nLa charges globale est de: " + document.getElementById("chargeGlobale").value +
        " h.\nLe commercial du projet est: " + document.getElementById("commercial").value +
        ".\nLe product owner du projet est: " + document.getElementById("po").value +
        ".\nLe scrum master du projet est: " + document.getElementById("scrumMaster").value + ".");
    }

    return true;
}

// Crée par: Nada



// Crée par: Mounina

