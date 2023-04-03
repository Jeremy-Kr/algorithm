class WeightGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const dijkstra = (graph, start, finish) => {
  const distances = {};
  const previous = {};

  for (let vertex in graph.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      previous[vertex] = null;
    } else {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
  }
};
