document.querySelector("#envelope").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";  
});

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    location.reload();
}

let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    let div = this.parentElement;
    setTimeout(function(){ div.style.display = "none"; }, 300);
  }
}
  
console.log(Notification.permission);

if (Notification.permission === "granted") {
    alert("Welocome");
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if(permission === "granted") {
            document.getElementById("msgOne").addEventListener("click", function () {
                alert("Welcome to A Solutions");
                console.log(permission);
            });
            document.getElementById("msgTwo").addEventListener("click", function () {
                alert("No discounts available currently");
            });
            document.getElementById("msgThree").addEventListener("click", function () {
                alert("Subscribe to hear product announcements");
            });
            document.getElementById("msgFour").addEventListener("click", function () {
                alert("Sale offers coming soon");
            });            
        }
    });   
}
