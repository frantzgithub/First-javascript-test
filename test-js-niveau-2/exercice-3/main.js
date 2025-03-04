let nombreA = parseFloat(prompt("Entrez un nombre entier"));
nombreA = Math.ceil(nombreA);
let nombreB = parseFloat(prompt("Entrez un autre nombre"));
nombreB = Math.ceil(nombreB);
let puissanceA = Math.pow(nombreA, 2);
let puissanceB = Math.pow(nombreB, 3);
let somme = puissanceA + puissanceB;
let racinePuissances = Math.sqrt(somme);
alert(`puissance A: ${puissanceA} puissance B: ${puissanceB} \n somme des puissances: ${somme} \n racine carré: ${racinePuissances}`);