var myArr = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function myFunction(par, strokes) {
    if(par >= 0) {
        if(strokes == 1) {
            alert(myArr[0]);
        }
        else if(strokes <= (par - 2)) {
            alert(myArr[1]);
        }
        else if(strokes == (par - 1)) {
            alert(myArr[2]);
        }
        else if(strokes == par) {
            alert(myArr[3]);
        }
        else if(strokes == (par + 1)) {
            alert(myArr[4]);
        }
        else if(strokes == (par + 2)) {
            alert(myArr[5]);
        }
        else if(strokes >= (par + 3)) {
            alert(myArr[6]);
        }
    }
    else{
        alert("Par luôn là số dương");
    }
}

myFunction(4,2);

// document.getElementById('output').innerHTML = myFunction(5, 2);