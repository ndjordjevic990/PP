class BasicInfo {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  isCCLicense() {
    return this.license === "CC";
  }

  like() {
    return ++this.stars;
  }

  showStars() {
    return this.stars;
  }
}

//*****************WEB APPS*********************************** */

class WebApp extends BasicInfo {
  constructor(name, url, technologies, license, stars) {
    super(name, license, stars);
    this.url = url;
    this.technologies = technologies;
  }

  getData() {
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
  }

  reactBased() {
    return this.technologies === "react";
  }
}

//*****************MOBILE APPS*********************************** */

class MobileApp extends BasicInfo {
  constructor(name, platforms, license, stars) {
    super(name, license, stars);
    this.platforms = platforms;
  }

  getData() {
    return (
      this.name +
      ", " +
      this.platforms +
      ", " +
      this.license +
      ", " +
      this.stars
    );
  }

  forAndroid() {
    return this.platforms === "android";
  }
}

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
