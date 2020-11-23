// Game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: 'the body cannot live without the mind' }, // the matrix
            { phrase: 'hold on to your butts' }, // jurassic park
            { phrase: 'come with me if you want to live' }, // terminator 2
            { phrase: 'may the force be with you' }, // star wars
            { phrase: 'nobody calls me chicken' } // back to the future
        ];
        this.activePhrase = null;
    }

    // remove overlay
    // call getRandomPhrase
    // set and return activePhrase to random phrase returned from getRandomPhrase
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
        return this.activePhrase;
    }

    // return phrase based on the random index value of 0 - array length
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomNum];
        return randomPhrase;
    }

    // change buttons based on user input
    // if phrase includes user input, show matched letter, disable button
    // else add .wrong class to user selection, disable button
    handleInteraction(button) {
        const phraseText = this.activePhrase.phrase.phrase;

        if (phraseText.includes(button.textContent)) {
            button.classList.add('chosen');
            button.disabled = true;
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
        }
        if (!phraseText.includes(button.textContent)) {
            button.classList.add('wrong');
            button.disabled = true;
            this.removeLife();
        }
    }

    //checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin() {
        this.gameOver();
    }

    //Increases the value of the missed property
    //Removes a life from the scoreboard
    //Checks if player has remaining lives and ends game if player is out
    removeLife() {
        const tries = document.querySelectorAll('img[src="images/liveHeart.png"]');
        tries[0].src = "images/lostHeart.png";
        this.missed += 1;

        if (this.missed > 4) {
            this.gameOver();
        }
    }

    // Show overlay with a message to user indicating that they won/lost, welcome them to try again
    gameOver() {
        const letterLI = document.querySelectorAll('.letter');
        const showLI = document.querySelectorAll('.show');
        const overlay = document.querySelector('#overlay');

        if (letterLI.length === showLI.length) {
            overlay.classList.add('win');
            overlay.innerHTML = `<h2>You Won 😎</h2><button class="refresh-win" onClick="window.location.reload();">Try again?</button>`;
            overlay.style.display = 'flex';
            return true;
        } else if (this.missed > 4) {
            overlay.classList.add('lose');
            overlay.innerHTML = `<h2>You Lost 🥺</h2><button class="refresh-lose" onClick="window.location.reload();">Try again?</button>`;
            overlay.style.display = 'flex';
            return false;
        }
    }
}