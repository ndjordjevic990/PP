"use strict";

(function () {
  //   console.log("Hi");
  // ***************CONSTRUCTOR FUNCTIONS*********************

  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    };
  }

  function Movie(title, genre, length) {
    if (!genre || !(genre instanceof Genre)) {
      //ako nema genre-a ili ako nije instanca Genre konstruktora
      throw new Error("Invalid genre input");
    }
    this.title = title;
    this.length = length;
    this.genre = genre;
  }

  function Program(date, listOfMovies, NumberOfMovies) {
    this.date = date;
    this.listOfMovies = [];
    this.NumberOfMovies = NumberOfMovies;
  }

  function Festival(name, listOfPrograms, totalNumberOfMovies) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalNumberOfMovies = totalNumberOfMovies;
  }

  // ***************TESTING*********************

  var drama = new Genre("drama");
  var action = new Genre("action");

  console.log(drama.getData());
  console.log(action.getData());
})();
