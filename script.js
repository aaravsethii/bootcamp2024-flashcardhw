const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
let flashcardLength = flashcards.length
// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

let cardContent = document.getElementById("card-content");
let card = document.getElementById("flashcard");
let prevButton = document.getElementById("prev-btn");
let nextButton = document.getElementById("next-btn");
let addCardButton = document.getElementById("add-card-btn");
let newTerm = document.getElementById("new-term");
let newDef = document.getElementById("new-definition");

// Start with this function to simply display the card
function displayCard() {
    let currCard = flashcards[currentIndex];
    let currTerm = currCard.term;
    let currDef = currCard.definition;
    if (showingTerm) {
        cardContent.textContent = currTerm;
    }
    else {
        cardContent.textContent = currDef;
    }
    
}

// The rest of the code you will write is apart of event listeners

// clicking flashcard
card.addEventListener('click', function() {
    showingTerm = !showingTerm;
    displayCard();
});

//previous button
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + flashcardLength) % flashcardLength;
    showingTerm = true;
    displayCard();
})

// next button
nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % flashcardLength;
    showingTerm = true;
    displayCard();
})

// add card button
addCardButton.addEventListener('click', function() {
    let term = newTerm.value;
    let definition = newDef.value;

    if (term && definition) {
        flashcards.push({term, definition});
        flashcardLength++;
        newTerm.value = "";
        newDef.value = "";
    }

})


// This line will display the card when the page is refreshed
window.onload = displayCard;
