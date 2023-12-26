"use strict";

// 1) store the result of selection areas that you need to manipulate in a variable

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//button close [X]
const btnCloseModal = document.querySelector(".close-modal");
//

//button show modal, select all buttons with the same class

const btnsOpenModal = document.querySelectorAll(".show-modal");

// 2) create open and close Modal function to reuse again
const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//3) loop one by one showModal and add all the functions when button is clicked

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  // why no bracket? The function expression already been done, so only need to declare here. If has (), JS will immediately call the function as soon as JS execute this line. we want it to happen only when we click the close button
}
