function primeNumber(number){
    var result = "";

    if (number > 1){
        for (var i = 2; i < number; i++){
           
            if(number % i !== 0){
                result += "it's not a prime number";
            } else {
                result += "It's a prime number";
            }

        }
  

} 

        return result;
}
console.log(primenNumber(5));