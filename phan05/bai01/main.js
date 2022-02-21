function myFunction(arr, element) {
    let myArr = [];
    for(var i = 0; i < arr.length ; i++) {
        if(arr[i] != element) {
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
let arrNew = myFunction(
    [1, 2, 3, 3, 4, 6, 8, 8, 8, 8],
    3
);
console.log(arrNew);