import React from 'react'
// Lottie Imports
import { useEffect } from 'react';
import Banner from '../components/Banner';

export default function Hire() {
    useEffect(() => {
        document.title = "The Web Navigators | Start Project";
    }, [])

    return (
        <>
            <Banner/>
        </>
    );
}
