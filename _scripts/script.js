const textElement = document.getElementById('text');
const phrases = ["Welcome to the site", "Explore the content", "Enjoy your stay"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 100;
let delayBetweenPhrases = 1000;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        currentLetterIndex--;
        textElement.textContent = currentPhrase.slice(0, currentLetterIndex);
    } else {
        textElement.textContent = currentPhrase.slice(0, currentLetterIndex);
        currentLetterIndex++;
    }

    if (!isDeleting && currentLetterIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenPhrases);
    } else if (isDeleting && currentLetterIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
