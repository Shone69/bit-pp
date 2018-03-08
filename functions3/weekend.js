"use strict";

function add(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var arrItem = arr[i];

        if (arrItem % 3 === 0) {
            result[result.length] = arrItem;
        }

    }
    
    return result;
}



var myArr = [2, 5, 6, 7, 9];
console.log(add(myArr));

