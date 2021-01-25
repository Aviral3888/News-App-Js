// BUSINESS
let newsBusinessAccordion = document.getElementById('newsBusinessAccordion');

// Initialize the API parameters
let category = 'business';
let apiKey = 'c9cc196201c54d3da8bc5c4487f380f8';

// Create an AJAX GET Request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, true);

xhr.onprogress = function() {
    // console.log('Work under progress');
}

xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';

        articles.forEach(function(element, index) {

            let news = `
            <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                  <span class="button-text"><b class="text text-danger"> Breaking News ${index+1} :</b> ${element["title"]}</span>
                                </button>
                                </h2>
                                </div>

                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsBusinessAccordion">
                                    <div class="card-body">
                                        ${element["content"]}. <a href="${element["url"]}" target = "_blank">Read More Here</a> 
                                    </div>
                                </div>
                            </div>            
            `
            newsHtml += news;
        })
        newsBusinessAccordion.innerHTML = newsHtml;
    } else {
        console.error('Some error');
    }
}
xhr.send();


// SPORTS
let newsSportsAccordion = document.getElementById('newsSportsAccordion');
let category1 = 'sports';

const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category1}&apiKey=${apiKey}`, true);
xhr1.onprogress = function() {}
xhr1.onload = function() {
    if (this.status == 200) {
        let json1 = JSON.parse(this.responseText);
        let articles1 = json1.articles;
        let newsHtml1 = '';
        articles1.forEach(function(element, index) {
            let news1 = `
            <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                  <span class="button-text"><b class="text text-danger"> Breaking News ${index+1} :</b> ${element["title"]}</span>
                                </button>
                                </h2>
                                </div>
                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsSportsAccordion">
                                    <div class="card-body">
                                        ${element["content"]}. <a href="${element["url"]}" target = "_blank">Read More Here</a> 
                                    </div>
                                </div>
                            </div>            
            `
            newsHtml1 += news1;
        })
        newsSportsAccordion.innerHTML = newsHtml1;
    } else {
        console.error('Some error');
    }
}
xhr1.send();

// SCIENCE
let newsScienceAccordion = document.getElementById('newsScienceAccordion');
let category2 = 'science';

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category2}&apiKey=${apiKey}`, true);
xhr2.onprogress = function() {}
xhr2.onload = function() {
    if (this.status == 200) {
        let json2 = JSON.parse(this.responseText);
        let articles2 = json2.articles;
        let newsHtml2 = '';
        articles2.forEach(function(element, index) {
            let news2 = `
            <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                  <span class="button-text"><b class="text text-danger"> Breaking News ${index+1} :</b> ${element["title"]}</span>
                                </button>
                                </h2>
                                </div>
                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsScienceAccordion">
                                    <div class="card-body">
                                        ${element["content"]}. <a href="${element["url"]}" target = "_blank">Read More Here</a> 
                                    </div>
                                </div>
                            </div>            
            `
            newsHtml2 += news2;
        })
        newsScienceAccordion.innerHTML = newsHtml2;
    } else {
        console.error('Some error');
    }
}
xhr2.send();
