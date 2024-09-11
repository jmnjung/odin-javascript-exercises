const removeFromArray = function (array, ...args) {
  const result = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      result.push(item);
    }
  });
  return result;
};

module.exports = removeFromArray;
