import React from 'react';

const nodes = [
  { id: '1', type: 'custom', label: 'Region' },
  { id: '2', type: 'custom', label: 'Availability Zone' },
  { id: '3', type: 'custom', label: 'VPC' },
  { id: '4', type: 'custom', label: 'Amazon S3' },
  { id: '5', type: 'custom', label: 'Amazon EC2' },
];

const NodePalette = () => (
  <div className="palette w-1/4 bg-gray-100 p-2">
    <h3 className="text-lg font-bold">Node Palette</h3>
    <div className="node-list">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="node bg-gray-200 border border-gray-400 my-2 p-2 cursor-pointer"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('application/reactflow', JSON.stringify(node));
          }}
        >
          {node.label}
        </div>
      ))}
    </div>
  </div>
);

export default NodePalette;
