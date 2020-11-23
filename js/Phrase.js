// Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    // split phrase into individual characters
    // display phrase on page in respective placeholder boxes
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

    // check if phrase includes letter
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // cycle through phrase and show or hide letters accordingly
    showMatchedLetter(letter) {
        const letterClass = document.querySelectorAll(`.${letter}`);

        letterClass.forEach(character => {
            if (this.checkLetter(letter)) {
                character.classList.add('show');
                character.classList.remove('hide');
            }
        });
    }
}