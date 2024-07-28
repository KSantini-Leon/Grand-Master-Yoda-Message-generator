// Array of quotes
const quotes = [
    "Listening to music sometimes, a window opens and happy you are.",
    "Just disconnect. Once in a day sometime, sit silently and from all connections disconnect yourself.",
    "Named must your fear be before banish it you can.",
    "You must unlearn what you have learned.", 
    "Train yourself to let go of everything you fear to lose.",
    "When you look at the dark side, careful you must be. For the dark side looks back.",
    "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.",
];

// Function to generate and display a random quote
function displayQuote() {
    // Generate a random index
    const index = Math.floor(Math.random() * quotes.length);

    // Get the quote element
    const quoteElement = document.getElementById("quote");

    // Set the quote text
    quoteElement.textContent = quotes[index];
}

// Event listener for new quote button
const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", displayQuote);

// Display initial quote on page load
displayQuote();