var formModule = (function () {

    var $domSelectors = {

        // $totalStudentsCount: $("#totalStudentsCount"),
        // $passedCountData: $("#passedCountData"),
        // $failedCountData: $("#failedCountData"),
        $passedPercentageData: $("#passedPercentageData"),
        $failedPercentageData: $("#failedPercentageData"),

        $subjectInput: $("#subjectInput"),
        $studentNameAndSurname: $("#nameAndSurname"),
        $gradeInput: $("#gradeInput"),
        $submitButton: $("#addStudentButton"),

        $passedStudentsList: $("#passedStudentsList"),
        $failedStudentsList: $("#failedStudentsList"),

        
    };
    
    
    var totalStudentsCount = 0;
    var passedCountData = 0;
    var failedCountData = 0;



    // $passedPercentageData: $passedPercentageData.val(),
    // $failedPercentageData: $failedPercentageData.val(),

    function addStudentToList(examObj) {
        var $newListItem = $("<li></li>").text(examObj.getExamInfo());
        // $newListItem.text(examObj.getExamInfo());
        // var a = 0;
        // var b = 0;
        // var c = 0;
        // var d = 0;
        // var e = 0;

        if (examObj.grade > 5) {
            $passedStudentsList.append($newListItem);
            // a = $passedCountData;
            // a++;
            // $passedCountData.val(a);

        } else {
            $failedStudentsList.append($newListItem);
            // b = $failedCountData;
            // b++;
            // $failedCountData.val(b);
        }

        // c = $totalStudentsCount;
        // c++;
        // $totalStudentsCount.val(c);

        // d = Math.ceil(c / a);
        // $passedPercentageData.val(d);

        // e = Math.ceil(c / b);
        // $failedPercentageData.val(e);
    }

    // function updateStatistics(examObj) {

    // }

    return {
        addStudentToList: addStudentToList,
        $domSelectors: $domSelectors,

    };
})();