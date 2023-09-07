import React from 'react'
import EmailVerification from '../components/EmailVerification';


export default function EmailValidation() {
    return (
        <div className='bg-[url(./assets/images/bg-gradient1.jpg)] bg-cover bg-no-repeat bg-center min-h-screen flex items-center'>
            <section className='max-w-screen-xl mx-auto p-4 sm:p-8'>
                <div className='grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2'>
                    <div className='text-center sm:text-left'>
                        <span className='text-lg font-bold text-blue-600'>Saas by The Web Navigators</span>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize mt-4'>
                            Email Validation Tool;
                            Simple, Fast & Accurate
                        </h1>
                        <p className='text-lg text-slate-700 mt-4'>
                            Validate your email addresses quickly and reliably with our tool. Ensure your email list is accurate and boost your email campaign's success.
                        </p>
                        <div className='mt-6'>
                            <button className='bg-blue-500 px-6 py-4 rounded-lg text-white'>
                                Try It Now
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 md:mt-0 flex items-center justify-center'>
                        <EmailVerification />
                    </div>
                </div>
            </section>
        </div>
    )
}
