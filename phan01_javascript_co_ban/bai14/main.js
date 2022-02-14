let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriends(name, age, data) {
  user.name = name;
  user.age = age;
  user.data = data;
}

addFriends(
  'Phạm Văn Bảo',
  27,
  {
    userName: 'baopham',
    joinDate: 'May 26, 2022',
    friends: [
      'Sam',
      'Sakura',
      'Kiri'
    ],
    location: {
      city: 'Hà Nội',
      country: 'Việt Nam'
    }
  }
);
console.log(user);