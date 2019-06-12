// from data.js
var tableData = data;
var ufoTable = d3.select("#ufo-table");
// YOUR CODE HERE!

// var button = d3.select("#datetime");

tableData.forEach((UFOsighting) => {
  var row = ufoTable.append("tr");
  Object.entries(UFOsighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Filter results by date on button click 

// function(sighting) {
// 	return tableData.datetime==inputDate
// }


d3.select("#datetime").on("click",function() {
	d3.event.preventDefault();
	
	var inputDate = d3.select("#filter-btn");
	console.log(inputDate);

	var fiteredData = tableData.filter(row => row.datetime == inputDate);
	console.log('${fiteredData}');
	
	fiteredData.forEach((UFOsighting) => {
  		var row = ufoTable.append("tr");
  		Object.entries(UFOsighting).forEach(([key, value]) => {
    		var cell = row.append("td");
    		cell.text(value);
  		});
	});

});

