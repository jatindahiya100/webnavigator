import React from 'react';
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../assets/images/project/Clearbit.png'
import Compressor from '../assets/images/project/Compressor-io.png'
import Proper from '../assets/images/project/Proper.png'
import LuxyHair from '../assets/images/project/Luxy-Hair.png'
import JPLewis from '../assets/images/project/JP-Lewis-Group.png'
import customDashboardUI from '../assets/images/project/customDashboardUI.png'

// Replace with your actual project data
const projects = [
    {
        category: 'Front-End',
        name: 'Clearbit',
        description: 'Enhanced the user experience of Clearbit data enrichment platform, improving data visualization and user journey.',
        image: ClearBit,
        link: 'https://example.com/project1',
    },
    {
        category: 'Front-End',
        name: 'Custom Dashboard',
        description: 'Created a dynamic and customizable data dashboard, enabling users to monitor their data efficiently.',
        image: customDashboardUI,
        link: 'https://example.com/project1',
    },
    {
        category: 'Full Stack',
        name: 'SideBird.io',
        description: 'Developed an engaging Twitter fanbase-building web app with user-friendly tools for audience growth and engagement.',
        image: SideBird,
        link: 'https://example.com/project1',
    },
    {
        category: 'Full Stack',
        name: 'Compressor.io',
        description: 'Built an image compression solution for faster website load times and improved performance.',
        image: Compressor,
        link: 'https://example.com/project2',
    },
    {
        category: 'Full Stack',
        name: 'Studio Proper',
        description: "Contributed to the development and design of Studio Proper's digital presence.",
        image: Proper,
        link: 'https://example.com/project2',
    },
    {
        category: 'Full Stack',
        name: 'Luxy Hair',
        description: "Designed and developed an e-commerce platform for Luxy Hair, enhancing online shopping experiences.",
        image: LuxyHair,
        link: 'https://example.com/project2',
    },
    {
        category: 'Full Stack',
        name: 'JP Lewis Group, LLC.',
        description: 'Developed the web presence for JP Lewis Group, LLC., providing web design and interface development.',
        image: JPLewis,
        link: 'https://example.com/project1',
    },
    // Add more projects here
];

const PortfolioCategory = ({ category, projects }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 duration-300 hover:shadow-xl"
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-44 object-cover"
                    />
                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-600 h-32 overflow-y-auto">{project.description}</p>
                        <div className="mt-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300"
                            >
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                    Visit Site
                                </button>
                            </a>
                        </div>
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                Portfolio
            </h1>
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

