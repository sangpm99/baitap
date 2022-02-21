let myKey = "password123";
let regex = /^[0-9](?=\w{6,})(?=.*\d\d)/;
console.log(regex.test(myKey));