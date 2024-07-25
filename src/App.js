import React from 'react';
import Diagram from './components/Diagram';
import NodePalette from './components/NodePalette';

const App = () => (
  <div className="app flex">
    <NodePalette />
    <Diagram />
  </div>
);

export default App;
