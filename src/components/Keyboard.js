import "./../styles/keyboard.scss";

import { Letter } from "./Letter";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Keyboard = (element) => {
  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  letters.forEach((symbol) => Letter(keyboard, "button", symbol, `${symbol}`));
  element.insertAdjacentElement("beforeend", keyboard);
};

export default Keyboard;
