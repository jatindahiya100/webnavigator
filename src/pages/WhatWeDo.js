import React from 'react'
// Components Imports
import ComponentGrid from '../components/ComponentGrid';
import CustomComponent from '../components/CustomComponent'
import MediaComponent from '../components/MediaComponent'
// Images Import
import WebDesignCover from '../assets/images/what-we-do/web-design-cover.png'
import DigitalMarketingCover from '../assets/images/what-we-do/digital-marketing-cover.jpg'
import HostingCover from '../assets/images/what-we-do/hosting-cover.png'

export default function WhatWeDo() {
  const gridData = [
    {
      CustomComponent: {
        title: "Web Design and Development",
        description:
          "Custom Website Design: Tailored designs to represent your brand and meet your specific needs.\nResponsive Web Development: Creating websites that adapt to various devices and screen sizes.\nE-commerce Solutions: Building online stores with secure payment gateways and user-friendly interfaces.\nContent Management Systems (CMS): Implementing systems like WordPress, Joomla, or Drupal for easy website management.\nWebsite Maintenance: Ensuring your website stays up-to-date, secure, and optimized for peak performance.",
        listItems: [
          "Custom Website Design: Tailored designs to represent your brand and meet your specific needs.",
          "Responsive Web Development: Creating websites that adapt to various devices and screen sizes.",
          "E-commerce Solutions: Building online stores with secure payment gateways and user-friendly interfaces.",
          "Content Management Systems (CMS): Implementing systems like WordPress, Joomla, or Drupal for easy website management.",
          "Website Maintenance: Ensuring your website stays up-to-date, secure, and optimized for peak performance.",
        ],
        buttonText: "Let's Begin Your Journey",
        onClick: () => {
          alert("hi from CustomComponent 1");
        },
      },
      MediaComponent: {
        mediaType: "image",
        imageUrl: WebDesignCover,
      },
    },
    {
      CustomComponent: {
        title: "Digital Marketing",
        description:
          "Paid Advertising (PPC): Creating and managing effective pay-per-click campaigns to drive targeted traffic.\nSearch Engine Optimization (SEO): Optimizing websites to improve search engine rankings and organic visibility.\nSocial Media Marketing: Leveraging social platforms to engage with audiences and build brand awareness.\nEmail Marketing: Crafting compelling email campaigns to nurture leads and drive conversions.\nAnalytics and Conversion Tracking: Monitoring and analyzing website data to enhance marketing strategies.",
        listItems: [
          "Paid Advertising (PPC): Creating and managing effective pay-per-click campaigns to drive targeted traffic.",
          "Search Engine Optimization (SEO): Optimizing websites to improve search engine rankings and organic visibility.",
          "Social Media Marketing: Leveraging social platforms to engage with audiences and build brand awareness.",
          "Email Marketing: Crafting compelling email campaigns to nurture leads and drive conversions.",
          "Analytics and Conversion Tracking: Monitoring and analyzing website data to enhance marketing strategies.",
        ],
        buttonText: "Digital Marketing Services",
        onClick: () => {
          alert("hi from CustomComponent 2");
        },
      },
      MediaComponent: {
        mediaType: "image",
        imageUrl: DigitalMarketingCover,
      },
    },
    {
      CustomComponent: {
        title: "Domain and Hosting Services",
        description:
          "Domain Registration: Assisting clients in finding and registering suitable domain names for their websites.\nWeb Hosting: Providing reliable hosting solutions with optimal server performance and security.\nSSL Certificates: Ensuring secure data transmission with SSL certificates for enhanced trust.",
        listItems: [
          "Domain Registration: Assisting clients in finding and registering suitable domain names for their websites.",
          "Web Hosting: Providing reliable hosting solutions with optimal server performance and security.",
          "SSL Certificates: Ensuring secure data transmission with SSL certificates for enhanced trust.",
        ],
        buttonText: "Explore Domain and Hosting",
        onClick: () => {
          alert("hi from CustomComponent 3");
        },
      },
      MediaComponent: {
        mediaType: "image",
        imageUrl: HostingCover,
      },
    },
    // Add more grid data objects as needed
  ];



  const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );

  return (
    <>
      <ComponentGrid>
        {gridData.map((item, index) => (
          <React.Fragment key={index}>
            {isMobileDevice ? (
              // Render CustomComponent and MediaComponent in the same order for mobile devices
              <>
                <CustomComponent {...item.CustomComponent} />
                <MediaComponent {...item.MediaComponent} />
              </>
            ) : (
              // Alternate the order of rendering for non-mobile devices
              index % 2 === 0 ? (
                <>
                  <CustomComponent {...item.CustomComponent} />
                  <MediaComponent {...item.MediaComponent} />
                </>
              ) : (
                <>
                  <MediaComponent {...item.MediaComponent} />
                  <CustomComponent {...item.CustomComponent} />
                </>
              )
            )}
          </React.Fragment>
        ))}
      </ComponentGrid>
    </>
  );
}
