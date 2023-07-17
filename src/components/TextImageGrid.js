import React from 'react';
import '../assets/css/TextImageGrid.css';

const TextImageGrid = ({ text, imageUrl }) => {
  return (
    <div className="text-image-grid">
      <div className="text-content">
        <p>{text}</p>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt="" className="image" />
      </div>
    </div>
  );
};

export default TextImageGrid;
