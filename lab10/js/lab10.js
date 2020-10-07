/**
Author: Jonathan Gracida <jogracida@csumb.edu>
Created: 03 October
License: Public Domain
**/

//Declare variables
var button = document.getElementById('my-button');
var userInput = document.getElementById("user-input");
var newName = document.getElementById("result")

//Borrowed from Lab 7
function sortUsername (name) {
    return name.split('').sort().join('');
  };


button.addEventListener("click", function(){
  var inputText = userInput.value;
  var newString = "Hey there, " + inputText + " Neat name however I can make it better: " + sortUsername(inputText);
newName.innerText = newString;
    event.preventDefault();
});
