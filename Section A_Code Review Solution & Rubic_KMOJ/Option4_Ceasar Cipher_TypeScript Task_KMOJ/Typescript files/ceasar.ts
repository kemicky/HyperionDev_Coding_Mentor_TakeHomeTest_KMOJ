// Author: Kemmy MO Jones
// Date: 10/5/2023
// Version: 1.0
// Copyright:  Copyright (c) 2023, all rights reserved.
// Programming Language: TypeScript
// Program Name: Caesar Cipher
// Purpose: A program that encrypts and decrypts a string using the Caesar Cipher algorithm


//greeting & introduction.
console.log("\nWelcome to MJ's Caesar Cipher Console Application.")
console.log("----------------------------------------------------\n")
console.log("Program Name: Caesar Cipher.")
console.log("Application Description: This console app encrypts and decrypts a string using the Caesar Cipher algorithm.")
console.log("Programmer: Kemmy MO Jones\n")
console.log(`Application Instructions: Enter a string and a shift number to encrypt the string. Press 'Enter' key to complete each task.`)
console.log("---------------------------------------------------------------------------------------------------------------------------\n")


// check if the letter is uppercase or not
function isUpperCase(str: string): boolean
{
    return str === str.toUpperCase();
}

//decipher the string
const cipher = (str: string, shift: number): string =>
{
    let decipher: string = " ";


    // Get the shift number and make sure it is between 0 and 26
    if (shift < 0)
        return cipher(str, shift + 26);
    if (shift > 26)
        return cipher(str, shift - 26);

    //iterate through each letter and decipher it
    for (let i = 0; i < str.length; i++) {

        //Check if the letter is uppercase or not
        if (isUpperCase(str[i])) {
            // display the decode string with an empty space in between each word and the key
            decipher += String.fromCharCode((str.charCodeAt(i) + shift - 65) % 26 + 65);
        } else {
            //else add lowercase letters
            decipher += String.fromCharCode((str.charCodeAt(i) + shift - 97) % 26 + 97);
        }
    }
    return decipher;
}

//get input string and encrypt
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a string: ', (str) =>
{


    //check if string is empty
    if (str == "" || str == null) {
        console.log(`\nError Message:`);
        console.log(`--------------`);
        console.log("\nInvalid input, Empty input string, please try again.")
        console.log("Application Terminated.....")
        console.log("----------------------------------------------------------------------------------\n")
        process.exit(0);
    }
    //check if number is entered instead of a string
    if (!isNaN(parseInt(str))) {
        console.log(`\nError Message:`);
        console.log(`--------------`);
        console.log("\nInvalid input, You did not enter a string, please try again.")
        console.log("Application Terminated.....")
        console.log("----------------------------------------------------------------------------------\n")
        process.exit(0);
    }


    // get the shift number and encrypt the string
    rl.question('\nEnter a shift number: ', (shift) =>
    {
        //check  if string and shoift number is empty or not
        if (shift == "") {
            console.log(`\nError Message:`);
            console.log(`--------------`);
            console.log("\nInvalid input, Shift number input can not be empty, please try again.\n")
            console.log("Application Terminated.....")
            console.log("----------------------------------------------------------------------------------\n")
            process.exit(0);
        }
        //check if shift number is a number or not
        if (isNaN(parseInt(shift))) {
            console.log(`\nError Message:`);
            console.log(`--------------`);
            console.log("\nInvalid input, You did not enter a number for the shift number, please try again.\n")
            console.log("Application Terminated.....")
            console.log("---------------------------------------------------------------------------------------------------\n")
            process.exit(0);
        }


        //check if the original string ends with a full stop or not.
        // if the original string ends with a full stop, add the full stop to the encrypted string.
        // But if the original string does not end with a full stop, do not add the full stop to the encrypted string.
        //remove symbols and number from the string and check if the string ends with a full stop or not

        console.log(`\n App output:`);
        console.log(`------------`);

        //check if the original string ends with a full stop or not.
        // if the original string ends with a full stop, add the full stop to the encrypted string.
        // But if the original string does not end with a full stop, do not add the full stop to the encrypted string.

        if (str.endsWith(".")) {

            console.log(`\nOriginal string: ${str}`);
            str = str.slice(0, -1);
            console.log(`Encrypted string: ${cipher(str, parseInt(shift))}.`);
        } else {

            console.log(`\nOriginal string: ${str}`);
            str = str;
            console.log(`Encrypted string: ${cipher(str, parseInt(shift))}`);
        }

        //clean up before closing the program
        rl.close();

    });

    // Before closing the program
    rl.on("close", function ()
    {
        console.log("\nYou've reached the end of the console app, Goodbye.!")
        console.log("App written in Typescript.")
        console.log("Exiting the application now...")
        console.log("---------------------------------------------------\n")
        process.exit(0);
    })

});



