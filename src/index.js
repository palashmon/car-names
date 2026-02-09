import uniqueRandomArray from "unique-random-array";
import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const configPath = join(dirname(fileURLToPath(import.meta.url)), "./car-names.json");
const carNames = JSON.parse(fs.readFileSync(configPath, 'utf8'));

export default {
  all: carNames,
  random: uniqueRandomArray(carNames),
};
