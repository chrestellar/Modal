'use strict';

// 1) store the result of selection areas that you need to manipulate in a variable

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//button close X
//

const btnsOpenModal = document.querySelectorAll('.show-modal');
//button show modal, select all buttons with the same class

// create close Modal function to reuse again
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  // why no bracket? if has, JS will immediately call the function as soon as JS execute this line. we want it to happen only when we click the close button
}
