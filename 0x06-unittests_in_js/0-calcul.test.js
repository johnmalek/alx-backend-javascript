const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function () {
  it(`checking if number is round`, function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });
  it(`checking if numbers round`, function () {
    const result = calculateNumber(1.8, 3.4);
    assert.strictEqual(result, 5);
  });
  it(`checking if numbers round`, function() {
    const result = calculateNumber(2.6, 2.7);
    assert.strictEqual(result, 5);
  });
});
