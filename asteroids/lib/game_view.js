function GameView(Game, ctx) {
  this.game = Game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.updateCanvas(), 20);
};

GameView.prototype.updateCanvas = function() {
  this.game.moveObjects();
  this.game.draw(this.ctx);
};

module.exports = GameView;
