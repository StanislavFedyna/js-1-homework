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

// newUser for testing ADD method
let newUser = {
  "id": '',
  "first_name": "Stas",
  "last_name": '',
  "gender": '',
  "language": ''
}
class UserList {
  constructor(allUsers) {
    this.allUsers = allUsers;
  }

  showNames() { //Show all names method
    this.allUsers.forEach(function (item, i, array) {
      console.log(array[i].first_name)
    })
  }

  showById(id) { //Show user with same id
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
  // All users count
  logUsersCount() {
    console.log(this.allUsers.length)
  }

  removeById(removeId) {
    //Filtering
    let removeIdStatus = this.allUsers.some(function (item, i, array) {
      return array[i].id === removeId;
    })

    if (removeIdStatus) {
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.allUsers[i].id === removeId) {
          console.log('buy buy ' + this.allUsers[i].first_name + 'with id: ' + this.allUsers[i].id)
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

  add(newUser, id = this.allUsers.length + 1) {
    //Generation unique id for new user
    let newUserId = id;
    let newUserPosition = this.allUsers.length + 1;
    //Check username
    if (newUser.first_name === '') {
      return console.log('Ops, first name is empty')
    } else {
      // Add new user
      this.allUsers.push(newUser);
      this.allUsers[newUserPosition].id = newUserId;
      console.log('Hi everyone, I am ' + this.allUsers[newUserPosition].first_name)
    }


    console.log(allUsers)
  }

}

let userList = new UserList(allUsers);
userList.add(newUser)