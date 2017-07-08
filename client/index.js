const w = 500;
const h = 100;

const barChart = () => {
  const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  const barHeight = 100;
  const barPadding = 1;

const svg = d3.select('#barChart')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (w / dataset.length))
    .attr('y', (d, i) => h - d * 4)
    .attr('width', w / dataset.length - barPadding)
    .attr('height', d => d * 4)
    .attr("fill", d => "rgb(0, 0, " + (d * 10) + ")");

  svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', (d, i) => i * (w / dataset.length) + (w / dataset.length - barPadding) / 2)
    .attr('y', (d, i) => h - (d * 4) + 14)
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr('text-anchor', 'middle');
};

function scatterPlot() {
  const padding = 20;
  const dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[0])])
    .range([padding, w - padding]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([h - padding, padding]);

  const rScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([2, 5]);

  const svg = d3.select('#scatterPlot')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d[0]))
    .attr('cy', d => yScale(d[1]))
    .attr('r', d => rScale(d[1]));

  svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(d => d[0] + "," + d[1])
      .attr('x', d => xScale(d[0]))
      .attr('y', d => yScale(d[1]))
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'red');
}

barChart();
scatterPlot();
