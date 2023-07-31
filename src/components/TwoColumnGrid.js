import React from 'react';
import '../assets/css/TwoColumnGrid.css'; // Import the CSS file

const TwoColumnGrid = ({ children }) => {
    return (
        <div className="component-wrapper">
            <div className="two-column-grid-container">
                {React.Children.map(children, (child, index) => (
                    <div className="two-column-grid-item" key={index}>
                        {React.isValidElement(child) ? (
                            child
                        ) : (
                            <div className="card">{child}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TwoColumnGrid;
