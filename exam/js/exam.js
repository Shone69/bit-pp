var examModule = (function () {

    function Exam(subjectObj, studentObj, grade) {
        this.subject = subjectObj;
        this.student = studentObj;
        this.grade = parseInt(grade);
    }
    function createExam(subjectObj, studentObj, grade){
        var newExam = new Exam(subjectObj, studentObj, grade);
        return newExam;
    }

    Exam.prototype.getExamInfo = function () {
        return this.subject.getSubjectName() + ", " + this.student.getStudentData() + "- Grade: " + this.grade;
    }

    Exam.prototype.hasPassed = function () {
        if (this.grade > 5) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    return {
        createNewExam: createExam,
    }
})();