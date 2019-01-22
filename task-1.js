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
}, {
  "id": 3,
  "first_name": "Wait",
  "last_name": "Dobrowolny",
  "gender": "Male",
  "language": "Chinese"
}, {
  "id": 4,
  "first_name": "Mayor",
  "last_name": "Fumagall",
  "gender": "Male",
  "language": "Kashmiri"
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
      //Filtering
      this.allUsers = this.allUsers.filter(function (item, i, array) {
        return array[i].id === id;
      })
      //Log out data
      console.log(this.allUsers);
    } else {
      return console.log('something goes wrong')
    }
  }

  logUsersCount() {
    console.log(this.allUsers.length)
  }

  removeById(removeId) {
    let removeIdStatus = this.allUsers.some(function (item, i, array) {
      return array[i].id === removeId;
    })

    if (removeIdStatus) {
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.allUsers[i].id === removeId) {
          console.log('buy buy ' + this.allUsers[i].first_name + 'with id: '+ this.allUsers[i].id)
          delete this.allUsers[i];
          return;
        } else {
          continue;
        }
      }
    } else {
      return console.log('Unable to find user with id:' + removeId)
    }
  }

}

let userList = new UserList(allUsers);
userList.removeById(1)