

function sumOdd(givenArray) {
    var sum = 0;
    for (var i = 0; i < givenArray.length; i++) {

        if (givenArray[i] % 2 !== 0) {
            sum += givenArray[i];
        }
    } 
    return sum;

} 

console.log(sumOdd([1, 2, 3, 4, 5, 6, 7, 9]));
