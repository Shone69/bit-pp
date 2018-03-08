"is strict";

var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];

function sum(arrA, arrB) {

    var result = [];
    var x = 0;
    for (var i = 0; i < arrA.length; i++) {
        result[x] = arrA[i];
        x++;
        result[x] = arrB[i];
        x++;
    }



    return result;
}

console.log(sum(arr1, arr2));
