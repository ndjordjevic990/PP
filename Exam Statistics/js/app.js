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
  console.log(addingStudentExam);
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
    totalFailedSummaryInHeader.textContent =
      addFailed.length + " " + procentOfFail;
  }
  totalCountNode.innerHTML = addPassed.length + addFailed.length;
  subjectSelectionNode.value = "";
  studentNameNode.value = "";
  gradeNode.value = "";
}

buttonNode.addEventListener("click", addStudentToListHandler);
