import "./../styles/letter.scss";

const Letter = (element, block, character, classLetter) => {
  const letter = document.createElement(`${block}`);
  letter.classList.add("letter", `${classLetter}`);
  letter.textContent = `
     ${character.toUpperCase()}
    `;
  element.append(letter);
};

export { Letter };
