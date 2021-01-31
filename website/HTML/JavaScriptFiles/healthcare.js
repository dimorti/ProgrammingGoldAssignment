 
 
//Blur 
 
 
 window.onload = init;
 function init(){
     var image = document.getElementById("hospital");
     image.onclick = showAnswer;
    
 }
 
 function showAnswer(){
     var image = document.getElementById("hospital");
     image.src = "./images/hospital.jpg";
     setTimeout(reblur, 5000, image);
     
 }
 function reblur(image){
     var name = image.id;
     name = "./images/"+ name + "blur.jpg";
     image.src = name; }


//Hospital capacity

// set the dimensions and margins of the graph
var margin = {top: 5, right: 30, bottom: 90, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barchart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
const data = [{hospital : "Ayrshire & Arran", patients: 100},
{hospital : "Borders", patients: 75},
{hospital : "Dumfries & Galloway", patients: 66},
{hospital : "Fife", patients: 48},
{hospital : "Forth Valley", patients: 48},
{hospital : "Grampian", patients: 59},
{hospital : "Greater Glasgow & Clyde", patients: 85},
{hospital : "Highland", patients: 8},
{hospital : "Lamarkshire", patients: 100},
{hospital : "Lothian", patients: 45},
{hospital : "Tayside", patients: 80},
{hospital : "Total capacity", patients: 70}];



// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.hospital; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 100])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.hospital); })
    .attr("y", function(d) { return y(d.patients); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.patients); })
    .attr("fill", "#69b3a2");


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  