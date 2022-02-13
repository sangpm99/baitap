var myArr = [[1,2],[3,4],[5,6,7]];
var result = 1;
for(var i = 0; i < myArr.length; i++) {
  for(var j = 0; j < myArr[i].length; j++){
    result *= myArr[i][j];
  }
}
document.getElementById('output').innerHTML = result;