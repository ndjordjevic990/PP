// In form.js file:
// ● write a function that collects all the data from the form
// ● write a function that validates all collected data
// ● write a function that updates the given list so it adds the new item at the end of the list
// ● write a function that updates the part of the page with the statistics

var subjectNameSelection = document.querySelector(".subject");
var studentNameInput = document.querySelector("student-name");
var studentGradeInput = document.querySelector("student-grade");
var passedStudentsList = document.querySelector(".passed-students");
var failedStudentsList = document.querySelector(".failed-students");
var addButton = document.querySelector(".add-button");
var errorDiv = document.querySelector(".error");
var errorP = document.querySelector(".insert-error");

function getDataCollection() {
  var chosenSubject = document.querySelector(".subject").value;
  var nameSurname = document.querySelector(".student-name").value;
  var grade = document.querySelector(".student-grade").value;
}

// function validateData(name, surname, grade) {
//   var name1stLetter = name.slice(0, 1).toString();
//   var surname1stLetter = surname.slice(0, 1).toString();
//   var studentNameValidation = studentNameInput.value.toString();

//   if (studentNameValidation.trim().indexOf(" ") != -1) {
//     return "You must insert both name and surname";
//   }

//   if (
//     name1stLetter !== name1stLetter.toUpperCase() ||
//     surname1stLetter !== surname1stLetter.toUpperCase()
//   ) {
//     return (errorP.textContent =
//       "Both name and surname must start with capitals!");
//   }

//   if (grade < 5 || grade > 10) {
//     return (errorP.textContent =
//       "A grade should be valid numerical value from 5 to 10!");
//   }
// }

// var exam = new Exam();

// function updateList() {
//   if (exam.hasPassed()) {
//   } else {
//   }
// }
