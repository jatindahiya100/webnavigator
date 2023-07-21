import React from 'react'
import Grid from '../components/Grid';
import WebDesignCover from '../assets/images/services/web-design-cover.png'
import WebDevelopmentCover from '../assets/images/services/web-development-cover.png'
import ECommerceCover from '../assets/images/services/ecommerce-cover.png'
import SEOCover from '../assets/images/services/seo-adwords-cover.png'
import DigitalMarketingCover from '../assets/images/services/digital-marketing-cover.jpg'
import HostingCover from '../assets/images/services/hosting-cover.png'



export default function Services() {
  const gridData = [
    {
      index: 0,
      heading: "Website Design",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      imageType: "image",
      imageUrl: WebDesignCover,
      gridBg: "#FFFFFF"
    },
    {
      index: 1,
      heading: "Coding & Development",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      imageType: "image",
      imageUrl: WebDevelopmentCover,
      gridBg: "#F7F6F3"
    },
    {
      index: 2,
      heading: "Custom E-Commerce Design",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      imageType: "image",
      imageUrl: ECommerceCover,
      gridBg: "#FFFFFF"
    },
    {
      index: 3,
      heading: "Search Engine Optimisation",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      imageType: "image",
      imageUrl: SEOCover,
      gridBg: "#F7F6F3"
    },
    {
      index: 4,
      heading: "Digital Marketing",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      imageType: "image",
      imageUrl: DigitalMarketingCover,
      gridBg: "#FFFFFF"
    },
    {
      index: 5,
      heading: "Domain & Hosting",
      text: "Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.",
      imageType: "image",
      imageUrl: HostingCover,
      gridBg: "#F7F6F3"
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
    </>
  )
}
