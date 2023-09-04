import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8 sm:mb-10">
          Ready To Start A <br /> Project?
        </h2>
        <button
          className="bg-blue-500 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            // Navigate to /start-project on button click
            window.location.href = '/start-project';
          }}
        >
          Get Started
        </button>
        <nav className="mt-6 sm:mt-12">
          <ul className="flex flex-wrap justify-center gap-4 sm:space-x-4">
            <li>
              <NavLink to="/home" activeClassName="text-blue-500" className="text-sm sm:text-base">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" activeClassName="text-blue-500" className="text-sm sm:text-base">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/what-we-do" activeClassName="text-blue-500" className="text-sm sm:text-base">
                What We Do
              </NavLink>
            </li>
            <li>
              <NavLink to="/start-project" activeClassName="text-blue-500" className="text-sm sm:text-base">
                Start Project
              </NavLink>
            </li>
          </ul>
        </nav>
        <p className="text-center text-gray-400 text-sm mt-6 sm:mt-12">
          Made With <span className="text-crimson"><ion-icon name="heart"></ion-icon></span> In India. All rights reserved &copy; 2023.
          Let's collaborate and create exceptional digital solutions that reflect the rich heritage and collective brilliance of our global community. Together, we can build a brighter digital future!
        </p>

        <div className="mt-6 sm:mt-12">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 mr-4 sm:mr-6"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 mr-4 sm:mr-6"
          >
            GitHub
          </a>
          <a
            href="https://www.upwork.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
