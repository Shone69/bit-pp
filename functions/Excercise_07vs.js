"use strict";

function array (string){
    var result = [];
    for (var i = 0; i < string.length; i++){
        if (string[i] === " ") {
            result[i] = null;            
        } else{
        result[i] = string[i];
    }
    } return result;
}

console.log(array("string string"));