// Author: Kemmy MO Jones
// Date: 10/5/2023
// Version: 1.0
// Copyright:  Copyright (c) 2023, all rights reserved.
// Programming Language: JavaScript
// Program Name: Caesar Cipher
// Purpose: A program that encrypts and decrypts a string using the Caesar Cipher algorithm

// greeting & introduction.
console.log("\nWelcome to MJ's Caesar Cipher Console Application.")
console.log("----------------------------------------------------\n")
console.log("Program Name: Caesar Cipher.")
console.log("Application Description: This console app encrypts and decrypts a string using the Caesar Cipher algorithm.")
console.log("Programmer: Kemmy MO Jones\n")
console.log(`Application Instructions: Enter a string and a shift number to encrypt the string. Press 'Enter' key to complete each task.`)
console.log("---------------------------------------------------------------------------------------------------------------------------\n")


//check if letter is uppercase or not
function isUpperCase(str)
{
  return str === str.toUpperCase();
}


//decipher the string
let cipher = (str, shift) =>
{
  let decipher = '';

  if (shift < 0) {
    return cipher(str, shift + 26);
  }
  if (shift > 26) {
    return cipher(str, shift - 26);
  }


  //decipher each letter
  for (let i = 0; i < str.length; i++) {

    //if letter is uppercase then add uppercase letters
    if (isUpperCase(str[i])) {
      decipher += String.fromCharCode((str.charCodeAt(i) + shift - 65) % 26 + 65);
    } else {
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + shift - 97) % 26 + 97);
    }
  }
  return decipher;
}

//import the prompt from prompt-Sync
let prompt = require('prompt-sync')();

//prompt for a string to encrypt
let str = prompt('Enter a string or words: ');

// check if the string is empty or null and exit program
if (str == null || str == " " || str.length == 0) {
  console.log("Error Message: String or words cannot be parsed or empty");
  console.log("\nYou've reached the end of the program, Goodbye.!")
  console.log("Program written in Javascript.")
  console.log("Exiting program now...")
  console.log("---------------------------------------------------\n")
  process.exit(0);
}


//check if the string contains numbers, only letters, strings and words are allowed
if (str.match(/[0-9]/i)) {
  console.log("Error Message: String or words cannot contain numbers, only letters, strings and words are allowed");
  console.log("\nYou've reached the end of the program, Goodbye.!")
  console.log("Program written in Javascript.")
  console.log("Exiting program now...")
  console.log("---------------------------------------------------\n")
  process.exit(0);
}

// prompt the user to enter a number.
let shift = prompt('Enter shift number: ');
// check if the shift number is empty or null
if (shift == null || shift == " " || shift.length == 0) {
  console.log("Error Message: Shift number cannot be parsed or empty");
  console.log("\nYou've reached the end of the program, Goodbye.!")
  console.log("Program written in Javascript.")
  console.log("Exiting program now...")
  console.log("---------------------------------------------------\n")
  process.exit(0);
}


//chck if the shift number contains letters or words, only numbers are allowed
if (shift.match(/[a-z]/i)) {
  console.log("Error Message: Shift number cannot contain letters or words, only numbers are allowed");
  console.log("\nYou've reached the end of the program, Goodbye.!")
  console.log("Program written in Javascript.")
  console.log("Exiting program now...")
  console.log("---------------------------------------------------\n")
  process.exit(0);
}



//check if string ends with a period
if (str.endsWith(".")) {
  str = str.slice(0, -1);
  console.log("The Encrypted String is: ", cipher(str, shift).concat("."));
} else {
  str = str;
  console.log("The Encrypted String is: ", cipher(str, shift));
}


console.log("\nYou've reached the end of the program, Goodbye.!")
console.log("Program written in Javascript.")
console.log("Exiting program now...")
console.log("---------------------------------------------------\n")
process.exit(0);
