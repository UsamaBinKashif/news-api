let apiKey = "9e8f2fdd5439ed61d1dfca984d8105a8";
let country = "pk";
let main = document.querySelector(".main");

let XHR = new XMLHttpRequest();
XHR.open(
  "GET",
  `https://gnews.io/api/v4/top-headlines?country=${country}&token=${apiKey}`,
  true
);

XHR.onload = function () {
  if (XHR.status === 200) {
    let news = JSON.parse(this.responseText);
    let articles = news.articles;

    articles.forEach((element) => {
      let card = `
      <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-blue-600 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-30 w-full object-contain object-cover " src="${element.image}"
              alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-50 mb-3">${element.title}</h1>
              <p class="leading-relaxed mb-3 text-gray-400">${element.description}</p>
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="${element.url}" target="_blank" >See More</a>
            </div>
          </div>
        </div>`;
      main.innerHTML += card;
    });
  }
};
XHR.send();
