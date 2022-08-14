console.log ("new api");
let sbtn = document.getElementById('sbnt');


sbnt.addEventListener("click", showHide);
function showHide() {

  let newsAcco = document.getElementById('newsShow');

  if (newsAcco.style.display === "block") {
    newsAcco.style.display = "none";
  } else {

    newsAcco.style.display = "block";
  }
}

newsData = document.getElementById('newsData');


const xhr = new XMLHttpRequest ();

xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=in&apiKey=69c4fdd912164a40a6b17a67b76f52a6", true);

xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);

    let articles = json.articles;

    let newsHtml = "";
    console.log (articles);

    articles.forEach(function(element, index) {

      let news = `  <div class="newBox">

      <input type="checkbox" class="showBtn" name="sbnt" id="sbnt" ${index}/>

      <label for="sbnt" class="showBtn">
      <i class="fas fa-bars"></i>
      </label>

      <p>${element["title"]}</p>


      <div class="news_info" id="newsShow">
      <p>${element["content"]}</p>

      <a href=${element["url"]} target="_blank"><button id="lbtn">Load More</button></a>
      </div>


      </div>`;

      newsHtml += news;

    });
    newsData.innerHTML = newsHtml;
  } else {
    newsData.innerHTML="pls check Your internet coonection"
    
  }
}

xhr.send();