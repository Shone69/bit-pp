"use strict";

var array = [7, 9, 0, -2];

function lastElements(n) {
    var resultArray = [];
    var x = array.length - 1;
    var counter = n - 1;
    for (var i = 0; i < n; i++) {
        resultArray[counter] = array[x];
        x--;
        counter--;

    } return resultArray;
}


console.log(lastElements(2));