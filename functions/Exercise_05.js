function sqrStars(a){
    var starsString="";
    for(var i=0;i<a;i++){
        starsString += "\n";
        for(var j=0;j<a;j++){
            if (i===0 || i===(a-1)){
                starsString += "*";
            } else {
                if (j===0 || j===(a-1)){
                    starsString += "*";
                } else {
                    starsString += " ";
                }
            }
        }
    }
    console.log(starsString);
}
sqrStars(7);
