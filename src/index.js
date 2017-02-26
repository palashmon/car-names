import uniqueRandomArray from 'unique-random-array';
import carNames from './car-names.json';

module.exports = {
	all: carNames,
	random: uniqueRandomArray(carNames)
}