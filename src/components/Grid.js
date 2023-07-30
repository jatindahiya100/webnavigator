import React, { useEffect, useState } from 'react';
import '../assets/css/Grid.css';
import Lottie from 'lottie-react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
    <div className="grid-item text" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-offset="300">
      <h1 className='primary-text-light-mode'>{props.gridData.heading}</h1>
      {
        props.gridData.text ?
          <p className='secondary-text-light-mode'>{props.gridData.text}</p>
          :
          <></>
      }
      {props.gridData.list ? (
        <ul>
          {props.gridData.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}

      {
        props.gridData.btnText ?
          <button className='button' onClick={props.gridData.handleBtnClick}>{props.gridData.btnText} <ion-icon name="arrow-down-circle"></ion-icon></button>
          :
          <></>
      }
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
            {renderImageItem()}
            {renderTextItem()}
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
