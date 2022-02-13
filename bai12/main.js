function myFuntion(myArr, option) {
    for(var i = 0; i < myArr.length ; i ++) {
        if(myArr[i] == option){
            delete myArr[i];
        }
    }
    return myArr;
}

console.log(myFuntion([1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 9], 6));