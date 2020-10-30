class loadMessage {
  msg() {
    document.getElementById("closeModalBtn").addEventListener("click", function () {
      document.getElementById("myModal").style.display = "none"; 
      //location.reload(); 
    });
    document.getElementById("envelope").addEventListener("click", function () {
      document.getElementById("myModal").style.display = "block";  
    });
  
    const messageItems = new XMLHttpRequest();
    messageItems.open("GET", "../apis/message.json", true);
    messageItems.send();
    messageItems.addEventListener("load", message);
 
    function message() {
      const messagePosts = JSON.parse(messageItems.response);
      const posts = document.getElementById('posts');
      for(let i=0; i<messagePosts.length; i++){
        const listItem = document.createElement('li');
        const listItemAnchor = document.createElement('a');
        //listItemAnchor.href = messagePosts[i]['href'];
        listItemAnchor.innerHTML = messagePosts[i]['title'] + "<span class='closeMsg'>" + "x" + "</span>";
        listItem.appendChild(listItemAnchor);
        posts.appendChild(listItem);
        //console.log(listItem);
        const btn = document.getElementsByClassName("closeMsg");
        //console.log(btn);
        btn[i].addEventListener("click" , function(){
          listItem.remove();
        });
      }
    }
  }  
}

export let loadMessages = new loadMessage();

