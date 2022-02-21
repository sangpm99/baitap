function myFunction(num) {
    if((num > 0) && (Number.isInteger(num) == true)) {
        let result = 1;
        for(let i = num; i > 0; i--) {
            result *= i;
        }
        document.getElementById('output').innerHTML = result;
    }
    else {
        alert("Số truyền vào phải là số nguyên và lớn hơn 0");
    }
}
let num = 5;
myFunction(num);
document.getElementById('input').innerHTML = num;