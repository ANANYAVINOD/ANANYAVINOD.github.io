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
   
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openRegForm() {
    document.getElementById("regForm").style.display = "block";
}

function closeRegForm() {
    document.getElementById("regForm").style.display = "none"; 
    location.reload();
}




