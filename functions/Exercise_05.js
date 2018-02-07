
function square(size) {
    var middleRow = "";
    var row = ""
    for (var i = 0; i < size; i++) {
        row += "*";
    }
    console.log(row);

    for (var j = 1; j < size; j++) {
        if (j === 1 || j === size ) {
            middleRow += "*";
        } else {
            middleRow += " ";
        }     

    }
    console.log(middleRow);
    
}
square(5);