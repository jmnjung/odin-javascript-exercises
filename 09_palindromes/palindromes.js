const palindromes = function (string) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumeric.includes(character))
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

module.exports = palindromes;
