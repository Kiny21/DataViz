
  // Set the dimensions and margins of the graph
  const margin4 = { top: 30, right: 30, bottom: 70, left: 60 };
  const width4 = 600 - margin4.left - margin4.right;
  const height4 = 400 - margin4.top - margin4.bottom;

  // Append the svg4 object to the body of the page
  const svg4 = d3
    .select("#bar_hour_mental")
    .append("svg")
    .attr("width", width4 + margin4.left + margin4.right)
    .attr("height", height4 + margin4.top + margin4.bottom)
    .append("g")
    .attr("transform", `translate(${margin4.left},${margin4.top})`);

  d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function (data) {
    // Convert the "Hours_per_day" values to numeric
    data.forEach(function (d) {
      d.Hours_per_day = +d.Hours_per_day;
    });

    // Create data = list of groups
    const allGroup = ["Anxiety", "Depression", "Insomnia", "OCD"];

    // Initialize the dropdown selection
    const dropdownButton = d3.select("#bar_hour_mental").append("select");

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
        .domain(groupedData.map((d) => d[0]))
        .range([0, width4])
        .padding(0.1);

      // Y scale
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(groupedData, (d) => d3.mean(d[1], (d) => d.value)),
        ])
        .nice()
        .range([height4, 0]);

      // Remove existing bars before updating
      svg4.selectAll(".bar").remove();

      // Create bars based on the selected condition
      svg4.selectAll(".bar")
        .data(groupedData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d[0]))
        .attr("y", (d) => y(d3.mean(d[1], (d) => d.value)))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height4 - y(d3.mean(d[1], (d) => d.value)))
        .attr("fill", function (d) {
          const conditionColor = {
            Anxiety: "#FF69B4",
            Depression: "#DC143C",
            Insomnia: "#BA55D3",
            OCD: "#BC8F8F",
          };
          return conditionColor[selectedOption];
        });

      // Append x-axis
      svg4.append("g")
        .attr("transform", `translate(0, ${height4})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("transform", "rotate(-45)");

      // Append y-axis
      svg4.append("g")
        .call(d3.axisLeft(y));
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

