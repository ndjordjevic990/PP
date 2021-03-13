var fruit = "lemon";

if (fruit === "lemon") {
  console.log("yellow");
} else if (fruit === "apple") {
  console.log("green");
} else if (fruit === "orange") {
  console.log("orange");
} else if (fruit === "strawberry") {
  console.log("red");
} else {
  console.log("uknown fruit");
}

switch (fruit) {
  case "lemon": // fruit === "lemon"
    console.log("yellow");
    break;
  case "apple":
    console.log("green");
    break;
  case "orange":
    console.log("orange");
    break;
  case "strawberry":
    console.log("red");
    break;

  default:
    console.log("uknown fruit");
    break;
}
