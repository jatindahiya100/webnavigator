import React from 'react'
import Grid from '../components/Grid';
import HireLottie from '../assets/images/Lottie/Hire-Lottie-01.json';

export default function Hire() {
    const gridData = [
        {
            index: 0,
            heading: "Ready to Get Started? Shoot Us a Chat!",
            text: "Are you in need of top-notch digital solutions for your business? Look no further! At Web Navigator, we are committed to crafting digital experiences that drive success for your brand. Whether you require a stunning custom website, an SEO strategy that boosts your online presence, captivating social media management, or powerful ads campaigns, we've got you covered.",
            btnText: "Get in Touch",
            handleBtnClick: () => {
                window.tidioChatApi.show();
                window.tidioChatApi.open();
            },
            imageType: "Lottie",
            imageUrl: HireLottie,
            gridBg: "#FFFFFF"
        },
        {
            index: 1,
            heading: "Hire Us on Upwork for Secure Payments and More!",
            text: "Why Upwork?",
            // list: ["Secure Payments: Reliable and worry-free transactions on Upwork.", "Verified Reviews: Authentic client feedback for quality assurance.", "Escrow Protection: Ensured fairness through milestone-based payments.", "Time-Tracking: Transparent progress monitoring with Upwork's feature."],
            btnText: "Get in Touch",
            handleBtnClick: () => {
                window.tidioChatApi.show();
                window.tidioChatApi.open();
            },
            imageType: "Lottie",
            imageUrl: HireLottie,
            gridBg: "#FFFFFF"
        },
        // Add more grid data objects as needed
    ];

    return (
        <>
            <Grid gridData={gridData[0]} />

            <Grid gridData={gridData[1]} />
        </>
    )
}
