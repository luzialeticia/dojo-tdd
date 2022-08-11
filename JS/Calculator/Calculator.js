class Calculator {
    static sum(number1, number2) {
      return number1 + number2;
    }

    static subtract(number1, number2) {
      return number1 - number2;
    }

    static multiply(number1, number2) {
      return number1 * number2;
    }

    static division(number1, number2) {
      return number1 / number2;
    }

    static factorial(number) {
      if (number === 0 || number === 1) {
        return 0;
      }
  
      let result = number;
      for (let i = 1; i < number; i++) {
        result *= number - i;
      }
  
      return result;
    }

    static factorialOfTheSum(number1, number2) {
      const sumValue = this.sum(number1, number2);
      const result = this.factorial(sumValue);

    return result;
    }
  }
  
  module.exports = Calculator;