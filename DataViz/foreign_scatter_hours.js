
  // set the dimensions and margins of the graph
  var margin7 = { top: 10, right: 30, bottom: 60, left: 60 },
      width7 =600 - margin7.left - margin7.right,
      height7 = 600 - margin7.top - margin7.bottom;

  // append the svg7 object to the body of the page
  var svg7 = d3.select("#scatterplot3")
      .append("svg")
      .attr("width", width7 + margin7.left + margin7.right)
      .attr("height", height7 + margin7.top + margin7.bottom)
      .append("g")
      .attr("transform", "translate(" + (margin7.left + 20) + "," + margin7.top + ")");

  // Read the data
  d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {

      // Add X axis
      var x = d3.scaleLinear()
          .domain([10, 90])
          .range([0, width7]);
      svg7.append("g")
          .attr("transform", "translate(0," + height7 + ")")
          .call(d3.axisBottom(x));

      // Add Y axis
      var y = d3.scaleLinear()
          .domain([0, 24])
          .range([height7, 0]);
      svg7.append("g")
          .call(d3.axisLeft(y));

      // Add dots based on whether they listen to foreign languages and work simultaneously
      svg7.append('g')
          .selectAll("dot")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", function (d) { return x(+d.Age); })
          .attr("cy", function (d) { return y(+d.Hours_per_day); })
          .attr("r", 3)
          .style("fill", function (d) {
              if (d.Foreign_languages === 'Yes' && d.While_working === 'Yes') {
                  return "#FF69B4"; // Foreign languages and work simultaneously
              } else if (d.Foreign_languages === 'Yes') {
                  return "#DC143C"; // Foreign languages only
              } else if (d.While_working === 'Yes') {
                  return "#BA55D3"; // Working while listening only
              } else {
                  return "#BC8F8F"; // Neither foreign languages nor working while listening
              }
          });

      // Add X axis label
      svg7.append("text")
          .attr("text-anchor", "end")
          .attr("x", width7 / 2 + margin7.left)
          .attr("y", height7 + margin7.top + 30)
          .style('font-weight', 'bold')
          .text("Age");

      // Add Y axis label
      svg7.append("text")
          .attr("text-anchor", "end")
          .attr("transform", "rotate(-90)")
          .attr("y", -margin7.left)
          .attr("x", -margin7.top - height7 / 2 + 50)
          .style('font-weight', 'bold')
          .text("Listened hours per day");

      // Creating legend7
      var legend7 = d3.select("#legend7")
          .append("svg")
          .attr("width", 250)
          .attr("height", 700)
          .append("g")
          .attr("transform", "translate(10,10)");

      var legendData = [
          { label: "Foreign languages + Working", color: "#FF69B4" },
          { label: "Listens foreign languages", color: "#DC143C" },
          { label: "Listens music while working", color: "#BA55D3" },
          { label: "Neither", color: "#BC8F8F" }
      ];

      legend7.selectAll("rect")
          .data(legendData)
          .enter()
          .append("rect")
          .attr("x", 0)
          .attr("y", function(d, i) { return i * 20; })
          .attr("width", 15)
          .attr("height", 15)
          .style("fill", function(d) { return d.color; });

      legend7.selectAll("text")
          .data(legendData)
          .enter()
          .append("text")
          .attr("x", 20)
          .attr("y", function(d, i) { return (i * 20) + 12; })
          .text(function(d) { return d.label; })
          .attr("text-anchor", "start")
          .style("alignment-baseline", "middle");
  });

