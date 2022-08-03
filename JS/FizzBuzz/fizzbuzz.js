const fizzBuzz = (number) => {
    const multipleOf3 = (number) => {
        return number % 3 === 0;
      };
      
      const multipleOf5 = (number) => {
        return number % 5 === 0;
      };

    if (multipleOf3(number) && multipleOf5(number)) return "FizzBuzz";
    else if (multipleOf3(number)) return "Fizz";
    else if (multipleOf5(number)) return "Buzz";
  
    return number;
};
  
module.exports = fizzBuzz;