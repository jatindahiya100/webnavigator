import React from 'react'
// Lottie Imports
import ChatLottie from '../assets/images/Lottie/Chat-Lottie-01.json';
// Components Imports
import SEO from '../components/SEO';
import Banner from '../components/Banner';

export default function StartProject() {
    // Define dynamic SEO data for this page
    const pageTitle = 'Start Project';
    const pageDescription = "Start your project with The Web Navigators. We specialize in web solutions that drive success. Let's create something amazing together!";
    const canonicalURL = 'https://www.thewebnavigators.com/start-project';

    return (
        <>
            <SEO title={pageTitle} description={pageDescription} canonicalUrl={canonicalURL} />
            <Banner
                spanText="Let's Get Started!"
                h1Text="Got some Idea. Let's Discuss"
                pText="We're here to help you bring your vision to life. Click the button below to initiate a chat with our experts and discuss your project."
                buttonLabel="Start a Conversation"
                onClickfunction={() => {
                    window.tidioChatApi.show();
                    window.tidioChatApi.open();
                }}
                lottieData={ChatLottie}
            />
        </>
    );
}
