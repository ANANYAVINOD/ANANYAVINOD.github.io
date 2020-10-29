class loginUser {

    constructor() {
      this.button =  document.getElementById("login-button");;
    }
    
    loginerrorMsg(name, pass) {
        const error = document.getElementById("error-message");
        if (name == "") {
          error.innerHTML = "Invalid Username";
        }
        else if (pass == "") {
          error.innerHTML = "Invalid Password";
        }else {
          error.innerHTML = "Incorrect Username or Password";
        }
    }

    userData() {
        const userList = localStorage.getItem("user");
        const allUser = JSON.parse(userList);
        return allUser ;
    }

    userValidate(){
        const users = loginUser.prototype.userData();
        users.forEach(element => {
            const uname = document.getElementById("name").value;
            const passw = document.getElementById("psw").value;
            if (uname == element.username && passw == element.password) {
              console.log("logged in " + element.username);
              let currentUser = {
                name: element.username,
                email: element.email
              };
              localStorage.setItem("currentuser", JSON.stringify(currentUser));
          
              document.getElementById("myForm").style.display = "none"; 
              location.reload();
              return;
            }
            loginUser.prototype.loginerrorMsg(uname , passw);
            return;       
        }); 
    }

    login()  { 
      this.button.addEventListener("click", this.userValidate); 
    }
}   

export const loginAuthentication = new loginUser();




    