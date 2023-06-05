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

        System.out.println("\n\tWelcome to MJ's String Recursion & Number Fibonacci Series Console Application.");
        System.out.println("\t-------------------------------------------------------------------------------\n");
        System.out.println("\tApp Name: String Recursion & Number Fibonacci Series App.");
        System.out.println(
                "\tApp Description: This console app uses recursion to reverse a string and to generate a fibonacci series. ");
        System.out.println("\tProgrammer: Kemmy MO Jones " + "\n");
        System.out.println("Application Instructions: ");
        System.out.println("Enter a word or phrase and press [Enter] on your keyboard to reverse the string.");
        System.out.println(
                "Then Enter any number and  press [Enter] on your keyboard to get the fibonacci series of the number.");
        System.out.println(
                "-----------------------------------------------------------------------------------------------------\n");

        // Create a Scanner object to read input.
        Scanner scan = new Scanner(System.in);

        try {

            // Enter a word or phrase and press Enter
            System.out.println("\n\tString Recursion.");
            System.out.println("\t-----------------" + "\n");
            System.out.print("Enter any word or phase: ");

            // This method reads the provided number of characters in words using keyboard
            String word = scan.nextLine();
            String str = word;

            // Error handling checking for empty strings
            while (str.length() <= 0 || str.trim().isEmpty() || str.matches(".*\\d.*")) {

                System.out.println("\n\tOutput: ");
                System.out.println("\t-------" + "\n");

                // Error message to user
                System.out.println(
                        "Error Message: Invalid Input, String has unknow characters or String is Empty, Please try again.");

                // Enter a word or phrase and press Enter
                System.out.println("\n\tString Recursion: ");
                System.out.println("\t-----------------" + "\n");
                System.out.print("Enter any word or phase: ");
                word = scan.nextLine();
                str = word;

            } // end of while

            // validation that a character or words is entered, ie string is not empty.
            if ((str.length() > 0 || !str.isEmpty())) {

                // create an object of recursion class
                recursion obj = new recursion();

                // display string reverse.
                System.out.println("\n\tOutput: ");
                System.out.println("\t-------" + "\n");

                System.out.print("Reverse of the string is: ");
                obj.reverse(str);

            } else {

                System.out.println("\n\tOutput: ");
                System.out.println("\t------" + "\n");

                // Error message to user
                System.out.println(
                        "Error Message: Invalid Input, String cannot be empty and or number is less than 0., Please try again.");

                // Inform user that program is ending.
                System.out.println("\tApplication written in Java.");
                System.out.println(
                        "\tThanks for using MJ's String Recursion & Number Fibbonacci Series Console App, Goodbye!. ");
                System.out.println("\tApplication is terminating now....\n");
                System.out.println(
                        "------------------------------------------------------------------------------------------"
                                + "\n");

                // exit program
                System.exit(0);

            } // end of if else

            // Get fibonacci numbers in a number series
            System.out.println("\n\tNumber Fibonnacci Series. ");
            System.out.println("\t-------------------------" + "\n");
            System.out.print("Enter the number of fibonacci numbers you want in the series: ");

            int num = scan.nextInt();
            int maxNumber = num;

            // Display fibonacci series for the number of elements requested by user
            System.out.println("\n\tOutput: ");
            System.out.println("\t-------" + "\n");

            System.out.print("Fibonacci Series of " + maxNumber + " is: ");

            // Get fibonacci numbers in a number series
            for (int i = 0; i < maxNumber; i++) {
                System.out.print(recursion.getfibonacciNumber(i) + " ");
            } // end of for loop

            // Inform user that program is ending and who created it
            System.out.println(
                    "\n\n\tYou have reached the end of the String Recursion & Number Fibonnacci Series console app. ");
            System.out.println("\tApplication written in Java.");
            System.out.println(
                    "\tThanks for using MJ's String Recursion & Number Fibbonacci Series Console App, Goodbye!. ");
            System.out.println("\tApplication successfully ended. " + "\n");
            System.out.println(
                    "----------------------------------------------------------------------------------------------"
                            + "\n");
            System.out.println();
            // exit program
            System.exit(0);

        } catch (final Exception e) {
            System.out.println(e);
        } // end of try catch

        scan.close();

    } // end of main

} // end of recursion class
