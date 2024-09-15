// Selecting Content
const newQuoteButton = document.querySelector("#new-quote");
const twitterButton = document.querySelector(".twitter-button");
const quotes = document.querySelector("#quote");
const author = document.querySelector("#author");
const quoteContainer = document.querySelector("#quote-container");

// Function to get the quote
async function getQuotes() {
  loading();
  const apiUrl = "https://programming-quotesapi.vercel.app/api/random";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    complete();
    const quote = data;
    quotes.textContent = quote.quote;
    author.textContent = quote.author;
    if (!quote.author) {
      author.textContent = "Unknown";
    } else {
      author.textContent = quote.author;
    }
  } catch (error) {
    console.error(error);
  }
}

getQuotes();


// Function for loader
function loading() {
  quoteContainer.hidden = false;
}
// Function when the content is ready
function complete() {
  quoteContainer.hidden = false;
}

newQuoteButton.addEventListener("click", () => {
  getQuotes();
});


