
// set the dimensions and margin21s of the graph
const margin21 = { top: 0, right: 0, bottom: 0, left: 0 },
  width21 = 200 - margin21.left - margin21.right,
  height21 = 200 - margin21.top - margin21.bottom;
  
//4th ROW
// Create the first heatmap
const svg111 = d3
  .select("#heatmap1")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the second heatmap
const svg222 = d3
  .select("#heatmap2")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);
  
  const svg333 = d3
  .select("#heatmap3")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);
  
  const svg4 = d3
  .select("#heatmap4")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);
  
  
//3rd ROW
// Create the fifth heatmap
const svg5 = d3
  .select("#heatmap5")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the sixth heatmap
const svg6 = d3
  .select("#heatmap6")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the seventh heatmap
const svg7 = d3
  .select("#heatmap7")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the eighth heatmap
const svg8 = d3
  .select("#heatmap8")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);
  
  //2nd ROW
// Create the ninth heatmap
const svg9 = d3
  .select("#heatmap9")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the tenth heatmap
const svg10 = d3
  .select("#heatmap10")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the eleventh heatmap
const svg11 = d3
  .select("#heatmap11")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the twelfth heatmap
const svg12 = d3
  .select("#heatmap12")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

 //1st ROW
// Create the thirteenth heatmap
const svg13 = d3
  .select("#heatmap13")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the fourteenth heatmap
const svg14 = d3
  .select("#heatmap14")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the fifteenth heatmap
const svg15 = d3
  .select("#heatmap15")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);

// Create the sixteenth heatmap
const svg16 = d3
  .select("#heatmap16")
  .append("svg")
  .attr("width21", width21 + margin21.left + margin21.right)
  .attr("height21", height21 + margin21.top + margin21.bottom)
  .append("g")
  .attr("transform", `translate(${margin21.left},${margin21.top})`);
 
  
  
 
  


// Labels of row and columns for both heatmaps
const myGroups11 = d3.range(11).map(String); // ["0", "1", ..., "10"]
const myVars1 = d3.range(11).map(String); // ["0", "1", ..., "10"]

// Create the scales for x and y axes
const x111 = d3.scaleBand()
  .range([0, width21])
  .domain(myGroups11)
  .padding(0.01);

const y111 = d3.scaleBand()
  .range([height21, 0])
  .domain(myVars1)
  .padding(0.01);

// Build color scale for both heatmaps
const myColour = d3.scaleLinear()
  .range(["white", "#FF69B4"])
  .domain([0, 10]); // Adjust the domain according to your data

