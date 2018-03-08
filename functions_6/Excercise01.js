"is stict";

function vowels(string) {
    var x = 0;
    var result = "";
    for (var j = 0; j < string.length; j++) {
        var letter = string[j];

        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            x++;


        }

    }

    result = "there is " + x + " Vowels";
    return result;

}
console.log(vowels("aaeeiiiooouuuuuu"));