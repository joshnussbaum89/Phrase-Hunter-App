// Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const phraseAsCharacters = this.phrase.split('');

        phraseAsCharacters.forEach(letter => {
            const li = document.createElement('li');
            const ul = document.querySelector('#phrase ul');
            ul.appendChild(li);
            li.textContent = letter;
            li.classList.add('hide');

            if (letter === " ") {
                li.classList.add('space');
            } else if (letter) {
                li.classList.add('letter');
                li.classList.add(`${letter}`);
            }
        });

    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}