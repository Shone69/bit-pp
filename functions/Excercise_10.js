function string (name){
    var sum = 0;
    for (var i=0; i < name.length; i++){

        if (name[i] === "a" || name[i] === "A" ){
            sum += 1;
        }
    } return sum;

} console.log(string("Aaqwerty"));