// Read the data for both heatmaps
d3.csv("https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv").then(function(data) {
  // Process the data to count occurrences of Anxiety-Anxiety pairings for heatmap1
  const counts1 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety; 
    const key = anxiety + "-" + anxiety;
    counts1[key] = (counts1[key] || 0) + 1;
  });

  // Process the data to count occurrences of Depression-Anxiety pairings for heatmap2
  const counts2 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety;
    const depression = +d.Depression;
    const key = depression + "-" + anxiety;
    counts2[key] = (counts2[key] || 0) + 1;
  });
  
  
  // Process the data to count occurrences of Insomnia-Anxiety pairings for heatmap3
  const counts3 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety;
    const insomnia = +d.Insomnia;
    const key = insomnia + "-" + anxiety;
    counts3[key] = (counts3[key] || 0) + 1;
  });


 // Process the data to count occurrences of OCD-Anxiety pairings for heatmap4
  const counts4 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety;
    const ocd = +d.OCD;
    const key = ocd + "-" + anxiety;
    counts4[key] = (counts4[key] || 0) + 1;
  });
  
  
  // Process the data to count occurrences of Anxiety-Depression pairings for heatmap5
    const counts5 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety; 
	const depression = +d.Depression; 
    const key = anxiety + "-" + depression;
    counts5[key] = (counts5[key] || 0) + 1;
  });

  // Process the data to count occurrences of Depression-Depression pairings for heatmap6
  const counts6= {};
  data.forEach(function(d) {
    const depression = +d.Depression; 
    const key = depression + "-" + depression;
    counts6[key] = (counts6[key] || 0) + 1;
  });
  
  
  // Process the data to count occurrences of Depression-Insomnia pairings for heatmap7
  const counts7 = {};
  data.forEach(function(d) {
    const depression = +d.Depression;
    const insomnia = +d.Insomnia;
    const key = depression + "-" + insomnia;
    counts7[key] = (counts7[key] || 0) + 1;
  });


 // Process the data to count occurrences of Depression-OCD pairings for heatmap8
  const counts8 = {};
  data.forEach(function(d) {
    const depression = +d.Depression;
    const ocd = +d.OCD;
    const key = depression + "-" + ocd;
    counts8[key] = (counts8[key] || 0) + 1;
  });
  
   // Process the data to count occurrences of Anxiety-Insomnia pairings for heatmap8
  const counts9 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety;
    const insomnia = +d.Insomnia;
    const key = anxiety + "-" + insomnia;
    counts9[key] = (counts9[key] || 0) + 1;
  });
  
  
  
   // Process the data to count occurrences of Depression-Insomnia pairings for heatmap8
  const counts10 = {};
  data.forEach(function(d) {
    const depression = +d.Depression;
    const insomnia = +d.Insomnia;
    const key = depression + "-" + insomnia;
    counts10[key] = (counts10[key] || 0) + 1;
  });
  
  
   // Process the data to count occurrences of Insomnia-Insomnia pairings for heatmap8
  const counts11 = {};
  data.forEach(function(d) {
    const insomnia = +d.Insomnia;
    const key = insomnia + "-" + insomnia;
    counts11[key] = (counts11[key] || 0) + 1;
  });
  
  
   // Process the data to count occurrences of OCD-Insomnia pairings for heatmap8
  const counts12 = {};
  data.forEach(function(d) {
    const ocd = +d.OCD;
    const insomnia = +d.Insomnia;
    const key = ocd + "-" + insomnia;
    counts12[key] = (counts12[key] || 0) + 1;
  });
  
  
   // Process the data to count occurrences of Anxiety-OCD pairings for heatmap8
  const counts13 = {};
  data.forEach(function(d) {
    const anxiety = +d.Anxiety;
    const ocd = +d.OCD;
    const key = anxiety + "-" + ocd;
    counts13[key] = (counts13[key] || 0) + 1;
  });
  
    // Process the data to count occurrences of Depression-OCD pairings for heatmap8
  const counts14 = {};
  data.forEach(function(d) {
    const depression = +d.Depression;
    const ocd = +d.OCD;
    const key = depression + "-" + ocd;
    counts14[key] = (counts14[key] || 0) + 1;
  });
  
    // Process the data to count occurrences of Insomnia-OCD pairings for heatmap8
  const counts15 = {};
  data.forEach(function(d) {
    const insomnia = +d.Insomnia;
    const ocd = +d.OCD;
    const key = insomnia + "-" + ocd;
    counts15[key] = (counts15[key] || 0) + 1;
  });
    // Process the data to count occurrences of OCD-OCD pairings for heatmap8
  const counts16 = {};
  data.forEach(function(d) {
    const ocd = +d.OCD;
    const key = ocd + "-" + ocd;
    counts16[key] = (counts16[key] || 0) + 1;
  });
  
  
  // Transform counts into an array for heatmap1
  const processedData1 = [];
  myGroups11.forEach(function(group) {
    myVars1.forEach(function(variable) {
      const key = group + "-" + variable;
      processedData1.push({
        group: group,
        variable: variable,
        value: counts1[key] || 0
      });
    });
  });

  // Transform counts into an array for heatmap2
  const processedData2 = [];
  myGroups11.forEach(function(group) {
    myVars1.forEach(function(variable) {
      const key = group + "-" + variable;
      processedData2.push({
        group: group,
        variable: variable,
        value: counts2[key] || 0
      });
    });
  });
  
   // Transform counts into an array for heatmap3
  const processedData3 = [];
  myGroups11.forEach(function(group) {
    myVars1.forEach(function(variable) {
      const key = group + "-" + variable;
      processedData3.push({
        group: group,
        variable: variable,
        value: counts3[key] || 0
      });
    });
  });
  
   // Transform counts into an array for heatmap4
  const processedData4 = [];
  myGroups11.forEach(function(group) {
    myVars1.forEach(function(variable) {
      const key = group + "-" + variable;
      processedData4.push({
        group: group,
        variable: variable,
        value: counts4[key] || 0
      });
    });
  });
  
  // Transform counts into an array for heatmap5
