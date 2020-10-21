document.querySelector("#search").addEventListener("click", function () {
    document.getElementById("searchDropdown").classList.add("showSearch");     
});

function closeSearch() {
    document.getElementById("searchDropdown").style.display = "none";
    location.reload();
}

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
});
},
    false
);


  
function highlightWord(searchWord) { 
    let text = document.getElementById("search-bar").value;
    if (text.length >= 3) {
      let newsearch = searchWord;
      var pattern = new RegExp("(" + text + ")", "g");
      var newText = newsearch.replace(
        pattern,
        "<span class='highlight'>" + text + "</span>"
      );
      console.log(text);
      searchedTag.innerHTML = newText;
    let content = document.getElementById("page-content"); 
    let str = content.textContent;
    console.log(str);
    let word = str.split(" ");
    let count = 0;
    let num = word.length;
    for(let i=0; i<num; i++){
        if(word[i].match(text)){
          count ++;
        }
    }

    let contentFeature = document.getElementById("page-content-feature"); 
    let strFeature = contentFeature.textContent;
    console.log(strFeature);
    let wordFeature = strFeature.split(" ");
    let countF = 0;
    let numF = wordFeature.length;
    for(let i=0; i<numF; i++){
        if(wordFeature[i].match(text)){
          countF ++;
        }
    }

    let totalCount = count + countF;

    console.log(count);
      document.getElementById("count-display").innerHTML = totalCount + " " + "results found";
    } 
    else {
     
      searchedTag.innerHTML = searchWord;
      
      document.getElementById("count-display").innerHTML = "No results found";
    }
}

