const textElement = document.getElementById('dynamic-text');
const phrases = [
  "CSE-AI student",
  "Curious mind. Busy building.",
  "Teaching machines (and myself).",
  "Turning ideas into real things."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // Subtracting text
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Faster when deleting
  } else {
    // Adding text
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100; // Standard typing speed
  }

  // If word is complete
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 1200; // Pause at the end of the phrase
  } 
  // If word is fully deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
    typeSpeed = 500; // Short pause before starting next word
  }

  setTimeout(typeLoop, typeSpeed);
}

// Initialize the effect
window.onload = typeLoop;