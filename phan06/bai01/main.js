function changeDegree(c) {
    let f = (c * (9/5)) + 32;
    return f;
}
document.getElementById('output').innerHTML = changeDegree(30);
// 30*C = 86*F