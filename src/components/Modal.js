import "./../styles/modal.scss";

const ModalWindow = (element, result, hint, word, functionClick) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <h3 class="modal_header">${result}</h3>
    <p class = "modal_answer">${hint} is ${word}</p>
    <button class = "modal_button"> Play again! </button>
    `;
  result === "You win!!!"
    ? modal.classList.add("win")
    : modal.classList.add("lose");
  element.append(modal);

  const buttonNow = document.querySelector(".modal_button");
  //    start new game
  buttonNow.addEventListener("click", (event) => {
    event.preventDefault();
    functionClick();
    modal.remove();
  });
};
export { ModalWindow };
