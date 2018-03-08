var date = new Date();

function yearsOld (dateOfBirth){
    var birthDate = new Date(dateOfBirth);
    var result = (date.getFullYear()) - (birthDate.getFullYear());
    return result;
};

console.log(yearsOld("02.12.1984"));