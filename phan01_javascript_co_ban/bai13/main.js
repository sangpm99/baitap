const users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: false
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    },
};

var count = 0;
function myFunction(user) {
    for(user in users) {
        if((users[user]['online']) == true) {
            count++;
        }
    }
    return count;
}
myFunction();
console.log('Số người online là : ' + count);