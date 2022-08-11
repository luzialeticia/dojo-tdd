const Calculator = require("./Calculator");

describe("Calculator", () => {
  const number1 = 3;
  const number2 = 3;

  test("Should sum two values", () => {
    const result = Calculator.sum(number1, number2);

    expect(result).toBe(6);
  });

  test("Should subtract two values", () => {
    const result = Calculator.subtract(number1, number2);

    expect(result).toBe(0);
  });

  test("Should multiply two values", () => {
    const result = Calculator.multiply(number1, number2);

    expect(result).toBe(9);
  });

  test("Should divide two numbers", () => {
    const result = Calculator.division(number1, number2);

    expect(result).toBe(1);
  });

  test("Should do the factorial", () => {
    const result = Calculator.factorial(number1);

    expect(result).toBe(6);
  });

  test("Should do the factorial between two values", () => {
    const result = Calculator.factorialOfTheSum(number1, number2);

    expect(result).toBe(720);
  });
});