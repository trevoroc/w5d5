function sumArgs() {
  let argsArr = Array.from(arguments);
  let total = 0;

  for (let i = 0; i < argsArr.length; i++) {
    total += argsArr[i];
  }

  return total;
}

function sumRest(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function (context) {
  let argsArr = Array.from(arguments);
  // let ctx = context;
  // console.log(argsArr);
  let func = this;

  return function () {
    let argsArr2 = Array.from(arguments);
    console.log(argsArr);
    console.log(argsArr2);
    func.apply(context, argsArr.slice(1).concat(argsArr2));
  };
};

Function.prototype.myBindRest = function (context, ...args) {
  return (...args2) => {
    this.apply(context, args.concat(args2));
  };
};
