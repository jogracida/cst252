  /**
Author: Jonathan Gracida <jogracida@csumb.edu>
Created: 29 September
License: Public Domain
**/

// Make variable for the element
var outputEl =
document.getElementById("output");

// create element "p" in "output" give it text, then Append as a child
var new1El =
document.createElement("p");

new1El.innerHTML = "This is the actual text for the tag";

outputEl.appendChild(new1El);

// create new element and assign it a variable
var new2El =
document.createElement("p");

new2El.innerHTML = "This is the new text for the tag";

outputEl.appendChild(new2El);
