const GameView = require('./game_view.js');
const Game = require('./game.js');

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext('2d');
  const gameView = new GameView(new Game(), ctx);
  gameView.start();
});
