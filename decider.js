module.exports = function (number) {
  var result = number;

  if (number % 3 === 0) {
    result = 'Fizz';
  }

  if (number % 5 === 0) {
    result = 'Buzz';
  }

  if (number % 3 === 0 && number % 5 === 0) {
    result = 'FizzBuzz';
  }

  return result;
}
