const users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
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
let count = 0;
function countUser() {
    for (let user in users) {
        if(users[user].online == true) {
            count++;
        }
      }
}
countUser()
document.getElementById('output').innerHTML = count;