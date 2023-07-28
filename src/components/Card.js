import React from 'react';
import '../assets/css/Card.css'; // Import the CSS file

const Card = ({ imageSrc, heading, description, buttonText }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt="Card" className="card-image" />
            <div className="card-content">
                <h2 className="card-heading">{heading}</h2>
                <p className="card-description">{description}</p>
                <button className="button">{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;
