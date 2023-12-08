

// set the dimensions and margins of the graph
const margin3 = {top: 30, right: 30, bottom: 30, left: 30},
  width3 = 450 - margin3.left - margin3.right,
  height3 = 450 - margin3.top - margin3.bottom;

// append the svg3 object to the body of the page
const svg3 = d3.select("#my_dataviz3")
.append("svg")
  .attr("width", width3 + margin3.left + margin3.right)
  .attr("height", height3 + margin3.top + margin3.bottom)
.append("g")
  .attr("transform", `translate(${margin3.left},${margin3.top})`);

// Labels of row and columns
const myGroups = ["Anxiety", "Depression", "Insomnia", "OCD"]
const myVars = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// Build X scales and axis:
const x = d3.scaleBand()
  .range([ 0, width3 ])
  .domain(myGroups)
  .padding(0.01);
svg3.append("g")
  .attr("transform", `translate(0, ${height3})`)
  .call(d3.axisBottom(x))

// Build X scales and axis:
const y = d3.scaleBand()
  .range([ height3, 0 ])
  .domain(myVars)
  .padding(0.01);
svg3.append("g")
  .call(d3.axisLeft(y));

// Build color scale
const myColor = d3.scaleLinear()
  .range(["white", "#FF69B4"])
  .domain([0,250])

//Read the data
d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/heatmap1.csv").then( function(data) {

 // create a tooltip
  const tooltip = d3.select("#my_dataviz3")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
	.style("position", "absolute")
    .style("border-width3", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  const mouseover = function(event,d) {
    tooltip.style("opacity", 1)
  }
  const mousemove = function(event,d) {
    tooltip
      .html(d.value +" people is having " + d.variable + " strenght " + d.group + ".")
       tooltip.style("top", (event.pageY - 10) + "px")
                .style("left", (event.pageX + 10) + "px")
  }
  const mouseleave = function(d) {
    tooltip.style("opacity", 0)
  }

  // add the squares
  svg3.selectAll()
    .data(data, function(d) {return d.group+':'+d.variable;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.group) })
      .attr("y", function(d) { return y(d.variable) })
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.value)} )
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})
