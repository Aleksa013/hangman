import "./../styles/secretWord.scss";

import { Letter } from "./Letter";

const word = document.createElement("section");
word.classList.add("secret-word");
const SecretWord = (element, data, numberTask) => {
  word.innerHTML = ``;
  for (let i = 0; i < data[numberTask].answer.length; i += 1) {
    Letter(word, "div", data[numberTask].answer[i], "letter_word");
  }
  element.insertAdjacentElement("afterbegin", word);
};

export { SecretWord, word };
