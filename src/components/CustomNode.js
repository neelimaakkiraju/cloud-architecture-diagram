import React from 'react';
import { Handle } from 'react-flow-renderer';
import { FaAws } from 'react-icons/fa';
import { MdStorage, MdCloud, MdComputer } from 'react-icons/md';

const iconMap = {
  Region: FaAws,
  'Availability Zone': MdStorage,
  VPC: MdCloud,
  'Amazon S3': MdStorage,
  'Amazon EC2': MdComputer,
};

const CustomNode = ({ data }) => {
  const Icon = iconMap[data.label] || FaAws;

  return (
    <div className="custom-node flex items-center">
      <Icon size={24} className="mr-2" />
      <div>{data.label}</div>
      <Handle type="source" position="right" />
      <Handle type="target" position="left" />
    </div>
  );
};

export default CustomNode;
