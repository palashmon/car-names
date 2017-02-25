// Load the module unique-random-array module
const randomArray = require('unique-random-array');

// Load the car names array from json file
const carNames = require('./car-names.json');

// Travis build fail test. Use undefined function here
carwWithRandomName(); 

// Object exported when car-names module is loaded
module.exports = {
	all: carNames,
	random: randomArray(carNames)
}