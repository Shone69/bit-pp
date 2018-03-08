//Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

//[NaN, 0, 15, false, -22, '', undefined, 47, null]
"use strict";
var myArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function addToArray(stringArray) {
    var resultArray = "";
    for (var i = 0; i < stringArray.length; i++) {

        if (!isNaN(stringArray[i]) && stringArray[i] !== "undefined" && stringArray[i] !== null && stringArray[i] !== false && isFinite(stringArray[i])) {

            resultArray += stringArray[i];
        }

    }
    return resultArray;
}

console.log(addToArray(myArray));