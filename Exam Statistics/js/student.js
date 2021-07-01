// In student.js file:
// ● write a constructor function with two arguments that represent name and surname of a student
// ● add to its prototype a method getStudentData that returns the name and surname of the student

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.getStudentData = function () {
  return this.firstName + " " + this.lastName;
};

function StudentList() {
  this.listOfPassedStudents = [];
  this.listOfFailedStudents = [];
}

StudentList.prototype.addStudentToPassList = function (student) {
  this.listOfPassedStudents.push(student);
};

StudentList.prototype.addStudentToFailList = function (student) {
  this.listOfFailedStudents.push(student);
};
