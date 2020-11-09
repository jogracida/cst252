math = "http://numbersapi.com/5/math"

$("#activate").click(function(results) {
  console.log("click");

  $.ajax({
    url: math,
    data: { },
    type: "GET",
    datatype: "json",
  })

  //Taken from the jsfiddle example during class lecture on AJAX
  .done(function( results ) {
      // alert("Success!");
      var data = results.data;
      $("#output").append("<p>" + data);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " status:" + status );
	});
});
