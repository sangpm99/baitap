let Bird = function(name, color) {
    this.name = name;
    this.color = color;
}

Bird.prototype.numLegs = 2;
let canary = new Bird("Canary", "yellow");

let ownProps = [];
let prototypeProps = [];
let keyBird = Object.keys(canary);
let key = Object.keys(Object.getPrototypeOf(canary))

for(let i = 0; i < keyBird.length; i++) {
    let propBird = canary[keyBird[i]];
    if(canary.hasOwnProperty(keyBird[i]) === true) {
        ownProps.push(propBird);
    }
}
for(let i = 0; i < key.length; i++) {
    if(canary.hasOwnProperty(key[i]) === false) {
        prototypeProps.push(key[i]);
    }
}
console.log("Thuộc tính riêng: " + ownProps);
console.log("Thuộc tính nguyên mẫu : " +prototypeProps);