"use strict";

(function () {
  //   console.log("Hi");

  // ***************CONSTRUCTOR FUNCTIONS*********************

  // *************** PRODUCT *********************
  // Create constructor functions with properties representing the following “things”:
  //● Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
  function Product(name, price, expirationDate) {
    if (!name || !price || !expirationDate) {
      throw new Error("Fields name, price and expiration date are required");
    }

    this.name = name;
    this.price = price.toFixed(2);
    this.expirationDate = expirationDate;
    this.parsedDate = Date.parse(expirationDate);

    this.id = Math.floor(Math.random() * 90000) + 10000;

    // Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price. "Banana" -> BA32784, Banana, 129.31
    this.getInfo = function () {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase() +
        this.id +
        ", " +
        this.name +
        ", " +
        this.price
      );
    };
  }

  // *************** SHOPPING BAG *********************
  //Create constructor functions with properties representing the following “things”:
  //ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)
  function ShoppingBag() {
    this.listOfProducts = [];

    // ADD PRODUCT -CHECKED-  Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.
    this.addProduct = function (product) {
      var today = new Date();
      if (product.parsedDate > Date.parse(today)) {
        this.listOfProducts.push(product);
      } else {
        return "Not valid expiration date ";
      }
    };

    // AVERAGE PRICE - CHECKED - Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals.
    this.averagePrice = function () {
      var sum = 0;
      this.listOfProducts.forEach(function (product) {
        sum += parseFloat(product.price);
      });
      return (sum / this.listOfProducts.length).toFixed(3);
    };

    // GET MOST EXPENSIVE ITEM - CHECKED - Add getMostExpensive method that finds the most expensive product and prints out its info.
    this.getMostExpensive = function () {
      var highestPrice = 0;
      var mostExpensiveProduct;

      this.listOfProducts.forEach(function (product) {
        if (parseFloat(product.price) > highestPrice) {
          highestPrice = parseFloat(product.price);
          mostExpensiveProduct = product.name;
        }
      });
      return (
        "Most exspensive product is " +
        mostExpensiveProduct +
        " and its price is " +
        highestPrice
      );
    };
  }

  // ***************TESTING*********************

  /***** creating object ******/
  var product1 = new Product("Jabuka", 25.2274, "2023, 5, 5");
  var product2 = new Product("Banana", 12.2699, "2020, 5, 5");
  var product3 = new Product("Jagode", 15.2274, "2023, 5, 5");
  var shoppingBag = new ShoppingBag();

  /**** adding products to shooping list ******/
  shoppingBag.addProduct(product1);
  shoppingBag.addProduct(product2);
  shoppingBag.addProduct(product3);

  console.log(product1);
  console.log(product1.getInfo());
  console.log(shoppingBag);

  console.log(
    "Average price of your product list is ",
    shoppingBag.averagePrice()
  );

  console.log(shoppingBag.getMostExpensive());
})();

// var a = new Date();
// var c = new Date(2023, 5, 5);
// console.log(Date.parse(a));
// console.log(c);
// console.log(Date.parse(c));
