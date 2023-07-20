import React from 'react'
import Grid from '../components/Grid';
import HireLottie from '../assets/images/Hire-Lottie-01.json';

export default function Hire() {
    const gridData = [
        {
            heading: "Ready to Get Started? Shoot Us a Chat!",
            text: "Are you in need of top-notch digital solutions for your business? Look no further! At Web Navigator, we are committed to crafting digital experiences that drive success for your brand. Whether you require a stunning custom website, an SEO strategy that boosts your online presence, captivating social media management, or powerful ads campaigns, we've got you covered.",
            btnText: "Get in Touch",
            handleBtnClick: () => {
                window.open("")
            }
            ,
            imageType: "Lottie",
            imageUrl: HireLottie,
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
        </>
    )
}
