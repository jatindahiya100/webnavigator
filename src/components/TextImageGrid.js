import React from 'react';
import '../assets/css/TextImageGrid.css';
import Lottie from 'lottie-react'

const TextImageGrid = ({ heading, text, btnText, btnLink, imageType, imageUrl }) => {
  return (
    <div className="text-image-grid">
      <div className="text-content">
        <h1>{heading}</h1>
        <p>{text}</p>
        <button onClick={() => { window.open({ btnLink }) }}>{btnText}</button>
      </div>
      <div className="image-content">
        {imageType === "Lottie" ?
          <Lottie animationData={imageUrl} />
          :
          <img src={imageUrl} alt="" className="image" />
        }
      </div>
    </div>
  );
};

export default TextImageGrid;
