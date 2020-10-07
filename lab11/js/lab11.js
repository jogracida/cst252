/**
*Author: Jonathan Gracida <jogracida@csumb.edu>
* Created: 5 October
* License: Public Domain
**/

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return"Hatsune Miku"
  }
  else if (mod == 1) {
    return "Kagamie Ren"
  }
  else if (mod == 2) {
    return "Kagamine Rin"
  }
  else if (mod == 3) {
      return "Kaito"
}
}

// create button listener
var myButton = document.getElementById("myButton");
//create function for event listener
myButton.addEventListener("click", function() {
  var userName = document.getElementById("input").value;
  var vocSona = sortingHat(userName);
  // referred to screenshots provided in Lab 11 to figure out the output
  newText = "<p>The Vocaloid has given you the voice of " + vocSona + "</p>;"
  document.getElementById("output").innerHTML = newText;
});
