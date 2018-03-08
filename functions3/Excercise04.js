//Write a function that reverses a number. The result must be a number.

//12345 -> 54321 // Output must be a number
"use strict";
function reverseNumber(number){
    var stringNumber = "" + number;
    var finalNumber = "";
    for (var i = stringNumber.length-1 ; i >= 0; i--){
        finalNumber += stringNumber[i];

    } return parseInt(finalNumber);
   

}
console.log(reverseNumber(123));