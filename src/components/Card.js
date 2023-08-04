import React from 'react';
import '../assets/css/Card.css'; // Import the CSS file

const Card = ({ imageSrc, heading, description, buttonText, websiteUrl }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt="Card" className="card-image" />
            <div className="card-content">
                <h3 className="card-heading">{heading}</h3>
                <p className="card-description">{description}</p>
                <button className="button" onClick={() => { window.open(websiteUrl) }}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;
