// set the dimensions and margins of the graph
var margin2 = {top: 10, right: 30, bottom: 30, left: 60},
    width2 = 650 - margin2.left - margin2.right,
    height2 = 400 - margin2.top - margin2.bottom;

// append the svg object to the body of the page
var svg1 = d3.select("#my_datamonth")
  .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");

//Read the data
d3.csv("./Datasets/DailyCases.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  },

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width2 ]);
    svg1.append("g")
      .attr("transform", "translate(0," + height2 + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height2, 0 ]);
    svg1.append("g")
      .call(d3.axisLeft(y));

    // Add the line
    svg1.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

})