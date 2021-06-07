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

  function Movie(title, length, genre) {
    if (!genre || !(genre instanceof Genre)) {
      //ako nema genre-a ili ako nije instanca Genre konstruktora
      throw new Error("Invalid genre input");
    }
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.getData = function () {
      return (
        this.title + ", " + this.length + "min, " + this.genre.getData() + "\n"
      );
    };
  }

  function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.NumberOfMovies;
    this.addMovie = function (movie) {
      this.listOfMovies.push(movie);
    };
    this.getData = function () {
      this.NumberOfMovies = this.listOfMovies.length;
      var result = "";
      var count = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        result += this.listOfMovies[i].getData();
        count += this.listOfMovies[i].length;
      }
      return (
        this.date +
        ",\t" +
        "program duration " +
        count +
        "min" +
        ",\n" +
        result +
        "\n"
      );
    };
  }

  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalNumberOfMovies;
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
    };
    this.getData = function () {
      var result = "";
      var count = 0;
      for (var i = 0; i < this.listOfPrograms.length; i++) {
        result += this.listOfPrograms[i].getData() + "\n";
        for (var j = 0; j < this.listOfPrograms[i].listOfMovies.length; j++) {
          count++;
        }
      }
      return (
        this.name + " festival has " + count + " movie titles " + "\n " + result
      );
    };
  }

  // ***************TESTING*********************

  var drama = new Genre("drama");
  var action = new Genre("action");
  var comedy = new Genre("comedy");

  var shawshankRedemption = new Movie("The Shawshank Redemption", 130, action);
  var spiderman = new Movie("Spider-Man: Homecoming", 133, action);
  var apes = new Movie("War for the Planet of the Apes", 140, drama);
  var darkTower = new Movie("The Dark Tower", 95, action);
  var deadpool = new Movie("Deadpool", 108, comedy);

  var program1 = new Program("28.10.2017");
  var program2 = new Program("29.10.2017");

  program1.addMovie(shawshankRedemption);
  program1.addMovie(spiderman);
  program1.addMovie(apes);
  program1.addMovie(darkTower);
  program2.addMovie(deadpool);

  var fest = new Festival("Weekend");
  fest.addProgram(program1);
  fest.addProgram(program2);

  console.log(fest.getData());

  //   console.log(drama.getData());
  //   console.log(action.getData());
  //   console.log(shawshankRedemption);

  //   console.log(shawshankRedemption.getData());
})();
