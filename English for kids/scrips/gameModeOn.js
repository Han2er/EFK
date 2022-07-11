const startButton = document.querySelector(".start-game");
const newSheet = document.createElement("style");
newSheet.id = "new-sheet";
document.body.appendChild(newSheet);

export default function gameOn(inCategory, toggle) {
  const gameBar = document.getElementById("game-bar");
  gameBar.classList.toggle("active");

  if (inCategory >= 0) {
    if (!toggle) {
      newSheet.innerHTML = ".card-info {visibility: hidden}";
    } else {
      newSheet.innerHTML = ".card-info {visibility: visible}";
    }
  }
}
