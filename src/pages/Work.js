import React from 'react'
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../assets/images/project/Clearbit.png'
import Compressor from '../assets/images/project/Compressor-io.png'
import Proper from '../assets/images/project/Proper.png'
import LuxyHair from '../assets/images/project/Luxy-Hair.png'
import JPLewis from '../assets/images/project/JP-Lewis-Group.png'
import customDashboardUI from '../assets/images/project/customDashboardUI.png'
import TwoColumnGrid from '../components/TwoColumnGrid';
import Card from '../components/Card'; // Assuming the Card component is imported here
import { useEffect } from 'react'

const Work = () => {
  useEffect(() => {
    document.title = "The Web Navigators | Previous Work";
  }, [])
  const cardData = [
    {
      imageSrc: SideBird,
      heading: 'SideBird - The Future Twitter',
      description: 'Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.',
      buttonText: 'Visit Site',
      websiteUrl: 'https://www.sidebird.io/'
    },
    {
      imageSrc: ClearBit,
      heading: 'Clearbit - Data Enrichment.',
      description: 'Clearbit is a data enrichment platform that provides business intelligence and contact information for companies and individuals. The platform uses advanced algorithms and data sources to gather and organize data on millions of businesses and professionals worldwide.',
      buttonText: 'Visit Site',
      websiteUrl: 'https://clearbit.com/'
    },
    {
      imageSrc: Compressor,
      heading: 'Web Image Compression',
      description: 'Compressor.io is a web-based image compression tool designed to reduce the file size of images without compromising their quality significantly. The platform is useful for individuals and web developers who seek to optimize the loading speed of their websites and applications by minimizing image sizes.',
      buttonText: 'Visit Site',
      websiteUrl: 'https://compressor.io/'
    },
    {
      imageSrc: Proper,
      heading: 'Studio Proper  e-commerce',
      description: 'Studio Proper is a leading online retailer offering innovative accessories for mobile devices. They specialize in stylish and functional products like protective cases, mounts, stands, and more, designed to enhance the user experience and keep devices secure.',
      buttonText: 'Visit Site',
      websiteUrl: 'https://www.studioproper.com/'
    },
    {
      imageSrc: LuxyHair,
      heading: 'Luxy Hair - Hair Extensions',
      description: 'Luxy Hair is a leading online retailer known for its high-quality hair extensions. They offer a wide range of extensions made from 100% Remy human hair, ensuring a natural look and exceptional softness. With a user-friendly website, informative resources, and excellent customer service, Luxy Hair is a go-to destination for those looking to enhance their hairstyles and transform their look.',
      buttonText: 'Visit Site',
      websiteUrl: 'https://www.luxyhair.com/'
    },
    {
      imageSrc: JPLewis,
      heading: 'JP LEWIS GROUP, LLC - Landing Page',
      description: 'Designed, Developed, and hosted a landing page for an international cleint:  James Lewis Group LLC. The deliverables were a simple and elegant landing page built with pure HTML, CSS, Javascript.',
      buttonText: 'Visit Site',
      websiteUrl: 'https://jplewisgroup.com/'
    },
    {
      imageSrc: customDashboardUI,
      heading: 'Custom Dashboard UI/UX Design',
      description: 'Client Name: Faizy Jamal. Location: United States (Richmond). Project Summary: Designed and Developed a user-friendly, responsive and eye astounding custom dashboard for his website',
      buttonText: 'Visit Site',
      websiteUrl: 'https://github.com/jatindahiya100/faizy'
    },
    // Add more card data objects as needed
  ];

  return (
    <>
      <TwoColumnGrid>
        {/* Render Card components using cardData */}
        {cardData.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.imageSrc}
            heading={item.heading}
            description={item.description}
            buttonText={item.buttonText}
            websiteUrl={item.websiteUrl}
          />
        ))}
      </TwoColumnGrid>
    </>
  );
};

export default Work;
