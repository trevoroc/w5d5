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
