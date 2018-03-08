
var subjectModule = (function () {


function Subject(subjectInput) {
    this.name = subjectInput;
    
}

function createSubject(subjectInput){
    var newSubject = new Subject(subjectInput);
    return newSubject;
}

Subject.prototype.getSubjectName = function () {
    return this.name;
}

return {
    SubjectConstructor: createSubject,
}

})();

