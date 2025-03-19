let year = parseInt(prompt("Entrez une année à 4 chiffres"));
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " est une année bissextile");
        }
        else {
            console.log(year + " n'est pas une année bissextile");
        }
    } 
    else {
        console.log(year + " est une année bissextile");
    }
}
else {
    console.log(year + " n'est pas une année bissextile");
}