//*****************WEB APPS*********************************** */

function WebApp(name, url, technologies, license, stars) {
  this.name = name;
  this.url = url;
  this.technologies = technologies;
  this.license = license;
  this.stars = stars;
}

WebApp.prototype.getData = function () {
  return (
    this.name +
    ", " +
    this.url +
    ", " +
    this.technologies +
    ", " +
    this.license +
    ", " +
    this.stars
  );
};

WebApp.prototype.reactBased = function () {
  return this.technologies === "react";
};

WebApp.prototype.isCCLicense = function () {
  return this.license === "CC";
};

WebApp.prototype.like = function () {
  return ++this.stars;
};

WebApp.prototype.showStars = function () {
  return this.stars;
};

//*****************MOBILE APPS*********************************** */

function MobileApp(name, platforms, license, stars) {
  this.name = name;
  this.platforms = platforms;
  this.license = license;
  this.stars = stars;
}

MobileApp.prototype.getData = function () {
  return (
    this.name + ", " + this.platforms + ", " + this.license + ", " + this.stars
  );
};

MobileApp.prototype.forAndroid = function () {
  return this.platforms === "android";
};

MobileApp.prototype.isCCLicense = function () {
  return this.license === "CC";
};

MobileApp.prototype.like = function () {
  return ++this.stars;
};

MobileApp.prototype.showStars = function () {
  return this.stars;
};

//*****************TESTING*********************************** */

var web1 = new WebApp("evernote", "www.evernote.com", "jQuery", "CC", 4);
var mobile1 = new MobileApp("twitter", "android", "sdl", 6);

console.log(web1);
console.log(web1.reactBased());
console.log(web1.isCCLicense());
console.log(web1.like());
console.log(web1.showStars());

console.log(mobile1);
console.log(mobile1.forAndroid());
console.log(mobile1.isCCLicense());
console.log(mobile1.like());
console.log(mobile1.showStars());
