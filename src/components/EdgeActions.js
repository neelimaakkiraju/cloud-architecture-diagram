import React, { useState } from 'react';

const EdgeActions = ({ id, data }) => {
  const [action, setAction] = useState(data?.action || 'none');

  const handleSelectChange = (e) => {
    setAction(e.target.value);
    // Update edge data or any other state as needed
  };

  return (
    <div className="edge-actions">
      <span>Action: </span>
      <select value={action} onChange={handleSelectChange}>
        <option value="none">None</option>
        <option value="read">Read</option>
        <option value="write">Write</option>
      </select>
    </div>
  );
};

export default EdgeActions;
