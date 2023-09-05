import React from 'react'
import { useEffect } from 'react'
import Banner from '../components/Banner'

// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Landing-Page_Lottie-01.json';
import Portfolio from '../components/Portfolio';

const Work = () => {
  useEffect(() => {
    document.title = "The Web Navigators | Previous Work";
  }, [])

  return (
    <>
      <Banner
        spanText="Our Previous Work"
        h1Text="Check Out What We've Done"
        pText="Discover our impressive portfolio showcasing a wide range of successful projects, from web applications to mobile interfaces. See how we turn ideas into reality."
        buttonLabel="View Portfolio"
        onClickfunction={() => { alert("hi") }}
        lottieData={Lottie01}
      />
      <Portfolio/>
    </>
  );
};

export default Work;
