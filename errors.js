try {
  iDontExist();
} catch (err) {
  console.log("greska");
}
//-----------------CATCH IGNORED------------------------------
try {
  console.log("Start of try runs"); // (1)
  console.log("End of try runs"); // (2)
} catch (err) {
  console.log("ignored, no errors"); // (3)
}
console.log("...Execution continues");

//-----------------CATCH ACTIVATED------------------------------
try {
  console.log("Start of try runs"); // (1)
  lalala; // error, variable is not defined!
  console.log("Never reached"); // (2)
} catch (err) {
  console.log("Error has occurred!"); // (3)
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
console.log("...Execution continues");

//-----------------THROW OPERATOR------------------------------
throw new Error("OMG something went wrong");

//-----------------ERROR OBJECT------------------------------
var error1 = new Error();
var error2 = new SyntaxError();
var error3 = new ReferenceError();

console.log(error1);
console.log(error2);
console.log(error3);

//-----------------TRY CATCH FINALY------------------------------

try {
  // ... try to execute the code ...
  console.log(somevar);
} catch (e) {
  // ... handle errors ...
  console.log("I have catched your error");
} finally {
  // ... execute always ...
  console.log("And finally, I dont give a s*#t!");
}
