(function () {
  class Person {
    constructor(name, surname) {
      if (!name || !surname) {
        throw new Error("Fields name and surname are required");
      }
      this.name = name;
      this.surname = surname;
    }
    getData() {
      return `${this.name}  ${this.surname}`;
    }
  }

  class Seat {
    constructor(number, category) {
      number = number || Math.floor(91 * Math.random() + 10);
      category = category || "e";

      this.number = number;
      this.category = category.toUpperCase();
    }
    getData() {
      return `${this.number}, ${this.category}`;
    }
  }

  class Passenger extends Person {
    constructor(name, surname, seat) {
      super(name, surname);
      this.seat = seat;
    }
    getData() {
      return `${this.seat.getData()}, ${this.person.getData()}`;
    }
  }

  class Flight {
    constructor(relation, date) {
      this.relation = relation;
      let inputDate = new Date(date);
      this.date = `${inputDate.getDate()}.${inputDate.getMonth() + 1}`.${inputDate.getFullYear()}
      this.listOfPassengers = []
    }
    addPassenger() {
      if (!passenger || !(person instanceof Passenger)) {
        //ako nema osobe ili ako nije instanca Passenger konstruktora
        throw new Error("Invalid passenger input");
      }
      this.listOfPassengers.push(passenger)
    }

    getData() {
        let result = "";
        let day = this.date.getDate();
        let month = this.date.getMonth() + 1; //vraca index, pa mu dodajemo 1 da bi bio tacan mesec
        let year = this.date.gerFullYear();
        result +=
          `"\t" ${flight.date}, ${this.relation}` + "\n";
        this.passengers.forEach(function (passenger) {
          result += "\t\t" + passenger.getData() + "\n";
        });
        return result;
      };
    numberOfPassengers () {
        return this.passengers.length;
      };
    }
  }

  class Airport {
    
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
