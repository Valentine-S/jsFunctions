Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
Array.protoype.myMap = function (callback) {
  newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};
Array.protoype.myFilter = function (callback) {
  newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      return true;
    }
  }
  return false;
};
Array.protoype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == false) {
      return false;
    }
  }
  return true;
};
Array.prototype.myReduce = function (callback, initialValue) {
  reduced = initialValue;
  for (let i = 0; i < this.length; i++) {
    reduced = callback(reduced, this[i]);
  }
  return reduced;
};

Array.prototype.myIncludes = function (target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == target) {
      return true;
    }
  }
  return false;
};

Array.prototype.myIndexOf = function (input) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == input) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myPush = function (items) {
  index = this.length;
  for (let i = 0; i < items.length; i++) {
    this[index + i] = items[i];
  }
  return this.length;
};

Array.prototype.myLastIndexOf = function (target) {
  let last = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == target) {
      last = i;
    }
  }
  return last;
};

function grabKeys(object) {
  newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}

function grabValues(object) {
  newArray = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
