// Variable declarations

const heroLetters = document.querySelectorAll('.letter');

// Every letter in the hero container transforms up and down on mouse hover and pulls neighboring letters with it

heroLetters.forEach((letter, index) => {
  letter.addEventListener('mouseover', () => {
    letter.classList.add('hover');
    // make letters left and right halfhover
    heroLetters[index - 1]?.classList.add('halfhover');
    heroLetters[index + 1]?.classList.add('halfhover');
  });
  letter.addEventListener('mouseout', () => {
    letter.classList.remove('hover');
    heroLetters[index - 1]?.classList.remove('halfhover');
    heroLetters[index + 1]?.classList.remove('halfhover');
  });
});
