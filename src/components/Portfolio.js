import React from 'react';
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png'
import NeverAI from '../assets/images/project/NeverAI.png'
import QuoteBuilder from '../assets/images/project/GuWiGuttersAndWindows.png'
import GuwiDashboard from '../assets/images/project/Gu-Wi-Dashboard.png'
import Artify from '../assets/images/project/Artify-Image-Restyle.png'
import SponsorPro from '../assets/images/project/Sponsor-Pro-AI-Outreach.png'
import RainfireStore from '../assets/images/project/Rainfire-Online-Store.png'
import Compressor from '../assets/images/project/Compressor-io.png'
import Proper from '../assets/images/project/Proper.png'
import LuxyHair from '../assets/images/project/Luxy-Hair.png'
import JPLewis from '../assets/images/project/JP-Lewis-Group.png'
import ImageCreator from '../assets/images/project/ImageCreator.png'
import Durable from '../assets/images/project/Durable.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// Replace with your actual project data
const projects = [
    {
        category: 'Front-End',
        name: 'Durable',
        description: "We've meticulously designed an impressive front-end for Durable Website Builder, offering an engaging and efficient user interface. Dive into the website to experience our expertly crafted design firsthand!",
        image: Durable,
        link: 'https://durable.co/',
    },
    {
        category: 'Front-End',
        name: 'Image Creator',
        description: "We've created a polished and user-friendly front-end for Image Creator, ensuring a seamless browsing experience. Check it out now!",
        image: ImageCreator,
        link: 'https://imagecreator.alkaidvision.com/',
    },
    {
        category: 'Front-End',
        name: 'Never AI',
        description: 'Created and engineered the front-end of Never AI using React.js, Tailwind CSS, and various JavaScript libraries.',
        image: NeverAI,
        link: 'https://www.never.tech/',
    },
    {
        category: 'Full Stack',
        name: 'AI Image Restyle',
        description: 'Artify AI lets users transform their photos with AI filters and print them on customizable products for personalized art made easy.',
        image: Artify,
        link: 'https://artify-app-yu34e.ondigitalocean.app/',
    },
    {
        category: 'Full Stack',
        name: 'AI Outreach Tool',
        description: 'A cool app for athletes to find local brands. It helps them write messages using smart AI, making it easy to connect with sponsors.',
        image: SponsorPro,
        link: 'https://sponsorpro-70d8f.web.app/',
    },
    {
        category: 'Full Stack',
        name: 'Gu-Wi Quote Builder',
        description: 'I crafted a nifty tool for Gu-Wi that automatically generates two quotes for customers, using data from JotForm. Simplifying the process, it ensures a speedy and tailored experience for clients.',
        image: QuoteBuilder,
        link: 'https://guwiquotebuilder.com/#/5722451285136736892',
    },
    {
        category: 'Full Stack',
        name: 'Gu-Wi Admin Dashboard',
        description: 'Developed Gu-Wi Admin Dashboard. Full Stack app with API integration, front-end, and Firebase. Enabled user-friendly interface, real-time analytics, and customization for efficient service management.',
        image: GuwiDashboard,
        link: 'https://guwi-dashboard.web.app/',
    },
    {
        category: 'Full Stack',
        name: 'Rainfire E-Commerce',
        description: 'Rainfire E-Commerce: My full-stack e-commerce masterpiece. From design to deployment, every aspect crafted by me for seamless online shopping',
        image: RainfireStore,
        link: 'https://rainfire.in/',
    },
    {
        category: 'Full Stack',
        name: 'SideBird.io',
        description: 'Developed an engaging Twitter fanbase-building web app with user-friendly tools for audience growth and engagement.',
        image: SideBird,
        link: 'https://www.sidebird.io/',
    },
    {
        category: 'Full Stack',
        name: 'Compressor.io',
        description: 'Built an image compression solution for faster website load times and improved performance.',
        image: Compressor,
        link: 'https://compressor.io/',
    },
    {
        category: 'Full Stack',
        name: 'Studio Proper',
        description: "Contributed to the development and design of Studio Proper's digital presence.",
        image: Proper,
        link: 'https://www.studioproper.com/',
    },
    {
        category: 'Full Stack',
        name: 'Luxy Hair',
        description: "Designed and developed an e-commerce platform for Luxy Hair, enhancing online shopping experiences.",
        image: LuxyHair,
        link: 'https://www.luxyhair.com/',
    },
    {
        category: 'Full Stack',
        name: 'JP Lewis Group, LLC.',
        description: 'Developed the web presence for JP Lewis Group, LLC., providing web design and interface development.',
        image: JPLewis,
        link: 'https://jplewisgroup.com/',
    },
    // Add more projects here
];

const PortfolioCategory = ({ category, projects }) => (
    <div className="mb-8">
        <span className="text-lg font-bold text-blue-600 px-4 sm:px-0" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">{category}</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {projects.map((project, index) => (
                <div key={index}
                    className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <LazyLoadImage
                        src={project.image}
                        alt={project.name}
                        effect="opacity"
                        className="w-full object-cover" />

                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-500 text-sm">
                            {project.description}&nbsp;
                            <a href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300">
                                Preview
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Portfolio = () => {
    // Create an array of unique categories
    const categories = [...new Set(projects.map((project) => project.category))]
        .sort((a, b) => b.localeCompare(a));

    return (
        <div id='portfolio-section' className="container mx-auto px-4 py-8">
            <span className="text-lg font-bold text-blue-600 px-4 sm:px-0" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Projects Completed</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold capitalize mt-4 mb-8 px-4 sm:px-0" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">In Web Design <br /> And Coding</h2>
            {categories.map((category, index) => (
                <PortfolioCategory
                    key={index}
                    category={category}
                    projects={projects.filter((project) => project.category === category)}
                />
            ))}
        </div>
    );
};

export default Portfolio;

