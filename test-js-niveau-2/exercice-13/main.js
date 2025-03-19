let montant = parseFloat(prompt("Entrez le montant"));
let modePaiment = prompt("Entrez le mode de paiment");

if(modePaiment === "espèce") {
    let reduction = 10 * montant / 100;
    let result = montant - reduction;
    console.log("tu as un rabais de 10%: " + result);
}
else if(modePaiment === "débit"){
    let reduction = 8 * montant / 100;
    let result = montant - reduction;
    console.log("tu as un rabais de 8%: " + result);
}
else if(modePaiment === "comptant") {
     reduction = 5 * montant / 100;
    let result = montant - reduction;
    console.log("tu as un rabais de 5%: " + result);
}
else if (modePaiment === "tranche") {
    let nombreTranche = parseInt(prompt("Entrez le nombre de tranche"));
    if (nombreTranche < 4) {
console.log("la valeur de chaque tranche est " + (montant / nombreTranche));
    }
    else {
        let valeur = 4 * montant / 100;
        let rabais = montant + valeur;
        console.log("la valeur de chaque tranche de paiment est " + (rabais / nombreTranche));
    }
}
else {
    console.log("désolé, mode de paiement incorrect");
}