 /**
Author: Jonathan Gracida <jogracida@csumb.edu>
Created: 19 September
License: Public Domain
**/

// Define Variables
 myTransport = ["Toyota Corolla", "Bus", "rides from friends", "dads car"
];

 myMainRide = {
make: "Toyota",
model: "Corolla",
color: "Silver",
year: 2009,
age: function() {
  return 2020 - age;
  }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide,null, '\t'),"</pre>");
