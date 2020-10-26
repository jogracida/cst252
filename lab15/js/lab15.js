/**
*Author: Jonathan Gracida <jogracida@csumb.edu>
* Created: 5 October
* License: Public Domain
**/
class vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  info() {
    return " My first Car is a " + this.year + this.make + this.model + "and " + this.color
    }
}
  var car = new vehicle ("Toyota ","Corolla ", "2009 ", "Silver ",);

 class oldVehicle  {
   constructor (make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
    info() {
      return " My second Car is a " + this.year + this.make + this.model + "and " + this.color
      }
  }
    var oldcar = new oldVehicle ("Honda ","Accord ", "1998 ", "White ",);

  // we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + oldcar.info() + "</p>";

// task 2, the OOP Design!

// Set up the game intially

  // Create the game
  // Creates a randomized
// Start the game loop
  // ask for the letter
  // validate the letter for the hidden word
  // if the letter is wrong
    // add a limb
  //else
    //display correct letter of a hidden word
    //else
    //word is completed, give player a win
  //else
    //game over and reset
