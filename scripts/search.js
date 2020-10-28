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
      document.getElementById("search-bar").addEventListener("keydown", function (e) {
        if (searchWord == "") {
          searchWord = document.getElementsByTagName("p");
        }
        if (e.key === "Enter") {
          for (let values of searchWord) {
            searchedTag = values;
            searchWord = values.innerHTML;
            searchWord = searchWord.toString();
            homeContent = searchWord;
            highlightWord(homeContent);
          }
          searchWord = "";
        }
        else if (e.key === "Backspace"){
          let countObj = document.getElementById("count-display");
          countObj.remove();
          location.reload();
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
          "<span id='highlight'>" + text + "</span>"
        );
        searchedTag.innerHTML = newText;
        let content = document.getElementById("page-content"); 
        let str = content.textContent;
        let word = str.split(" ");
   
        let contentFeature = document.getElementById("page-content-feature"); 
        let strFeature = contentFeature.textContent;
        let wordFeature = strFeature.split(" ");

        let contentAward = document.getElementById("page-content-award"); 
        let strAward = contentAward.textContent;
        let wordAward = strAward.split(" ");
    
        let contentTest = document.getElementById("page-content-test"); 
        let strTest = contentTest.textContent;
        let wordTest = strTest.split(" ");

        let totalWords = [...word, ...wordFeature, ...wordAward, ...wordTest];
        let totalCount = 0;
        totalWords.forEach(element => {
          if(element.match(text)){
            totalCount ++;
          }
          document.getElementById("count-display").innerHTML = totalCount + " " + "results found";
        });

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
