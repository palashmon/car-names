import uniqueRandomArray from "unique-random-array";
import carNames from "./car-names.json";

export default {
  all: carNames,
  random: uniqueRandomArray(carNames),
};
