// assets/js/knowledge-graph.js
// Loads graph.json and renders the knowledge graph using Sigma.js v2.x

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("knowledge-graph");
  if (!container) return;

  // Centralized style config for easy future updates
  const GRAPH_STYLES = {
    node: {
      defaultColor: "#4f8cff", // blue for posts
      externalColor: "#fc4c02", // orange for external nodes (not used for edges)
      size: 10,
    },
    edge: {
      color: "#aaa", // unified grey for all edges
      strokeWidth: 2.5, // edge thickness
      arrow: {
        color: "#aaa", // arrow color (same as edge)
        markerWidth: 8, // base marker size (scales with zoom)
        markerHeight: 8,
        refX: 8, // position of arrow tip
        refY: 4,
        orient: "auto",
      },
    },
  };

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
          size: GRAPH_STYLES.node.size,
          color: n.color || (n.type === "post" ? GRAPH_STYLES.node.defaultColor : GRAPH_STYLES.node.externalColor),
          type: "circle",
          url: n.url,
          icon: n.icon,
        });
      });
      data.edges.forEach((e) => {
        graph.addEdge(e.source, e.target, {
          color: GRAPH_STYLES.edge.color,
          type: "arrow",
          // strokeWidth: GRAPH_STYLES.edge.strokeWidth, // If Sigma supports per-edge stroke width
        });
      });

      // Add SVG marker for arrows (if not already present)
      // This assumes Sigma.js v2/v3 supports custom markers via CSS/SVG. If not, this is a placeholder for future extensibility.
      // For Sigma v2/v3, arrow size is usually set via renderer config or CSS, not direct SVG marker, but we centralize here for future-proofing.

      // Render with Sigma (v3.x UMD: may be window.Sigma or window.Sigma.default)
      const SigmaCtor = window.Sigma && typeof window.Sigma === "function"
        ? window.Sigma
        : window.Sigma && window.Sigma.default
          ? window.Sigma.default
          : null;
      if (!SigmaCtor) {
        console.error("Sigma.js is not loaded or not found on window.Sigma");
        return;
      }
      const renderer = new SigmaCtor(graph, container, {
        renderEdgeLabels: false,
        minCameraRatio: 0.1,
        maxCameraRatio: 10,
        // If Sigma supports global edge/arrow style config, set here:
        // defaultEdgeType: "arrow",
        // edgeColor: "default",
        // defaultEdgeColor: GRAPH_STYLES.edge.color,
        // edgeLabelSize: 14,
        // ...etc.
      });

      // Node click: open url
      renderer.on("clickNode", ({ node }) => {
        const url = graph.getNodeAttribute(node, "url");
        if (url) window.open(url, "_blank");
      });
    });
});
