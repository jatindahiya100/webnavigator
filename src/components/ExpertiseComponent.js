import React from 'react';

const ExpertiseComponent = () => {
  return (
    <div id="expertise-section" className="container mx-auto min-h-screen">
      <span className="text-lg font-bold text-blue-600 px-4 sm:px-0">Our Expertise</span>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold capitalize mt-4 mb-8 px-4 sm:px-0">In Web Design <br /> And Digital Marketing</h2>
      <div className="flex flex-col sm:flex-row justify-center">
        {/* Main Card 1: Web Design & Coding */}
        <div className="w-full sm:w-2/3 lg:w-1/2 p-4 sm:p-2">
          <div className="bg-slate-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Web Design & Coding</h3>

            {/* Grid for Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Front-end */}
              <div className="bg-slate-800 rounded-lg p-4">
                <span className="text-sm font-semibold text-blue-500">Front-end</span>
                <p className="mt-2 mb-4 text-slate-400">
                  We specialize in creating user interfaces using the following technologies:
                </p>
                <ul className="list-disc pl-4 text-slate-400">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Vue.js</li>
                </ul>
              </div>

              {/* Back-end */}
              <div className="bg-slate-800 rounded-lg p-4">
                <span className="text-sm font-semibold text-blue-500">Back-end</span>
                <p className="mt-2 mb-4 text-slate-400">
                  Our back-end development expertise includes the following technologies:
                </p>
                <ul className="list-disc pl-4 text-slate-400">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                </ul>
              </div>

              {/* API Development */}
              <div className="bg-slate-800 rounded-lg p-4">
                <span className="text-sm font-semibold text-blue-500">API Development</span>
                <p className="mt-2 mb-4 text-slate-400">
                  We excel in building APIs with the following technologies:
                </p>
                <ul className="list-disc pl-4 text-slate-400">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>

              {/* Integrations */}
              <div className="bg-slate-800 rounded-lg p-4">
                <span className="text-sm font-semibold text-blue-500">Integrations</span>
                <p className="mt-2 mb-4 text-slate-400">
                  We integrate various services and platforms using the following technologies:
                </p>
                <ul className="list-disc pl-4 text-slate-400">
                  <li>API Integrations</li>
                  <li>Payment Gateways</li>
                  <li>Chatbots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card 2: Digital Marketing */}
        <div className="w-full sm:w-2/3 lg:w-1/2 p-4 sm:p-2 mt-4 sm:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Digital Marketing</h3>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* SEO */}
              <div className="bg-black rounded-lg p-4">
                <span className="text-lg sm:text-xl font-semibold text-white">SEO</span>
                <p className="text-slate-400 mt-2 mb-4">
                  We optimize your website for search engines to improve visibility and rankings.
                </p>
              </div>

              {/* Paid Advertising */}
              <div className="bg-black rounded-lg p-4">
                <span className="text-lg sm:text-xl font-semibold text-white">Paid Advertising</span>
                <p className="text-slate-400 mt-2 mb-4">
                  We create and manage paid advertising campaigns to drive targeted traffic.
                </p>
              </div>
            </div>

            <p className="text-black mt-4">
              Our digital marketing experts can help you reach your audience through various strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseComponent;
