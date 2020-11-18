// Game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'the body cannot live without the mind', // the matrix
            'im in a glass case of emotion', // anchorman 
            'i dont think were in kansas anymore', // the wizard of oz
            'hold on to your butts', // jurassic park
            'come with me if you want to live' // terminator 2
        ];
        this.activePhrase = null;
    }

    // remove overlay
    // call getRandomPhrase
    // set and return activePhrase to random phrase returned from getRandomPhrase
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        return this.activePhrase;
    }

    // return phrase based on the random index value of 0 - array length
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}