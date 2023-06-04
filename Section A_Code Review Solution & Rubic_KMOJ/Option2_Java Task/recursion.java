// Author: Kemmy MO Jones
// Date: 10/5/2023
// Version: 1.0
// Copyright (c) 2023, all rights reserved
// Program Name: Recursion in Java
// Description: This program uses recursion to reverse a string and to generate a fibonacci series.

import java.util.Scanner;

public class recursion {

    /* Function to print reverse of the passed string */
    void reverse(String str) {
        if ((str == null) || (str.length() <= 1))

            System.console().readLine(str);
        else {
            System.out.print(str.charAt(str.length() - 1));
            this.reverse(str.substring(0, str.length() - 1));
        }
    }

    public static int getfibonacciNumber(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        return recursion.getfibonacciNumber(n - 2) + recursion.getfibonacciNumber(n - 1);
    } // end of if

    /**
     * @param args
     */

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        try {

            // Enter a word or phrase and press Enter
            System.out.print("Enter any word or phase: ");

            // This method reads the provided number of characters in words using keyboard
            String word = scan.nextLine();
            String str = word;

            // Error handling checking for empty strings
            while (str.length() <= 0 || str.trim().isEmpty() || str.matches(".*\\d.*")) {
                System.out.println("Invalid Input");
                System.out.print("Enter any word or phase: ");
                word = scan.nextLine();
                str = word;

            } // end of while

            // validation that a character or words is entered, ie string is not empty.
            if ((str.length() > 0 || !str.isEmpty())) {

                // create an object of recursion class
                recursion obj = new recursion();

                // display string reverse.
                System.out.print("Reverse of the string is: ");
                obj.reverse(str);

            } else {
                System.out.println("Invalid Input, String is empty and or number is less than 0.");
            } // end of if else

            // Get fibonacci numbers in a number series
            System.out.print("Enter the number of fibonacci numbers you want in the series: ");

            int num = scan.nextInt();
            int maxNumber = num;

            // Display fibonacci series for the number of elements requested by user
            System.out.print("Fibonacci Series of " + maxNumber + " is: ");

            // Get fibonacci numbers in a number series
            for (int i = 0; i < maxNumber; i++) {
                System.out.print(recursion.getfibonacciNumber(i) + " ");
            } // end of for loop

            // Inform user that program is ending and who created it
            System.out.println("\n" + "Thank you for using the program, Goodbye! ");
            System.out.println("Programmed by Kemmy MO Jones");
            System.out.println();
            // exit program
            System.exit(0);

        } catch (final Exception e) {
            System.out.println(e);
        } // end of try catch

        scan.close();

    } // end of main

} // end of recursion class
