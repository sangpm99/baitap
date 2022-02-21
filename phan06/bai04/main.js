function myFunction(str) {
    let arr = myStr.split(' ');
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        arr1 = arr[i].split('');
        for(let j = 0; j < arr1.length; j++){
            count++;        
        }
        arr2.push(count);
    }
    let num = 0;
    for(let i = 0; i < arr2.length; i++) {
        if(arr2[i] > num) {
            num = arr2[i];
        }
    }
    document.getElementById('output').innerHTML = num;
}
let myStr = "Xin chao cac ban";
myFunction(myStr);
document.getElementById('input').innerHTML = myStr;