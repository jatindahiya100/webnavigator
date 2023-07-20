import React from 'react';
import Grid from '../components/Grid';
import Lottie01 from '../assets/images/Lottie01.json';
import Lottie02 from '../assets/images/Lottie02.json';
import Lottie03 from '../assets/images/Lottie03.json';
import SEOLottie from '../assets/images/SEO-Lottie-01.json';
import SocialMediaLottie from '../assets/images/Social-Media-Lottie-01.json';
import AdsCampaignLottie from '../assets/images/Ads-Campaign-Lottie-01.json';
import ReviewsLottie from '../assets/images/Reviews-Lottie-01.json';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const gridData = [
    {
      heading: "Unleash Your Digital Triumph!",
      text: "Welcome to Web Navigator, where we transform your digital dreams into reality! As a premier digital service agency, we are driven by your success. Prepare to embark on an extraordinary journey with our dedicated team of visionaries and tech enthusiasts, as we empower your brand to conquer the digital realm.",
      btnText: "Let's Begin Your Journey",
      handleBtnClick: () => {
        // 
      }
      ,
      imageType: "Lottie",
      imageUrl: Lottie01,
      gridBg: "#FFFFFF"
    },
    {
      heading: "We Will Craft A Custom Solution From Scratch",
      text: "At Web Navigator, we don't just build websites; we create digital experiences that resonate with your audience. Our team of skilled developers and designers crafts fully custom websites tailored to meet your unique business needs. Stand out from the crowd with a website that not only looks stunning but also delivers seamless functionality and user-friendly interactions.",
      btnText: "Discover Our Custom Websites",
      handleBtnClick: () => {
        navigate('/work');
      },
      imageType: "Lottie",
      imageUrl: Lottie02,
      gridBg: "#FFFFFF"
    },
    {
      heading: "Versatile Website Solutions From WordPress to Custom Builds.",
      text: "Embrace versatility with our website solutions. Whether you prefer the ease of WordPress, the flexibility of Wix, or any other website builder, we've got you covered! Our expertise spans across various platforms, ensuring that your website is built using the technology that suits you best, without compromising on quality or creativity.",
      btnText: "Explore Our Website Solutions",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: Lottie03,
      gridBg: "#FFFFFF"
    },
    {
      heading: "Harness the Power of SEO & Amplify Your Growth",
      text: "Reach new heights with our SEO Experts team by your side. Boost your website's visibility and attract organic traffic with our data-driven SEO strategies. Watch as your website climbs the search engine ranks and draws in the right audience, ultimately driving business growth and ensuring your online success.",
      btnText: "Unleash SEO Potential",
      handleBtnClick: () => {
        navigate('/work');
      },
      imageType: "Lottie",
      imageUrl: SEOLottie,
      gridBg: "#FFFFFF"

    },
    {
      heading: "Ignite Your Online Presence Through Social Media",
      text: "Unlock the full potential of social media with our expert management team. Engage your audience, build a loyal following, and create meaningful connections with your brand. Our social media wizards will craft captivating content and manage your online presence, helping you take the social media world by storm.",
      btnText: "Elevate Social Presence",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: SocialMediaLottie,
      gridBg: "#FFFFFF"
    },
    {
      heading: "Unleash Your Business Potential With Ads Campaigns",
      text: "Take your business to the next level with our dynamic ads campaigns. From Google Ads to Facebook and Instagram Ads, our creative team will design compelling ad campaigns that drive results. Increase conversions, expand your reach, and witness the power of strategic advertising for your business.",
      btnText: " Ignite Your Ads Campaign",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: AdsCampaignLottie,
      gridBg: "#FFFFFF"
    },
    {
      heading: "Client Love: Hear What Our Clients Say",
      text: "Our success is measured by the satisfaction of our clients. Discover what our previous partners have to say about their experience with Web Navigator. We take pride in delivering exceptional results and building lasting relationships, and our clients' testimonials speak volumes about the dedication and excellence we bring to every project.",
      btnText: " Read Client Reviews",
      handleBtnClick: () => {
        alert("Website is under development");
      },
      imageType: "Lottie",
      imageUrl: ReviewsLottie,
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

      {/* Render other components here */}

    </>
  );
}
