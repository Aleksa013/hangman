import "./../styles/hint.scss";

const hintBlock = document.createElement("p");
hintBlock.classList.add("hint");
const Hint = (element, data, numberTask) => {
  hintBlock.textContent = `
    ${data[numberTask].hint}.
    `;
  element.insertAdjacentElement("afterbegin", hintBlock);
};

export { Hint, hintBlock };
