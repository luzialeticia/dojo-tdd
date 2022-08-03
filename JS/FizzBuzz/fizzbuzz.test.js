const fizzBuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
  const multipleOf3 = 9;
  const multipleOf5 = 20;
  const multipleOf3And5 = 30;
  const notAMultiple = 31;

  test("Should return 'Fizz' if number is multiple of 3", () => {
    const expectedResult = "Fizz";
    const result = fizzBuzz(multipleOf3);

    expect(result).toBe(expectedResult);
  });

  test("Should return 'Buzz' if number is multiple of 5", () => {
    const expectedResult = "Buzz";
    const result = fizzBuzz(multipleOf5);

    expect(result).toBe(expectedResult);
  });

  test("Retornar 'FizzBuzz' if number is multiple of 3 and 5", () => {
    const expectedResult = "FizzBuzz";
    const result = fizzBuzz(multipleOf3And5);

    expect(result).toBe(expectedResult);
  });

  test("Should return the number itself if it is not a multiple of 3 or 5", () => {
    const expectedResult = notAMultiple;
    const result = fizzBuzz(notAMultiple);

    expect(result).toBe(expectedResult);
  });
});