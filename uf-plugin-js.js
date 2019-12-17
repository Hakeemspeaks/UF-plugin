// Description: Makes a Http request to Google news and return the title and a link to the article

// http://news.google.com/news?q=*&amp;output=rss
// Replace * for the search parameters.

// Scrub user input.
function userSearch() {

}

// Creates loading screen.
function loadingScreen() {

}


function loadDoc() {

  var xhttp = new XMLHttpRequest();
	//xhttp.withCredentials = true;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      sortOutArticles(this.responseText);
    }
	  else{
		  console.log("it did not work");
	  }
  };
  xhttp.open("GET", "https://news.google.com/news?q=stocks&amp;output=rss", true);
  xhttp.send();
}

// Grab all article elements from the response text.
// Grab a max of 30
function sortOutArticles(rssFeed) {

    // Loop through txt file to find where the start and end of each article
    var beginningArticles = [];
    var endArticles = [];
    var outputArticles = [];

    // Loop through the first 30 articles
    for (var i = 0; i < 30; i++) {

        if (beginningArticles.length > 0) {

            beginningArticles.push(rssFeed.search("<article", (beginningArticles[i-1] + 1)));
            endArticles.push(rssFeed.search("</article>", (endArticles[i-1] + 1)));
        }

        else{

            beginningArticles.push(rssFeed.search("<article"));
            endArticles.push(rssFeed.search("</article>"));
        }
    }

    showAllArticles(pullArticle(rssFeed, beginningArticles, endArticles));
}

// Pull each article out and place them into an array.
function pullArticle(rssFeedFinished, beginningArticlesFinished, endArticlesFinished) {

    if (beginningArticlesFinished.length > 0) {

        for (var j = 0; j < beginningArticlesFinished.length; j++) {

            outputArticles.push(rssFeedFinished.slice(beginningArticlesFinished[j], (endArticlesFinished[j] + 9)));
        }

    }

    return outputArticles;
}

// Find and display the titles and hyperlinks.
function cleanArticles(completedArticles) {

}
