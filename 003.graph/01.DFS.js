const DFS = (vertex) => {
  if (!vertex) return;

  const visited = new Set();
  const stack = [vertex];

  while (stack.length) {
    const current = stack.pop();
    visited.add(current);

    for (let neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return visited;
};
