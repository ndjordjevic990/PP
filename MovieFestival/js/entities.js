function Festival() {
  this.listOfAllMovies = [];
  this.listOfPrograms = [];
}
//**********************MOVIE***************************************** */

function Movie(title, lenght, genre) {
  this.title = title;
  this.lenght = parseInt(lenght);
  this.genre = genre;
}

Movie.prototype.getGenreCode = function () {
  return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
};

Movie.prototype.getData = function () {
  return (
    this.title + ", " + this.length + "min, " + this.genre.getGenreCode() + "\n"
  );
};

//**********************PROGRAM***************************************** */

function Program(date) {
  this.date = new Date(date);
  this.listOfMovies = [];
}

Program.prototype.lenghtOfAllMovies = function () {
  var sumOfMinutes = 0;
  this.listOfMovies.forEach(function (movie) {
    sumOfMinutes += movie.lenght;
  });
  return sumOfMinutes;
};

Program.prototype.addMovie = function (movie) {
  if (!movie || !(movie instanceof Movie)) {
    console.log("Invalit input!");
    return;
  }
  this.listOfMovies.push(movie);
};

Program.prototype.getTotalMovies = function () {
  return this.listOfMovies.lenght;
};

Program.prototype.getData = function () {
  var day = this.date.getData();
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  var date = day + "." + month + "." + year;
  var resultStr = date;
  if (this.getTotalMovies() === 0) {
    resultStr += ", Program to be announced.";
    return resultStr;
  }
  resultStr +=
    ", " +
    this.getTotalMovies() +
    " movies, duration:" +
    this.lenghtOfAllMovies() +
    "min";
  return resultStr;
};
