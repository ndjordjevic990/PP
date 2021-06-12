class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getfullName() {
    console.log(this.name + " " + this.surname);
  }
}

//*****************EMPLOYEES*********************************** */

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }

  getData() {
    return this.name + " " + this.surname + ", " + this.salary;
  }

  getSalary() {
    console.log(this.salary);
  }

  increaseSalary(percent) {
    var sum = (this.salary / 100) * percent + this.salary;
    this.salary = sum;
  }
}
//*****************DEVELOPER*********************************** */

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }

  getSpecialization() {
    return this.specilization;
  }
}
//*****************MANAGER*********************************** */

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }

  getDepartment() {
    console.log(this.department);
  }

  changeDepartment(newDepartment) {
    this.department = newDepartment;
  }
}

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
person1.getfullName();

manager1.getDepartment();
employee1.increaseSalary(10);
console.log(employee1);
console.log(developer1);
developer1.getSpecialization();
manager1.changeDepartment("someOtherDepartment");
console.log(manager1);
