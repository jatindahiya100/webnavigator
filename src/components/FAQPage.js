import React, { useState } from 'react';

const faqs = [
  {
    question: "What services does The Web Navigators offer?",
    answer: "We offer a wide range of web development and design services, including website development, UI/UX design, e-commerce solutions, and more. Please visit our Services page for a detailed list of our offerings."
  },
  {
    question: "How do I request a quote for a project?",
    answer: "You can request a quote by visiting our Contact page and filling out the inquiry form. Be sure to provide as much detail as possible about your project's requirements, and we'll get back to you with a customized quote."
  },
  {
    question: "What is the typical turnaround time for a web development project?",
    answer: "The turnaround time for a project can vary depending on its complexity and scope. We'll work closely with you to define project timelines during the initial consultation. Our team strives to deliver high-quality work within reasonable timeframes."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes, we offer website redesign services to help improve the look, functionality, and user experience of your existing website. Contact us with details about your current site, and we'll discuss how we can help."
  },
  {
    question: "What technologies and frameworks do you use for web development?",
    answer: "We stay up-to-date with the latest web technologies and use a variety of frameworks and tools, including React, Vue.js, Node.js, and more. Our choice of technology depends on the specific needs of your project."
  },
  // Add more FAQs as needed
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full p-8 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4">
            <div
              onClick={() => toggleAccordion(index)} // Attach the toggleAccordion to this div
              className="cursor-pointer" // Add this class to make it look clickable
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className="sr-only">{openIndex === index ? 'Collapse' : 'Expand'}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ease-in-out ${openIndex === index ? 'transform rotate-180' : 'transform rotate-0'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={openIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`mt-2 text-gray-700 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
