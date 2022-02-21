function myFunction(str) {
    if(typeof str == 'string') {
        const arr = [];
        for(let i = 0; i < str.length; i++) {
            arr.unshift(str[i]);
        }
        document.getElementById('output').innerHTML = arr.join('');
    }
    else {
        alert("Trường nhập vào phải là chuỗi");
    }
}
let ip = "Hello world";
myFunction(ip);
document.getElementById('input').innerHTML = ip;