let allUsers = [{
  "id": 1,
  "first_name": "Abner",
  "last_name": "Glaisner",
  "gender": "Male",
  "language": "Tswana"
}, {
  "id": 2,
  "first_name": "Hillyer",
  "last_name": "Ashall",
  "gender": "Male",
  "language": "Oriya"
}]

class UserList{
  constructor(allUsers){
    this.allUsers = allUsers;
  }
  showNames(){ //Вивести імена
    this.allUsers.forEach(function(item, i, array){
      console.log(array[i].first_name)
    })
  }
}

let user = new UserList(allUsers);
console.log(user.showNames())