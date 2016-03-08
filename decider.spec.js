'use strict';

var expect = require('chai').expect;
var decider = require('./decider');

describe('Decider', function () {

  describe('with ordinary numbers', function () {
    it('should return the number', function () {
      var number = 1;
      var result = decider(number);
      expect(result).to.eql(number);
    });
  });

  describe('with 15k numbers', function () {
    it('should return FizzBuzz', function () {
      var number = 15;
      var result = decider(number);
      expect(result).to.eql('FizzBuzz');
    });
  });

  describe('with 5k but not 15k numbers', function () {
    it('should return Buzz', function () {
      var number = 5;
      var result = decider(number);
      expect(result).to.eql('Buzz');
    });
  });

  describe('with 3k but not 15k numbers', function () {
    it('should return Fizz', function () {
      var number = 3;
      var result = decider(number);
      expect(result).to.eql('Fizz');
    });
  });

});
