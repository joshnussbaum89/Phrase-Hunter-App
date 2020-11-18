// Create new Game class and assign startGame() to "start game" button
const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});