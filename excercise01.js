//Find the min and max element in the following array and switch their places. Print out the modified array in the console.
//Input: [3, 500, 12, 149, 53, 414, 1, 19]
//Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

var input = [3, 50, 12, 149, 530, 414, 1, 19];

var maxFunction = function max(input) {
    var res = input[0]
    for (var i = 1; i < input.length; i++) {
        if (res > input[i]) {
            res = res;

        } else {
            res = input[i];
        }
    }

    return res;

}

var minFunction = function min(input) {
    var res = input[0]
    for (var i = 1; i < input.length; i++) {
        if (res < input[i]) {
            res = res;

        } else {
            res = input[i];
        }
    }

    return res;

}

var maxIndex = function maxIndexA (input, maxFunction) {
    var i = 0;
    var result;
    while (input[i] != maxFunction) {
    
        result = i+1
        i++
        break;
    }

    return result;

}

    console.log(maxIndex(input));