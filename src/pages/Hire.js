import React from 'react'
// Components Imports
import ComponentGrid from '../components/ComponentGrid';
import CustomComponent from '../components/CustomComponent'
import MediaComponent from '../components/MediaComponent'
// Lottie Imports
import ChatLottie from '../assets/images/Lottie/Chat-Lottie-01.json';
import { useEffect } from 'react';

export default function Hire() {
    useEffect(() => {
        document.title = "The Web Navigators | Start Project";
    }, [])

    const gridData = [
        {
            CustomComponent: {
                gravity: "heavy",
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
