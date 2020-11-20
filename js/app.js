// Create new Game class and assign startGame() to "start game" button
const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase);
console.log(phrase.phrase)
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction();
        phrase.checkLetter(e.target.textContent);
    }
});

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();
// console.log(phrase)