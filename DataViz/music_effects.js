
  // Set the dimensions and margins of the graph
  const margin9 = { top: 30, right: 60, bottom: 150, left: 60 };
  const width9 = 1000 - margin9.left - margin9.right; // Increased svg9 width9
  const height9 = 600 - margin9.top - margin9.bottom;

  // Append the svg9 object to the body of the page
  const svg9 = d3
    .select("#music_effects")
    .append("svg")
    .attr("width", width9 + margin9.left + margin9.right)
    .attr("height", height9 + margin9.top + margin9.bottom)
    .append("g")
    .attr("transform", `translate(${margin9.left},${margin9.top})`);

  d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {
    // Convert the "Fav_genre" values to numeric
    data.forEach(function (d) {
      d.Anxiety = +d.Anxiety;
      d.Depression = +d.Depression;
      d.Insomnia = +d.Insomnia;
      d.OCD = +d.OCD;
    });

    // Group the data by Fav_genre
    const groupedData = d3.groups(data, (d) => d.Fav_genre);

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

    // Sort the Fav_genre in alphabetical order
    groupedData.sort((a, b) => a[0].localeCompare(b[0]));

    // X scale
    const x = d3
      .scaleBand()
      .domain(groupedData.map((d) => d[0]))
      .range([0, width9])
      .padding(0.1);

    // Y scale
    const y = d3
      .scaleLinear()
      .domain([0, maxMeanValue])
      .nice()
      .range([height9, 0]);

    // Create bars for each condition
    const conditions = ["Anxiety", "Depression", "Insomnia", "OCD"];
    const colors = ["#FF69B4", "#DC143C", "#BA55D3", "#BC8F8F"];

    conditions.forEach((condition, index) => {
      svg9.selectAll(".bars")
        .data(groupedData)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d[0]) + x.bandwidth() / 4 * index)
        .attr("y", (d) => y(d3.mean(d[1], (d) => d[condition])))
        .attr("width", x.bandwidth() / 4)
        .attr("height", (d) => height9 - y(d3.mean(d[1], (d) => d[condition])))
        .attr("fill", colors[index]);
    });

    // Append x-axis
    svg9.append("g")
      .attr("transform", `translate(0,${height9})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .attr("dx", "-0.5em")
      .attr("dy", "0.5em");

    // Append y-axis
    svg9.append("g")
      .call(d3.axisLeft(y));

    // Legend
    const legend = svg9.append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width9-20 }, ${height9 - 420})`);

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

