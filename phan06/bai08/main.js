function myFunction(str) {
    let arr = str.split(' ');
    let arrNew = [];
    for(let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('');
        let firstChar = arr2[0].toUpperCase();
        arr2.splice(0, 1, firstChar);
        let strNew = arr2.join('');
        arrNew.push(strNew);
    }
    let str2 = arrNew.join(' ');
    document.getElementById('output').innerHTML = str2;
}
let myStr = "Xin chao cac ban";
myFunction(myStr);
document.getElementById('input').innerHTML = myStr;