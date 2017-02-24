// Load the module unique-random-array module
const randomArray = require('unique-random-array');

// Load the car names array from json file
const carNames = require('./car-names.json');

// Object exported when car-names module is loaded
module.exports = {
	all: carNames,
	random: randomArray(carNames)
}