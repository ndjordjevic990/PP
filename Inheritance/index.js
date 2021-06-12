function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.getFullName = function () {
  return this.name + " " + this.surname;
};

//*****************EMPLOYEES*********************************** */

function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype.getData = function () {
  return this.name + " " + this.surname + ", " + this.salary;
};

Employee.prototype.getSalary = function () {
  console.log(this.salary);
};

Employee.prototype.increaseSalary = function (percent) {
  var sum = (this.salary / 100) * percent + this.salary;
  this.salary = sum;
};

//*****************DEVELOPER*********************************** */

function Developer(name, surname, job, salary, specilization) {
  Employee.call(this, name, surname, job, salary);
  this.specilization = specilization;
}

Developer.prototype.getSpecialization = function () {
  console.log(this.specilization);
};

//*****************MANAGER*********************************** */

function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}

Manager.prototype.getDepartment = function () {
  console.log(this.department);
};

Manager.prototype.changeDepartment = function (newDepartment) {
  this.department = newDepartment;
};

//*****************TESTING*********************************** */
var person1 = new Person("Nikola", "Djordjevic");
var employee1 = new Employee("Pera", "Peric", "jsDeveloper", 1000);
var developer1 = new Developer(
  "Laza",
  "Lazic",
  "fullStackDeveloper",
  2000,
  "fullStack"
);
var manager1 = new Manager(
  "Peros",
  "Perosic",
  "Manager",
  1500,
  "High-Level-Managment"
);

console.log(person1);
manager1.getDepartment();
employee1.increaseSalary(10);
console.log(employee1);
console.log(developer1);
developer1.getSpecialization();
manager1.changeDepartment("someOtherDepartment");
console.log(manager1);
