"use strict";

// (function () {
//   console.log("Hi")
// })

(function () {
  function Person(name, surname) {
    if (!name || !surname) {
      throw new Error("Fields name and surname are required");
    }
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }

  var person = new Person("John", "Snow");
  console.log(person.getData());

  // --------Seat section------------
  function Seat(number, category) {
    if (!number || !category) {
      throw new Error("Fields number and category are required");
    }

    if (!["e", "b"].includes(category)) {
      throw new Error("Invalid category input");
    }
    category = category || "e";
    number = number || Math.floor(91 * Math.random() + 10);
    this.number = number;
    this.category = category;
    this.getData = function () {
      return this.number + ", " + this.category;
    };
  }

  // --------Passenger section------------
  function Passenger(person, seat) {
    if (!person || !(person instanceof Person)) {
      //ako nema osobe ili ako nije instanca Person konstruktora
      throw new Error("Invalid person input");
    }
    if (!seat || !(person instanceof Seat)) {
      //ako nema seata ili ako nije instanca Seat konstruktora
      throw new Error("Invalid seat input");
    }
    this.person = person;
    this.seat = seat;

    // this.person = Person.getData();
    // this.seat = Seat.getData();
    this.getData = function () {
      return this.person + ", " + this.seat;
    };
  }

  // --------Flight section------------
  function Flight(relation, date) {
    if (!relation || !date) {
      throw new Error("Fields relation and date are required");
    }
    this.relation = relation;
    this.date = new Date(date);
    this.passengers = [];
    this.addPassenger = function (passenger) {
      this.passengers.push(passenger);
    };
    this.getData = function () {
      var string = this.date + ", " + this.relation + "\n";
      this.passengers.forEach(function (num) {
        string += "\t\t\t\t\t\t\t" + Passenger.getData + "\n";
      });
    };
  }

  // --------Airport section------------
  function Airport(list) {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
      this.listOfFlights.push(flight);
    };
  }

  // --------Create the flight section------------
  function createFlight(relation, date) {
    return flight;
  }
})();

// Testing
try {
  var person1 = new Person("Pera");
  var seat1 = new Seat(22, "w");
  var passenger1 = new Passenger(person1, seat1);
  var flight1 = new Flight("Belgrade - Paris", "Oct 25 2017");
  console.log(person1);
  console.log(fligh1.date.getFullYear());
} catch (error) {
  console.log("Error message: " + error.message);
}
