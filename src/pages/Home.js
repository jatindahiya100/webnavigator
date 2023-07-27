import React from 'react';
import Grid from '../components/Grid';
import Lottie01 from '../assets/images/Lottie/Lottie01.json';
import Lottie02 from '../assets/images/Lottie/Lottie02.json';
import Lottie03 from '../assets/images/Lottie/Lottie03.json';
import SEOLottie from '../assets/images/Lottie/SEO-Lottie-01.json';
import SocialMediaLottie from '../assets/images/Lottie/Social-Media-Lottie-01.json';
import AdsCampaignLottie from '../assets/images/Lottie/Ads-Campaign-Lottie-01.json';
import ReviewsLottie from '../assets/images/Lottie/Reviews-Lottie-01.json';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const gridData = [
    {
      index: 0,
      heading: "Unleash Your Digital Triumph!",
      text: "Welcome to Web Navigators, where we transform your digital dreams into reality! As a premier digital service agency, we are driven by your success. Prepare to embark on an extraordinary journey with our dedicated team of visionaries and tech enthusiasts, as we empower your brand to conquer the digital realm.",
      btnText: "Let's Begin Your Journey",
      handleBtnClick: () => {
        // 
      },
      imageType: "Lottie",
      imageUrl: Lottie01,
      gridBg: "#FFFFFF"
    },
    {
      index: 1,
      heading: "We Will Craft A Custom Solution From Scratch",
      text: "At Web Navigators, we don't just build websites; we create digital experiences that resonate with your audience. Our team of skilled developers and designers crafts fully custom websites tailored to meet your unique business needs. Stand out from the crowd with a website that not only looks stunning but also delivers seamless functionality and user-friendly interactions.",
      btnText: "Discover Our Custom Websites",
      handleBtnClick: () => {
        navigate('/work');
      },
      imageType: "Lottie",
      imageUrl: Lottie02,
      gridBg: "#F7F6F3"
    },
    {
      index: 2,
      heading: "Versatile Website Solutions From WordPress to Custom Builds.",
      text: "Embrace versatility with our website solutions. Whether you prefer the ease of WordPress, the flexibility of Wix, or any other website builder, we've got you covered! Our expertise spans across various platforms, ensuring that your website is built using the technology that suits you best, without compromising on quality or creativity.",
      btnText: "Explore Our Website Solutions",
      handleBtnClick: () => {
        navigate('/services');
      },
      imageType: "Lottie",
      imageUrl: Lottie03,
      gridBg: "#FFFFFF"
    },
    {
      index: 3,
      heading: "Harness the Power of SEO & Amplify Your Growth",
      text: "Reach new heights with our SEO Experts team by your side. Boost your website's visibility and attract organic traffic with our data-driven SEO strategies. Watch as your website climbs the search engine ranks and draws in the right audience, ultimately driving business growth and ensuring your online success.",
      btnText: "Unleash SEO Potential",
      handleBtnClick: () => {

      },
      imageType: "Lottie",
      imageUrl: SEOLottie,
      gridBg: "#F7F6F3"

    },
    {
      index: 4,
      heading: "Ignite Your Online Presence Through Social Media",
      text: "Unlock the full potential of social media with our expert management team. Engage your audience, build a loyal following, and create meaningful connections with your brand. Our social media wizards will craft captivating content and manage your online presence, helping you take the social media world by storm.",
      btnText: "Elevate Social Presence",
      handleBtnClick: () => {

      },
      imageType: "Lottie",
      imageUrl: SocialMediaLottie,
      gridBg: "#FFFFFF"
    },
    {
      index: 5,
      heading: "Unleash Your Business Potential With Ads Campaigns",
      text: "Take your business to the next level with our dynamic ads campaigns. From Google Ads to Facebook and Instagram Ads, our creative team will design compelling ad campaigns that drive results. Increase conversions, expand your reach, and witness the power of strategic advertising for your business.",
      btnText: " Ignite Your Ads Campaign",
      handleBtnClick: () => {

      },
      imageType: "Lottie",
      imageUrl: AdsCampaignLottie,
      gridBg: "#F7F6F3"
    },
    {
      index: 6,
      heading: "Client Love: Hear What Our Clients Say",
      text: "Our success is measured by the satisfaction of our clients. Discover what our previous partners have to say about their experience with Web Navigators. We take pride in delivering exceptional results and building lasting relationships, and our clients' testimonials speak volumes about the dedication and excellence we bring to every project.",
      btnText: " Read Client Reviews",
      handleBtnClick: () => {

      },
      imageType: "Lottie",
      imageUrl: ReviewsLottie,
      gridBg: "#FFFFFF"
    },
    // Add more grid data objects as needed
  ];

  // 'gridData' is an array containing the data for each Grid component
  const gridComponents = gridData.map((data, index) => (
    <Grid key={index} gridData={data} />
  ));

  return (
    <>
      {gridComponents}
    </>
  );
}
