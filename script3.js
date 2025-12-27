let nombre = prompt("Entrez un nombre pour afficher sa table de multiplication :");

if (nombre === null || nombre.trim() === "") {
    console.log("Aucun nombre saisi.");
} else {
    nombre = Number(nombre);

    if (isNaN(nombre)) {
        console.log("Veuillez entrer un nombre valide !");
    } else {
        console.log("Table de multiplication de " + nombre + " (résultats pairs) :");

        for (let i = 1; i <= 10; i++) {
            let resultat = nombre * i;

            if (resultat % 2 !== 0) {
                continue;
            }

            console.log(nombre + " x " + i + " = " + resultat);
        }
    }
}
