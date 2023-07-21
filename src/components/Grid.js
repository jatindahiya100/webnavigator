import React, { useEffect, useState } from 'react';
import '../assets/css/Grid.css';
import Lottie from 'lottie-react'

const Grid = (props) => {
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

  const isEven = props.gridData.index % 2 === 0;

  const renderTextItem = () => (
    <div className="grid-item text">
      <h1 className='primary-text-light-mode'>{props.gridData.heading}</h1>
      <p className='secondary-text-light-mode'>{props.gridData.text}</p>
      <button className='button' onClick={props.gridData.handleBtnClick}>{props.gridData.btnText} <ion-icon name="arrow-down-circle"></ion-icon></button>
    </div>
  );

  const renderImageItem = () => (
    <div id={props.gridData.index} className="grid-item">
      {props.gridData.imageType === "Lottie" ? (
        <Lottie className='image' animationData={props.gridData.imageUrl} />
      ) : (
        <img className="image" src={props.gridData.imageUrl} alt="" />
      )}
    </div>
  );

  return (
    <div style={{ backgroundColor: props.gridData.gridBg }}>
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
