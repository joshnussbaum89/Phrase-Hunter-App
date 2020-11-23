// Create new Game class and assign startGame() to "start game" button
const game = new Game();

// Activate game
document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

// Event listener for user clicks
// Call handleInteraction using the user clicks as the argument
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
        console.log(e.target);
    }
});

// Capture users key press and create <button>
// Inner html of button changes dynamically to users input
// Use this button to call handleInteraction method on the Game class
window.addEventListener('keyup', key => {
    const userPress = key.key;
    const button = document.createElement('BUTTON');

    button.innerHTML = userPress;
    button.classList.add('key');
    game.handleInteraction(button);
});