const getAge = function (birthYear, deathYear) {
  if (!deathYear) {
    const currYear = new Date().getFullYear();
    return currYear - birthYear;
  }
  return deathYear - birthYear;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });
};

module.exports = findTheOldest;
