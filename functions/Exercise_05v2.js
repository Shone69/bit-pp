// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function position(string,character) {

    for(var i=0; i < string.length; i++)
     if (string[i] === character) {
        return i;
     }

}
var pos = position("nekaRnecdfgdfn","n")

console.log(pos);
