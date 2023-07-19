import React from 'react'
import Grid from '../components/Grid';
import Compressor from '../assets/images/Compressor-io.png'
import SideBird from '../assets/images/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../assets/images/Clearbit.png'
import Proper from '../assets/images/Proper.png'
import LuxyHair from '../assets/images/Luxy-Hair.png'
import JPLewis from '../assets/images/JP-Lewis-Group.png'
import customDashboardUI from '../assets/images/customDashboardUI.png'


export default function Work() {
  const gridData = [
    {
      heading: "1). SideBird - The Future Twitter",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://www.sidebird.io/");
      },
      imageType: "image",
      imageUrl: SideBird,
      gridBg: "#FFFFFF"
    },
    {
      heading: "2). Clearbit - Data Analytics",
      text: "Clearbit is a leading provider of B2B data intelligence, empowering go-to-market teams with robust company, contact, and IP information. Their comprehensive dataset, gathered from diverse sources, helps businesses enhance their targeting, personalization, and outreach strategies. With APIs and integrations, Clearbit enables seamless integration of their data into existing platforms, offering go-to-market teams a valuable resource for effective decision-making and customer engagement.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://clearbit.com/");
      },
      imageType: "image",
      imageUrl: ClearBit,
      gridBg: "#FFFFFF"
    },
    {
      heading: "3). Compressor.io - A Image Compression Tool",
      text: "Clearbit is a leading provider of B2B data intelligence, empowering go-to-market teams with robust company, contact, and IP information. Their comprehensive dataset, gathered from diverse sources, helps businesses enhance their targeting, personalization, and outreach strategies. With APIs and integrations, Clearbit enables seamless integration of their data into existing platforms, offering go-to-market teams a valuable resource for effective decision-making and customer engagement.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://compressor.io/");
      },
      imageType: "image",
      imageUrl: Compressor,
      gridBg: "#FFFFFF"
    },
    {
      heading: "4). Studio Proper - e-commerce",
      text: "Studio Proper is a leading online retailer offering innovative accessories for mobile devices. They specialize in stylish and functional products like protective cases, mounts, stands, and more, designed to enhance the user experience and keep devices secure.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://www.studioproper.com/");
      },
      imageType: "image",
      imageUrl: Proper,
      gridBg: "#FFFFFF"
    },
    {
      heading: "5). Luxy Hair - Hair Extensions ",
      text: "Luxy Hair is a leading online retailer known for its high-quality hair extensions. They offer a wide range of extensions made from 100% Remy human hair, ensuring a natural look and exceptional softness. With a user-friendly website, informative resources, and excellent customer service, Luxy Hair is a go-to destination for those looking to enhance their hairstyles and transform their look.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://www.luxyhair.com/");
      },
      imageType: "image",
      imageUrl: LuxyHair,
      gridBg: "#FFFFFF"
    },
    {
      heading: "6). JP LEWIS GROUP, LLC - Landing Page",
      text: "Designed, Developed, and hosted a landing page for an international cleint:  'James Lewis Group LLC'. The deliverables were a simple and elegant landing page built with pure HTML, CSS, Javascript.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://jplewisgroup.com/");
      },
      imageType: "image",
      imageUrl: JPLewis,
      gridBg: "#FFFFFF"
    },
    {
      heading: "7). Custom Dashboard UI/UX Design",
      text: "Client Name: Faizy Jamal. Location: United States (Richmond). Project Summary: Designed and Developed a user-friendly, responsive and eye astounding custom dashboard for his website",
      btnText: "Visit Code",
      handleBtnClick: () => {
        window.open("https://github.com/jatindahiya100/faizy");
      },
      imageType: "image",
      imageUrl: customDashboardUI,
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

      <Grid
        index={5}
        heading={gridData[5].heading}
        text={gridData[5].text}
        btnText={gridData[5].btnText}
        handleBtnClick={gridData[5].handleBtnClick}
        imageType={gridData[5].imageType}
        imageUrl={gridData[5].imageUrl}
        gridBg={gridData[5].gridBg}
      />

      <Grid
        index={6}
        heading={gridData[6].heading}
        text={gridData[6].text}
        btnText={gridData[6].btnText}
        handleBtnClick={gridData[6].handleBtnClick}
        imageType={gridData[6].imageType}
        imageUrl={gridData[6].imageUrl}
        gridBg={gridData[6].gridBg}
      />
    </>
  )
}
