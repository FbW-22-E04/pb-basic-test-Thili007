// Add answers here

// Exercise One
const nameOfCity = function (city) {
  if (city.toLowerCase().startsWith("new")) return city;
  if (city.toLowerCase().startsWith("los")) return city;
  return "The city name does not begin with Los or New";
};
console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));

// Exercise Two
const isDivisible = (int) => int % 100 === 0;
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

// Exercise Three

const isRaining = (trueOrFalse) =>
  trueOrFalse == true
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
console.log(isRaining(true));

// Exercise Four

const geometricalSequence = function (powerOfTwo) {
  let counter = "";
  for (let i = 2; i <= 256; i *= 2) {
    counter += i.toString().concat(" ");
  }
  return counter.trim();
};
console.log(geometricalSequence());

// Exercise Five

const multiplesOfThree = function () {
  let result = "";
  for (let i = 3; i <= 15; i += 3) {
    result += i.toString().concat(" ");
  }
  return result.trim();
};
console.log(multiplesOfThree());

// Exercise Six

const powerOf = (int) => Math.pow(int, int);
console.log(powerOf(3));
console.log(powerOf(4));

// Exercise Seven

const getCount = (str) => {
  let vowelsCount = 0;
  for (let char of str) {
    if ("aeiou".includes(char)) vowelsCount++;
  }
  return vowelsCount;
};
getCount();

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
