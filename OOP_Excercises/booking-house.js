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
    this.dateOfBirth = new Date(DOB);
    this.getData = function () {
      return this.name + " " + this.surname + " " + this.dateOfBirth;
    };
    this.getYearsOld = function () {
      var year = this.dateOfBirth.getFullYear();
      var today = new Date().getFullYear();
      return today - year;
    };
  }

  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.getData = function () {
      return (
        this.country.slice(0, 2).toUpperCase() +
        ", " +
        this.betAmount.toFixed(2) +
        ", " +
        this.person.name +
        " " +
        this.person.surname +
        ", " +
        this.person.getYearsOld() +
        " years"
      );
    };
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

    this.getData = function () {
      var sum = 0;
      for (var i = 0; i < this.listOfPlayers.length; i++) {
        sum += this.listOfPlayers[i].betAmount;
      }
      return (
        this.address.street +
        ", " +
        this.address.postalCode +
        ", " +
        this.address.city +
        ", sum of all bets: " +
        sum +
        "eur"
      );
    };

    this.addPlayer = function (p) {
      this.listOfPlayers.push(p);
    };
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

  var person1 = new Person("Pera", "Peric", "1992-12-29");
  var person2 = new Person("Nikola", "Djordjevic", "1990-12-9");

  var player1 = new Player(person1, 1050, "Srbija");
  var player2 = new Player(person2, 1050, "Srbija");

  var address1 = new Address("Serbia", "Beograd", 11000, "Nemanjina", 4);
  var address2 = new Address(
    "Serbia",
    "Krusevac",
    37000,
    "Proleterske brigade",
    4
  );

  var serbia = new Country("Serbia", 1.3, continents.EUROPE);

  var balkanBet = new BettingPlace(address1);
  var meridian = new BettingPlace(address2);

  console.log(person2);
  console.log(address1.getData());
  console.log(player1.getData());
  console.log(serbia);
})();
