var QueryStudentResults = function () {

}

QueryStudentResults.prototype.getTopper = function(studentResults) {
    //Returns the name of student with highest marks

    var highest = 0;
    var studentName = "";

    for (s in studentResults) {
        var student = studentResults[s];

        var sum = 0;
        for (mark in student.marks) {
            sum += student.marks[mark];
        }

        if (sum > highest) {
            highest = sum;
            studentName = student.name;
        }
    }

    return studentName;
}

QueryStudentResults.prototype.getResultSheet = function (studentResults) {
    //returns the name of all students and the sum of their scores

    var students = [];

    for (s in studentResults) {
        var studentObj = {};
        var student = studentResults[s];

        var sum = 0;
        for (mark in student.marks) {
            sum += student.marks[mark];
        }

        studentObj.name = student.name;
        studentObj["Sum of all scores"] = sum;
        students.push(studentObj);

    }

    return students;
}

QueryStudentResults.prototype.getSubjectTopper = function (subjectName, studentResults) {
    //returns the name of the student with the highest mark for the given subject

    var highest = 0;
    var studentName = "";

    for (s in studentResults) {
        var student = studentResults[s];
        var score = student.marks[subjectName]
        if (score > highest) {
            highest = score;
            studentName = student.name;
        }
    }

    return studentName;
}
module.exports = QueryStudentResults;