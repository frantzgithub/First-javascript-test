
let masse = parseFloat(prompt("Entrez la masse de l'objet en gramme"));
let acceleration = parseFloat(prompt("Entrez la valeur de l'accéleration"));
let travail = parseFloat(prompt("Entrez une valeur pour travail "));
let temps = parseInt(prompt("Entrez la valeur du temps en seconde"));
let force = masse * acceleration;
let puissance = travail / temps;

console.log("la force est " + force + "N");
console.log("la puissance est " + puissance + "W");
