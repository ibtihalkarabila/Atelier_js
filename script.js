
function calculerReduction() {
    let montant = prompt("Entrez le montant de vos achats en Dh :");
    if (montant === null || montant.trim() === "") {
        console.log("Aucun montant saisi.");
        return;
    }
    montant = Number(montant);

    if (isNaN(montant) || montant < 0) {
        console.log("Veuillez entrer un montant valide et positif !");
        return;
    }
    let reduction = 0
    if (montant < 200) {
        reduction = montant * 0.05;
    } else if (montant <= 500) {
        reduction = montant * 0.10;
    } else {
        reduction = montant * 0.20;
    }
    let total = montant - reduction;
    console.log(`Pour un montant de montant}D${montant}h, votre réduction est de ${reduction}Dh et le total est ${total}Dh.`);
}
calculerReduction();
