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

class UserList {
  constructor(allUsers) {
    this.allUsers = allUsers;
  }

  showNames() { //Вивести імена
    this.allUsers.forEach(function (item, i, array) {
      console.log(array[i].first_name)
    })
  }

  showById(id) { //Вивести по id Об'єкт користувача
    let idBoolStatus = this.allUsers.some(function (item, i, array) {
      return array[i].id === id;
    })
    if (idBoolStatus) {
      //Спочатку фільтруємо
      this.allUsers = this.allUsers.filter(function (item, i, array) {
        return array[i].id === id;
      })
      //Потім виводимо
      console.log(this.allUsers);
    } else {
      return console.log('something goes wrong')
    }
  }
}

let user = new UserList(allUsers);
user.showById(1)