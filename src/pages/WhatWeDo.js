import React from 'react'
import Grid from '../components/Grid';
import WebDesignCover from '../assets/images/what-we-do/web-design-cover.png'
import WebDevelopmentCover from '../assets/images/what-we-do/web-development-cover.png'
import ECommerceCover from '../assets/images/what-we-do/ecommerce-cover.png'
import SEOCover from '../assets/images/what-we-do/seo-adwords-cover.png'
import DigitalMarketingCover from '../assets/images/what-we-do/digital-marketing-cover.jpg'
import HostingCover from '../assets/images/what-we-do/hosting-cover.png'
import { useNavigate } from 'react-router-dom';

export default function WhatWeDo() {
  const navigate = useNavigate();
  const gridData = [
    {
      index: 0,
      heading: "Web Design and Development",
      list: [
        "Custom Website Design: Tailored designs to represent your brand and meet your specific needs.",
        "Responsive Web Development: Creating websites that adapt to various devices and screen sizes.",
        "E-commerce Solutions: Building online stores with secure payment gateways and user-friendly interfaces.",
        "Content Management Systems (CMS): Implementing systems like WordPress, Joomla, or Drupal for easy website management.",
        "Website Maintenance: Ensuring your website stays up-to-date, secure, and optimized for peak performance."
      ],
      btnText: "Get Started",
      handleBtnClick: () => {
        navigate("/start-project");
      },
      imageType: "image",
      imageUrl: WebDesignCover,
      gridBg: "#FFFFFF"
    },
    {
      index: 1,
      heading: "Digital Marketing",
      list: [
        "Paid Advertising (PPC): Creating and managing effective pay-per-click campaigns to drive targeted traffic.",
        "Search Engine Optimization (SEO): Optimizing websites to improve search engine rankings and organic visibility.",
        "Social Media Marketing: Leveraging social platforms to engage with audiences and build brand awareness.",
        "Email Marketing: Crafting compelling email campaigns to nurture leads and drive conversions.",
        "Analytics and Conversion Tracking: Monitoring and analyzing website data to enhance marketing strategies."
      ],
      btnText: "Let's Code",
      handleBtnClick: () => {
        navigate("/start-project");
      },
      imageType: "image",
      imageUrl: WebDevelopmentCover,
      gridBg: "#F7F6F3"
    },
    {
      index: 2,
      heading: "Domain and Hosting Services",
      list: [
        "Domain Registration: Assisting clients in finding and registering suitable domain names for their websites.",
        "Web Hosting: Providing reliable hosting solutions with optimal server performance and security.",
        "SSL Certificates: Ensuring secure data transmission with SSL certificates for enhanced trust."
      ],
      btnText: "Let's Design",
      handleBtnClick: () => {
        navigate("/start-project");
      },
      imageType: "image",
      imageUrl: ECommerceCover,
      gridBg: "#FFFFFF"
    },
    // Add more grid data objects as needed
  ];
  return (
    <>
      <Grid gridData={gridData[0]} />
      <Grid gridData={gridData[1]} />
      <Grid gridData={gridData[2]} />
    </>
  )
}
