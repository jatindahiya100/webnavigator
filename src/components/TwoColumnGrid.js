import React from 'react';
import '../assets/css/TwoColumnGrid.css'; // Import the CSS file
import Card from '../components/Card'

const TwoColumnGrid = ({ items }) => {
    return (
        <div className="two-column-grid-container">
            {items.map((item, index) => (
                <div className="two-column-grid-item" key={index}>
                    <Card
                        imageSrc={item.imageSrc}
                        heading={item.heading}
                        description={item.description}
                        buttonText={item.buttonText}
                        websiteUrl={item.websiteUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default TwoColumnGrid;
