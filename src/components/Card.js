import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the CSS effect

import '../assets/css/Card.css'; // Import the CSS file

const Card = ({ imageSrc, heading, description, buttonText, websiteUrl }) => {
    return (
        <div className="card">
            <LazyLoadImage
                src={imageSrc}
                alt="Card"
                className="card-image"
                effect="blur" // You can choose other effects as well
            />
            <div className="card-content">
                <h3 className="card-heading">{heading}</h3>
                <p className="card-description">{description}</p>
                <button className="button" onClick={() => { window.open(websiteUrl) }}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;
