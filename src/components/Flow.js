// // src/components/FlowComponent.js
// import React, { useState, useCallback } from 'react';
// import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Controls, MiniMap } from 'reactflow';
// import 'reactflow/dist/style.css';
// import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
// import EdgeActions from './EdgeActions';

// // Define the initial elements
// const initialElements = [];

// const nodeTypes = {
//   region: { label: 'Region' },
//   availabilityZone: { label: 'Availability Zone' },
//   vpc: { label: 'VPC' },
//   s3: { label: 'Amazon S3' },
//   ec2: { label: 'Amazon EC2' },
// };

// const FlowComponent = () => {
//   const [elements, setElements] = useState(initialElements);
//   const [edgeActions, setEdgeActions] = useState({});

//   // Handle changes to nodes
//   const onNodesChange = useCallback((changes) => setElements((els) => applyNodeChanges(changes, els)), []);

//   // Handle changes to edges
//   const onEdgesChange = useCallback((changes) => setElements((els) => applyEdgeChanges(changes, els)), []);

//   // Handle edge creation
//   const onConnect = useCallback((params) => {
//     setElements((els) => addEdge(params, els));
//     setEdgeActions((prev) => ({ ...prev, [params.id]: 'none' }));
//   }, []);

//   // Handle node drop
//   const onDrop = (event) => {
//     event.preventDefault();
//     const type = event.dataTransfer.getData('application/reactflow');
//     const bounds = document.getElementById('reactflow-wrapper').getBoundingClientRect();
//     const position = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };

//     if (nodeTypes[type]) {
//       const newNode = {
//         id: `${type}-${new Date().getTime()}`,
//         type,
//         position,
//         data: { label: `${nodeTypes[type].label}` },
//       };

//       setElements((els) => els.concat(newNode));
//     }
//   };

//   // Handle edge update (e.g., when users drag edges)
//   const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
//     setElements((els) => applyEdgeChanges([oldEdge, newConnection], els));
//   }, []);

//   // Handle edge action changes
//   const handleEdgeActionChange = (id, newAction) => {
//     setEdgeActions((prev) => ({ ...prev, [id]: newAction }));
//   };

//   return (
//     <div className="relative flex-1">
//       <div
//         id="reactflow-wrapper"
//         className="reactflow-wrapper h-full"
//         onDrop={onDrop}
//         onDragOver={(event) => event.preventDefault()}
//       >
//         <ReactFlow
//           elements={elements}
//           onConnect={onConnect}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onEdgeUpdate={onEdgeUpdate}
//         >
//           <MiniMap />
//           <Controls />
//         </ReactFlow>
//         {elements
//           .filter((el) => el.type === 'edge')
//           .map((edge) => (
//             <EdgeActions
//               key={edge.id}
//               id={edge.id}
//               data={{ ...edge.data, action: edgeActions[edge.id] || 'none' }}
//               onChange={handleEdgeActionChange}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default FlowComponent;
