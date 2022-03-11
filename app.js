// get dom element where we will render to
const renderQuotes = document.getElementById('renderQuotes');

const fetchQuotes = (URL) =>{
    fetch(URL)
    .then(res => res.json())
    .then(info => processRes(info));
}

const processRes = info => {
    info.forEach(element => {
        const container = document.createElement('div');

        const quotes = document.createElement('p');

        const quoteAuthor = document.createElement('h3');
        const ruler = document.createElement('hr')

        // populate elements
        quotes.innerHTML = element.text;
        quoteAuthor.innerHTML = element.author


        container.appendChild(quotes);
        container.appendChild(quoteAuthor);
        container.appendChild(ruler);


        renderQuotes.appendChild(container)
    });
}






window.onload = fetchQuotes('https://type.fit/api/quotes')