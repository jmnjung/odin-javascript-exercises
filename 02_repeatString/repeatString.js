const repeatString = function (string, times) {
  if (times < 0) return "ERROR";
  let result = "";
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
};

module.exports = repeatString;
