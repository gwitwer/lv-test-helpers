function makeTreeArray() {
  function numChildren(l) {
    const r = Math.random();
    let n;
    if (r < 0.1) n = 0;
    else if (r < 0.3) n = 1;
    else if (r < 0.6) n = 2;
    else n = 4;

    return Math.floor(n / (l / 2));
  }
  let totalNodes = 1;
  const maxNodes = 100;
  const makeNode = id => {
    totalNodes += 1;
    return {
      id,
      children:
        totalNodes < maxNodes && id.length < 6
          ? [...new Array(numChildren(id.length)).keys()].map(k => makeNode(id + k.toString()))
          : []
    };
  };
  return [makeNode('1')];
}
