const fibonacci = function (countArg) {
  let count;
  if (typeof countArg === "number") {
    count = countArg;
  } else {
    count = parseInt(countArg);
  }

  if (count < 0) return "OOPS";

  let a = 0;
  let b = 1;

  for (let i = 0; i < count; i++) {
    let temp = b;
    b += a;
    a = temp;
  }

  return a;
};

module.exports = fibonacci;
