
let cote1 = parseInt(prompt("Entrez le premier côté du triangle"));
let cote2 = parseInt(prompt("Entrez le deuxième côté du triangle"));
let cote3 = parseInt(prompt("Entrez le troisième côté du triangle"));

if (cote1 === cote2 && cote2 === cote3) {
    console.log("Triangle équilateral");
}
else if(cote1 === cote2 || cote2 === cote3 || cote3 === cote1) {
    console.log("Triangle isocèle")
}
else {
    console.log("Triangle scalène");
}