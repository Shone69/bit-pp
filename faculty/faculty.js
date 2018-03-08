function getDate(dateInput) {
    this.date = new Date(dateInput);
    this.dd = date.getDate();
    this.mm = date.getMonth() + 1;
    this.yy = date.getFullYear();
    return this.dd + "-" + this.mm + "-" + this.yy;
}

function consonante(word) {
    var letters = word.toUpperCase();
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] !== "A" && letters[i] !== "E" && letters[i] !== "I" && letters[i] !== "O" && letters[i] !== "U") {
            return letters[i];
            break;
        }
    }
}
var BIT = {
    name: "Belgrade Institute of Technology",
    bitListOfStudents: [],
    numberOf10s: 0,
}

var StudentStatus = {
    regular: "Regular",
    remote: "Remote",
    graduated: "Graduated",
}
Object.freeze(StudentStatus);

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.ID = Math.round(Math.random() * 100000);
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname
}

function Student(name, surname, indexNumber, status) {
    Person.call(this, name, surname);
    this.indexNumber = indexNumber;
    this.status = status;
    this.studentsListOfPassedExames = [];
}

Student.prototype.addExam = function (Exam) {
    this.studentsListOfPassedExames.push(Exam);
}

Student.prototype.getData = function () {
    var sum = 0;
    var count = 0;
    this.studentsListOfPassedExames.forEach(function (element) {
        sum += parseInt(element.grade);
        count++;
    })
    return this.indexNumber + ", " + this.name + " " + this.surname + ", average grade: " + (sum / count).toFixed(2);
}

function Employee(name, surname, employeeID, salary) {
    Person.call(this, name, surname);
    this.employeeID = employeeID;
    this.salary = salary;
}

function Professor(name, surname, employeeID, salary, officeNumber) {
    Employee.call(this, name, surname, employeeID, salary);
    this.officeNumber = officeNumber;
}
Professor.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.employeeID.toString();
}

function Exam(subject, Professor, date, grade) {
    this.subject = subject;
    this.professor = Professor;
    this.grade = grade;
    this.date = getDate(date);
}
Exam.prototype.getData = function () {
    return this.subject + ", " + this.date + ", " + "- " + this.grade;
}


function createStudent() {
    var name = document.querySelector("#studentName").value;
    var surname = document.querySelector("#studentSurname").value;
    var indexNumber = document.querySelector("#indexNumber").value;
    var statusFromForm = document.querySelector("#studentStatus").value;
    var status;
    if (statusFromForm == StudentStatus.regular) {
        status = StudentStatus.regular;
    } else if (statusFromForm == StudentStatus.remote) {
        status = StudentStatus.remote;
    } else if (statusFromForm == StudentStatus.graduated) {
        status = StudentStatus.graduated;
    }
    var NewStudent = new Student(name, surname, indexNumber, status);

    BIT.bitListOfStudents.push(NewStudent);

    var tableOfStudents = document.querySelector(".studentList");
    var newElementRow = document.createElement("tr");
    var newElementLeft = document.createElement("td");
    var newElementRight = document.createElement("td");

    var newElementLeftContent = document.createTextNode(BIT.bitListOfStudents.length);
    var newElementRightContent = document.createTextNode(NewStudent.getData());

    newElementLeft.setAttribute("value", BIT.bitListOfStudents.length)
    // newElementLeft.setAttribute("onclick", showStudent(BIT.bitListOfStudents.length));

    newElementLeft.appendChild(newElementLeftContent);
    newElementRow.appendChild(newElementLeft);
    newElementRight.appendChild(newElementRightContent);
    newElementRow.appendChild(newElementRight);
    tableOfStudents.appendChild(newElementRow);
}
function showStudent() {
        var i = document.querySelector("#showStudentNumber").value-1 ;
        var name = BIT.bitListOfStudents[i].name;
        var surname = BIT.bitListOfStudents[i].surname ;
        var ID = BIT.bitListOfStudents[i].ID;
        var indexNumber = BIT.bitListOfStudents[i].indexNumber;
        var status = BIT.bitListOfStudents[i].status;
        var listOfPassedExames = BIT.bitListOfStudents[i].studentsListOfPassedExames;

        var nameElement = document.createTextNode(name);
        var surnameElement = document.createTextNode(surname);
        var idElement = document.createTextNode(ID);
        var indexNumberElement = document.createTextNode(indexNumber);
        var statusElement = document.createTextNode(status);

        var nameList = document.querySelector(".selectedStudentName");
        var surnameList = document.querySelector(".selectedStudentSurname");
        var idList = document.querySelector(".selectedStudentID");
        var indexNumberList = document.querySelector(".selectedStudentIndexNumber");
        var statusList = document.querySelector(".selectedStudentStatus");

        nameList.innerHTML = "";
        surnameList.innerHTML = "";
        idList.innerHTML = "";
        indexNumberList.innerHTML = "";
        statusList.innerHTML = "";

        nameList.appendChild(nameElement);
        surnameList.appendChild(surnameElement);
        idList.appendChild(idElement);
        indexNumberList.appendChild(indexNumberElement);
        statusList.appendChild(statusElement);

}

// var Perica = new Student("Perica", "Peric", 123, StudentStatus.regular);

// var biologija = new Exam("biologija", "Milka", "12.12.2012", 7);
// var istorija = new Exam("biologija", "Milka", "12.12.2012", 8);
// var geografija = new Exam("biologija", "Milka", "12.12.2012", 7);

// Perica.addExam(biologija);
// Perica.addExam(istorija);
// Perica.addExam(geografija);



// console.log(StudentStatus.graduated);