// assets/js/knowledge-graph.js
// Loads graph.json and renders the knowledge graph using Sigma.js v2.x

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("knowledge-graph");
  if (!container) return;

  fetch("/assets/graph.json")
    .then((res) => res.json())
    .then((data) => {
      // Build a graphology graph
      const Graph = window.graphology;
      const graph = new Graph();

      // Place nodes in a circle for now
      const N = data.nodes.length;
      data.nodes.forEach((n, i) => {
        const angle = (2 * Math.PI * i) / N;
        graph.addNode(n.id, {
          label: n.label,
          x: Math.cos(angle),
          y: Math.sin(angle),
          size: 10,
          color: n.color || (n.type === "post" ? "#4f8cff" : "#fc4c02"),
          type: "circle",
          url: n.url,
          icon: n.icon,
        });
      });
      data.edges.forEach((e) => {
        graph.addEdge(e.source, e.target, {
          color: e.type === "external" ? "#fc4c02" : "#aaa",
          type: "arrow",
        });
      });

      // Render with Sigma (v2.x)
      const renderer = new window.Sigma(graph, container, {
        renderEdgeLabels: false,
        minCameraRatio: 0.1,
        maxCameraRatio: 10,
      });

      // Node click: open url
      renderer.on("clickNode", ({ node }) => {
        const url = graph.getNodeAttribute(node, "url");
        if (url) window.open(url, "_blank");
      });
    });
});
