"use strict";

function letterInString(myString,letter) {
    var count = 0;
    
    for (var i = 0; i < myString.length; i++){
        if (myString[i] === letter ){
            count += 1;
        } 
    } return count;
    
}
console.log(letterInString("my random d string", "d"));
