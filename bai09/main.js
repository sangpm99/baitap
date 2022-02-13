var ourArray = [];
var i = 0;
while(i < 5) {
    ourArray.push(i);
    i++;
}

var myArr = [];
for(var j = 0; j < 5; j++) {
    myArr.push(j);
}

console.log('Vòng lặp while : ' + ourArray);
console.log('Vòng lặp for : ' + myArr);