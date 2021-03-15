function randomRangeNumber(minNumber, maxNumber) {
  var randomInt = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  return randomInt;
}
console.log(randomRangeNumber(2, 10));

module.exports = randomRangeNumber;