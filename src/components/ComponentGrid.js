import React from 'react';
import '../assets/css/ComponentGrid.css';

const ComponentGrid = ({ children }) => {
  return (
    <>
      {
        React.Children.map(children, (child, index) => (
          <div key={index} className='grid-wrapper' style={{ backgroundColor: index % 2 === 0 ? "" : " #F1F0EA" }}>
            <div className="grid-container">{child}</div>
          </div>
        ))
      }
    </>
  );
};

export default ComponentGrid;
