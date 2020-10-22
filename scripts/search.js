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
    let count = 0;
    let num = word.length;
    for(let i=0; i<num; i++){
        if(word[i].match(text)){
          count ++;
        }
    }

    let contentFeature = document.getElementById("page-content-feature"); 
    let strFeature = contentFeature.textContent;
    let wordFeature = strFeature.split(" ");
    let countF = 0;
    let numF = wordFeature.length;
    for(let i=0; i<numF; i++){
        if(wordFeature[i].match(text)){
          countF ++;
        }
    }

    let contentAward = document.getElementById("page-content-award"); 
    let strAward = contentAward.textContent;
    let wordAward = strAward.split(" ");
    let countA = 0;
    let numA = wordAward.length;
    for(let i=0; i<numA; i++){
        if(wordAward[i].match(text)){
          countA ++;
        }
    }

    let contentTest = document.getElementById("page-content-test"); 
    let strTest = contentTest.textContent;
    let wordTest = strTest.split(" ");
    let countT = 0;
    let numT = wordTest.length;
    for(let i=0; i<numT; i++){
        if(wordTest[i].match(text)){
          countT ++;
        }
    }

    let totalCount = count + countF + countA + countT;

    console.log(count);
      document.getElementById("count-display").innerHTML = totalCount + " " + "results found";
    } 
    else {
     
      searchedTag.innerHTML = searchWord;
      
      document.getElementById("count-display").innerHTML = "No results found";
    }
}

