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
    // if (!number || !category) {
    //   throw new Error("Fields number and category are required");
    // }

    // if (!["e", "b"].includes(category)) {
    //   throw new Error("Invalid category input");
    // }

    category = category || "e";
    number = number || Math.floor(91 * Math.random() + 10);
    this.number = number;
    this.category = category;
    this.getData = function () {
      return this.number + ", " + this.category.toUpperCase;
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

    this.getData = function () {
      return this.seat.getData() + ", " + this.person.getData();
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
      if (!passenger || !(person instanceof Passenger)) {
        //ako nema osobe ili ako nije instanca Passenger konstruktora
        throw new Error("Invalid passenger input");
      }
      this.passengers.push(passenger);
    };

    this.getData = function () {
      var result = "";
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1; //vraca index, pa mu dodajemo 1 da bi bio tacan mesec
      var year = this.date.gerFullYear();
      result +=
        "\t" + day + "." + month + "." + year + ", " + this.relation + "\n";
      this.passengers.forEach(function (passenger) {
        result += "\t\t" + passenger.getData() + "\n";
      });
      return result;
    };
    this.numberOfPassengers = function () {
      return this.passengers.length;
    };
  }

  // --------Airport section------------
  function Airport(list) {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
      if (!flight || !(person instanceof Flight)) {
        //ako nema osobe ili ako nije instanca Flight konstruktora
        throw new Error("Invalid flight input");
      }
      this.listOfFlights.push(flight);
    };

    this.getTotalPassengerNumber = function () {
      var count = 0;
      this.listOfFlights.forEach(function (flight) {
        count += flight.numberOfPassengers();
      });
      return count;
    };

    this.getData = function () {
      var result =
        "Airport: " +
        this.name +
        ", total passengers: " +
        this.getTotalPassengerNumber() +
        "\n";
      this.listOfFlights.forEach(function (flight) {
        result += flight.getData();
      });
      return result;
    };
  }

  // --------Create the flight section------------
  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, surname, seatNumber, seatCategory) {
    var person = new Person(name, surname);
    var seat = new Seat(seatNumber, seatCategory);
    return new Passenger(); // treba mu person i seat, pa cemo da kreiramo ispred var
  }

  // Testing
  try {
    var flight1 = createFlight("Belgrade- New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona- New York", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lanister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryan", 14);
    var passenger4 = createPassenger("Tyrion", "Lanister");

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    nikolaTesla.addFlight(flight1);
    nikolaTesla.addFlight(flight2);

    console.log(nikolaTesla.getData());

    //   var person1 = new Person("Pera");
    //   var seat1 = new Seat(22, "w");
    //   var passenger1 = new Passenger(person1, seat1);
    //   var flight1 = new Flight("Belgrade - Paris", "Oct 25 2017");
    //   console.log(person1);
    //   console.log(fligh1.date.getFullYear());
  } catch (error) {
    console.log("Error message: " + error.message);
  }
})();
