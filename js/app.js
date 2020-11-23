// variable to hold Game object
let game;

// Create new Game class and assign startGame() to "start game" button
// Activate game
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Event listener for user clicks
// Call handleInteraction using the user clicks as the argument
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

// Capture users key press and create <button>
// Inner html of button changes dynamically to users input
// Use this button to call handleInteraction method on the Game class
window.addEventListener('keyup', keypress => {
    const userPress = keypress.key;
    const btn = document.querySelectorAll(`button[class="key"]`);

    btn.forEach(button => {
        if (button.textContent === userPress) {
            game.handleInteraction(button);
        }
    });
});

