import React from 'react'
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Lottie02.json';
// Components Imports
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import Services from '../components/Services';

export default function WhatWeDo() {
  // Define dynamic SEO data for this page
  const pageTitle = 'What We Do ?';
  const pageDescription = "Discover our expertise at The Web Navigators. We specialize in web solutions that drive success. Let's create something amazing together!";
  const canonicalURL = 'https://www.thewebnavigators.com/what-we-do';

  const scrollToServicesSection = () => {
    // Scroll to the ExpertiseSection parent div
    const expertiseSectionDiv = document.getElementById('services-section');
    if (expertiseSectionDiv) {
      expertiseSectionDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} canonicalUrl={canonicalURL} />
      <Banner
        spanText="What We Do ?"
        h1Text="Navigate Your Business Online"
        pText="At The Web Navigators, we specialize in helping businesses thrive in the digital world. We provide tailored solutions to enhance your online presence, drive growth, and reach your goals."
        buttonLabel="Explore Our Services"
        onClickfunction={scrollToServicesSection}
        lottieData={Lottie01} // Pass your Lottie data here
      />
      <Services />
    </>
  );
}
