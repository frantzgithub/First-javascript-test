let choix = prompt("choisir entre Pierre, Papier ou Ciseaux");
let tableauChoix = ["Pierre", "Papier", "Ciseaux"];
let randomNumber = Math.floor(Math.random() * 2);
let programme = tableauChoix[randomNumber];
console.log("le programme a choisit " + programme);
if (programme === "Pierre") {
    if (choix === "Papier" || choix === "Papier") {
        console.log("vous avez gagné")
    }
    else if (choix === "Ciseaux" || choix === "ciseaux") {
        console.log("vous avez perdu")
    }
    else {
        console.log("vous avez choisi la même chose");
    }
}
else if (programme === "Papier") {
    if (choix === "Pierre" || choix === "pierre") {
        console.log("vous avez perdu")
    }
    else if (choix === "Ciseaux" || choix === "ciseaux") {
        console.log("vous avez gagné")
    }
    else {
        console.log("vous avez choisi la même chose");
    }
}
else {
    if (choix === "Papier" || choix === "Papier") {
        console.log("vous avez perdu")
    }
    else if (choix === "Pierre" || choix === "pierre") {
        console.log("vous avez gagné")
    }
    else {
        console.log("vous avez choisi la même chose");
    }
}