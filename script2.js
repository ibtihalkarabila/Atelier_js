function verifierMotDePasse() {
    while (true) {

        let password = prompt("Entrez votre mot de passe (ou tapez 'exit' pour quitter) :");

        
        if (password === null) {
            alert("Sortie du programme.");
            break;
        }
        password = password.trim();

        if (password.toLowerCase() === "exit") {
            alert("Sortie du programme.");
            break;
        }

        // Vérifier si le mot de passe est vide
        if (password === "") {
            alert("Mot de passe vide. Veuillez réessayer !");
            continue;
        }
        let force = "";

        if (password.length < 8) {
            force = "faible";
        } else if (password.length <= 12) {
            force = "moyen";
        } else {
            force = "fort";
        }

        alert(`La force de votre mot de passe est : ${force}`);
    }
}
verifierMotDePasse();
