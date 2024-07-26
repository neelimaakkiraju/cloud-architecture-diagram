import React from 'react';
import { useReactFlow } from '@xyflow/react';
import { CloudIcon, DatabaseIcon } from '@heroicons/react/solid';
import './NodePalette.css';

const nodeTypes = {
  region: {
    label: 'Region',
    icon: <CloudIcon className="node-icon" />,
  },
  availabilityZone: {
    label: 'Availability Zone',
    icon: <CloudIcon className="node-icon" />,
  },
  vpc: {
    label: 'VPC',
    icon: <DatabaseIcon className="node-icon" />,
  },
  s3: {
    label: 'Amazon S3',
    icon: <DatabaseIcon className="node-icon" />,
  },
  ec2: {
    label: 'Amazon EC2',
    icon: <DatabaseIcon className="node-icon" />,
  },
};

const NodePalette = () => {
  useReactFlow();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };



  return (
    <div className="node-palette">
      <h3>Node Palette</h3>
      <div className="node-items">
        {Object.keys(nodeTypes).map((key) => (
          <div
            key={key}
            className="node-item"
            
            onDragStart={(event) => onDragStart(event , 'default')} draggable
          >
            {nodeTypes[key].icon}
            <span>{nodeTypes[key].label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodePalette;
