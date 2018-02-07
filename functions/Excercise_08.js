

function appearances(givenNumber, givenArray) {
    var numberOfApp = 0;
    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] === givenNumber) {
            numberOfApp += 1;
        }
    }

    return numberOfApp;

}

var arr = [1, 2, 3, 5, 4, 7, 1, 6, 1];
var result = appearances(1, arr)
console.log(result)