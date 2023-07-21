import React from 'react'
import Grid from '../components/Grid';
import WebDesignCover from '../assets/images/services/web-design-cover.png'
import WebDevelopmentCover from '../assets/images/services/web-development-cover.png'
import ECommerceCover from '../assets/images/services/ecommerce-cover.png'
import SEOCover from '../assets/images/services/seo-adwords-cover.png'
import DigitalMarketingCover from '../assets/images/services/digital-marketing-cover.jpg'
import HostingCover from '../assets/images/services/hosting-cover.png'
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const gridData = [
    {
      index: 0,
      heading: "Website Design",
      text: "At Web Navigators, we take pride in designing visually stunning and intuitive websites that not only capture your brand essence but also engage your audience. Our designs are responsive, ensuring a seamless user experience across all devices.",
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
      heading: "Coding & Development",
      text: "With Web Navigators' proficient coding and development services, your ideas turn into functional reality. We utilize the latest technologies and best practices to build scalable and secure web applications that meet your business needs.",
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
      heading: "Custom E-Commerce Design",
      text: "Boost your online sales with our custom e-commerce design solutions. Web Navigators creates user-friendly and conversion-focused online stores that are tailored to your specific product offerings and target audience, ensuring a seamless buying process.",
      btnText: "Let's Design",
      handleBtnClick: () => {
        navigate("/start-project");
      },
      imageType: "image",
      imageUrl: ECommerceCover,
      gridBg: "#FFFFFF"
    },
    {
      index: 3,
      heading: "Search Engine Optimisation",
      text: " Enhance your online visibility and organic traffic with our SEO expertise. Web Navigators conducts comprehensive keyword research, on-page optimization, and backlink building strategies to improve your search engine rankings and attract more potential customers.",
      btnText: "Boost Website Traffic",
      handleBtnClick: () => {
        navigate("/start-project");
      },
      imageType: "image",
      imageUrl: SEOCover,
      gridBg: "#F7F6F3"
    },
    {
      index: 4,
      heading: "Digital Marketing",
      text: "Our data-driven digital marketing strategies are designed to drive measurable results. From creating engaging social media campaigns to managing pay-per-click (PPC) advertising, Web Navigators ensures that your brand message reaches the right audience at the right time.",
      btnText: "Let's Plan",
      handleBtnClick: () => {
        navigate("/start-project");
      },
      imageType: "image",
      imageUrl: DigitalMarketingCover,
      gridBg: "#FFFFFF"
    },
    {
      index: 5,
      heading: "Domain & Hosting",
      text: "Simplify your website management with our reliable domain and hosting services. Web Navigators offers secure hosting solutions and handles domain registration and configuration, ensuring a smooth and hassle-free online presence for your business.",
      btnText: "Let's Handle This!",
      handleBtnClick: () => {
        navigate("/start-project");
      },
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
