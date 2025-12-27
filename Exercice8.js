
console.log("=== EXERCICE 8 : MANIPULATION JSON ===");

const nom = prompt("Entrez votre nom :");
const age = parseInt(prompt("Entrez votre age :"));
const hobbiesInput = prompt("Entrez vos hobbies (separes par des virgules) :");
const hobbies = hobbiesInput.split(',').map(hobby => hobby.trim());

const utilisateur = {
    nom: nom,
    age: age,
    hobbies: hobbies
};

const jsonUtilisateur = JSON.stringify(utilisateur, null, 2);
console.log("Donnees converties en JSON :");
console.log(jsonUtilisateur);

alert("Vos donnees en JSON :\n" + jsonUtilisateur);

console.log("\nSimulation reception JSON :");

const jsonSimule = `{
    "nom": "Maha",
    "age": 20,
    "hobbies": ["dessin", "lecture", "arts martiaux"],
    "ville": "Rabat",
    "profession": "Etudiante"
}`;

console.log("JSON recu :");
console.log(jsonSimule);

try {
    const donneesRecues = JSON.parse(jsonSimule);
    
    console.log("\nInformations extraites :");
    console.log("Nom : " + donneesRecues.nom);
    console.log("Age : " + donneesRecues.age);
    console.log("Hobbies : " + donneesRecues.hobbies.join(", "));
    console.log("Ville : " + donneesRecues.ville);
    console.log("Profession : " + donneesRecues.profession);
    
    alert(
        "Donnees recues du serveur :\n" +
        "Nom : " + donneesRecues.nom + "\n" +
        "Age : " + donneesRecues.age + "\n" +
        "Hobbies : " + donneesRecues.hobbies.join(", ") + "\n" +
        "Ville : " + donneesRecues.ville + "\n" +
        "Profession : " + donneesRecues.profession
    );
    
} catch (error) {
    console.error("Erreur JSON :", error);
    alert("Erreur : JSON invalide");
}

document.body.innerHTML = 
    '<h2>Exercice 8 : JSON</h2>' +
    '<p><strong>Vos donnees :</strong> ' + nom + ', ' + age + ' ans, ' + hobbies.join(', ') + '</p>' +
    '<p><strong>JSON simule recu :</strong> Maha, 20 ans, dessin, lecture,arts martiaux, Rabat, Etudainte</p>';