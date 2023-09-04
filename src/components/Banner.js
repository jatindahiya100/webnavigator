import React from 'react';
import '../assets/css/Banner.css';
import Lottie from 'lottie-react';

export default function Banner({ spanText, h1Text, pText, buttonLabel, onClickfunction, lottieData }) {
    return (
        <div className='bg-[url(./assets/images/bg-gradient1.jpg)] bg-cover bg-no-repeat bg-center min-h-screen flex items-center'>
            <section className='max-w-screen-xl mx-auto p-4 sm:p-8'>
                <div className='grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2'>
                    <div className='text-center sm:text-left'>
                        {spanText && (
                            <span className='text-lg font-bold text-blue-600'>
                                {spanText}
                            </span>
                        )}
                        {h1Text && (
                            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize mt-4'>
                                {h1Text}
                            </h1>
                        )}
                        {pText && (
                            <p className='text-lg text-slate-700 mt-4'>
                                {pText}
                            </p>
                        )}
                        {buttonLabel && (
                            <div className='mt-6'>
                                <button className='bg-blue-500 px-6 py-4 rounded-lg text-white' onClick={onClickfunction}>
                                    {buttonLabel}
                                </button>
                            </div>
                        )}
                    </div>
                    {lottieData && (
                        <div className='mt-4 md:mt-0'>
                            <Lottie animationData={lottieData} />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
