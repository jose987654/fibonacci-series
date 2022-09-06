var assert = require("chai").assert;
const fibonacci = require("./fibonacci");

describe("Fibonacci Function unit tests", () => {
  // Test 1 :
  it("TEST 1", () => {
    assert.deepEqual(fibonacci(0), []);
  });

  // Test 2 :
  it("TEST 2", () => {
    assert.deepEqual(fibonacci(1), [0]);
  });

  // Test 3 :
  it("TEST 3", () => {
    assert.deepEqual(fibonacci(2), [0, 1]);
  });

  // Test 4 :
  it("TEST 4", () => {
    assert.deepEqual(fibonacci(3), [0,1,1]);
  });

  // Test 5 :
  it("TEST 5", () => {
    assert.deepEqual(fibonacci(4),[0,1,1,2]);
  });
});
