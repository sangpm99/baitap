let arr = [[4, 5, 1, 3], [13, 27, 18, 26, 1001], [32, 35, 37, 39], [1000, -72, -3, 1029, 857, 1]];
let arrNew = [];
function myFunction(arr) {
    for(let i = 0; i < arr.length; i++) {
        let result = 0;
        let a = 0;
        for(let j = 0; j < arr[i].length; j++) {
            a = arr[i][j];
            if(result < a) {
                result = a;
            }
        }
        arrNew.push(result);
    }
    console.log(arrNew);
}

myFunction(arr);