import React from 'react'
import '../assets/css/Banner.css'
import Lottie from 'lottie-react';
import Lottie01 from '../assets/images/Lottie/Landing-Page_Lottie-01.json';

export default function Banner() {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Lottie01,
    }
    return (
        <div className='h-screen w-full bg-[url(./assets/images/bg-gradient1.jpg)] bg-cover bg-no-repeat bg-center'>
            <section className='max-w-screen-xl  mx-auto my-0 h-full grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='flex flex-col gap-y-8'>
                    <span className='text-lg font-bold text-blue-600'>Navigating the Web's Waves with Ease</span>
                    <h1 className='text-7xl font-extrabold capitalize'>Welcome To The Web Navigators</h1>
                    <p className='text-lg text-slate-700'>Welcome to The Web Navigators, where we bring your digital dreams to life with a dedicated team, empowering your brand online.</p>
                    <div className="call-to-actions">
                        <button className='bg-blue-500 px-6 py-4 rounded-lg text-white'>Get Started</button>
                    </div>
                </div>
                <div>
                    <Lottie animationData={lottieOptions.animationData} />
                </div>
            </section>
        </div>
    )
}
