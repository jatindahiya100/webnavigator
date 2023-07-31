import React from 'react';
import '../assets/css/CustomComponent.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// Initialize AOS outside the component to ensure it's initialized only once
AOS.init();

const CustomComponent = (props) => {
    return (
        <div className='custom-component' data-aos="zoom-in-right" data-aos-duration="1000" data-aos-offset="550">
            {props.title && <h1>{props.title}</h1>}
            {props.description && <p>{props.description}</p>}
            {props.listItems && (
                <ul>
                    {props.listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {props.buttonText && <button className='button' onClick={props.onClick}>{props.buttonText}</button>}
        </div>
    );
};

export default CustomComponent;
