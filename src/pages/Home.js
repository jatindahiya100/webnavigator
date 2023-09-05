import React from 'react';
import { useEffect } from 'react';
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Landing-Page_Lottie-01.json';
// Components Imports
import Banner from '../components/Banner';
import ExpertiseSection from '../components/ExpertiseComponent';
import ServicesSection from '../components/WorkflowComponent';
import TestimonialsSection from '../components/TestimonialsSection';


export default function Home() {
  useEffect(() => {
    document.title = "The Web Navigators | Crafting Digital Experiences for Brand Success";
  }, [])

  return (
    <>
      <Banner
        spanText="Navigating the Web's Waves with Ease"
        h1Text="Welcome To The Web Navigators"
        pText="Welcome to The Web Navigators, where we bring your digital dreams to life with a dedicated team, empowering your brand online."
        buttonLabel="Get Started"
        onClickfunction={() => { alert("hi") }}
        lottieData={Lottie01} // Pass your Lottie data here
      />
      <ExpertiseSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}
