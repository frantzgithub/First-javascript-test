let numA;
let numB;
let numC;
let numD;

numA = 1;
numB = 3;
numC = 0;
numD = 2;

numA++;
numC = numB--;
numC++;
numA = ++numD;
console.log("A: " + numA);
console.log("B: " + numB);
console.log("C: " + numC);
console.log("D: " + numD);
const resultat = numA + numB + numC + numD;
console.log("Total: " + resultat);
