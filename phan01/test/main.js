let quoteSample = "C"; // Returns ["C"]
let quoteSample1 = "P1P5P4CCCP2P6P3"; // Returns ["CCC"]
let quoteSample2 = "P6P2P7P4P5CCCcCP3P1"; // Returns ["CCC", "C"]
let quoteSample3 = "CC c"; // Returns ["CC"]
let quoteSample4 = "P1P2P3"; // Returns null
let quoteSample5 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCP3"; // Returns ["CCCCCCCCCCCCCCCCCCCCCCC"]

let regex = /[C.]C*/g;
console.log(quoteSample.match(regex));
console.log(quoteSample1.match(regex));
console.log(quoteSample2.match(regex));
console.log(quoteSample3.match(regex));
console.log(quoteSample4.match(regex));
console.log(quoteSample5.match(regex));