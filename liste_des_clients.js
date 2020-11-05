// Nom du programme: création d'un nouveau projet //
// Equipe NBM : Mounina, Benoit et Nada  //
// Js pour document HTML "Liste des clients" //


// Fonction JS de recherche rapide via une barre de recherche, de contenue ciblé dans notre tableau grâce à son indexation. //
function myFunction() {
        // déclaration des variables 
        var input, filter, table, tr, td, i, txtValue;
        // initialisation
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("monTableau");
        tr = table.getElementsByTagName("tr");
        // Vérification de la boucle for, exécution de l'instruction et incrémentation de i.
        // Ici l'index 1 est ciblé dans le tableau pour nous donner seulement les données de la colone 2 après recherche utilisateur.
        for (i = 0; i < tr.length; i++) {
          td = (tr[i].getElementsByTagName("td")[1]);
          //Condition récupération du contenu des éléments td et leur style.
          if (td) {
            txtValue = td.textContent || td.innerText;
            // méthode qui renvoie le premier index dans lequel est trouvé l'élément donné dans notre tableau.
            // Si l'élément n'existe pas dans le tableau la méthode renvoit -1.
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }