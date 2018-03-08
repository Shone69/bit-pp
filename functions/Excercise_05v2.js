"use strict";

function firstOccur(myString, letter) {
    var result;
    var i = 0;
    while (myString[i] !== letter && i <= myString.length) {
        i++;
    }
    if ((i + 1) % 100 == 1) {
        result = "1st";
    } else if ((i + 1) % 100 == 2) {
        result = "2nd";
    } else if ((i + 1) == 3) {
        result = "3rd";
    } else if ((i+1)> 3 && (i+1)<101) {
        result = i + 1 + "th";
    } else {
        result = "There is no matching number"
    }return result;
}


console.log(firstOccur("aaaaaaaaaaaa", "b"));