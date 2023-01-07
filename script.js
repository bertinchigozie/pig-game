'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player = document.querySelector('.player');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const current = document.querySelector('.current-score');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
score0.textContent = 0;
score1.textContent = 0;

btnRoll.addEventListener('click', () => {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore += randomNumber;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', () => {
  // To hold the score and update active player,s total score
  document.getElementById(`score--${activePlayer}`).textContent = score[
    activePlayer
  ] += currentScore;

  // to check if active player as morethan 100 ponits
  if (score[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.getElementById(`score--${activePlayer}`).textContent = 'You Win';
    dice.classList.add('hidden');
    btnRoll.setAttribute('disabled', true);
    btnHold.setAttribute('disabled', true);
  } else {
    // to switch players if score not morethan 100
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

btnNew.addEventListener('click', () => {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  score[activePlayer] = 0;
  score[0] = 0;
  score[1] = 0;
  activePlayer = 0;
  currentScore = 0;
  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  btnRoll.removeAttribute('disabled');
  btnHold.removeAttribute('disabled');
});
