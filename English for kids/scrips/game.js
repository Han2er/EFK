/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
const startButton = document.querySelector(".start-game");
const main = document.querySelector("main");
const correctSound = new Audio("audio/correct.mp3");
const errorSound = new Audio("audio/error.mp3");
const successSound = new Audio("audio/success.mp3");
const lifeContainer = document.querySelector(".lifes");
const starsContainer = document.querySelector(".scores");

const getRandInt = (max) => Math.floor(Math.random() * max);

export default function startGame(pageIndex, cards) {
  const pageData = cards[pageIndex + 1];
  const soundsArr = pageData.map((el) => new Audio(el.audioSrc));

  startButton.onclick = () => {
    let life = 3;
    startButton.innerText = "Rety";
    const correctAnswers = [];
    let rand = getRandInt(soundsArr.length);
    correctAnswers.push(rand);
    drawIcons(life, soundsArr.length);

    main.childNodes.forEach((el) => {
      el.classList.remove("disabled");
    });

    // play random sound 1s later from start button click
    playRandSound(soundsArr, rand);

    main.childNodes.forEach((el) => {
      el.addEventListener("click", (e) => {
        const selectedCard = main.children[rand];
        // check if answer is correct
        if (selectedCard.contains(e.target)) {
          selectedCard.classList.add("disabled");
          correctSound.play();
          // check if user answered all tasks
          if (correctAnswers.length === soundsArr.length) {
            // game won
            gameOver("win");
            successSound.play();
          }
          //
          if (correctAnswers.length < soundsArr.length) {
            // generate new unique rand number
            while (true) {
              rand = getRandInt(soundsArr.length);
              if (!correctAnswers.includes(rand)) {
                correctAnswers.push(rand);
                break;
              }
            }

            // play new sound if answer is correct and new one exists
            playRandSound(soundsArr, rand);
          }
        } else {
          // if answer is incorect:
          life--;
          errorSound.play();
          lifeContainer.removeChild(lifeContainer.childNodes[0]);
          if (life === 0) {
            gameOver("lose");
          }
        }
      });
    });
  };
}

function playRandSound(arr, rand) {
  setTimeout(() => {
    arr[rand].play();
    // arr.splice(rand, 1);
  }, 1000);
}

function gameOver(status) {
  const closeBtn = document.createElement("p");
  closeBtn.className = "close-btn";
  closeBtn.innerText = "close";

  const gameStatus = document.createElement("p");
  gameStatus.className = "game-status";
  gameStatus.innerText = `You ${status}`;
  // eslint-disable-next-line no-unused-expressions
  status === "win" ? gameStatus.style.color = "green" : gameStatus.style.color = "red";
  gameStatus.appendChild(closeBtn);

  const finalWindow = document.createElement("div");
  finalWindow.className = "final-window";
  finalWindow.appendChild(gameStatus);

  document.body.appendChild(finalWindow);

  closeBtn.onclick = () => {
    document.body.removeChild(finalWindow);
  };
}

function drawIcons(lifeCount, totalPoints) {
  // clear element before draw
  lifeContainer.innerHTML = "";
  starsContainer.innerHTML = "";

  starsContainer.childNodes.forEach((child) => {
    starsContainer.removeChild(child);
  });

  // then draw
  for (let i = 0; i < lifeCount; i++) {
    const heart = document.createElement("img");
    heart.src = "img/heart.svg";
    heart.alt = "heart";
    lifeContainer.appendChild(heart);
  }

  for (let i = 0; i < totalPoints; i++) {
    const point = document.createElement("img");
    point.src = "img/star.svg";
    point.alt = "heart";
    starsContainer.appendChild(point);
  }
}
