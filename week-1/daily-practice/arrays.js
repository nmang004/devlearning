const users = [
    { name: 'Alice', lastName: 'Smith', age: 25, role: 'admin' },
    { name: 'Bob', lastName: 'Johnson', age: 30, role: 'user' },
    { name: 'Kevin', lastName: 'Smith', age: 17, role: 'user' },
    // ... more users
  ]


 function getUsersOver25(users) {
    return users.filter(user => user.age > 25);
 }

 console.log("Users over 25: ", getUsersOver25(users));

 function getUserNames(users) {
    return users.map(user => user.name);
 }

function getAdminUsers(users) {
    return users.filter(user => user.role === 'admin');
 }

 console.log("Admin users: ", getAdminUsers(users));

 function getUserAges(users) {
    return users.map(user => user.age);
 }
 function transformFullNameIsAdult(users) {
    return users.map(user => ({fullName: user.name + ' ' + user.lastName, isAdult: user.age >= 18}));
 }

 console.log("Full name and is adult: ", transformFullNameIsAdult(users));

 function getUserNamesAndAges(users) {
    return users.flatMap(user => ({name: user.name, age: user.age}));
 }

 console.log("User names and ages: ", getUserNamesAndAges(users));
 