// Author: Kemmy MO Jones
// Date: 10/5/2023
// Version: 1.0
// Copyright:  Copyright (c) 2023, all rights reserved.
// Programming Language: JavaScript
// Program Name: Caesar Cipher
// Purpose: A program that encrypts and decrypts a string using the Caesar Cipher algorithm

//check if letter is uppercase or not
function isUpperCase(str) {
  return str === str.toUpperCase();
}

//decipher the string
let cipher = (str, key) => {
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

//take a prompt and return function from user
let prompt = require('prompt-sync')();
let str = prompt('Enter a string: ');
let key = prompt('Enter a key: ');

console.log(cipher(str, parseInt(key)));
