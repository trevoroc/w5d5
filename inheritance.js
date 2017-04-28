Function.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

MovingObject.prototype.fly = () => {console.log("whoosh!");};

function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.shoot = () => {console.log("pew pew");};

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.break = () => {console.log ("I'm broken");};
