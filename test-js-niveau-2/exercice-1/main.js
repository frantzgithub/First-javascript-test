let agentRecu = parseFloat(prompt("Entrez le montant d'argent à payer pour le produit"));
let valeurDuProduit = parseFloat(prompt("Entrez la valeur du produit"));
let change = agentRecu - valeurDuProduit;
console.log(`la change: ${change}, la change arrondie au supérieur: ${Math.ceil(change)}, la change arrondie au inférieur: ${Math.floor(change)}`);