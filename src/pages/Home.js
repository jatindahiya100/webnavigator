import React from 'react';
import Grid from '../components/Grid';
import animationData from '../assets/images/Animation1689573956186.json';

export default function Home() {
  const gridData = [
    {
      heading: "I’m Jatin Dahiya. I live in Sonipat City, where I design the future.",
      text: "I’ve loved making things for as long as I can remember, and wrote my first program when I was 12 years old, just two weeks after my father brought home the brand new DELL Latitude | E5410 that I taught myself to type on.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: animationData
    },
    {
      heading: "I’m Jatin Dahiya. I live in Sonipat City, where I design the future.",
      text: "I’ve loved making things for as long as I can remember, and wrote my first program when I was 12 years old, just two weeks after my father brought home the brand new DELL Latitude | E5410 that I taught myself to type on.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: animationData
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

      {/* Render other components here */}

    </>
  );
}
