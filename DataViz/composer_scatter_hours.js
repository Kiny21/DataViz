
// set the dimensions and margins of the graph
var margin6 = { top: 10, right: 30, bottom: 60, left: 60 },
    width6 = 600 - margin6.left - margin6.right,
    height6 = 600 - margin6.top - margin6.bottom;

// append the svg6 object to the body of the page
var svg6 = d3.select("#scatterplot2")
    .append("svg")
    .attr("width", width6 + margin6.left + margin6.right)
    .attr("height", height6 + margin6.top + margin6.bottom)
    .append("g")
    .attr("transform", "translate(" + (margin6.left + 20) + "," + margin6.top + ")");

// Read the data
d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {

    // Add X axis
    var x = d3.scaleLinear()
        .domain([10, 90])
        .range([0, width6]);
    svg6.append("g")
        .attr("transform", "translate(0," + height6 + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 24])
        .range([height6, 0]);
    svg6.append("g")
        .call(d3.axisLeft(y));

    // Add dots based on composer, instrumentalist, or both status
    svg6.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(+d.Age); })
        .attr("cy", function (d) { return y(+d.Hours_per_day); })
        .attr("r", 3)
        .style("fill", function (d) {
            if (d.Composer === 'Yes' && d.Instrumentalist === 'Yes') {
                return "#FF69B4"; // Composer and instrumentalist
            } else if (d.Composer === 'Yes') {
                return "#DC143C"; // Composer only
            } else if (d.Instrumentalist === 'Yes') {
                return "#BA55D3"; // Instrumentalist only
            } else {
                return "#BC8F8F"; // Neither composer nor instrumentalist
            }
        });

    // Add X axis label
    svg6.append("text")
        .attr("text-anchor", "end")
        .attr("x", width6 / 2 + margin6.left)
        .attr("y", height6 + margin6.top + 30)
        .style('font-weight', 'bold')
        .text("Age");

    // Add Y axis label
    svg6.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin6.left)
        .attr("x", -margin6.top - height6 / 2 + 50)
        .style('font-weight', 'bold')
        .text("Listened hours per day");

    // Creating legend6
    var legend6 = d3.select("#legend6")
        .append("svg")
        .attr("width", 200)
        .attr("height",700)
        .append("g")
        .attr("transform", "translate(10,10)");

    var legendData = [
        { label: "Both", color: "#FF69B4" },
        { label: "Composer", color: "#DC143C" },
        { label: "Instrumentalist ", color: "#BA55D3" },
        { label: "Neither ", color: "#BC8F8F" }
    ];

    legend6.selectAll("rect")
        .data(legendData)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", function(d, i) { return i * 20; })
        .attr("width", 15)
        .attr("height", 15)
        .style("fill", function(d) { return d.color; });

    legend6.selectAll("text")
        .data(legendData)
        .enter()
        .append("text")
        .attr("x", 20)
        .attr("y", function(d, i) { return (i * 20) + 12; })
        .text(function(d) { return d.label; })
        .attr("text-anchor", "start")
        .style("alignment-baseline", "middle");
});

