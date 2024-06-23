const imgEl1 = document.querySelector(".img1");
const imgEl2 = document.querySelector(".img2");
const h1El = document.querySelector("h1");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", runDice);

function runDice() {
  // generate random numbers
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // set images
  imgEl1.setAttribute("src", `./images/dice${randomNumber1}.png`);
  console.log(randomNumber1);
  imgEl2.setAttribute("src", `./images/dice${randomNumber2}.png`);
  // display winner
  if (randomNumber1 > randomNumber2) {
    h1El.textContent = "🎊 Player 1 wins!";
  } else if (randomNumber1 === randomNumber2) {
    h1El.textContent = " Draw!";
  } else {
    h1El.textContent = " Player 2 wins! 🎊";
  }
}
