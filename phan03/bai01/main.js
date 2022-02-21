let quoteSample = "C";
let quoteSample1 = "P1P5P4CCCP2P6P3";
let quoteSample2 = "P6P2P7P4P5CCCcCP3P1";
let quoteSample3 = "CC c";
let quoteSample4 = "P1P2P3";
let quoteSample5 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCP3";

// Test case 1 :
// let regex = /C/g;
// Trả về mảng, mỗi kí tự C có trong chuỗi sẽ là một thành phần của mảng

// Test case 2 :
// let regex = /C*/g;
// Trả về mảng, trả về tất cả số phần tử chuỗi nhưng chỉ hiển thị ra kí tự C, các kí tự
// khác sẽ để rỗng và thêm 1 phần tử

// Test case 3 :
let regex = /[C]C*/g;

console.log(quoteSample.match(regex));
console.log(quoteSample1.match(regex));
console.log(quoteSample2.match(regex));
console.log(quoteSample3.match(regex));
console.log(quoteSample4.match(regex));
console.log(quoteSample5.match(regex));