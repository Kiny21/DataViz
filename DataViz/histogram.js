
        // Your data
        var data = [
            { Streaming_service: "Spotify", User_number: 458 },
            { Streaming_service: "Apple Music", User_number: 51 },
            { Streaming_service: "Youtube Music", User_number: 94 },
            { Streaming_service: "Pandora", User_number: 11 },
            { Streaming_service: "Other", User_number: 50 },
            { Streaming_service: "None", User_number: 71 }
        ];

        // Set up the SVG canvas dimensions
        var margin = { top: 20, right: 30, bottom: 40, left: 40 };
        var width = 600 - margin.left - margin.right;
        var height = 400 - margin.top - margin.bottom;

        // Create a tooltip
        var tooltip = d3.select("#my_dataviz2")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden");

        // Append an SVG element to the body
        var svg = d3.select("#my_dataviz2")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom + 30)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // X-axis scale
        var xScale = d3.scaleBand()
            .domain(data.map(function (d) { return d.Streaming_service; }))
            .range([0, width])
            .padding(0.1);

        // Y-axis scale
        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return d.User_number; })])
            .range([height, 0]);

        // Create X-axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");

        // Create Y-axis
        svg.append("g")
            .call(d3.axisLeft(yScale));

        // Create bars
        var bars = svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return xScale(d.Streaming_service); })
            .attr("y", function (d) { return yScale(d.User_number); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) { return height - yScale(d.User_number); })
            .attr("fill", "#FF69B4");

        bars.on("mouseover", function (event, d) {
            // Show the tooltip and set its content based on the column
            tooltip.style("visibility", "visible")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px");
            tooltip.html("Streaming Service: " + d.Streaming_service + "<br>Users: " + d.User_number);
        })
        .on("mousemove", function (event) {
            // Position the tooltip relative to the mouse cursor
            tooltip.style("top", (event.pageY - 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function () {
            // Hide the tooltip
            tooltip.style("visibility", "hidden");
        });

