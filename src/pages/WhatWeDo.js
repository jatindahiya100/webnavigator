import React from 'react'
import { useEffect } from 'react';
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Lottie02.json';
// Components Imports
import Banner from '../components/Banner';
import Services from '../components/Services';

export default function WhatWeDo() {
  useEffect(() => {
    document.title = "The Web Navigators | What We Do";
  }, [])

  const scrollToServicesSection = () => {
    // Scroll to the ExpertiseSection parent div
    const expertiseSectionDiv = document.getElementById('services-section');
    if (expertiseSectionDiv) {
      expertiseSectionDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
