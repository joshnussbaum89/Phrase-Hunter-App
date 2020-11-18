/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
    }

    getRandomPhrase() {
        // create random number based on phrases array length
        // return phrase at the random index value
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