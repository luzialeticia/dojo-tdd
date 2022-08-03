package org.example;

public class FizzBuzz {
    public String convertNumber(int number){
        String value = "";

        if(number % 3 == 0 && number % 5 == 0)
            value = "FizzBuzz";
        else if (number % 5 == 0)
            value = "Buzz";
        else if(number % 3 == 0)
            value = "Fizz";
        else
            value = Integer.toString(number);

        return value;
    }
}
