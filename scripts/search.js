class searchContent {
  search() {
    let searchedTag;
    document.querySelector("#search").addEventListener("click", function () {
        document.getElementById("searchDropdown").classList.add("showSearch");     
    });
    document.getElementById("searchCloseBtn").addEventListener("click", function () {
        document.getElementById("searchDropdown").style.display = "none"; 
        location.reload(); 
    });

    document.addEventListener("DOMContentLoaded", function () {
      let homeContent = "";
      let searchWord = "";
      let countWord = document.getElementsByClassName('highlight');
      document.getElementById("search-bar").addEventListener("keydown", function (e) {
        if (searchWord == "") {
          searchWord = document.getElementsByTagName("p");
        }
        if (e.key === "Enter") {
          if(countWord.length == 0){
            for (let values of searchWord) {
              searchedTag = values;
              searchWord = values.innerHTML;
              homeContent = searchWord;
              highlightWord(homeContent);   
            }
          searchWord = "";
          }
        }
        else if (e.key === "Backspace"){
          let countObj = document.getElementById("count-display");
          countObj.remove(); 
          //location.reload();
        }
      });
    },
    false
    );
  
    function highlightWord(searchWord) { 
      let text = document.getElementById("search-bar").value;
      if (text.length >= 3) {
        let newsearch = searchWord;
        let pattern = new RegExp("(" + text + ")", "g");
        let newText = newsearch.replace(
          pattern,
          "<span class='highlight'>" + text + "</span>"
        ); 
        let textcount = document.getElementsByClassName('highlight').length;
        document.getElementById("count-display").innerHTML = textcount + " " + "results found";
        searchedTag.innerHTML = newText;
      }   
      else {
        searchedTag.innerHTML = searchWord;
        document.getElementById("count-display").innerHTML = "No results found";
      }
    }
  }
}

let s = new searchContent();
s.search();

export let searchHome = new searchContent();
