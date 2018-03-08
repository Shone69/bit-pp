//"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"
//Write a program to find the most frequent item of an array.

//[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

"use strict";

function firstPartOfMail(mail) {
    var mailAddress = "";
    var i = 0;

    while (mail[i] != "@") {
        mailAddress += mail[i];
        i++;

    }
    var mailAddressExtention = "";

    for (i; i < mail.length; i++) {
        mailAddressExtention += mail[i];

    }

    var mailAddressStars = "";
    var mailAddressStarsPartOne = "";
    var mailAddressStarsPartTwo = "";
    var mailAddressHalf = mailAddress.length / 2;
    var j = 0;

    while (j <= mailAddressHalf) {
        mailAddressStarsPartOne += mail[j];
        j++;
    }

    for (j; j < mailAddress.length; j++) {
        mailAddressStarsPartTwo += "*";

    }

    mailAddressStars = mailAddressStarsPartOne + mailAddressStarsPartTwo;
    var result = mailAddressStars + mailAddressExtention;
    return result;

}
console.log(firstPartOfMail("myemailaddress@bgit.rs"));