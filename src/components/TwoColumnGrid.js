import React from 'react';
import '../assets/css/TwoColumnGrid.css'; // Import the CSS file

const TwoColumnGrid = ({ items }) => {
    return (
        <div className="two-column-grid-container">
            {items.map((item, index) => (
                <div className="two-column-grid-item" key={index}>
                    <img src={item.imageSrc} alt={item.heading} />
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                    <button onClick={item.handleBtnClick}>{item.buttonText}</button>
                </div>
            ))}
        </div>
    );
};

export default TwoColumnGrid;
