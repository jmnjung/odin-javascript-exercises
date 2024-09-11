const convertToCelsius = function (fahrenheit) {
  return Math.round(10 * (5 / 9) * (fahrenheit - 32)) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(10 * ((9 / 5) * celsius + 32)) / 10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
