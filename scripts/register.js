class registerValidate {
    
    constructor() {
        this.button = document.querySelector("#regBtn");
    }

    registerInitialise() {
        this.button.addEventListener("click", function() {
            registerValidate.prototype.validate(); 
            if(registerValidate.prototype.validate()){
                registerValidate.prototype.registerUser();
                document.getElementById("regForm").style.display = "none"; 
                location.reload();
            }  
        }); 
    }

    registerUser() {
        let name = document.getElementById("username").value;
        let mailId = document.getElementById("mail").value;
        let passwrd = document.getElementById("password").value;
        
        registerValidate.prototype.validate();

        const usersJson =JSON.parse(localStorage.getItem("user")) || [];
        //console.log(usersJson);
        let userlist = {
          username: name,
          password: passwrd,
          email: mailId
        };
        usersJson.push(userlist);
        let userDetails = JSON.stringify(usersJson);
        localStorage.setItem("user", userDetails);
        console.log("registered");
    }

    validate() {
        let id, msg;
        registerValidate.prototype.clearMsg();
        let name = document.getElementById("username").value;
        let mail = document.getElementById("mail").value;
        let pass = document.getElementById("password").value;
        let confirmPass = document.getElementById("cpassword").value;
        const nameFormat = /^[A-Za-z][A-Za-z\s]{3,10}$/;

        if (name.length == 0) {
          msg = "Username field is required";
          id = "error-name";
          registerValidate.prototype.errorMsg(id, msg);
        } else {
          if (name.length <= 2 ) {
            msg = "Username is invalid.";
            id = "error-name";
            registerValidate.prototype.errorMsg(id, msg);
          } 
          else if (name.match(nameFormat)) {
            msg = "";
            id = "error-name";
            registerValidate.prototype.errorMsg(id, msg);
          }else {
            msg = "Username is invalid.";
            id = "error-name";
            registerValidate.prototype.errorMsg(id, msg);
          }
        }

        const mailFormat = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
        if (mail == ""){
          msg= "Email id is required";
          id ="error-mail";
          registerValidate.prototype.errorMsg(id, msg);
        }else if (mail.match(mailFormat)) {
          msg = "";
          id ="error-mail";
          registerValidate.prototype.errorMsg(id, msg);
        }else {
          msg = "Enter valid email id";
          id ="error-mail";
          registerValidate.prototype.errorMsg(id, msg);
        }

        if (pass.length == 0) {
          msg = "Password is required";
          id = "error-pass";
          registerValidate.prototype.errorMsg(id, msg);
        } else {
            if (pass.length <= 8) {
              msg = "Password requires at least 8 characters";
              id = "error-pass";
              registerValidate.prototype.errorMsg(id, msg);
            } else {
            }
          }

          if (confirmPass.length == 0) {
            msg = "Confirm password is required";
            id = "error-cpass";
            registerValidate.prototype.errorMsg(id, msg);
          } else if (pass != confirmPass) {
              msg = "Does not match with password";
              id = "error-cpass";
              registerValidate.prototype.errorMsg(id, msg);
          } else {
              return true;
          }
    }

    errorMsg(id, msg) {
        let error = document.getElementById(id);
        error.textContent = msg;
        error.style.color = "#ff0000";
        error.style.fontSize = "12px";
        error.style.marginBottom = "10px";
        error.style.display = "block";
    }

    clearMsg() {
        let errors = document.querySelectorAll(".error-text");
        errors.forEach(element => {
          element.style.display = "none"; 
        });
    }

}
export const registerAuthentication = new registerValidate();
//registerAuthentication.registerInitialise();
