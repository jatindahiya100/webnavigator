import React from 'react';
import Grid from '../components/Grid';
import Lottie01 from '../assets/images/Lottie/Thewebnavigators-Agency-Lottie-01.json';
import Lottie02 from '../assets/images/Lottie/Lottie02.json';
import Lottie03 from '../assets/images/Lottie/Lottie03.json';
import SEOLottie from '../assets/images/Lottie/SEO-Lottie-01.json';
import SocialMediaLottie from '../assets/images/Lottie/Social-Media-Lottie-01.json';
import AdsCampaignLottie from '../assets/images/Lottie/Ads-Campaign-Lottie-01.json';
import ReviewsLottie from '../assets/images/Lottie/Reviews-Lottie-01.json';
import { useNavigate } from 'react-router-dom';
import ClientReviewsSlideshow from '../components/ClientReviewsSlideshow';


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
      btnText: "What We Do?",
      handleBtnClick: () => {
        navigate('/what-we-do');
      },
      imageType: "Lottie",
      imageUrl: Lottie02,
      gridBg: "#F7F6F3"
    },
    {
      index: 2,
      heading: "Versatile Website Solutions From WordPress to Custom Builds.",
      text: "Embrace versatility with our website solutions. Whether you prefer the ease of WordPress, the flexibility of Wix, or any other website builder, we've got you covered! Our expertise spans across various platforms, ensuring that your website is built using the technology that suits you best, without compromising on quality or creativity.",
      btnText: "Previous Work",
      handleBtnClick: () => {
        navigate('/work');
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
        navigate('/start-project');
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
        navigate('/start-project');
      },
      imageType: "Lottie",
      imageUrl: SocialMediaLottie,
      gridBg: "#FFFFFF"
    },
    {
      index: 5,
      heading: "Unleash Your Business Potential With Ads Campaigns",
      text: "Take your business to the next level with our dynamic ads campaigns. From Google Ads to Facebook and Instagram Ads, our creative team will design compelling ad campaigns that drive results. Increase conversions, expand your reach, and witness the power of strategic advertising for your business.",
      btnText: "Ignite Your Ads Campaign",
      handleBtnClick: () => {
        navigate('/start-project');
      },
      imageType: "Lottie",
      imageUrl: AdsCampaignLottie,
      gridBg: "#F7F6F3"
    },
    {
      index: 6,
      heading: "Client Love: Hear What Our Clients Say",
      text: "Our success is measured by the satisfaction of our clients. Discover what our previous partners have to say about their experience with Web Navigators. We take pride in delivering exceptional results and building lasting relationships, and our clients' testimonials speak volumes about the dedication and excellence we bring to every project.",
      btnText: "Read Testimonials",
      handleBtnClick: () => {
        navigate('/start-project');
      },
      imageType: "Lottie",
      imageUrl: ReviewsLottie,
      gridBg: "#FFFFFF"
    },
    // Add more grid data objects as needed
  ];

  const reviewsData = [
    {
      Job: "Find out the payment gateway and processor for a particular website",
      text: "Very fast turnaround, did the job as requested, no issues or problems, would use again",
      author: "Andrew Davies",
    },
    {
      Job: "Full Stack Development",
      text: "I really love the work Jatin has provided. He is offering fast & reliable service. He has good knowledge in building a highly-customized website, and I will be working with him more in the future",
      author: "Yang Henry",
    },
    {
      Job: "Full Stack Development",
      text: "Jatin has done a great job on my full stack development project. My project is really big but he managed to get every step done perfectly. Also he is always full of pashion & his working speed is fast. He has professional skills and knowledge that allow him to finish complicated tasks. I Really enjoy the experience working with him and will continue working with him on the further changes.",
      author: "Yang Henry",
    },
    {
      Job: "To Add Features to Account, Chat System and Upgrade Admin Dashboard",
      text: "Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite.  I would highly recommend hiring him for your project.",
      author: "Yang Henry",
    },
    {
      Job: "HTML , CSS - 2 Pages",
      text: "Jatin Dahiya did exactly what we requested in exactly the right timeframe. Excellent work. A++++",
      author: "Mr. Chalapathi Rao",
    },
    {
      Job: "Create Website Landing Page",
      text: "Excellent work!!!! He gave me exactly what I requested. I am looking forward to using him again in the future🙂",
      author: "James Lewis",
    },
    {
      Job: "Digital Ocean Expert",
      text: "Jatin Dahiya was great! Completed my task really quickly and was very knowledgeable. Highly recommend!",
      author: "Mr. Chalapathi Rao",
    },
    {
      Job: "Build a simple 2-3 pages website with fully responsive",
      text: "I want to thank Jatin, for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with him really took our programming to the next level!! He thinks about problems, finds solutions, and has awesome morale. Great communication, great working skills in outreach, and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his experience is incredibly professional, fast, and reliable. Thank You Again, Faizy Jamal",
      author: "Faizy Jamal",
    },
    {
      Job: "I need a website designer to design my existing website at GoDaddy.",
      text: "Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He's very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website.",
      author: "Caroline Swamidoss",
    },
    {
      Job: "Need help opening a blog",
      text: "Very helpful and very cooperative Thanks Jatin",
      author: "Preeti Bhatia",
    },
    // Add more reviews as needed
  ];

  // 'gridData' is an array containing the data for each Grid component
  const gridComponents = gridData.map((data, index) => (
    <Grid key={index} gridData={data} />
  ));

  return (
    <>
      {gridComponents}
      <ClientReviewsSlideshow reviews={reviewsData} />
      <br /><br /><br />
    </>
  );
}
