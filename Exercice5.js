
const notes = [];

for (let i = 0; i < 5; i++) {
    const note = parseFloat(prompt("Entrez la note " + (i + 1) + " :"));
    if (!isNaN(note)) {
        notes.push(note);
    }
}

console.log("Tableau des notes :", notes);

function calculerMoyenne(notesArray) {
    let somme = 0;
    let nbNotesValides = 0;
    
    for (let note of notesArray) {
        if (note < 0) {
            console.log("Note negative (" + note + ") ignoree.");
        } else {
            somme += note;
            nbNotesValides++;
        }
    }
    
    return nbNotesValides > 0 ? somme / nbNotesValides : 0;
}

const calculerMoyenneFlechee = (notesArray) => {
    let somme = 0;
    let nbNotesValides = 0;
    
    for (let note of notesArray) {
        if (note < 0) {
            console.log("Note negative (" + note + ") ignoree.");
        } else {
            somme += note;
            nbNotesValides++;
        }
    }
    
    return nbNotesValides > 0 ? somme / nbNotesValides : 0;
};

const moyenne = calculerMoyenne(notes);
const moyenneFlechee = calculerMoyenneFlechee(notes);

console.log("Moyenne (fonction classique) : " + moyenne);
console.log("Moyenne (fonction flechee) : " + moyenneFlechee);

document.body.innerHTML = 
    '<h1>Resultat du calcul des moyennes</h1>' +
    '<p>Notes entrees : ' + notes.join(', ') + '</p>' +
    '<p>Moyenne (fonction classique) : ' + moyenne.toFixed(2) + '</p>' +
    '<p>Moyenne (fonction flechee) : ' + moyenneFlechee.toFixed(2) + '</p>';