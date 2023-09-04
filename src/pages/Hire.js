import React from 'react'
import { useEffect } from 'react';
// Lottie Imports
import ChatLottie from '../assets/images/Lottie/Chat-Lottie-01.json';
// Components Imports
import Banner from '../components/Banner';

export default function Hire() {
    useEffect(() => {
        document.title = "The Web Navigators | Start Project";
    }, [])

    return (
        <>
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
