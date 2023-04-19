import uniqueRandomArray from 'unique-random-array';
import carNames from './car-names.json';

const all = carNames;
const random = uniqueRandomArray(carNames);

export default { all, random };