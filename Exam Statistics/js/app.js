// In app.js file:
// ● Declare all necessary variables for managing passed and failed exams as well as their statistics.
// ● Write all code that connects a user behaviour with application logic.

var studentList = new StudentList();

var studentNameNode = document.querySelector("#student-name");
var gradeNode = document.querySelector("#student-grade");
var subjectSelectionNode = document.querySelector("#adding-subject");
var passedListNode = document.querySelector("#passed-list");
var failedListNode = document.querySelector("#failed-list");
var buttonNode = document.querySelector("#btn");
var totalFailedSummaryInHeader = document.querySelector(".failed-count-number");
var totalFailedPercentageInHeader = document.querySelector(".failed-percent");
var totalPassedSummaryInHeader = document.querySelector(".add-stat-pass");
var totalCountNode = document.querySelector("#count");
var errorNode = document.querySelector("#error");

var addPassed = [];
var addFailed = [];

function addStudentToListHandler() {
  var addingStudentExam = new Exam(
    subjectSelectionNode.value,
    studentNameNode.value,
    gradeNode.value
  );

  var subjectValue = subjectSelectionNode.value;
  var nameValue = studentNameNode.value;
  var gradeValue = gradeNode.value;
  //----------Error handling-------------

  if (
    !subjectValue ||
    !nameValue ||
    !gradeValue ||
    gradeValue > 10 ||
    gradeValue < 5 ||
    nameValue.indexOf(" ") < 0
  ) {
    if (!subjectValue) {
      return (errorNode.textContent = "Subject Input is required!");
    }

    if (!nameValue) {
      return (errorNode.textContent = "Name Input is required!");
    }

    if (nameValue.indexOf(" ") < 0) {
      return (errorNode.textContent = "Please insert both name and surname!");
    }

    if (!gradeValue) {
      return (errorNode.textContent = "Grade Input is required!");
    }

    if (gradeValue > 10 || gradeValue < 5) {
      return (errorNode.textContent =
        "Grade Input should be between 5 - 10! Please correct your input");
    }
  }
  //----------Proceed with checking if Student Passed or Failed-------------

  var checkIfStudentPassOrFail = addingStudentExam.hasPassed();
  var createLiElementNode = document.createElement("li");

  if (checkIfStudentPassOrFail === true) {
    addPassed.push(addingStudentExam);
    studentList.addStudentToPassList(addingStudentExam);
    createLiElementNode.textContent =
      addingStudentExam.getExamInfo() + " - " + gradeNode.value;
    passedListNode.appendChild(createLiElementNode);
    totalPassedSummaryInHeader.innerHTML = addPassed.length;
  } else if (checkIfStudentPassOrFail === false) {
    addFailed.push(addingStudentExam);
    studentList.addStudentToFailList(addingStudentExam);
    createLiElementNode.textContent =
      addingStudentExam.getExamInfo() + " - " + gradeNode.value;
    failedListNode.appendChild(createLiElementNode);

    var procentOfFail =
      Math.floor(
        (addFailed.length / (addPassed.length + addFailed.length)) * 100
      ) + "%";
    totalFailedSummaryInHeader.textContent = addFailed.length;
    totalFailedPercentageInHeader.textContent = procentOfFail;
  }
  totalCountNode.innerHTML = addPassed.length + addFailed.length;

  //----------Reset the values-------------

  subjectSelectionNode.value = "JS";
  studentNameNode.value = "";
  gradeNode.value = "";
  errorNode.textContent = "";
}

buttonNode.addEventListener("click", addStudentToListHandler);
