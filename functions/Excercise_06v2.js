"use strict";

function firstOccur(myString, letter) {
    var result;
    var i = 0;
    while (myString[i] === letter) {
        i++;
    }
    if ((i + 1) % 100 == 1) {
        result = "1st";
    } else if (i % 100 == 2) {
        result = "2nd";
    } else if (i == 3) {
        result = "3rd";
    } else {
        result = i  + "th";
    }
    return result;
}
console.log(firstOccur("aaaaabaaaaaaa", "a"));