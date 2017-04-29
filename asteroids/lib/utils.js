const Utils = {
  inherits: (childClass, parentClass) => {
    console.log(`child: ${childClass}`);
    console.log(`parent: ${parentClass}`);
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Utils;
