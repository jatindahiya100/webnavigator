import React from 'react';
import Lottie from 'lottie-react';
import WebDevelopment from '../assets/images/Lottie/Lottie03.json';
import DigtialMarketing from '../assets/images/Lottie/Ads-Campaign-Lottie-01.json';

const webDevelopmentServices = [
    {
        title: 'Web Design',
        description: 'We create stunning and user-friendly websites.',
    },
    {
        title: 'Coding',
        description: 'Our expert developers code your dreams into reality.',
    },
    {
        title: 'SEO',
        description: "Boost your website's visibility on search engines.",
    },
];

const digitalMarketingServices = [
    {
        title: 'Google Ads',
        description: 'Drive targeted traffic with Google Ads campaigns.',
    },
    {
        title: 'Bing Ads',
        description: 'Expand your reach with Bing Ads advertising.',
    },
    {
        title: 'Microsoft Ads',
        description: 'Leverage Microsoft Ads for better conversions.',
    },
    {
        title: 'Instagram Ads',
        description: 'Reach your audience on Instagram with effective ads.',
    },
    {
        title: 'Facebook Ads',
        description: 'Maximize engagement with Facebook advertising.',
    },
];

const ServiceCard = ({ title, description }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="p-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <h3 className="text-lg font-bold text-blue-600 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
);

const Services = () => (
    <div id='services-section'>
        <div className="container mx-auto px-4 sm:px-8">
            <span className="text-lg font-bold text-blue-600 text-center block" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Our Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize text-center mt-4 mb-6 sm:mb-8" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                Discover what we offer
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="mb-6 sm:mb-0">
                    <Lottie animationData={WebDevelopment} />
                </div>
                <div>
                    <h3 className="text-lg sm:text-1xl md:text-2xl lg:text-3xl font-extrabold mb-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Web Development</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {webDevelopmentServices.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div>
                    <h3 className="text-lg sm:text-1xl md:text-2xl lg:text-3xl font-extrabold mb-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Digital Marketing</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {digitalMarketingServices.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
                <div className="mb-6 sm:mb-0">
                    <Lottie animationData={DigtialMarketing} />
                </div>
            </div>
        </div>
    </div>
);

export default Services;
