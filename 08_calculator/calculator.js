const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((total, num) => total + num, 0);
};

const multiply = function (nums) {
  return nums.reduce((product, num) => product * num);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
