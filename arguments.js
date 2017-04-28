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
  let func = this;

  return function () {
    let argsArr2 = Array.from(arguments);
    func.apply(context, argsArr.slice(1).concat(argsArr2));
  };
};

Function.prototype.myBindRest = function (context, ...args) {
  return (...args2) => {
    this.apply(context, args.concat(args2));
  };
};

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(number) {
    numbers.push(number);
    console.log(number);
    if (numbers.length === numArgs){
      return sumRest(...numbers);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curryApply = function(numArgs) {
  let args = [];
  let func = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs){
      return func.apply(func, args);
    } else {
      return _curry;
    }
  }

  return _curry;
};

Function.prototype.curry = function(numArgs) {
  let args = [];

  const _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs){
      return this(...args);
    } else {
      return _curry;
    }
  };

  return _curry;
};

function plusThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function logNums(...nums) {
  console.log(nums);
}
