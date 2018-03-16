'use strict';

var assertThrows = (func, x, y) => {
  var threw = false;

  try {
    func(x, y);
  } catch (e) {
    threw = true;
  }

  if (!threw) { 
    console.log('Function did not throw an error');
  } else {
     console.log('Function threw, as expected');
  }
  return threw;
};

var multiply = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw "Either x or y is not a number. Please try again with diff x and y"
  } else {
    return x * y;
  }
}

console.log(assertThrows(multiply, 2, 3));
