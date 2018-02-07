var string = "";
var number = 0;

function concenate(string,number){
    var con = "";
    for (i = 0; i < number; i++){
        con += string;
    } return con;
}
console.log(concenate("abc",5));