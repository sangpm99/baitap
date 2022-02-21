function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let dogName = 'Golden';
let color = 'White yellow';
let terrier = new Dog(dogName, color);

document.getElementById('input').innerHTML = `'${dogName}' và '${color}'`;
document.getElementById('output').innerHTML = terrier.name + ", " + terrier.color + ", " + terrier.numLegs;