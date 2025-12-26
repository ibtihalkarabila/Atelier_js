document.getElementById("demanderNombre").addEventListener("click", saisieSecurisee);

function saisieSecurisee() {
    let resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = ""; 

    try {
        let saisie = prompt("Entrez un nombre entre 1 et 100 :");

        if (saisie === null) {
            resultatDiv.innerHTML = "L'utilisateur a annulé la saisie.";
            return;
        }

        saisie = saisie.trim();

        let nombre = Number(saisie);

        if (isNaN(nombre)) {
            throw "Erreur : ce n'est pas un nombre !";
        }

        if (nombre < 1 || nombre > 100) {
            throw "Erreur : le nombre doit être entre 1 et 100 !";
        }

        resultatDiv.innerHTML = `Bravo ! Vous avez saisi le nombre valide : ${nombre}`;
    }
    catch (erreur) {
        resultatDiv.innerHTML = erreur;
    }
}
