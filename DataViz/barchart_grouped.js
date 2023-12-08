
  // Set the dimensions and margins of the graph
  const margin5 = { top: 30, right: 60, bottom: 150, left: 60 };
  const width5 = 1000 - margin5.left - margin5.right; // Increased svg5 width5
  const height5 = 600 - margin5.top - margin5.bottom;

  // Append the svg5 object to the body of the page
  const svg5 = d3
    .select("#barchart_grouped")
    .append("svg")
    .attr("width", width5 + margin5.left + margin5.right)
    .attr("height", height5 + margin5.top + margin5.bottom)
    .append("g")
    .attr("transform", `translate(${margin5.left},${margin5.top})`);

  d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {
    // Convert the "Hours_per_day" values to numeric
    data.forEach(function (d) {
      d.Hours_per_day = +d.Hours_per_day;
      d.Anxiety = +d.Anxiety;
      d.Depression = +d.Depression;
      d.Insomnia = +d.Insomnia;
      d.OCD = +d.OCD;
    });

    // Group the data by Hours_per_day
    const groupedData = d3.groups(data, (d) => d.Hours_per_day);

    // Calculate the mean values for each condition separately
    const meanValues = groupedData.map((d) => {
      const anxietyMean = d3.mean(d[1], (d) => d.Anxiety);
      const depressionMean = d3.mean(d[1], (d) => d.Depression);
      const insomniaMean = d3.mean(d[1], (d) => d.Insomnia);
      const OCDMean = d3.mean(d[1], (d) => d.OCD);
      return Math.max(anxietyMean, depressionMean, insomniaMean, OCDMean);
    });

    // Find the maximum mean value for setting y-axis domain
    const maxMeanValue = d3.max(meanValues);

    // Sort the Hours_per_day in ascending order
    groupedData.sort((a, b) => a[0] - b[0]);

    // X scale
    const x = d3
      .scaleBand()
      .domain(groupedData.map((d) => d[0]))
      .range([0, width5])
      .padding(0.1);

    // Y scale
    const y = d3
      .scaleLinear()
      .domain([0, maxMeanValue])
      .nice()
      .range([height5, 0]);

    // Create bars for each condition
    const conditions = ["Anxiety", "Depression", "Insomnia", "OCD"];
    const colors = ["#FF69B4", "#DC143C", "#BA55D3", "#BC8F8F"];

    conditions.forEach((condition, index) => {
      svg5.selectAll(".bars")
        .data(groupedData)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d[0]) + x.bandwidth() / 4 * index)
        .attr("y", (d) => y(d3.mean(d[1], (d) => d[condition])))
        .attr("width", x.bandwidth() / 4)
        .attr("height", (d) => height5 - y(d3.mean(d[1], (d) => d[condition])))
        .attr("fill", colors[index]);
    });

    // Append x-axis
    svg5.append("g")
      .attr("transform", `translate(0,${height5})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .attr("dx", "-0.5em")
      .attr("dy", "0.5em");

    // Append y-axis
    svg5.append("g")
      .call(d3.axisLeft(y));

    // Legend
    const legend = svg5.append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width5-20 }, ${height5 - 420})`);

    legend.selectAll("rect")
      .data(conditions)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", (d, i) => colors[i]);

    legend.selectAll("text")
      .data(conditions)
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", (d, i) => i * 20 + 12)
      .text((d, i) => conditions[i])
      .attr("font-size", "12px")
      .attr("fill", "black");
  });

