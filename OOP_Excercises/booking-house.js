"use strict";

(function () {
  // ***************CONSTRUCTOR FUNCTIONS*********************
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continect = continent;
  }

  function Person(name, surname, DOB) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = DOB;
    this.getData = function () {
      return this.name + " " + this.surname + " " + this.dateOfBirth;
    };
  }

  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
  }

  function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
    this.getData = function () {
      return (
        this.street +
        " " +
        this.number +
        ", " +
        this.postalCode +
        ", " +
        this.country
      );
    };
  }

  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
  }

  function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers;
  }
  // ***************TESTING*********************
  const continents = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",
  });

  var person1 = new Person("Pera", "Peric", "29.12.1991");

  var address1 = new Address("Serbia", "Beograd", 11000, "Nemanjina", 4);
  console.log(person1.getData());
  console.log(address1.getData());
})();
