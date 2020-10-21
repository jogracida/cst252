/**
*Author: Jonathan Gracida <jogracida@csumb.edu>
* Created: 5 October
* License: Public Domain
**/
function vehicle(make, model, year, color)  {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.info = function() {
    return " My first Car is a " + this.year + this.make + this.model + "and " + this.color
    }
}
  var car = new vehicle ("Toyota ","Corolla ", "2009 ", "Silver ",);

  function oldVehicle(make, model, year, color)  {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.info = function() {
      return " My second Car is a " + this.year + this.make + this.model + "and " + this.color
      }
  }
    var oldcar = new oldVehicle ("Honda ","Accord ", "1998 ", "White ",);

  // we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + oldcar.info() + "</p>";
