import React from 'react';
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../assets/images/project/Clearbit.png'
import Compressor from '../assets/images/project/Compressor-io.png'
import Proper from '../assets/images/project/Proper.png'
import LuxyHair from '../assets/images/project/Luxy-Hair.png'
import JPLewis from '../assets/images/project/JP-Lewis-Group.png'
import customDashboardUI from '../assets/images/project/customDashboardUI.png'
import ImageCreator from '../assets/images/project/ImageCreator.png'
import Durable from '../assets/images/project/Durable.png'

// Replace with your actual project data
const projects = [
    {
        category: 'Front-End',
        name: 'Durable',
        description: "We've meticulously designed an impressive front-end for Durable Website Builder, offering an engaging and efficient user interface. Dive into the website to experience our expertly crafted design firsthand!",
        image: Durable,
        link: 'https://clearbit.com/',
    },
    {
        category: 'Front-End',
        name: 'Clearbit',
        description: 'Enhanced the user experience of Clearbit data enrichment platform, improving data visualization and user journey.',
        image: ClearBit,
        link: 'https://clearbit.com/',
    },
    {
        category: 'Front-End',
        name: 'Custom Dashboard',
        description: 'Created a dynamic and customizable data dashboard, enabling users to monitor their data efficiently.',
        image: customDashboardUI,
        link: 'https://github.com/jatindahiya100/faizy',
    },
    {
        category: 'Front-End',
        name: 'Image Creator',
        description: "We've created a polished and user-friendly front-end for Image Creator, ensuring a seamless browsing experience. Check it out now!",
        image: ImageCreator,
        link: 'https://imagecreator.alkaidvision.com/',
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
        <span className="text-lg font-bold text-blue-600 px-4 sm:px-0">{category}</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {projects.map((project, index) => (
                <div key={index}
                    className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 duration-300 hover:shadow-xl">
                    <img src={project.image}
                        alt={project.name}
                        className="w-full h-44 object-cover" />
                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-600 overflow-y-auto">
                            {project.description}&nbsp;
                            <a href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300">
                                Check It Now
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
    const categories = [...new Set(projects.map((project) => project.category))];

    return (
        <div id='portfolio-section' className="container mx-auto px-4 py-8">
            <span className="text-lg font-bold text-blue-600 px-4 sm:px-0">Projects Completed</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold capitalize mt-4 mb-8 px-4 sm:px-0">In Web Design <br /> And Coding</h2>
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

