import "./styles/main.scss";
import "./styles/vars.scss";

import { Picture } from "./components/Picture";
import { SecretWord, word } from "./components/SecretWord";
import { Hint, hintBlock } from "./components/Hint";
import { GameField, gameFieldBlock } from "./components/GameField";
import { Guesses, guessesBlock } from "./components/Guesses";
import { ModalWindow } from "./components/Modal";
import tasks from "./tasks.json";

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.append(container);

const numberTask = (data) => {
  return Math.floor(Math.random() * data.length);
};

let number = numberTask(tasks);
// create page
Picture(container);
GameField(container, tasks, number);

// functions
const keyboard = document.querySelector(".keyboard");
const picture = document.querySelector(".picture");

// add styles for the kmown letter
const addStyles = (letter) => {
  for (let i = 0; i < word.children.length; i += 1) {
    if (word.children[i].outerText === letter) {
      word.children[i].classList.add("letter-known");
    }
  }
};
// make visible parts of picture

const makeVisibleMan = (number) => {
  for (let i = 0; i < number; i += 1) {
    picture.children[i].classList.add("wrongLetter");
  }
};
// restart
const getNewGame = () => {
  number = numberTask(tasks);
  wrongLetters = [];
  guessesBlock.innerHTML = ``;
  word.innerHTML = ``;
  hintBlock.innerHTML = ``;
  Hint(gameFieldBlock, tasks, number);
  SecretWord(gameFieldBlock, tasks, number);
  Guesses(gameFieldBlock);

  for (let i = 0; i < picture.children.length; i += 1) {
    picture.children[i].classList.remove("wrongLetter");
  }
  for (let i = 0; i < keyboard.children.length; i += 1) {
    keyboard.children[i].classList.remove("letter-down");
  }
};
// make disabled key
let wrongLetters = [];
keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("letter")) {
    if (!event.target.classList.contains("letter-down")) {
      event.target.classList.add("letter-down");
      if (tasks[number].answer.toUpperCase().includes(event.target.outerText)) {
        addStyles(event.target.outerText);
        const lettersKnown = document.querySelectorAll(".letter-known");
        if (tasks[number].answer.length === lettersKnown.length) {
          ModalWindow(
            container,
            "You win!!!",
            hintBlock.outerText,
            tasks[number].answer.toUpperCase(),
            getNewGame,
          );
        }
      } else {
        wrongLetters.push(event.target.outerText);
        Guesses(gameFieldBlock, wrongLetters.length);
        makeVisibleMan(wrongLetters.length);
        if (wrongLetters.length > 5) {
          ModalWindow(
            container,
            "You loose!!!",
            hintBlock.outerText,
            tasks[number].answer.toUpperCase(),
            getNewGame,
          );
        }
      }
    }
  }
});
// add the same thing for a real keyboard
document.addEventListener("keydown", (event) => {
  if (!wrongLetters.includes(event.key)) {
    for (const child of keyboard.children) {
      if (child.outerText === event.key.toUpperCase()) {
        child.classList.add("letter-down");
        if (tasks[number].answer.includes(event.key)) {
          addStyles(event.key.toUpperCase());
          const lettersKnown = document.querySelectorAll(".letter-known");
          if (tasks[number].answer.length === lettersKnown.length) {
            ModalWindow(
              container,
              "You win!!!",
              hintBlock.outerText,
              tasks[number].answer.toUpperCase(),
              getNewGame,
            );
          }
        } else {
          wrongLetters.push(event.key);
          Guesses(gameFieldBlock, wrongLetters.length);
          makeVisibleMan(wrongLetters.length);
          if (wrongLetters.length > 5) {
            ModalWindow(
              container,
              "You lose!!!",
              hintBlock.outerText,
              tasks[number].answer.toUpperCase(),
              getNewGame,
            );
          }
        }
      }
    }
  }
});
