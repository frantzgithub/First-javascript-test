
let a;
let b;
let c;
let d;
let e;

// commentez uniquement les lignes ci-dessous
a = 3;
a = 2;
a = 7;
a = 0;

b = undefined;
b = null;
b = 1;
b = "null";

c = "2000" + "20";
c = "20" + 20;
c = null;
c = undefined;

d = null;
d = undefined;
d = 0;
d = "undefined";

e = null;
e = 0;
e = NaN;
e = "null";

// commentez uniquement les lignes ci-dessous
const verificationA = a > 2 && a < 4;
const verificationB = b === undefined;
const verificationC = typeof c === "number";
const verificationD = d == undefined;
const verificationE = e === d;

console.log("a= " + verificationA);
console.log("b= " + verificationB);
console.log("c= " + verificationC);
console.log("d= " + verificationD);
console.log("e= " + verificationE);