const barChart = () => {
  const dataset = [ 5, 10, 14 ];
  const w = 500;
  const h = 100;

const svg = d3.select('#root')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 20)
    .attr('height', 100);
};

barChart();