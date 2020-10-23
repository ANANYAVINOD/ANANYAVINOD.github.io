export default function login() {
  let uname = document.getElementById("name").value;
  let password = document.getElementById("psw").value;
  let userList = localStorage.getItem("user");
  let allUsers = JSON.parse(userList);

  for (let i = 0; i < allUsers.length; i++) {
    if (uname == allUsers[i].username && password == allUsers[i].password) {
      console.log("logged in " + allUsers[i].username);
      let currentUser = {
        name: allUsers[i].username,
        email: allUsers[i].email
      };
      localStorage.setItem("currentuser", JSON.stringify(currentUser));
      
      document.getElementById("myForm").style.display = "none"; 
      location.reload();
      return;
    }
  }
  loginerrorMsg();
}

export function loginerrorMsg() {
    let error = document.getElementById("error-message");
    let name = document.getElementById("name").value;
    let pass = document.getElementById("psw").value;
    if (name == "") {
      error.innerHTML = "Invalid Username";
    }
    else if (pass == "") {
      error.innerHTML = "Invalid Password";
    } else {
      error.innerHTML = "Incorrect Username or Password";
    }
}



/*class loginDetails {
  constructor(uname, password) {
    this.uname = uname;
    this.password = password;
  }
  loginf(uname, password) {
    let userList = localStorage.getItem("user");
    let allUsers = JSON.parse(userList);

    for (let i = 0; i < allUsers.length; i++) {
      if (uname == allUsers[i].username && password == allUsers[i].password) {
        console.log("logged in " + allUsers[i].username);
        let currentUser = {
          name: allUsers[i].username,
          email: allUsers[i].email
        };
        localStorage.setItem("currentuser", JSON.stringify(currentUser));
      
        document.getElementById("myForm").style.display = "none"; 
        location.reload();
        return;
      }
    }
  loginerrorMsg();
  }
}

let name = document.getElementById("name").value;
let pass = document.getElementById("psw").value;

let loginNew = new loginDetails(name, pass);
loginNew.loginf(name, pass);  */
