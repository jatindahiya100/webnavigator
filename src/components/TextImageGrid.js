import React from 'react';
import '../assets/css/TextImageGrid.css';
import Lottie from 'lottie-react'

const TextImageGrid = ({ heading, text, btnText, btnLink, imageType, imageUrl }) => {
  return (
    <div className="text-image-grid">
      <div className="text-content">
        <h1 className='primary-text-light-mode'>{heading}</h1>
        <p className='secondary-text-light-mode'>{text}</p>
        <button className='button' onClick={() => { window.open({ btnLink }) }}>{btnText} <ion-icon name="arrow-down-circle"></ion-icon></button>
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
