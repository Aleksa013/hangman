import "./../styles/guesses.scss";

const guessesBlock = document.createElement("p");
guessesBlock.classList.add("guesses");
const Guesses = (element, count = 0) => {
  guessesBlock.innerHTML = `
    Incorrect guesses <span class = "guesses_quantity">${count} / 6 </span>
    `;
  const guessesQuantity = guessesBlock.querySelector(".guesses_quantity");
  if (count > 2 && count < 5) {
    guessesQuantity.classList.add("warning");
  }
  if (count >= 5) {
    guessesQuantity.classList.remove("warning");
    guessesQuantity.classList.add("danger");
  }
  element.insertAdjacentElement("afterbegin", guessesBlock);
};

export { Guesses, guessesBlock };
