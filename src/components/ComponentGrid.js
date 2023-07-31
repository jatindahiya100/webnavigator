import React from 'react';
import '../assets/css/ComponentGrid.css';

const ComponentGrid = ({ children }) => {
  return (
    <div className='grid-wrapper'>
      <div className="grid-container">{children}</div>
    </div>
  );
};

export default ComponentGrid;
