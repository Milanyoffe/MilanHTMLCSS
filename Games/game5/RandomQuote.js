
const quotes = [
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        text: "Success is a series of small wins.",
        author: "Zig Ziglar"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');

newQuoteBtn.addEventListener('click', displayRandomQuote);

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = `- ${randomQuote.author}`;
}

displayRandomQuote();