// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
function lastOccurrence(string,character) {
    for( i= string.length; i > 0; i-- ){
        var current = string[i];
        if(string[i] === character){
            return i+ 1;
        }

    }
    return -1
}
console.log(lastOccurrence("uspostaviti", "i"));
