
var studentModule = (function () {
    
    function Student(nameAndSurname){
        var nameAndSurnameArr = nameAndSurname.split(" ");
        this.name = nameAndSurnameArr[0].charAt(0).toUpperCase()+nameAndSurnameArr[0].slice(1);
        this.surname = nameAndSurnameArr[1].charAt(0).toUpperCase()+nameAndSurnameArr[1].slice(1)
    }

    function createStudent(nameAndSurname){
        var newStudent = new Student(nameAndSurname);
        return newStudent;
    }
    Student.prototype.getStudentData = function () {
        return this.name + " " + this.surname;
    }
    return {
        StudentConstructor: createStudent,
    }

})();
