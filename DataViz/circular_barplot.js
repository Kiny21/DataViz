
  // Set the dimensions and margins of the graph
  const margin2 = { top: 10, right: 10, bottom: 10, left: 10 };
  const width2 = 540 - margin2.left - margin2.right;
  const height2 = 540 - margin2.top - margin2.bottom;
  const innerRadius = 80;
  const outerRadius = Math.min(width2, height2) / 2;

  // Append the svg2 object to the body of the page
  const svg2 = d3
    .select("#my_dataviz1")
    .append("svg")
    .attr("width", width2 + margin2.left + margin2.right + 100)
    .attr("height", height2 + margin2.top + margin2.bottom + 100)
    .append("g")
    .attr(
      "transform",
      `translate(${width2 / 2 + 50},${height2 / 2 + 100})`
    );

  d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {
    // Convert the "Hours_per_day" values to numeric
    data.forEach(function (d) {
      d.Hours_per_day = +d.Hours_per_day;
    });

    // Create data = list of groups
    const allGroup = ["Anxiety", "Depression", "Insomnia", "OCD"];

    // Initialize the dropdown selection
    const dropdownButton = d3.select("#my_dataviz1").append("select");

    // Add the options to the dropdown
    dropdownButton
      .selectAll("myOptions")
      .data(allGroup)
      .enter()
      .append("option")
      .text(function (d) {
        return d;
      })
      .attr("value", function (d) {
        return d;
      });

    // Group the data by the selected condition and calculate the average values
    function updateChart(selectedOption) {
      const conditionData = data.map(function (d) {
        return {
          condition: selectedOption,
          Hours_per_day: d.Hours_per_day,
          value: d[selectedOption],
        };
      });

      const groupedData = d3.groups(conditionData, (d) => d.Hours_per_day);

      // Sort the grouped data by Hours_per_day
      groupedData.sort(function (a, b) {
        return a[0] - b[0];
      });

      // X scale
      const x = d3
        .scaleBand()
        .range([0, 2 * Math.PI])
        .padding(0.1)
        .domain(groupedData.map((d) => d[0]));

      // Y scale
      const y = d3
        .scaleRadial()
        .range([innerRadius, outerRadius])
        .domain([
          0,
          d3.max(groupedData, (d) => d3.mean(d[1], (d) => d.value)),
        ]);

      // Create bars based on the selected condition
      const conditionColor = {
        Anxiety: "#FF69B4",
        Depression: "#DC143C",
        Insomnia: "#BA55D3",
        OCD: "#BC8F8F",
      };

      svg2.selectAll("path").remove(); // Remove existing bars
      svg2.selectAll("g").remove(); // Remove existing bars

      svg2
        .append("g")
        .selectAll("path")
        .data(groupedData)
        .enter()
        .append("path")
        .attr("fill", conditionColor[selectedOption])
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius((d) => y(d3.mean(d[1], (d) => d.value)))
            .startAngle((d) => x(d[0]))
            .endAngle((d) => x(d[0]) + x.bandwidth())
            .padAngle(0.01)
            .padRadius(innerRadius)
        )
        // Add the labels
        svg2
          .append("g")
          .selectAll("g")
          .data(groupedData)
          .enter()
          .append("g")
          .attr("text-anchor", (d) =>
            (x(d[0]) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
              ? "end"
              : "start"
          )
          .attr("transform", (d) =>
            `rotate(${(x(d[0]) + x.bandwidth() / 2) * (180 / Math.PI) - 90}) translate(${
              y(d3.mean(d[1], (d) => d.value)) + 20
            },0)`
          )
          .append("text")
          .text((d) => d[0])
          .attr("transform", (d) =>
            (x(d[0]) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
              ? "rotate(180)"
              : "rotate(0)"
          )
          .style("font-size", "11px")
          .attr("alignment-baseline", "middle");
      }

      // Initial call to show bars for Anxiety
      updateChart("Anxiety");

      // When the dropdown is changed, run the updateChart function
      dropdownButton.on("change", function () {
        // Recover the option that has been chosen
        var selectedOption = d3.select(this).property("value");
        // Run the updateChart function with this selected option
        updateChart(selectedOption);
      });
    });

