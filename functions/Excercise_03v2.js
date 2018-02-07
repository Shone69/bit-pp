function conc (input, number){
    var con = "";
    for (var i=0; i < number; i++){
        con += input;
    }return con;
}
console.log(conc("ha",7));