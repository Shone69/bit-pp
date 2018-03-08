var ctrlModule = (function (subjectModule, studentModule, examModule, formModule) {
    
    
    var $subjectInput = formModule.$domSelectors.$subjectInput.val();
    var $nameAndSurname = formModule.$domSelectors.$studentNameAndSurname.val();
    var $gradeInput = formModule.$domSelectors.$gradeInput.val();

    var totalStudentsCount = 0;
    var passedCountData = 0;
    var failedCountData = 0;

    
    formModule.$domSelectors.$submitButton.on("click", addFunction);
        function addFunction($subjectInput, $nameAndSurname, $gradeInput) {
            var NewSubject = new subjectModule.SubjectConstructor($subjectInput);
            var NewStudent = new studentModule.StudentConstructor($nameAndSurname);
            var NewExam = new examModule.createNewExam(NewSubject, NewStudent, $grade);

            formModule.addStudentToList(NewExam);


        };
    
})(subjectModule, studentModule, examModule, formModule);