import { describe, expect, it } from "vitest";
import carNames from "./index.js";

describe("start test car-names module", () => {
  describe("all", () => {
    it("should be an array of strings", () => {
      expect(isArrayOfStrings(carNames.all)).toBe(true);

      /**
       * @param {string[]} array
       */
      function isArrayOfStrings(array) {
        return array.every(
          (/** @type {string} */ item) => typeof item === "string"
        );
      }
    });

    it("should contain one car named `Ferrari`", () => {
      expect(carNames.all).toContain("Ferrari");
    });
  });

  describe("random", () => {
    it("should return a random item from the carNames.all", () => {
      const randomCar = carNames.random();
      expect(carNames.all).toContain(randomCar);
    });
  });
});
