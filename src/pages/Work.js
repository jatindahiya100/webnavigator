import React from 'react'
import Grid from '../components/Grid';
import Compressor from '../assets/images/project/Compressor-io.png'
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../assets/images/project/Clearbit.png'
import Proper from '../assets/images/project/Proper.png'
import LuxyHair from '../assets/images/project/Luxy-Hair.png'
import JPLewis from '../assets/images/project/JP-Lewis-Group.png'
import customDashboardUI from '../assets/images/project/customDashboardUI.png'


export default function Work() {
  const gridData = [
    {
      index: 0,
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
      index: 1,
      heading: "2). Clearbit - Data Enrichment.",
      text: "Clearbit is a data enrichment platform that provides business intelligence and contact information for companies and individuals. The platform uses advanced algorithms and data sources to gather and organize data on millions of businesses and professionals worldwide.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://clearbit.com/");
      },
      imageType: "image",
      imageUrl: ClearBit,
      gridBg: "#F7F6F3"
    },
    {
      index: 2,
      heading: "3). Web Image Compression",
      text: "Compressor.io is a web-based image compression tool designed to reduce the file size of images without compromising their quality significantly. The platform is useful for individuals and web developers who seek to optimize the loading speed of their websites and applications by minimizing image sizes.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://compressor.io/");
      },
      imageType: "image",
      imageUrl: Compressor,
      gridBg: "#FFFFFF"
    },
    {
      index: 3,
      heading: "4). Studio Proper  e-commerce",
      text: "Studio Proper is a leading online retailer offering innovative accessories for mobile devices. They specialize in stylish and functional products like protective cases, mounts, stands, and more, designed to enhance the user experience and keep devices secure.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://www.studioproper.com/");
      },
      imageType: "image",
      imageUrl: Proper,
      gridBg: "#F7F6F3"
    },
    {
      index: 4,
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
      index: 5,
      heading: "6). JP LEWIS GROUP, LLC - Landing Page",
      text: "Designed, Developed, and hosted a landing page for an international cleint:  'James Lewis Group LLC'. The deliverables were a simple and elegant landing page built with pure HTML, CSS, Javascript.",
      btnText: "Visit Site",
      handleBtnClick: () => {
        window.open("https://jplewisgroup.com/");
      },
      imageType: "image",
      imageUrl: JPLewis,
      gridBg: "#F7F6F3"
    },
    {
      index: 6,
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

      <Grid gridData={gridData[0]} />
      <Grid gridData={gridData[1]} />
      <Grid gridData={gridData[2]} />
      <Grid gridData={gridData[3]} />
      <Grid gridData={gridData[4]} />
      <Grid gridData={gridData[5]} />
      <Grid gridData={gridData[6]} />

    </>
  )
}
