import React, { useEffect } from 'react';
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Landing-Page_Lottie-01.json';
// Components Imports
import Banner from '../components/Banner';
import ExpertiseSection from '../components/ExpertiseComponent';
import WorkflowComponent from '../components/WorkflowComponent';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQAccordion from '../components/FAQPage';
import StatsCard from '../components/StatsCard';
import LeadershipSection from '../components/LeadershipSection';


export default function Home() {
  useEffect(() => {
    document.title = "The Web Navigators | Crafting Digital Experiences for Brand Success ";
  }, [])

  const scrollToExpertiseSection = () => {
    // Scroll to the ExpertiseSection parent div
    const expertiseSectionDiv = document.getElementById('expertise-section');
    if (expertiseSectionDiv) {
      expertiseSectionDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Banner
        spanText="Navigating the Web's Waves with Ease"
        h1Text="Welcome To The Web Navigators"
        pText="Welcome to The Web Navigators, where we bring your digital dreams to life with a dedicated team, empowering your brand online."
        buttonLabel="Get Started"
        onClickfunction={scrollToExpertiseSection}
        lottieData={Lottie01} // Pass your Lottie data here
      />
      <ExpertiseSection />
      <StatsCard />
      <WorkflowComponent />
      <LeadershipSection/>
      <TestimonialsSection />
      <FAQAccordion />
    </>
  );
}
