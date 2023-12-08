
    d3.csv('https://raw.githubusercontent.com/Kiny21/DataViz/main/mxmh_survey_results.csv').then(data => {
      const genres = ['Classical', 'Country', 'EDM', 'Folk', 'Gospel', 'Hip hop', 'Jazz', 'K pop', 'Latin', 'Lofi', 'Metal', 'Pop', 'R&B', 'Rap', 'Rock', 'Video game music']; // Music genres in your dataset

      // Convert age strings to numbers
      data.forEach(d => {
        d.age = +d.Age;
      });

      // Calculate age ranges
      const minAge = d3.min(data, d => d.age);
      const maxAge = d3.max(data, d => d.age);
      const ageRange = maxAge - minAge;
      const numGroups = 10; // Number of age groups

      const ageGroups = Array.from({ length: numGroups }, (_, i) => ({
        min: minAge + (i * ageRange) / numGroups,
        max: minAge + ((i + 1) * ageRange) / numGroups
      }));

      const colorScale = d3.scaleOrdinal()
        .domain(genres)
        .range(d3.quantize(d3.interpolateSinebow, genres.length)); 

      const genreData = genres.map((genre, index) => {
        const ageGroupCounts = ageGroups.map(ageGroup => {
          const count = data.filter(d => d.Fav_genre === genre && d.age >= ageGroup.min && d.age <= ageGroup.max).length;
          return { name: `${Math.floor(ageGroup.min)}-${Math.floor(ageGroup.max)}`, count, genre };
        });
        return { name: genre, children: ageGroupCounts };
      });

      const root = {
        name: 'Genres',
        children: genreData
      };

      const treemapLayout = d3.treemap()
        .size([800, 600]) // Adjust the size of the treemap for better readability
        .padding(3)
        .round(true);

      const treemapRoot = d3.hierarchy(root)
        .sum(d => d.count);

      treemapLayout(treemapRoot);

      const svg8 = d3.select('#chart2')
        .append('svg')
        .attr('width', 800) // Set the width8 of the svg8 container
        .attr('height', 600); // Set the height8 of the svg8 container

      const cell = svg8.selectAll('g')
        .data(treemapRoot.leaves())
        .enter().append('g')
        .attr('transform', d => `translate(${d.x0},${d.y0})`);

      cell.append('rect')
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => colorScale(d.data.genre))
        .attr('stroke', '#fff')
        .on('mouseover', function(event, d) {
          d3.select('.tooltip1')
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 20) + 'px')
            .style('display', 'block')
            .html(`${d.parent.data.name} - ${d.data.name}: ${d.data.count}`);
        })
        .on('mouseout', function() {
          d3.select('.tooltip1').style('display', 'none');
        });

      ageGroups.slice(0, numGroups - 1).forEach((ageGroup, i) => {
        svg8.append('rect')
          .attr('x', 0)
          .attr('y', treemapRoot.each(d => d.data.name.includes(`${Math.floor(ageGroup.min)}-${Math.floor(ageGroup.max)}`) && d.x0 === 0 && d.y0 > 0).y0)
          .attr('width', 800) // Set the width8 of the line
          .attr('height', 2) // Set the height8 of the line
          .attr('fill', 'none')
          
          ;
      });

      cell.append('text')
        .attr('x', 5)
        .attr('y', 15);
		/*

      // Legend creation
     const legendMargin = { top: 3450, right: -100 }; // Adjust the margin as needed

// Legend creation
const legend = d3.select('#chart2')
  .append('svg')
  .attr('class', 'legend')
  .attr('width', 200)
  .attr('height', 600)
  .style('position', 'absolute') // Add positioning style
  .style('top', legendMargin.top + 'px') // Apply top margin
  .style('right', legendMargin.right + 'px') // Apply right margin
  .selectAll('g')
  .data(genres)
  .enter().append('g')
  .attr('transform', (d, i) => `translate(0,${i * 20})`);

      legend.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', d => colorScale(d));

      legend.append('text')
        .attr('x', 24)
        .attr('y', 9)
        .attr('dy', '.35em')
        .text(d => d);*/
    });
 
