//**********************ELEMENTS DECLARATION*****************************************
//----------Movie elements-------------
var inputTitleElement = document.querySelector("#title")
var inputLengthElement = document.querySelector("#length")
var selectGenreElement = document.querySelector("#genre")
var movieErrorElement = document.querySelector("#movie-error")
var ulMovieListElement = document.querySelector("#movie-list")
//----------Program elements-------------
var inputDateElement = document.querySelector("#date")
var programErrorElement = document.querySelector("#program-error")
var ulProgramListElement = document.querySelector("#program-list")
//---------Add Movie to Program elements-------------
var movieSelectElement = document.querySelector("#movie-select")
var programSelectElement = document.querySelector("#program-select");
//---------Buttons-------------
var createMovieButton = document.querySelector("#create-movie")
var createProgramButton = document.querySelector("#create-program")
var addMovietoProgramButton = document.querySelector("#add-movie")

var selectMovieElement = document.querySelector("#movie-select");
var selectProgramElement = document.querySelector("#program-select");

//**********************CREATE FESTIVAL*****************************************
var festival = new Festival();

//**********************ADD MOVIE FUNCTION*****************************************

function addMovie() {
    var titleValue = inputTitleElement.value;
    var lengthValue = inputLengthElement.value;
    var genreValue = selectGenreElement.value;

    //----------Error handling-------------
    if (!titleValue) {
       return movieErrorElement.textContent = "Title is required";
    }

    if(!lengthValue) {
        return movieErrorElement.textContent = "Length is required";  
    }

    if(!genreValue) {
        return movieErrorElement.textContent = "Genre is required";
    }
    movieErrorElement.textContent = "";

    //----------Creating a Movie and adding it to ListOfAllMovies element in Festival-------------
    var movie = new Movie(titleValue, lengthValue, genreValue);
    festival.listOfAllMovies.push(movie);
    //----------Creating a Index that will be used as a value-------------
    var index = festival.listOfAllMovies.length -1;
    //----------Create Li> Add Context to Li> Add Li to Ul-------------
    var movieDataLi = document.createElement("li");
    movieDataLi.textContent = movie.getData();
    ulMovieListElement.appendChild(movieDataLi);
    //----------Create Option for movie selection> Add Context to option> Add option to selection-------------
    var movieOption = document.createElement("option");
    movieOption.textContent = movie.title;
    movieOption.setAttribute("value", index);
    movieSelectElement.appendChild(movieOption);
    
    //----------Reset Input Fields after creating a movie-------------
    inputTitleElement.value = "";
    inputLengthElement.value = "";
    selectGenreElement.value = ""
}

//**********************ADD PROGRAM FUNCTION*****************************************

function addProgram () {
    var date = new Date(inputDateElement.value);

    //----------Error handling-------------
    //The getTime() method returns the number of milliseconds* since the Unix Epoch.

    if(!inputDateElement.value) {
        return programErrorElement.textContent = "Date required";
    }

    if (date.getTime() < Date.now()){
        return programErrorElement.textContent = "Invalid date!";   
    }

    var hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
        return date.getTime() === program.date.getTime();
    })

    if(hasProgramWithSameDate) {
        return programErrorElement.textContent = "Program for same date already exists";
    }
    programErrorElement.textContent = ""
    
    //----------Creating a Program and adding it to listOfPrograms element-------------
    var program = new Program(date);
    festival.listOfPrograms.push(program);
    //----------Creating a Index that will be used as a value-------------
    var index = festival.listOfPrograms.length -1;
    //----------Create Li> Add Context to Li> Add Li to Ul-------------
    var programDataLi = document.createElement("li");
    programDataLi.setAttribute("id", index)
    programDataLi.textContent = program.getData()
    ulProgramListElement.appendChild(programDataLi);
    //----------Create Option for Program selection> Add Context to option> Add option to selection-------------
    var programOption = document.createElement("option");
    programOption.setAttribute("value", index);
    programOption.textContent = program.getData();
    programSelectElement.appendChild(programOption);
}

//**********************ADD MOVIE TO PROGRAM FUNCTION*****************************************

function addMovietoProgram () {
    // var programListElements = document.querySelectorAll("#program-list li")
    // var programSelectOption = document.querySelectorAll("#program-select option")

    // var movieIndex = selectMovieElement.value;
    // var programIndex = selectProgramElement.value;

    // var movie = festival.listOfAllMovies[movieIndex];
    // var program = festival.listOfPrograms[programIndex];
    // var oldProgramData = program.getData();

    // program.addMovie(movie);

    // programListElements.forEach(function (li) {
    //     if(li.textContent === oldProgramData) {
    //         li.textContent = program.getData()
    //     }
    // })

    // programSelectOption.forEach(function (option) {
    //     if(option.textContent === oldProgramData) {
    //         option.textContent = program.getData();
    //     }
    // })

    // -


    var movieInput = selectMovieElement.value;
    var programInput = selectMovieElement.value;

    var movie = festival.listOfAllMovies[movieIndex];
    var program = festival.listOfPrograms[programIndex];

    program.addMovie(movie);

    var liNode = document.querySelectorAll("#program-list li")
    liNode.innerText = program.getData()

    programListElements.innerText = program.getData()
}

createMovieButton.addEventListener("click", addMovie);
createProgramButton.addEventListener("click", addProgram);
addMovietoProgramButton.addEventListener("click", addMovietoProgram);
