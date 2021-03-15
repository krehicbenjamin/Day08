function randomInteger() {
  var randomInt = Math.floor(Math.random() * 30);
  return randomInt;
}

console.log(randomInteger());

module.exports = randomInteger;