const processedData5 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData5.push({
      group: group,
      variable: variable,
      value: counts5[key] || 0 // Update counts5 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap6
const processedData6 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData6.push({
      group: group,
      variable: variable,
      value: counts6[key] || 0 // Update counts6 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap7
const processedData7 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData7.push({
      group: group,
      variable: variable,
      value: counts7[key] || 0 // Update counts7 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap8
const processedData8 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData8.push({
      group: group,
      variable: variable,
      value: counts8[key] || 0 // Update counts8 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap9
const processedData9 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData9.push({
      group: group,
      variable: variable,
      value: counts9[key] || 0 // Update counts9 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap10
const processedData10 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData10.push({
      group: group,
      variable: variable,
      value: counts10[key] || 0 // Update counts10 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap11
const processedData11 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData11.push({
      group: group,
      variable: variable,
      value: counts11[key] || 0 // Update counts11 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap12
const processedData12 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData12.push({
      group: group,
      variable: variable,
      value: counts12[key] || 0 // Update counts12 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap13
const processedData13 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData13.push({
      group: group,
      variable: variable,
      value: counts13[key] || 0 // Update counts13 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap14
const processedData14 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData14.push({
      group: group,
      variable: variable,
      value: counts14[key] || 0 // Update counts14 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap15
const processedData15 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData15.push({
      group: group,
      variable: variable,
      value: counts15[key] || 0 // Update counts15 to the correct variable name
    });
  });
});

// Transform counts into an array for heatmap16
const processedData16 = [];
myGroups11.forEach(function(group) {
  myVars1.forEach(function(variable) {
    const key = group + "-" + variable;
    processedData16.push({
      group: group,
      variable: variable,
      value: counts16[key] || 0 // Update counts16 to the correct variable name
    });
  });
});







  // Add the squares for the first heatmap (heatmap1)
  svg111.selectAll()
    .data(processedData1)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap1
    .on("mouseover", function(event, d) {
      tooltip1.style("opacity", 1);
      tooltip1.html(`${d.value} people have Anxiety ${d.group} - Anxiety ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip1.style("opacity", 0);
    });

  // Add the squares for the second heatmap (heatmap2)
  svg222.selectAll()
    .data(processedData2)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap2
    .on("mouseover", function(event, d) {
      tooltip222.style("opacity", 1);
      tooltip222.html(`${d.value} people have Depression ${d.group} - Anxiety ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip222.style("opacity", 0);
    });
	
	
	// Add the squares for the second heatmap (heatmap3)
  svg333.selectAll()
    .data(processedData3)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap2
    .on("mouseover", function(event, d) {
      tooltip3.style("opacity", 1);
      tooltip3.html(`${d.value} people have Insomnia ${d.group} - Anxiety ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip3.style("opacity", 0);
    });
	
	// Add the squares for the second heatmap (heatmap4)
  svg4.selectAll()
    .data(processedData4)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap2
    .on("mouseover", function(event, d) {
      tooltip4.style("opacity", 1);
      tooltip4.html(`${d.value} people have OCD ${d.group} - Anxiety ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip4.style("opacity", 0);
    });
	
	
	
	// Add the squares for the first heatmap (heatmap1)
  svg5.selectAll()
    .data(processedData5)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap1
    .on("mouseover", function(event, d) {
      tooltip5.style("opacity", 1);
      tooltip5.html(`${d.value} people have Anxiety ${d.group} - Depression ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip5.style("opacity", 0);
    });

  // Add the squares for the second heatmap (heatmap2)
  svg6.selectAll()
    .data(processedData6)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap2
    .on("mouseover", function(event, d) {
      tooltip6.style("opacity", 1);
      tooltip6.html(`${d.value} people have Depression ${d.group} - Depression ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip6.style("opacity", 0);
    });
	
	
	// Add the squares for the second heatmap (heatmap3)
  svg7.selectAll()
    .data(processedData7)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap2
    .on("mouseover", function(event, d) {
      tooltip7.style("opacity", 1);
      tooltip7.html(`${d.value} people have Insomnia ${d.group} - Depression ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip7.style("opacity", 0);
    });
	
	// Add the squares for the second heatmap (heatmap4)
  svg8.selectAll()
    .data(processedData8)
    .enter()
    .append("rect")
      .attr("x111", function(d) { return x111(d.group); })
      .attr("y111", function(d) { return y111(d.variable); })
      .attr("width21", x111.bandwidth())
      .attr("height21", y111.bandwidth())
      .style("fill", function(d) { return myColour(d.value); })
    // Add tooltip interactions for heatmap2
    .on("mouseover", function(event, d) {
      tooltip8.style("opacity", 1);
      tooltip8.html(`${d.value} people have OCD ${d.group} - Depression ${d.variable}.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseleave", function() {
      tooltip8.style("opacity", 0);
    });
	
	
// Add the squares for the ninth heatmap (heatmap9)
svg9.selectAll()
  .data(processedData9)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap9
  .on("mouseover", function(event, d) {
    tooltip9.style("opacity", 1);
    tooltip9.html(`${d.value} people have Anxiety ${d.group} - Insomnia ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip9.style("opacity", 0);
  });

// Add the squares for the tenth heatmap (heatmap10)
svg10.selectAll()
  .data(processedData10)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap10
  .on("mouseover", function(event, d) {
    tooltip10.style("opacity", 1);
    tooltip10.html(`${d.value} people have Depression ${d.group} - Insomnia ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip10.style("opacity", 0);
  });

// Add the squares for the eleventh heatmap (heatmap11)
svg11.selectAll()
  .data(processedData11)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap11
  .on("mouseover", function(event, d) {
    tooltip11.style("opacity", 1);
    tooltip11.html(`${d.value} people have Insomnia ${d.group} - Insomnia ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip11.style("opacity", 0);
  });

// Add the squares for the twelfth heatmap (heatmap12)
svg12.selectAll()
  .data(processedData12)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap12
  .on("mouseover", function(event, d) {
    tooltip12.style("opacity", 1);
    tooltip12.html(`${d.value} people have OCD ${d.group} - Insomnia ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip12.style("opacity", 0);
  });
	
	// Add the squares for the thirteenth heatmap (heatmap13)
svg13.selectAll()
  .data(processedData13)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap13
  .on("mouseover", function(event, d) {
    tooltip13.style("opacity", 1);
    tooltip13.html(`${d.value} people have Anxiety ${d.group} - OCD ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip13.style("opacity", 0);
  });

// Add the squares for the fourteenth heatmap (heatmap14)
svg14.selectAll()
  .data(processedData14)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap14
  .on("mouseover", function(event, d) {
    tooltip14.style("opacity", 1);
    tooltip14.html(`${d.value} people have Depression ${d.group} - OCD ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip14.style("opacity", 0);
  });

// Add the squares for the fifteenth heatmap (heatmap15)
svg15.selectAll()
  .data(processedData15)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap15
  .on("mouseover", function(event, d) {
    tooltip15.style("opacity", 1);
    tooltip15.html(`${d.value} people have Insomnia ${d.group} - OCD ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip15.style("opacity", 0);
  });

// Add the squares for the sixteenth heatmap (heatmap16)
svg16.selectAll()
  .data(processedData16)
  .enter()
  .append("rect")
    .attr("x111", function(d) { return x111(d.group); })
    .attr("y111", function(d) { return y111(d.variable); })
    .attr("width21", x111.bandwidth())
    .attr("height21", y111.bandwidth())
    .style("fill", function(d) { return myColour(d.value); })
  // Add tooltip interactions for heatmap16
  .on("mouseover", function(event, d) {
    tooltip16.style("opacity", 1);
    tooltip16.html(`${d.value} people have OCD ${d.group} - OCD ${d.variable}.`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
  })
  .on("mouseleave", function() {
    tooltip16.style("opacity", 0);
  });

	
	
	
	
	
	
});

// Define tooltip functions for both heatmaps
const tooltip1 = d3.select("#heatmap1")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip222 = d3.select("#heatmap2")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");
  
  const tooltip3 = d3.select("#heatmap3")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");
  
  const tooltip4 = d3.select("#heatmap4")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");


// Define tooltip functions for both heatmaps
const tooltip5 = d3.select("#heatmap5")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip6 = d3.select("#heatmap6")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip7 = d3.select("#heatmap7")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip8 = d3.select("#heatmap8")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");


// Define tooltip functions for both heatmaps
const tooltip9 = d3.select("#heatmap9")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip10 = d3.select("#heatmap10")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip11 = d3.select("#heatmap11")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip12 = d3.select("#heatmap12")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");


 // Define tooltip functions for both heatmaps
const tooltip13 = d3.select("#heatmap13")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip14 = d3.select("#heatmap14")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip15 = d3.select("#heatmap15")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");

const tooltip16 = d3.select("#heatmap16")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("position", "absolute")
  .style("border-width21", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");
 
  

