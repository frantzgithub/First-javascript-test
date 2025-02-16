let nombre = parseInt(prompt("Entrez un nombre entier"));
let heures = parseInt(nombre / 60);
let minutes = parseInt(nombre % 60);
if (heures > 1) {
    if(minutes > 1) {
        alert(`${nombre} équivaut à ${heures} heures et ${minutes} minutes.`);
    } else {
        alert(`${nombre} équivaut à ${heures} heures et ${minutes} minute.`);
    }
} 
else {
    if (minutes > 1) {
        alert(`${nombre} équivaut à ${heures} heure et ${minutes} minutes.`);
    } else {
        alert(`${nombre} équivaut à ${heures} heure et ${minutes} minute.`);
    }
}