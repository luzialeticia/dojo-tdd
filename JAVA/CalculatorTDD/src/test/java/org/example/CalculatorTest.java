package org.example;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;


public class CalculatorTest {
    Calculator calculator;

    @Before

    public void startCalculator() {
        calculator = new Calculator();
    }
    @Test
    public void should_sum_two_numbers() {

        int sum = calculator.sum(2, 3);
        Assert.assertEquals(5, sum);
    }
    @Test
    public void should_subtract_two_numbers() {

        int subtract = calculator.subtract(10, 5);
        Assert.assertEquals(5, subtract);
    }
    @Test
    public void should_multiplicate_two_numbers() {

        int multiplicate = calculator.multiply(2, 3);
        Assert.assertEquals(6, multiplicate);
    }
    @Test
    public void should_divide_two_numbers() {

        int divide = calculator.divide(10, 2);
        Assert.assertEquals(5, divide);
    }

}


