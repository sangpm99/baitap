let arr = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'];
arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');

document.getElementById('output').innerHTML = arr;