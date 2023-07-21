import React from 'react'
import Grid from '../components/Grid';
import ChatLottie from '../assets/images/Lottie/Chat-Lottie-01.json';
import HireOnUpworkLottie from '../assets/images/Lottie/Hire-On-Upwork-Lottie-01.json';
import HowToHireOnUpworkLottie from '../assets/images/Lottie/How-To-Hire-On-Upwork-Lottie-01.json';

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
            imageUrl: ChatLottie,
            gridBg: "#FFFFFF"
        },
        {
            index: 1,
            heading: "Hire Us on Upwork for Secure Payments and More!",
            list: ["Secure Payments: Reliable and worry-free transactions on Upwork.", "Verified Reviews: Authentic client feedback for quality assurance.", "Escrow Protection: Ensured fairness through milestone-based payments.", "Time-Tracking: Transparent progress monitoring with Upwork's feature."],
            btnText: "Hire On Upwork",
            handleBtnClick: () => {
                window.open("https://www.upwork.com/ab/flservices/workwith/jatindahiya");
            },
            imageType: "Lottie",
            imageUrl: HireOnUpworkLottie,
            gridBg: "#F7F6F3"
        },
        {
            index: 2,
            heading: "How to Hire Us on Upwork ?",
            list: ["Visit our Upwork profile by clicking the link below.", "Review our portfolio, client feedback, and the range of services we offer.", "Share your project requirements, and we will promptly respond with a tailored proposal.", "Fund the project securely through Upwork's escrow system.", "Sit back and relax as we bring your digital vision to life!"],
            btnText: "Upwork Profile",
            handleBtnClick: () => {
                window.open("https://www.upwork.com/freelancers/~012d6eb926a1f7a86a");
            },
            imageType: "Lottie",
            imageUrl: HowToHireOnUpworkLottie,
            gridBg: "#FFFFFF"
        },
        // Add more grid data objects as needed
    ];

    return (
        <>
            <Grid gridData={gridData[0]} />
            <Grid gridData={gridData[1]} />
            <Grid gridData={gridData[2]} />
        </>
    )
}
