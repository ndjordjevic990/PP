// In form.js file:
// ● write a function that collects all the data from the form
// ● write a function that validates all collected data
// ● write a function that updates the given list so it adds the new item at the end of the list
// ● write a function that updates the part of the page with the statistics

var studentList = new StudentList();

var studentNameNode;
var gradeNode;
var subjectSelectionNode;
var passedListNode;
var addStudentToFailList;

function collectForm() {
  studentNameNode = document.querySelector("#student-name");
  gradeNode = document.querySelector("#student-grade");
  subjectSelectionNode = document.querySelector("#adding-subject");
  passedListNode = document.querySelector("#passed-list");
  addStudentToFailList = document.querySelector("#failed-list");
}

function validate() {
  var subjectValue = subjectSelectionNode.value;
  var nameValue = studentNameNode.value;
  var gradeValue = gradeNode.value;
  //----------Error handling-------------
  if (!subjectValue) {
    return (errorNode.textContent = "Subject is required");
  }

  if (!nameValue) {
    return (errorNode.textContent = "Name is required");
  }

  if (!gradeValue) {
    return (errorNode.textContent = "Grade is required");
  } else {
    movieErrorElement.textContent = "";
  }
}
