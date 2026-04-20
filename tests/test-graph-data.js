// tests/test-graph-data.js
// Unit tests for graph.json structure using the build-graph.js logic
// Run with: node tests/test-graph-data.js

const assert = require('assert');
const path = require('path');
const fs = require('fs');

// Import the graph creation logic by refactoring build-graph.js to export a function
const buildGraphPath = path.join(__dirname, '../scripts/build-graph.js');
let buildGraph;
try {
  buildGraph = require(buildGraphPath).buildGraph;
} catch (e) {
  throw new Error('Refactor build-graph.js to export a buildGraph() function that returns { nodes, edges } without writing to disk.');
}

// Generate the graph data in-memory
const { nodes, edges } = buildGraph();

// 1. All nodes have unique IDs and required fields
const nodeIds = new Set();
nodes.forEach(node => {
  assert(node.id, 'Node missing id');
  assert(node.label, `Node ${node.id} missing label`);
  assert(!nodeIds.has(node.id), `Duplicate node id: ${node.id}`);
  nodeIds.add(node.id);
});

// 2. All edges reference valid node IDs
edges.forEach(edge => {
  assert(nodeIds.has(edge.source), `Edge source not found: ${edge.source}`);
  assert(nodeIds.has(edge.target), `Edge target not found: ${edge.target}`);
});

// 3. No duplicate edges (source, target, type)
const edgeSet = new Set();
edges.forEach(edge => {
  const key = `${edge.source}->${edge.target}:${edge.type || ''}`;
  assert(!edgeSet.has(key), `Duplicate edge: ${key}`);
  edgeSet.add(key);
});

console.log('All graph data integrity tests passed!');
