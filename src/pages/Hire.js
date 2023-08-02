import React from 'react'
// Components Imports
import ComponentGrid from '../components/ComponentGrid';
import CustomComponent from '../components/CustomComponent'
import MediaComponent from '../components/MediaComponent'
// Lottie Imports
import ChatLottie from '../assets/images/Lottie/Chat-Lottie-01.json';
import HireOnUpworkLottie from '../assets/images/Lottie/Hire-On-Upwork-Lottie-01.json';
import HowToHireOnUpworkLottie from '../assets/images/Lottie/How-To-Hire-On-Upwork-Lottie-01.json';
import { useEffect } from 'react';

export default function Hire() {
    useEffect(() => {
        document.title = "The Web Navigators | Start Project";
    }, [])

    const gridData = [
        {
            CustomComponent: {
                title: "Ready to Get Started? Shoot Us a Chat!",
                description:
                    "Are you in need of top-notch digital solutions for your business? Look no further! At Web Navigators, we are committed to crafting digital experiences that drive success for your brand. Whether you require a stunning custom website, an SEO strategy that boosts your online presence, captivating social media management, or powerful ads campaigns, we've got you covered.",
                listItems: [],
                buttonText: "Get in Touch",
                onClick: () => {
                    window.tidioChatApi.show();
                    window.tidioChatApi.open();
                },
            },
            MediaComponent: {
                mediaType: "lottie",
                lottieOptions: {
                    loop: true,
                    autoplay: true,
                    animationData: ChatLottie,
                },
            },
        },
        {
            CustomComponent: {
                title: "Hire Us on Upwork for Secure Payments and More!",
                description: "",
                listItems: [
                    "Secure Payments: Reliable and worry-free transactions on Upwork.",
                    "Verified Reviews: Authentic client feedback for quality assurance.",
                    "Escrow Protection: Ensured fairness through milestone-based payments.",
                    "Time-Tracking: Transparent progress monitoring with Upwork's feature.",
                ],
                buttonText: "Hire On Upwork",
                onClick: () => {
                    window.open("https://www.upwork.com/ab/flservices/workwith/jatindahiya");
                },
            },
            MediaComponent: {
                mediaType: "lottie",
                lottieOptions: {
                    loop: true,
                    autoplay: true,
                    animationData: HireOnUpworkLottie,
                },
            },
        },
        {
            CustomComponent: {
                title: "How to Hire Us on Upwork?",
                description: "",
                listItems: [
                    "Visit our Upwork profile by clicking the link below.",
                    "Review our portfolio, client feedback, and the range of services we offer.",
                    "Share your project requirements, and we will promptly respond with a tailored proposal.",
                    "Fund the project securely through Upwork's escrow system.",
                    "Sit back and relax as we bring your digital vision to life!",
                ],
                buttonText: "Upwork Profile",
                onClick: () => {
                    window.open("https://www.upwork.com/freelancers/~012d6eb926a1f7a86a");
                },
            },
            MediaComponent: {
                mediaType: "lottie",
                lottieOptions: {
                    loop: true,
                    autoplay: true,
                    animationData: HowToHireOnUpworkLottie,
                },
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
