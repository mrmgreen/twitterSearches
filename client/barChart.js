import React from 'react';
import * as d3 from 'd3';

const barChart = () => {
  const dataset = [ 5, 10, 14 ];
  const w = 500;
  const h = 100;

d3.select('#barChartDiv')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  d3.select('#barChartDiv svg').selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 20)
    .attr('height', 100);
};

export default barChart;
