import React from 'react';
// Components Imports
import ComponentGrid from '../components/ComponentGrid';
import CustomComponent from '../components/CustomComponent'
import MediaComponent from '../components/MediaComponent'
import ClientReviewsSlideshow from '../components/ClientReviewsSlideshow';
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Thewebnavigators-Agency-Lottie-01.json';
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
      CustomComponent: {
        title: "Unleash Your Digital Triumph!",
        description:
          "Welcome to Web Navigators, where we transform your digital dreams into reality! As a premier digital service agency, we are driven by your success. Prepare to embark on an extraordinary journey with our dedicated team of visionaries and tech enthusiasts, as we empower your brand to conquer the digital realm.",
        buttonText: "Let's Begin Your Journey",
        onClick: () => {
          alert("hi from CustomComponent 1");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: Lottie01,
        },
      },
    },
    {
      CustomComponent: {
        title: "We Will Craft A Custom Solution From Scratch",
        description:
          "At Web Navigators, we don't just build websites; we create digital experiences that resonate with your audience. Our team of skilled developers and designers crafts fully custom websites tailored to meet your unique business needs. Stand out from the crowd with a website that not only looks stunning but also delivers seamless functionality and user-friendly interactions.",
        buttonText: "What We Do?",
        onClick: () => {
          navigate("/what-we-do");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: Lottie02,
        },
      },
    },
    {
      CustomComponent: {
        title: "Versatile Website Solutions From WordPress to Custom Builds.",
        description:
          "Embrace versatility with our website solutions. Whether you prefer the ease of WordPress, the flexibility of Wix, or any other website builder, we've got you covered! Our expertise spans across various platforms, ensuring that your website is built using the technology that suits you best, without compromising on quality or creativity.",
        buttonText: "Previous Work",
        onClick: () => {
          navigate("/work");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: Lottie03,
        },
      },
    },
    {
      CustomComponent: {
        title: "Harness the Power of SEO & Amplify Your Growth",
        description:
          "Reach new heights with our SEO Experts team by your side. Boost your website's visibility and attract organic traffic with our data-driven SEO strategies. Watch as your website climbs the search engine ranks and draws in the right audience, ultimately driving business growth and ensuring your online success.",
        buttonText: "Unleash SEO Potential",
        onClick: () => {
          navigate("/start-project");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: SEOLottie,
        },
      },
    },
    {
      CustomComponent: {
        title: "Ignite Your Online Presence Through Social Media",
        description:
          "Unlock the full potential of social media with our expert management team. Engage your audience, build a loyal following, and create meaningful connections with your brand. Our social media wizards will craft captivating content and manage your online presence, helping you take the social media world by storm.",
        buttonText: "Elevate Social Presence",
        onClick: () => {
          navigate("/start-project");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: SocialMediaLottie,
        },
      },
    },
    {
      CustomComponent: {
        title: "Unleash Your Business Potential With Ads Campaigns",
        description:
          "Take your business to the next level with our dynamic ads campaigns. From Google Ads to Facebook and Instagram Ads, our creative team will design compelling ad campaigns that drive results. Increase conversions, expand your reach, and witness the power of strategic advertising for your business.",
        buttonText: "Ignite Your Ads Campaign",
        onClick: () => {
          navigate("/start-project");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: AdsCampaignLottie,
        },
      },
    },
    {
      CustomComponent: {
        title: "Client Love: Hear What Our Clients Say",
        description:
          "Our success is measured by the satisfaction of our clients. Discover what our previous partners have to say about their experience with Web Navigators. We take pride in delivering exceptional results and building lasting relationships, and our clients' testimonials speak volumes about the dedication and excellence we bring to every project.",
        buttonText: "Read Testimonials",
        onClick: () => {
          navigate("/start-project");
        },
      },
      MediaComponent: {
        mediaType: "lottie",
        lottieOptions: {
          loop: true,
          autoplay: true,
          animationData: ReviewsLottie,
        },
      },
    },
    // Add more grid data objects as needed
  ];


  return (
    <>
      <ComponentGrid>
        {gridData.map((item, index) => (
          <React.Fragment key={index}>
            {/* Render CustomComponent */}
            <CustomComponent {...item.CustomComponent} />

            {/* Render MediaComponent */}
            <MediaComponent {...item.MediaComponent} />
          </React.Fragment>
        ))}
      </ComponentGrid>
      <ClientReviewsSlideshow />
    </>
  );
}
