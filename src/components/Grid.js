import React, { useEffect, useState } from 'react';
import '../assets/css/Grid.css';
import Lottie from 'lottie-react'

const Grid = ({ index, heading, text, btnText, handleBtnClick, imageType, imageUrl, gridBg }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const isEven = index % 2 === 0;

  const renderTextItem = () => (
    <div className="grid-item text">
      <h1 className='primary-text-light-mode'>{heading}</h1>
      <p className='secondary-text-light-mode'>{text}</p>
      <button className='button' onClick={handleBtnClick}>{btnText} <ion-icon name="arrow-down-circle"></ion-icon></button>
    </div>
  );

  const renderImageItem = () => (
    <div id={index} className="grid-item">
      {imageType === "Lottie" ? (
        <Lottie className='image' animationData={imageUrl} />
      ) : (
        <img className="image" src={imageUrl} alt="" />
      )}
    </div>
  );

  return (
    <div style={{ backgroundColor: gridBg }}>
      <div className="grid-container">
        {isMobile ? (
          <>
            {renderTextItem()}
            {renderImageItem()}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};


export default Grid;
