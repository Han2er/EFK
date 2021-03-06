/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import drawCards from "./drawCards.js";
import cards from "./cards.js";
import gameModeOn from "./gameModeOn.js";
import startGame from "./game.js";

let toggleBtn = false;
let categoryIndex = -1;
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const modeBtn = document.getElementById("mode-btn");
const playModeColor = "orange";
const trainModeColor = "dodgerblue";
const displayModeName = document.getElementById("display-mode-name");
const title = document.querySelector("h1");
const main = document.querySelector("main");
const back = document.getElementById("burger-menu-background");

// add category cards
drawCards(toggleBtn);
chooseCategory(main.childNodes);

// refresh page listener
title.addEventListener("click", () => refreshPage());

// Burger menu activation
burger.addEventListener("click", () => activateMenu());
back.addEventListener("click", () => activateMenu());

// Play & Train mode switch
modeBtn.parentElement.addEventListener("click", () => {
  if (toggleBtn === false) {
    modeBtn.style.transform = `translateX(${modeBtn.parentElement.offsetHeight}px)`;
    modeBtn.parentElement.style.backgroundColor = trainModeColor;

    displayModeName.innerText = "Play";

    document.querySelectorAll(".mode-indicator").forEach((el) => {
      el.style.backgroundColor = trainModeColor;
    });

    gameModeOn(categoryIndex, toggleBtn);

    startGame(categoryIndex, cards);
  } else {
    modeBtn.style.transform = "translateX(0px)";
    modeBtn.parentElement.style.backgroundColor = playModeColor;

    displayModeName.innerText = "Train";

    document.querySelectorAll(".mode-indicator").forEach((el) => {
      el.style.backgroundColor = playModeColor;
    });

    gameModeOn(categoryIndex, toggleBtn);
  }

  toggleBtn = !toggleBtn;
});

const lisItems = document.querySelectorAll("menu-item");
chooseCategory(lisItems);

/* ************************ */
/*          functions       */
/* ************************ */

// refresh page FX
function refreshPage() {
  drawCards(toggleBtn);
  chooseCategory(main.childNodes);
  categoryIndex = -1;

  document.getElementById("new-sheet")
    .innerHTML = ".card-info {visibility: visible}";
}

// activate burger menu, open/close
function activateMenu() {
  burgerMenu.classList.toggle("active");
  burger.classList.toggle("active");
  back.classList.toggle("active");
}

// categoty chooser fx
function chooseCategory(nodesColection) {
  nodesColection.forEach((element, index) => {
    element.addEventListener("click", () => {
      drawCards(toggleBtn, index);
      categoryIndex = index;
    });
  });
}

// draw burger menu list
(function burgerMenuDrawer() {
  const headersArr = ["Home"];
  cards[0].forEach((el) => {
    headersArr.push(el.word);
  });

  const menuList = document.querySelector(".menu-list");

  headersArr.forEach((header, i) => {
    const li = document.createElement("li");
    li.className = "menu-item";
    li.innerText = header;

    menuList.appendChild(li);

    li.addEventListener("click", () => {
      if (i === 0) {
        refreshPage();
        activateMenu();
      } else {
        drawCards(toggleBtn, i - 1);
        activateMenu();
      }
    });
  });
}());
