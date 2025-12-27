let notes = [10, 15, 8, 18, 12];

document.getElementById("triNotes").addEventListener("click", function () {

    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "";

    let stop = false;

    // Vérification des notes
    for (let note of notes) {
        if (note < 10) {
            resultat.innerHTML = "Note inférieure à 10 détectée : " + note;
            stop = true;
            break;
        }
    }

    if (!stop) {
        // Tri croissant
        resultat.innerHTML += "<h3>Ordre croissant :</h3>";
        notes.sort(function (a, b) {
            return a - b;
        });

        for (let note of notes) {
            resultat.innerHTML += note + "<br>";
        }

        // Tri décroissant
        resultat.innerHTML += "<h3>Ordre décroissant :</h3>";
        notes.reverse();

        for (let note of notes) {
            resultat.innerHTML += note + "<br>";
        }
    }
});