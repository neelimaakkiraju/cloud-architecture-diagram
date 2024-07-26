import React, { useCallback, useRef } from 'react';
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import NodePalette from './components/NodePalette';
import EdgeActions from './components/EdgeActions';

const initialNodes = [];
const initialEdges = [];

const App = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const {screenToFlowPosition} = useReactFlow()

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ params,eds })),
    [],
  );

  // const onInit = (rfi) => setscreenToFlowPosition(rfi);
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        // id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition],
  );

  
  return (
   
      <div className="h-screen flex">
        <NodePalette setNodes={setNodes} />
        <div className="w-full h-full" ref={reactFlowWrapper}>
          <useReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            // onInit={onInit}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            edgeTypes={{ custom: EdgeActions }}
          >
            <MiniMap />
            <Controls />
            <Background />
          </useReactFlow>
        </div>
      </div>
    
  );
};

export default () =>(
  <ReactFlowProvider>
  <App/>
  </ReactFlowProvider>
)
