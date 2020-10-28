class loginValidation {
  #loginButton = document.getElementById("login-button");
  login(){
    this.#loginButton.addEventListener("click", function()  {
    
      let uname = document.getElementById("name").value;
      let password = document.getElementById("psw").value;
      let userList = localStorage.getItem("user");
      let allUsers = JSON.parse(userList);
  
      let newAr = allUsers.filter(validate);
      console.log(newAr);
 
      function validate() {
        allUsers.forEach(element => {
          if (uname == element.username && password == element.password) {
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
          loginerrorMsg();    
        }); 
      }
    
    function loginerrorMsg() {
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
  });
  }
}

//let c = new loginValidation();
//c.login();

export let loginData = new loginValidation();



