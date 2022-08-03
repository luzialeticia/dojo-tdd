package org.example;

public class Main {
    public static void main(String[] args) {

        FizzBuzz fizzbuzz = new FizzBuzz();

        for (int i = 1; i <= 100; i++){
            System.out.println(fizzbuzz.convertNumber(i));
        }

    }
}