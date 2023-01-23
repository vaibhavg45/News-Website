const result = fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=d7e33c0e3c4a45d48e8be59527e7eb7c"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
          displayNews(data);
    });
  
  
  function createCard(article) {
    
    let marquee = document.querySelector('marquee');
    marquee.innerHTML +=   (article.title).toUpperCase() + "   ||   " ;
  
    let card = document.createElement("div");
    card.classList.add("card");
    
    let image = document.createElement("img");
    image.classList.add("card-image")
    image.src = article.urlToImage;
    
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    
    let title = document.createElement("span");
    title.classList.add("card-title");
    title.textContent = article.title;
    
    let description = document.createElement("p");
    let root = document.querySelector(':root');
    let rootCss = getComputedStyle(root);  
    let trunc = rootCss.getPropertyValue('--setTrunc')
    
    description.textContent = article.description;
    
    if(trunc == 1) 
      description.textContent = description.textContent.substring(0,50);
      
    description.textContent = description.textContent.substring(0,60); 
    description.textContent += '...';
    
    let cardAction = document.createElement("div");
    cardAction.classList.add("card-action");
      
    let link = document.createElement("a");
    link.textContent = "Read More";
    link.href = article.url;
    link.setAttribute("id" , "read-more")
  
    cardAction.appendChild(link);
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    card.appendChild(image);
    card.appendChild(cardContent);
    card.appendChild(cardAction);
    document.querySelector("#news").appendChild(card);
  }
  

  function displayNews(data) {
  
    for (let i = 0; i < data.articles.length; i++) {
      createCard(data.articles[i]);
    }
  }