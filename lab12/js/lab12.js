/**
*Author: Jonathan Gracida <jogracida@csumb.edu>
* Created: 5 October
* License: Public Domain
**/

//Make fizzbuzz function
// function fizzBoomBam() {

//Make fizzbuzz function
// function fizzBoomBam()

  for (var input=0; input<200; input++) {

    //make tag for outputs
     outputEl = document.getElementById("output");
      newEl = document.createElement("p");
       outputEl.appendChild(newEl);
     console.log(input);
     var outputString = '';
     if (input%7 == 0) {
       newEl.innerHTML = input + " FizzBuzz";
       outputEl.appendChild(newEl);
       console.log("FizzBuzz")
     } else if (input%3 == 0) {
       newEl.innerHTML = input + " Fizz";
       outputEl.appendChild(newEl);
       console.log("Fizz")
     } else if (input%5 == 0) {
       newEl.innerHTML = input + " Buzz";
       outputEl.appendChild(newEl);
       console.log("Buzz")
     } else {
       console.log("Number: " + input)
     }
   }
// addNewParagraphToOutput(outputString);
//     return;
// }

  button = document.getElementById("myButton");
  button.addEventListener("click", function() {
  var userInput = document.getElementById("max").value;
  console.log(userInput);
})


// var button = document.getElementById("testing");
// button.addEventListener("click", function() {
//   alert("This is a test");
