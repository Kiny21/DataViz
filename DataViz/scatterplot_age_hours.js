
// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 40, left: 30 },
    width = 460 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatterplot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (margin.left + 20) + "," + margin.top + ")");

// Read the data
d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {

    // Add X axis
    var x = d3.scaleLinear()
        .domain([10, 90])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 24])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(+d.Age); })
        .attr("cy", function (d) { return y(+d.Hours_per_day); })
        .attr("r", 2)
        .style("fill", "#FF69B4");

    // Add X axis label
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2 + margin.left)
        .attr("y", height + margin.top + 18)
		.style('font-weight', 'bold')
        .text("Age");

    // Add Y axis label
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left)
        .attr("x", -margin.top - height / 2 + 50)
		.style('font-weight', 'bold')
        .text("Listened hours per day");

});

