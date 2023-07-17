import React from 'react';
import Grid from '../components/Grid';
import Lottie01 from '../assets/images/Lottie01.json';
import Lottie02 from '../assets/images/Lottie02.json';
import Lottie03 from '../assets/images/Lottie03.json';
import Lottie04 from '../assets/images/Lottie04.json';
import Lottie05 from '../assets/images/Lottie05.json';
import Lottie06 from '../assets/images/Lottie06.json';
import Lottie07 from '../assets/images/Lottie07.json';

export default function Home() {
  const gridData = [
    {
      heading: "Our team can develop anything you can imagine or explain to us!",
      text: "Our highly skilled team possesses the ability to transform your wildest ideas and concepts into tangible, innovative realities. With our expertise and passion for development, we can bring to life any vision you share with us, no matter how complex or imaginative it may be.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie01
    },
    {
      heading: "we will craft a custom solution from scratch",
      text: "Experience the power of custom solutions as our expert team crafts innovative and personalized solutions from scratch, designed to meet your exact needs and exceed your expectations.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie02
    },
    {
      heading: "Let’s collaborate to make something incredible. Just like you",
      text: "Join forces with our collaborative team to create something extraordinary. Together, we'll bring your vision to life, just as exceptional as you imagined.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie03
    },
    {
      heading: "Elegant UI / UX design beyond just putting pixels together",
      text: "Experience the art of UI/UX design that goes beyond pixel assembly. Our team creates elegant and intuitive interfaces that captivate users, ensuring seamless interactions and an exceptional user experience.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie04
    },
    {
      heading: "Customers leave us reviews. See the difference for yourself",
      text: "Discover the impact we make through customer reviews. Witness firsthand the difference we bring to projects, as our satisfied clients share their experiences and attest to the exceptional quality of our work.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie05
    },
    // Add more grid data objects as needed
  ];

  return (
    <>
      <Grid
        index={0}
        heading={gridData[0].heading}
        text={gridData[0].text}
        btnText={gridData[0].btnText}
        btnLink={gridData[0].btnLink}
        imageType={gridData[0].imageType}
        imageUrl={gridData[0].imageUrl}
      />

      <Grid
        index={1}
        heading={gridData[1].heading}
        text={gridData[1].text}
        btnText={gridData[1].btnText}
        btnLink={gridData[1].btnLink}
        imageType={gridData[1].imageType}
        imageUrl={gridData[1].imageUrl}
      />

      <Grid
        index={2}
        heading={gridData[2].heading}
        text={gridData[2].text}
        btnText={gridData[2].btnText}
        btnLink={gridData[2].btnLink}
        imageType={gridData[2].imageType}
        imageUrl={gridData[2].imageUrl}
      />

      <Grid
        index={2}
        heading={gridData[3].heading}
        text={gridData[3].text}
        btnText={gridData[3].btnText}
        btnLink={gridData[3].btnLink}
        imageType={gridData[3].imageType}
        imageUrl={gridData[3].imageUrl}
      />

      <Grid
        index={3}
        heading={gridData[4].heading}
        text={gridData[4].text}
        btnText={gridData[4].btnText}
        btnLink={gridData[4].btnLink}
        imageType={gridData[4].imageType}
        imageUrl={gridData[4].imageUrl}
      />

      {/* Render other components here */}

    </>
  );
}
