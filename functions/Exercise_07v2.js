// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function sta(string) {
    var niz = [];
    
    for (var i = 0; i < string.length; i++) {
        var current = string[i];
        if (current === " ") {
            niz[i] = null;
        } else {
            niz[i] = string[i];
        }

    }


    return niz;

}
console.log(sta("R an do m"));
