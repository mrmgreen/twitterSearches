import React from 'react';
import * as d3 from 'd3';

const Circles = () => {
  const circles = d3.selectAll('circle');
  circles.style('fill', 'blue');
  console.log('circles ===', circles);
  return (
    <div>
      <svg width="720" height="120">
        <circle cx="40" cy="60" r="10"></circle>
        <circle cx="80" cy="60" r="10"></circle>
        <circle cx="120" cy="60" r="10"></circle>
      </svg>
    </div>
  )
};

export default Circles;
