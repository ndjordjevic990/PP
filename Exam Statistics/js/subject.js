// In subject.js file:
// ● write a constructor function with one argument that represents the name of the subject
// ● add to its prototype a method getSubjectName that returns the subject name

function Subject(subjectName) {
  this.subjectName = subjectName;
}

Subject.prototype.getSubjectName = function () {
  return this.subjectName;
};
