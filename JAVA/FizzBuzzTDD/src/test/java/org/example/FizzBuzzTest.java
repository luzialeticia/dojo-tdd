package org.example;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class FizzBuzzTest {
    FizzBuzz fizzBuzz;

    @Before

    public void startFizzBuzz() {
        fizzBuzz = new FizzBuzz();
    }

    @Test
    public void should_return_fizzbuzz_if_multiples_of_3_or_5() {
        Assert.assertEquals("FizzBuzz", fizzBuzz.convertNumber(15));
    }

    @Test
    public void should_return_fizz_if__number_is_multiple_of_3() {
        Assert.assertEquals("Fizz", fizzBuzz.convertNumber(9));
    }

    @Test
    public void should_return_buzz_if__number_is_multiple_of_5() {
        Assert.assertEquals("Buzz", fizzBuzz.convertNumber(20));
    }

    @Test
    public void should_return_number_if_number_is_not_multiple_of_3_or_5() {
        Assert.assertEquals("1", fizzBuzz.convertNumber(1));
    }
}