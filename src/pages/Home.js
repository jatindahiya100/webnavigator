import React from 'react';
import Grid from '../components/Grid';
import Lottie01 from '../assets/images/Lottie01.json';
import Lottie02 from '../assets/images/Lottie02.json';
import Lottie03 from '../assets/images/Lottie03.json';
import Lottie04 from '../assets/images/Lottie04.json';
import Lottie05 from '../assets/images/Lottie05.json';

export default function Home() {
  const gridData = [
    {
      heading: "Our team can develop anything you can imagine or explain to us!",
      text: "Our highly skilled team possesses the ability to transform your wildest ideas and concepts into tangible, innovative realities. With our expertise and passion for development, we can bring to life any vision you share with us, no matter how complex or imaginative it may be.",
      btnText: "Scroll Down",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: Lottie01,
      gridBg: "#FFFFFF"
    },
    {
      heading: "we will craft a custom solution from scratch",
      text: "Experience the power of custom solutions as our expert team crafts innovative and personalized solutions from scratch, designed to meet your exact needs and exceed your expectations.",
      btnText: "Previous Work",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: Lottie02,
      gridBg: "#FFFFFF"
    },
    {
      heading: "Let’s collaborate to make something incredible. Just like you",
      text: "Join forces with our collaborative team to create something extraordinary. Together, we'll bring your vision to life, just as exceptional as you imagined.",
      btnText: "Let's Collab",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: Lottie03,
      gridBg: "#FFFFFF"
    },
    {
      heading: "Elegant UI / UX design beyond just putting pixels together",
      text: "Experience the art of UI/UX design that goes beyond pixel assembly. Our team creates elegant and intuitive interfaces that captivate users, ensuring seamless interactions and an exceptional user experience.",
      btnText: "Explore More",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: Lottie04,
      gridBg: "#FFFFFF"

    },
    {
      heading: "Customers leave us reviews. See the difference for yourself",
      text: "Discover the impact we make through customer reviews. Witness firsthand the difference we bring to projects, as our satisfied clients share their experiences and attest to the exceptional quality of our work.",
      btnText: "Take Me There!",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: Lottie05,
      gridBg: "#FFFFFF"
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
        handleBtnClick={gridData[0].handleBtnClick}
        imageType={gridData[0].imageType}
        imageUrl={gridData[0].imageUrl}
        gridBg={gridData[0].gridBg}
      />

      <Grid
        index={1}
        heading={gridData[1].heading}
        text={gridData[1].text}
        btnText={gridData[1].btnText}
        handleBtnClick={gridData[1].handleBtnClick}
        imageType={gridData[1].imageType}
        imageUrl={gridData[1].imageUrl}
        gridBg={gridData[1].gridBg}

      />

      <Grid
        index={2}
        heading={gridData[2].heading}
        text={gridData[2].text}
        btnText={gridData[2].btnText}
        handleBtnClick={gridData[2].handleBtnClick}
        imageType={gridData[2].imageType}
        imageUrl={gridData[2].imageUrl}
        gridBg={gridData[2].gridBg}
      />

      <Grid
        index={3}
        heading={gridData[3].heading}
        text={gridData[3].text}
        btnText={gridData[3].btnText}
        handleBtnClick={gridData[3].handleBtnClick}
        imageType={gridData[3].imageType}
        imageUrl={gridData[3].imageUrl}
        gridBg={gridData[3].gridBg}
      />

      <Grid
        index={4}
        heading={gridData[4].heading}
        text={gridData[4].text}
        btnText={gridData[4].btnText}
        handleBtnClick={gridData[4].handleBtnClick}
        imageType={gridData[4].imageType}
        imageUrl={gridData[4].imageUrl}
        gridBg={gridData[4].gridBg}
      />

      {/* Render other components here */}

    </>
  );
}
