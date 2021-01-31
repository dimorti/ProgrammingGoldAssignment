// set the dimensions and margins of the graph
var margin = {top: 5, right: 30, bottom: 90, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
const data = [{ year :"2015 Q1",rate :"5.5"},
              { year :"2015 Q2",rate :"5.6"},
              { year :"2015 Q3",rate :"5.3"},
              { year :"2015 Q4",rate :"5.1"},
              { year :"2016 Q1",rate :"5.1"},
              { year :"2016 Q2",rate :"4.9"},
              { year :"2016 Q3",rate :"4.8"},
              { year :"2016 Q4",rate :"4.7"},
              { year :"2017 Q1",rate :"4.6"},
              { year :"2017 Q2",rate :"4.4"},
              { year :"2017 Q3",rate :"4.3"},
              { year :"2017 Q4",rate :"4.4"},
              { year :"2018 Q1",rate :"4.2"},
              { year :"2018 Q2",rate :"4.0"},
              { year :"2018 Q3",rate :"4.1"},
              { year :"2018 Q4",rate :"4.0"},
              { year :"2019 Q1",rate :"3.8"},
              { year :"2019 Q2",rate :"3.9"},
              { year :"2019 Q3",rate :"3.8"},
              { year :"2019 Q4",rate :"3.8"},
              { year :"2020 Q1",rate :"4.0"},
              { year :"2020 Q2",rate :"4.1"},
              { year :"2020 Q3",rate :"4.8"}];



// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.year; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 6])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.year); })
    .attr("y", function(d) { return y(d.rate); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.rate); })
    .attr("fill", "#cab2d6");

  