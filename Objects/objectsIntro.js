// TASK 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
  name: "Mocca",
  strenght: "Strong",
  Milk: true,
  Sugar: false,
};

// TASK 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var movie = {
  title: "Inception",
  actor: "Leonardo DiCaprio",
  director: {
    name: "Christopher",
    lastName: "Nolan",
  },
  genre: "Action",
  popularity: "High",
};

console.log(movie.director.name);

// TASK 3. Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project&#39;s repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function createProject(desc, lang, url, dev) {
  var project = {
    description: desc,
    language: lang,
    gitURL: url,
    isInDev: dev,
    printRepository: function () {
      console.log("url");
    },
    isJS: function () {
      return lang === "JavaScript";
    },
    isDevelopment: function () {
      return dev ? "project is in DEV" : "project is not in DEV";
    },
  };
  return project;
}

calculator = createProject(
  "program that calculates numbers",
  "JavaScript",
  "https://github.com",
  true
);

console.log(calculator);
console.log(calculator.isInDev);

//TASK 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function createRecipe(nam, cui, comp, ing, prepTime, prepInst) {
  var recipe = {
    name: nam,
    cuisine: cui,
    complexity: comp,
    ingredients: ing,
    preparingTime: prepTime,
    preparingInstr: prepInst,
    printIng: function () {
      return ing;
    },
    checkTime: function () {
      if (prepTime <= 15) {
        return "can be made for 15 minutes";
      } else {
        return "cant be made for 15 minutes";
      }
    },
    deleteIng: function(list, a) {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
          if (list[i] !== a) {
              newList[newList.length] = list[i];
          }
      }
      return newList;
  };
  return recipe;
}

var sarma = createRecipe(
  "sarma",
  "domaca hrana",
  "easy",
  ["kupus", "meso", "zacini"],
  30,
  "uzmite .... ."
);

console.log(sarma);
console.log(sarma.printIng());
console.log(sarma.checkTime());

var value = "zacini";
var filteredSarma = sarma.ingredients.filter(function (item) {
  return item !== value;
});

console.log(filteredSarma);

//*************************************** */

// drugi način

function CreateRecipe(nam, cui, comp, ing, prepTime, prepInst) {
  var myObject = {}
    myObject.name: nam,
    myObject.cuisine: cui,
    myObject.complexity: comp,
    myObject.ingredients: ing,
    myObject.preparingTime: prepTime,
    myObject.preparingInstr: prepInst,
    myObject.printIng: function () {
      return ing;
    },
    myObject.checkTime: function () {
      if (prepTime <= 15) {
        return "can be made for 15 minutes";
      } else {
        return "cant be made for 15 minutes";
      }
    },
    myObject.deleteIng: function(list, ing) {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
          if (list[i] !== a) {
              newList[newList.length] = list[i];
          }
      }
      return newList;
  },
    myObject.changeCuisine: function (type) {
      myObject.cuisine = type;
    }
  };


var sarma = createRecipe(
  "sarma",
  "domaca hrana",
  "easy",
  ["kupus", "meso", "zacini"],
  30,
  "uzmite .... ."
);

console.log(sarma);
console.log(sarma.printIng());
console.log(sarma.checkTime());

var value = "zacini";
var filteredSarma = sarma.ingredients.filter(function (item) {
  return item !== value;
});

console.log(filteredSarma);

//*************************************** */
function createMovie(t, d, g, gr) {
  var movie = {
    title: t,
    director: d,
    genre: g,
    grade: gr,
  };
  return movie;
}

var titanic = createMovie("Titanic", "James Cameron", "Romance", 7.8);

console.log(titanic);
