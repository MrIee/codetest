var QueryStudentResults = require('./query_student_result');

var studentResults = [
{
  name: "Anand",
  marks: {
    "Maths": 90,
    "ComputerScience": 86,
    "English": 93
  }
},
{
  name: "Michael",
  marks: {
    "Maths": 91,
    "ComputerScience": 95,
    "English": 92
  }
},
{
  name: "Vishal",
  marks: {
    "Maths": 96,
    "ComputerScience": 86,
    "English": 92
  }
}]

var queryStudentResults = new QueryStudentResults()

describe("queryStudentResults Tester", function() {
  it("return the name of the student who scored the highest summed score total", function() {
    expect(queryStudentResults.getTopper(studentResults)).toEqual('Michael');
  });

  it("returns the name of all students and the sum of their scores", function() {
    // Numbers should add up to 269, 278 and 274. Give your result as an array with an object
    // for each student.
    expect(queryStudentResults.getResultSheet(studentResults).length).toEqual(3);
  });

  it("return the name of the student with the highest mark for given subject - Maths", function() {
    expect(queryStudentResults.getSubjectTopper("Maths", studentResults)).toEqual('Vishal');
  });

  it("return the name of the student with the highest mark for given subject - Computer Science", function() {
    expect(queryStudentResults.getSubjectTopper("ComputerScience", studentResults)).toEqual('Michael');
  });

  it("return the name of the student with the highest mark for given subject - English", function() {
    expect(queryStudentResults.getSubjectTopper("English", studentResults)).toEqual("Anand");
  });
});