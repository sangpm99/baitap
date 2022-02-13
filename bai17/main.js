function plus(myArr, n) {
    if(n <= 0) {
        return 0;
    }
    else {
        return (plus(myArr, n - 1) + myArr[n - 1]);
    }
}
document.getElementById('output').innerHTML = plus([1, 2, 3, 4, 5], 3);