import React from 'react';
import { useReactFlow } from 'reactflow';
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
  const { project, addNodes } = useReactFlow();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = project();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = project({ x: event.clientX, y: event.clientY });

    if (typeof type === 'undefined' || !type) {
      return;
    }

    const newNode = {
      id: `${type}-${new Date().getTime()}`,
      type,
      position,
      data: { label: `${nodeTypes[type].label}` },
    };

    addNodes(newNode);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div className="node-palette">
      <h3>Node Palette</h3>
      <div className="node-items">
        {Object.keys(nodeTypes).map((key) => (
          <div
            key={key}
            className="node-item"
            draggable
            onDragStart={(event) => onDragStart(event, key)}
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
