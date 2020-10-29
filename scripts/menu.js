class loadMenu {
    menuShow() {

    if (localStorage.getItem("currentuser")) {
        document.querySelector("#dropbtn").addEventListener("click", function () {
            document.getElementById("loggedInDropdown").classList.toggle("show");  
            document.getElementById("Dropdown").classList.toggle("hide");
        });
        let userName = JSON.parse(localStorage.getItem("currentuser")).name;
        document.getElementById("name-display").innerHTML = "Hi, " + userName;

        document.querySelector("#logout-button").addEventListener("click", function () {
            localStorage.removeItem("currentuser");
            document.getElementById("Dropdown").classList.toggle("show");
            document.getElementById("loggedInDropdown").classList.toggle("hide");
            location.reload();
        });

        document.getElementById("search").style.display ="flex";
        document.getElementById("envelope").style.display ="flex";
        document.getElementById("dropbtn").style.display ="flex";
    }
    else {
        document.querySelector("#dropbtn").addEventListener("click", function () {
           document.getElementById("Dropdown").classList.toggle("show");
           document.getElementById("loggedInDropdown").classList.toggle("hide");
        });

        document.getElementById("search").style.display ="none";
        document.getElementById("search").style.display ="none";
        document.getElementById("dropbtn").style.display ="flex";
    }
   
    document.getElementById("loginForm").addEventListener("click", function () {
       document.getElementById("myForm").style.display = "block";  
    });

    document.getElementById("closeBtn").addEventListener("click", function () {
        document.getElementById("myForm").style.display = "none";   
    });

    document.getElementById("closeregBtn").addEventListener("click", function() {
        document.getElementById("regForm").style.display = "none";
    })

    document.getElementById("registerForm").addEventListener("click", function () {
        document.getElementById("regForm").style.display = "block";  
    });

    document.getElementById("nav-bar").addEventListener("click", function(){
        document.getElementById("menu-items").classList.toggle("showMenu");
    });
  }
}
//let m = new loadMenu();
//m.menuShow();

export let menuItems = new loadMenu();