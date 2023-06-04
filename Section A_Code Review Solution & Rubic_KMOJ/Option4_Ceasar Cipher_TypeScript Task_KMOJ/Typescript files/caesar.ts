// Author: Kemmy MO Jones
// Date: 10/5/2023
// Version: 1.0
// Copyright:  Copyright (c) 2023, all rights reserved.
// Programming Language: TypeScript
// Program Name: Caesar Cipher
// Purpose: A program that encrypts and decrypts a string using the Caesar Cipher algorithm

//check if the letter is uppercase or not
function isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
  }
  
  //decipher the string
  const cipher = (str: string, key: number): string => {
    let decipher = '';
    //decipher each letter
    for(let i = 0; i < str.length; i++){
      //if letter is uppercase then add uppercase letters
      if(isUpperCase(str[i])){
        decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
      }else{
        //else add lowercase letters
        decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
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
  rl.question('Enter a string: ', (str) => {
    rl.question('Enter a key: ', (key) => {
      console.log(cipher(str, parseInt(key)));
      rl.close();
    });
  });

  
 