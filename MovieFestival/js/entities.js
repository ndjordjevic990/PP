//**********************FESTIVAL***************************************** */

function Festival() {
  this.listOfAllMovies = [];
  this.listOfPrograms = [];
}
//**********************MOVIE***************************************** */

function Movie(title, length, genre) {
  this.title = title;
  this.length = parseInt(length);
  this.genre = genre;
}

Movie.prototype.getGenreCode = function () {
  return (this.genre[0] + this.genre[this.genre.length - 1]).toUpperCase();
};

Movie.prototype.getData = function () {
  return this.title + ", " + this.length + "min, " + this.getGenreCode() + "\n";
};

//**********************PROGRAM***************************************** */

function Program(date) {
  this.date = new Date(date);
  this.listOfMovies = [];
}

Program.prototype.lengthOfAllMovies = function () {
  var totalMinutes = 0;
  this.listOfMovies.forEach(function (movie) {
    totalMinutes += movie.length;
  });
  return totalMinutes;
};

Program.prototype.addMovie = function (movie) {
  if (!movie || !(movie instanceof Movie)) {
    return console.log("Invalit input!");
  }
  this.listOfMovies.push(movie);
};

Program.prototype.getTotalMovies = function () {
  return this.listOfMovies.length;
};

Program.prototype.getData = function () {
  var day = this.date.getDate();
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  var date = day + "." + month + "." + year;
  var resultStr = date;

  if (this.getTotalMovies() === 0) {
    resultStr += ", Program to be announced.";
    return resultStr;
  } else {
    resultStr +=
    ", " +
    this.getTotalMovies() +
    " movies, duration:" +
    this.lengthOfAllMovies() +
    "min";
  }
  return resultStr;
};
