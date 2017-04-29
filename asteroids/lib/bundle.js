/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(5);
const MovingObject = __webpack_require__(4);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(1);
const Game = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext('2d');
  const gameView = new GameView(new Game(), ctx);
  gameView.start();
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.stroke();
};

MovingObject.prototype.move = function () {
  console.log(`pos: ${this.pos}`);
  console.log(`vel: ${this.vel}`);
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = MovingObject;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Utils = {
  inherits: (childClass, parentClass) => {
    console.log(`child: ${childClass}`);
    console.log(`parent: ${parentClass}`);
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Utils;


/***/ })
/******/ ]);