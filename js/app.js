// Create new Game class and assign startGame() to "start game" button
const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});
// document.getElementById('qwerty').addEventListener('keyup', (e) => {
//     console.log(e.target.textContent)
//     // game.handleInteraction(e.target);
// });

