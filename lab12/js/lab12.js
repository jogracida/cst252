/**
*Author: Jonathan Gracida <jogracida@csumb.edu>
* Created: 5 October
* License: Public Domain
**/



//Make fizzbuzz function
// function fizzBoomBam()

  for (var input=0; input<1000; input++) {

    //make tag for outputs
    var outputEl = document.getElementById("script-output");
    var newEl = document.createElement("p");
    outputEl.appendChild(newEl);
    console.log(input);
    var outputString = '';
    if (input%7 == 0) {
      newEl.innerHTML = input + "FizzBuzz";
      outputEl.appendChild(newEl);
      console.log("FizzBuzz");
    } else if (input%3 == 0) {
      newEl.innerHTML = input + "Fizz";
      outputEl.appendChild(newEl);
      console.log("Fizz")
    } else if (input%5 == 0) {
      newEl.innerHTML = input + "Buzz";
      outputEl.appendChild(newEl);
      console.log("Buzz")
    } else {
      console.log("Number: " + input);
    }
}
// addNew


// given a number and an object that looks like this:
//
//
//function fizzBuzzBoom (maxNums){

//}
