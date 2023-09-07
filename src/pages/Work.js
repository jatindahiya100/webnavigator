import React from 'react'
import { useEffect } from 'react'
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Lottie04.json';
import Banner from '../components/Banner'
import Portfolio from '../components/Portfolio';
import EmailValidation from './EmailValidation';



const Work = () => {
  useEffect(() => {
    document.title = "The Web Navigators | Previous Work";
  }, [])

  const scrollToPortfolioSection = () => {
    // Scroll to the ExpertiseSection parent div
    const expertiseSectionDiv = document.getElementById('portfolio-section');
    if (expertiseSectionDiv) {
      expertiseSectionDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Banner
        spanText="Our Previous Work"
        h1Text="Check Out What We've Done"
        pText="Discover our impressive portfolio showcasing a wide range of successful projects, from web applications to mobile interfaces. See how we turn ideas into reality."
        buttonLabel="View Portfolio"
        onClickfunction={scrollToPortfolioSection}
        lottieData={Lottie01}
      />
      <Portfolio/>
      <EmailValidation/>
    </>
  );
};

export default Work;
