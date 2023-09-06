import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 sm:p-8 mt-6 sm:mt-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Left Grid Item */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center sm:items-start mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-start">Ready To Start A Project</h2>
          <p className="text-gray-300 mb-4 sm:text-lg text-center sm:text-start mt-4 mb-4">
            Let's have a conversation about your project.
          </p>
          <button className="bg-blue-500 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white hover:bg-blue-600 transition duration-300" onClick={() => {
            window.tidioChatApi.show();
            window.tidioChatApi.open();
          }}>
            Start a Conversation
          </button>
        </div>

        {/* Middle Grid Item */}
        <div className="col-span-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <span className="text-lg sm:text-xl text-start sm:text-center">Quick Links</span>
            {/* Replace anchor tags with NavLink components */}
            <NavLink to="/" className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 block text-start sm:text-center"></NavLink>
            <NavLink to="/" className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 block text-start sm:text-center">
              Home
            </NavLink>
            <NavLink to="/work" className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 block text-start sm:text-center">
              Previous Work
            </NavLink>
            <NavLink to="/what-we-do" className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 block text-start sm:text-center">
              What We Do?
            </NavLink>
            <NavLink to="/start-project" className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 block text-start sm:text-center">
              Start Project
            </NavLink>
          </div>
        </div>

        {/* Right Grid Item */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <span className="text-lg sm:text-xl">Find us on</span>
          <div className="flex items-center mt-2 sm:mt-4">
            <div className="flex space-x-4">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/jatindahiya-profile/" className="text-white hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 sm:w-8 h-6 sm:h-8"
                  viewBox="0 0 24 24">
                  <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM8.92 19H6V9.96h2.92V19zm-1.46-10.77a1.63 1.63 0 111.63-1.63 1.63 1.63 0 01-1.63 1.63zM19 19h-2.91v-4.87c0-1.16-.02-2.65-1.61-2.65-1.61 0-1.86 1.26-1.86 2.57V19H10V9.96h2.84v1.37h.04c.39-.74 1.33-1.51 2.79-1.51 2.99 0 3.55 1.97 3.55 4.54V19z" />
                </svg>
              </a>
              {/* Add More social icons */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-4 sm:mt-8 text-gray-300">
        &copy; {new Date().getFullYear()} The Web Navigators. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
