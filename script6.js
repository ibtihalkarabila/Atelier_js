let produits = [
    { nom: "Stylo", prix: 2, quantite: 10 },
    { nom: "Cahier", prix: 5, quantite: 20 },
    { nom: "Gomme", prix: 1, quantite: 15 }
];

// Fonction pour afficher les produits
function afficherProduits() {
    let message = "Liste des produits :<br>";
    for (let produit of produits) {
        message += produit.nom + " - Prix: " + produit.prix + "Dh - Quantité: " + produit.quantite + "<br>";
    }
    document.getElementById("resultat").innerHTML = message;
}

// Fonction pour vendre un produit
function vendreProduit(nomProduit, quantite) {
    for (let produit of produits) {
        if (produit.nom.toLowerCase() === nomProduit.toLowerCase()) {
            if (produit.quantite >= quantite) {
                produit.quantite -= quantite;
                document.getElementById("resultat").innerHTML =
                    "Vente réussie ! " + quantite + " " + produit.nom + " vendu(s).";
                return;
            } else {
                document.getElementById("resultat").innerHTML =
                    "Erreur : stock insuffisant pour " + produit.nom + ".";
                return;
            }
        }
    }
    document.getElementById("resultat").innerHTML =
        'Produit "' + nomProduit + '" introuvable.';
}

// Fonction pour demander à l'utilisateur le produit et la quantité
function vendreProduitPrompt() {
    let nom = prompt("Entrez le nom du produit :");
    if (nom === null || nom.trim() === "") return;

    let qte = prompt("Entrez la quantité à vendre :");
    if (qte === null || qte.trim() === "") return;

    qte = Number(qte);
    if (isNaN(qte) || qte <= 0) {
        alert("Veuillez entrer une quantité valide !");
        return;
    }

    vendreProduit(nom, qte);
}