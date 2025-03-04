let nombreA = parseFloat(prompt("Entrez un nombre entier"));
nombreA = Math.floor(nombreA);
let nombreB = parseFloat(prompt("Entrez un autre nombre"));
nombreB = Math.floor(nombreB);
let resultat = nombreA / nombreB;
let reste = nombreA % nombreB;
alert(`le résultat de la division est: ${resultat} \n le reste de la division est: ${reste}`);