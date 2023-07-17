import React from 'react';
import Grid from '../components/Grid';
import Lottie01 from '../assets/images/Lottie01.json';
import Lottie02 from '../assets/images/Lottie02.json';
import Lottie03 from '../assets/images/Lottie03.json';
import Lottie04 from '../assets/images/Lottie04.json';

export default function Home() {
  const gridData = [
    {
      heading: "I’m Jatin Dahiya. I live in Sonipat City, where I design the future.",
      text: "I’ve loved making things for as long as I can remember, and wrote my first program when I was 12 years old, just two weeks after my father brought home the brand new DELL Latitude | E5410 that I taught myself to type on.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie01
    },
    {
      heading: "Let’s collaborate to make something incredible. Just like you",
      text: "I provide integrated web design & development services. Innovative web solutions designed by experienced developers! I put the “kick” in kick-ass websites that look gorgeous no matter what device or browser visitors are using.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie02
    },
    {
      heading: "Elegant UI / UX design beyond just putting pixels together",
      text: "Custom web design can be the difference between a mediocre website and an awesome one. If you want your website to stand out from the competition, you need a stand-out design company.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie03
    },
    {
      heading: "Successfully Delivered Over 10+ Projects On Upwok",
      text: "I have a proven track record of successfully delivering more than 10 projects, amounting to a total value of $2.5k+. With a focus on quality and meeting client expectations, I consistently achieve project milestones and deliver tangible results within budget.",
      btnText: "Explore More",
      btnLink: "",
      imageType: "Lottie",
      imageUrl: Lottie04
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
        index={3}
        heading={gridData[3].heading}
        text={gridData[3].text}
        btnText={gridData[3].btnText}
        btnLink={gridData[3].btnLink}
        imageType={gridData[3].imageType}
        imageUrl={gridData[3].imageUrl}
      />

      {/* Render other components here */}

    </>
  );
}
