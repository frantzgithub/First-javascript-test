let startNumber = parseFloat(prompt("Entrez un nombre entier"));
startNumber= Math.floor(startNumber);
let endNumber = parseFloat(prompt("Entrez un autre nombre"));
endNumber = Math.floor(endNumber);
let randomNum = Math.round(Math.random() * (endNumber - startNumber) + startNumber);

console.log(randomNum);