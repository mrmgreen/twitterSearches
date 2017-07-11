const svg = d3.select('svg'),
  width = +svg.attr('width'),
  height = +svg.attr('height');

const format = d3.format(',d');
const color = d3.scaleOrdinal(d3.schemeCategory20c);

const pack = d3.pack()
  .size([width, height])
  .padding(1.5);

d3.csv('flare.csv', d => {
  d.value = +d.value;
  if (d.value) return d;
}, (error, classes) => {
  if (error) throw error;
  const root = d3.hierarchy({children: classes})
    .sum(d => d.value)
    .each(d => {
      if (id = d.data.id) {
        var id, i = id.lastIndexOf(".");
        d.id = id;
        d.package = id.slice(0, i);
        d.class = id.slice(i + 1);
      }
    });

  const node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.x}, ${d.y})`);

  node.append("circle")
    .attr("id", d => d.id)
    .attr("r", d => d.r)
    .style("fill", d => color(d.package));

  node.append("clipPath")
    .attr('id', d => `clip-${d.id}`)
    .append('use')
    .attr('xlink:href', d => `#${d.id}`);

  node.append('text')
    .attr('clip-path', d => `url(#clip-${d.id})`)
    .selectAll('tspan')
    .data(d => d.class.split(/(?=[A-Z][^A-Z])/g))
    .enter()
    .append('tspan')
    .attr('x', 0)
    .attr('y', (d, i ,nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
    .text(d => d);

  node.append('title')
    .text(d => `${d.id}\n ${format(d.value)}`);
});
