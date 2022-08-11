package org.example;

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        System.out.println(calculator.sum(2, 3));
        System.out.println(calculator.subtract(2, 3));
        System.out.println(calculator.multiply(2, 3));
        System.out.println(calculator.divide(4, 2));

    }
}