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

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const letterClass = document.querySelectorAll(`.${letter}`);

        letterClass.forEach(character => {
            if (character.className.includes(letter)) {
                character.classList.add('show');
            }
        });
    }
}