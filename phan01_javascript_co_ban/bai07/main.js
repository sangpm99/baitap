const userActivity = {
    'id': 23894201352,
    'date': 'January 1, 2017',
    'data user': {
      totalUsers: 51,
      online: 42
    }
   };

function myFunction(current, update) {
    if(((current == 'id') && (typeof update == 'number')) || ((current == 'date') && (typeof update == 'date')) || ((current = 'data user') && (typeof update == 'object'))) {
        return userActivity[current] = update;
    }
    else{
        alert("Wrong data");
    }
}
myFunction('id', 15);
console.log(userActivity);
