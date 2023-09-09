import React from 'react'
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Lottie04.json';
// Components Imports
import SEO from '../components/SEO';
import Banner from '../components/Banner'
import Portfolio from '../components/Portfolio';
import EmailValidation from './EmailValidation';

const Work = () => {
  // Define dynamic SEO data for this page
  const pageTitle = 'Our Work';
  const pageDescription = "Explore our portfolio of successful projects and collaborations at The Web Navigators. Witness the power of our digital solutions.";
  const canonicalURL = 'https://www.thewebnavigators.com/work';

  const scrollToPortfolioSection = () => {
    // Scroll to the ExpertiseSection parent div
    const expertiseSectionDiv = document.getElementById('portfolio-section');
    if (expertiseSectionDiv) {
      expertiseSectionDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} canonicalUrl={canonicalURL} />
      <Banner
        spanText="Our Previous Work"
        h1Text="Check Out What We've Done"
        pText="Discover our impressive portfolio showcasing a wide range of successful projects, from web applications to mobile interfaces. See how we turn ideas into reality."
        buttonLabel="View Portfolio"
        onClickfunction={scrollToPortfolioSection}
        lottieData={Lottie01}
      />
      <Portfolio />
      <EmailValidation />
    </>
  );
};

export default Work;
