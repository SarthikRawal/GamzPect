"use strict";

// //Script for form
// const container = document.querySelector(".container");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const closeModal = function () {
//   container.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// const openModal = function () {
//   container.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !container.classList.contains("hidden")) closeModal();
// });

// //Entering Name
// let getName = function () {
//   var k;
//   var input = document.getElementsByName('p[]');

//             for (var i = 0; i < input.length; i++) {
//                 var a = input[i];
//                 k = k + "p[" + i + "].value= "
//                                    + a.value + " ";
//             }
//             console.log(k);
//             document.getElementById("par").innerHTML = k;
// };
var pl1 = prompt("Enter player 1 name:");
      console.log(pl1);
      document.getElementById("name--0").textContent = pl1;
      var pl2 = prompt("Enter player 2 name:");
      document.getElementById("name--1").textContent = pl2;


//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let current0El = document.querySelector("#current--0");
let current1El = document.querySelector("#current--1");

let scores, currentScore, activePlayer, playing;
//starting Condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

init();

//switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling Dice function
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1, if true then switch player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } //switching player
    else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
      alert(`Player--${activePlayer+1} wins..!`);
      
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);

///
document.getElementsByClassName("canvas_open").onClick;
