/*
Simple program that translates text to "whale speak".

*** Whale Translator ***

This project is a modified version of the whale translator project found on Codecademy. The program translates text provided by the user into "Whale Speak". Essentially it removes the consonants from the input text and rebuilds the string using only vowels. If the text contains any "e's" or "u's" those vowels are then doubled. The resulting string is a vowel laden word that sounds like whale speak.

*/

//text that we will translate into whale language
let input = "Lu & Blu time."

//an array of vowels that we are going to look for in input
let vowels = ['a', 'e', 'i', 'o', 'u'];

//array where we will store vowels that we will find
let resultArray = [];

//logic that compares the input variable's text to the vowels array. The goal is to find all the vowels in the input string.
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
       //comparing the input letter to every letter in the vowels array. Pushing the characters from input that are vowels to the resultArray.
        if(input[inputIndex] === vowels[vowelsIndex]) {
            resultArray.push(input[inputIndex]);
        }
    }

    //double the 'e' and the 'u' that the program finds
    if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
        resultArray.push(input[inputIndex]);
    };
};

//printing the results now...

console.log(resultArray);