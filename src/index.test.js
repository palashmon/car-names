
// Get expect from the Chai API for BDD assertion styles
const expect = require('chai').expect;

// Get our car names module here
const carNames = require('./index');

// Tests
describe('start test car-names module', function() {
	
  // Test car-names all property here
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(carNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
		return array.every(item => typeof item === 'string');
      }
    });
	
    it('should contain one car named `Ferrari`', function() {
      expect(carNames.all).to.include('Ferrari');
    });
  });

  // Test car-names random function here
  describe('random', function() {
    it('should return a random item from the carNames.all', function() {
      const randomCar = carNames.random();
      expect(carNames.all).to.include(randomCar);
    });
  });
});
