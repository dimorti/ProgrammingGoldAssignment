const data = [{name : "patients 70% ", value : 70} , 
{name : "capacity remaining 30%", value:30},
];

const pwidth = 400
const pheight = 400
const pmargin = 40

const radius = Math.min(pwidth, pheight) / 2 - pmargin


const psvg = d3.select("#mypie")
    .append("svg")
    .attr("width",pwidth)
    .attr("height", pheight)
    .attr("stroke", "black").style("stroke-width", "1px").style("opacity", 0.8);


const g = psvg.append("g").attr("transform", `translate(${pwidth/2}, ${pheight/2})`);

const color = d3.scaleOrdinal([ " lightblue", "gray"]);

const pie = d3.pie().sort(null).value(d => d.value);

const path = d3.arc().outerRadius(radius).innerRadius(0);
const label = d3.arc().outerRadius(radius).innerRadius(radius- 170);

const pies = g.selectAll(".arc").data(pie(data)).enter().append("g").attr("class","arc");

pies.append("path").attr("d", path).attr("fill", d => color(d.data.value));

pies.append("text")
    .text(d => d.data.name)
    .attr("text-anchor", "middle")
    .attr("transform", function(d){
        return "translate(" + label.centroid(d) + ")";
    })
    
        
        



