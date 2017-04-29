const Utils = require('./utils.js');
const MovingObject = require('./moving_object.js');

const DEFAULTS = {
        COLOR: 'grey',
        RADIUS: 50,
        SPEED: 4
};

function Asteroid(options) {
  this.color = DEFAULTS.COLOR;
  this.radius = DEFAULTS.RADIUS;
  MovingObject.call(this, {
    pos: options.pos,
    color: this.color,
    radius: this.radius,
    vel: randomVec(DEFAULTS.SPEED)
  });
}

console.log(`Asteroid: ${Asteroid}`);
console.log(`MovingObject: ${MovingObject}`);
Utils.inherits(Asteroid, MovingObject);

// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}

// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

module.exports = Asteroid;
