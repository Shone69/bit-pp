function letterCounter(word,letter) {
    var res=0;
    for (var i = 0; i < word.length; i++) {
        if(word[i]===letter){
            res++
        }
        
        
    }
    return res;
}
// var result = letterCounter("nnnadsasdadas","n");
console.log(result);

// letterCounter("nnnadsasdadas","n");