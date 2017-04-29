const Asteroid = require('./asteroid.js');

const DEFAULTS = {
  DIM_X: 700,
  DIM_Y: 700,
  NUM_ASTEROIDS: 10
};

function Game() {
  this.asteroids = this.addAsteroids();
}

Game.prototype.randomPosition = function () {
  return [Math.floor(Math.random() * DEFAULTS.DIM_X),
          Math.floor(Math.random() * DEFAULTS.DIM_Y)];
};

Game.prototype.addAsteroids = function () {
  const asteroids = [];

  for (let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid({ pos: this.randomPosition() }));
  }

  return asteroids;
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(100, 100, 400, 400);

  this.asteroids.forEach( el => el.draw(ctx) );
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach( el => el.move() );
};

module.exports = Game;
