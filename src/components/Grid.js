import React from 'react';
import '../assets/css/Grid.css';
import Lottie from 'lottie-react'

const Grid = ({ index, heading, text, btnText, btnLink, imageType, imageUrl }) => {
  const isEven = index % 2 === 0;

  const renderTextItem = () => (
    <div className="grid-item text">
      <h1 className='primary-text-light-mode'>{heading}</h1>
      <p className='secondary-text-light-mode'>{text}</p>
      <button className='button' onClick={() => { window.open({ btnLink }) }}>{btnText} <ion-icon name="arrow-down-circle"></ion-icon></button>
    </div>
  );

  const renderImageItem = () => (
    <div className="grid-item">
      {imageType === "Lottie" ?
        <Lottie className='image' animationData={imageUrl} />
        :
        <img className="image" src={imageUrl} alt="" />
      }
    </div>
  );

  return (
    <div className="grid-container">
      {isEven ? (
        <>
          {renderTextItem()}
          {renderImageItem()}
        </>
      ) : (
        <>
          {renderImageItem()}
          {renderTextItem()}
        </>
      )}
    </div>
  );
};

export default Grid;
