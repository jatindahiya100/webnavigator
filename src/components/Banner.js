import React from 'react';
import '../assets/css/Banner.css';
import Lottie from 'lottie-react';
import Lottie01 from '../assets/images/Lottie/Landing-Page_Lottie-01.json';

export default function Banner() {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Lottie01,
    };

    return (
        <div className='bg-[url(./assets/images/bg-gradient1.jpg)] bg-cover bg-no-repeat bg-center min-h-screen flex items-center'>
            <section className='max-w-screen-xl mx-auto p-4 sm:p-8'>
                <div className='grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2'>
                    <div className='text-center sm:text-left'>
                        <span className='text-lg font-bold text-blue-600'>
                            Navigating the Web's Waves with Ease
                        </span>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize mt-4'>
                            Welcome To The Web Navigators
                        </h1>
                        <p className='text-lg text-slate-700 mt-4'>
                            Welcome to The Web Navigators, where we bring your digital dreams
                            to life with a dedicated team, empowering your brand online.
                        </p>
                        <div className='mt-6'>
                            <button className='bg-blue-500 px-6 py-4 rounded-lg text-white'>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 md:mt-0'>
                        <Lottie animationData={lottieOptions.animationData} />
                    </div>
                </div>
            </section>
        </div>
    );
}
