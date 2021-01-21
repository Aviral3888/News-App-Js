let newsAccordion = document.getElementById('newsAccordion');

// Initialize the API parameters
let category = 'business';
let apiKey = 'c9cc196201c54d3da8bc5c4487f380f8';

// Create an AJAX GET Request
const xhr = new XMLHttpRequest();

xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, 'true');

xhr.onprogress = function() {
    // console.log('Work under progress');
}

xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = '';

        articles.forEach(function(element, index) {

            // console.log(articles[news]);

            let news = `
                <div class="card">
                    <div class="card-header" id="heading${index}">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b class="text text-info">Breaking News: </b>${element.title}
                          </button>
                        </h5>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body">
                            ${element.content}    
                        </div>
                    </div>
                </div> 
            `

            newsHtml += news;
        })

        newsAccordion.innerHTML = newsHtml;
    } else {
        console.error('Some error');
    }
}

xhr.send();