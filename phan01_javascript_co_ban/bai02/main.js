// JS
var myList = [["Chocolate Bar", 15], ["Milk", 16], ["Sugar" ,17], ["Egg", 18], ["Vegetables", 19]];

myList.push(["Fish", 20]);

myList.unshift(["Meat", 14]);

function deleteLastList() {
    myList.pop();
}

function deleteFirstList() {
    myList.shift();
}

document.getElementById('output').innerHTML = myList;