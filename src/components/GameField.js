import "./../styles/gameField.scss";

import { SecretWord } from "./SecretWord";
import { Hint } from "./Hint";
import { Guesses } from "./Guesses";
import Keyboard from "./Keyboard";

const gameFieldBlock = document.createElement("div");
gameFieldBlock.classList.add("game-field");
const GameField = (element, data, numberTask = 0) => {
  Hint(gameFieldBlock, data, numberTask);
  SecretWord(gameFieldBlock, data, numberTask);
  Guesses(gameFieldBlock);
  Keyboard(gameFieldBlock);
  element.append(gameFieldBlock);
};

export { GameField, gameFieldBlock };
