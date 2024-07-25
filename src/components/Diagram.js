import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useEdgesState,
  useNodesState
} from 'react-flow-renderer';
import CustomNode from './CustomNode';
import { initialElements } from './InitialElements';

const nodeTypes = {
  custom: CustomNode,
};

const Diagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialElements.filter(el => el.type === 'default'));
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialElements.filter(el => el.type === 'edge'));

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onElementsRemove = useCallback(
    (elementsToRemove) => {
      const idsToRemove = elementsToRemove.map((el) => el.id);
      setNodes((nds) => nds.filter((nd) => !idsToRemove.includes(nd.id)));
      setEdges((eds) => eds.filter((ed) => !idsToRemove.includes(ed.id)));
    },
    [setNodes, setEdges]
  );

  return (
    <div className="h-screen w-3/4">
      <ReactFlow
        elements={[...nodes, ...edges]}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onElementsRemove={onElementsRemove}
        style={{ backgroundColor: '#A0AEC0' }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
