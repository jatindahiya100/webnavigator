import React from 'react';
import { useEffect } from 'react';
// Lottie Imports
import Lottie01 from '../assets/images/Lottie/Landing-Page_Lottie-01.json';
// Components Imports
import Banner from '../components/Banner';
import ExpertiseSection from '../components/ExpertiseComponent';
import ServicesSection from '../components/WorkflowComponent';
import TestimonialsSection from '../components/TestimonialsSection';


export default function Home() {
  useEffect(() => {
    document.title = "The Web Navigators | Crafting Digital Experiences for Brand Success";
  }, [])

  // const gridData = [
  //   {
  //     CustomComponent: {
  //       gravity: 'heavy',
  //       title: "Unleash Your Success with The Web Navigators",
  //       description:
  //         "Welcome to The Web Navigators, where we transform your digital dreams into reality! As a premier digital service agency, we are driven by your success. Prepare to embark on an extraordinary journey with our dedicated team of visionaries and tech enthusiasts, as we empower your brand to conquer the digital realm.",
  //       buttonText: "Let's Begin Your Journey",
  //       onClick: () => {
  //         const gridWrappers = document.querySelectorAll('.grid-wrapper'); // Select all div elements with class 'grid-wrapper'

  //         if (gridWrappers.length > 1) {
  //           const secondGridWrapper = gridWrappers[1]; // Get the second occurrence

  //           secondGridWrapper.scrollIntoView({ behavior: 'smooth' });
  //         }
  //       },
  //     },

  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: Lottie01,
  //       },
  //     },
  //   },
  //   {
  //     CustomComponent: {
  //       gravity: "low",
  //       title: "We Will Craft A Custom Solution From Scratch",
  //       description:
  //         "At Web Navigators, we don't just build websites; we create digital experiences that resonate with your audience. Our team of skilled developers and designers crafts fully custom websites tailored to meet your unique business needs. Stand out from the crowd with a website that not only looks stunning but also delivers seamless functionality and user-friendly interactions.",
  //       buttonText: "What We Do?",
  //       onClick: () => {
  //         navigate("/what-we-do");
  //       },
  //     },
  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: Lottie02,
  //       },
  //     },
  //   },
  //   {
  //     CustomComponent: {
  //       gravity: "low",
  //       title: "Versatile Website Solutions From WordPress to Custom Builds.",
  //       description:
  //         "Embrace versatility with our website solutions. Whether you prefer the ease of WordPress, the flexibility of Wix, or any other website builder, we've got you covered! Our expertise spans across various platforms, ensuring that your website is built using the technology that suits you best, without compromising on quality or creativity.",
  //       buttonText: "Previous Work",
  //       onClick: () => {
  //         navigate("/work");
  //       },
  //     },
  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: Lottie03,
  //       },
  //     },
  //   },
  //   {
  //     CustomComponent: {
  //       gravity: "low",
  //       title: "Harness the Power of SEO & Amplify Your Growth",
  //       description:
  //         "Reach new heights with our SEO Experts team by your side. Boost your website's visibility and attract organic traffic with our data-driven SEO strategies. Watch as your website climbs the search engine ranks and draws in the right audience, ultimately driving business growth and ensuring your online success.",
  //       buttonText: "Unleash SEO Potential",
  //       onClick: () => {
  //         navigate("/start-project");
  //       },
  //     },
  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: SEOLottie,
  //       },
  //     },
  //   },
  //   {
  //     CustomComponent: {
  //       gravity: "low",
  //       title: "Ignite Your Online Presence Through Social Media",
  //       description:
  //         "Unlock the full potential of social media with our expert management team. Engage your audience, build a loyal following, and create meaningful connections with your brand. Our social media wizards will craft captivating content and manage your online presence, helping you take the social media world by storm.",
  //       buttonText: "Elevate Social Presence",
  //       onClick: () => {
  //         navigate("/start-project");
  //       },
  //     },
  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: SocialMediaLottie,
  //       },
  //     },
  //   },
  //   {
  //     CustomComponent: {
  //       gravity: "low",
  //       title: "Unleash Your Business Potential With Ads Campaigns",
  //       description:
  //         "Take your business to the next level with our dynamic ads campaigns. From Google Ads to Facebook and Instagram Ads, our creative team will design compelling ad campaigns that drive results. Increase conversions, expand your reach, and witness the power of strategic advertising for your business.",
  //       buttonText: "Ignite Your Ads Campaign",
  //       onClick: () => {
  //         navigate("/start-project");
  //       },
  //     },
  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: AdsCampaignLottie,
  //       },
  //     },
  //   },
  //   {
  //     CustomComponent: {
  //       gravity: "low",
  //       title: "Client Love: Hear What Our Clients Say",
  //       description:
  //         "Our success is measured by the satisfaction of our clients. Discover what our previous partners have to say about their experience with The Web Navigators. We take pride in delivering exceptional results and building lasting relationships, and our clients' testimonials speak volumes about the dedication and excellence we bring to every project.",
  //     },
  //     MediaComponent: {
  //       mediaType: "lottie",
  //       lottieOptions: {
  //         loop: true,
  //         autoplay: true,
  //         animationData: ReviewsLottie,
  //       },
  //     },
  //   },
  //   // Add more grid data objects as needed
  // ];

  return (
    <>
      <Banner
        spanText="Navigating the Web's Waves with Ease"
        h1Text="Welcome To The Web Navigators"
        pText="Welcome to The Web Navigators, where we bring your digital dreams to life with a dedicated team, empowering your brand online."
        buttonLabel="Get Started"
        onClickfunction={() => { alert("hi") }}
        lottieData={Lottie01} // Pass your Lottie data here
      />
      <ExpertiseSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}
