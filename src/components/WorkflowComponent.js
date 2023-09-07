import React from 'react';
import Lottie from 'lottie-react';
import SocialMediaLottie from '../assets/images/Lottie/Social-Media-Lottie-01.json';

const WorkflowCard = ({ icon, title, description }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-opacity-10 backdrop-blur-lg bg-gradient-to-r from-white via-gray-100 to-white" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <span className="text-sm font-bold text-blue-600 text-left">{title}</span>
            <p className="text-lg text-slate-700 mt-4">{description}</p>
        </div>
    );
};

const WorkflowComponent = () => {
    return (
        <div className='conatiner mx-auto min-h-screen mt-20'>
            <section className="bg-[url(./assets/images/bg-gradient.png)] bg-cover bg-no-repeat bg-center min-h-screen flex items-center py-12 px-6 max-w-7xl mx-auto rounded-2xl">
                <div className="container mx-auto">
                    <span className="text-lg font-bold text-blue-600">
                        What We can Do?
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold capitalize mt-4 mb-8 px-4 sm:px-0">
                        We Make Digital Magic Happen
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Left Column */}
                        <div className="col-span-1">
                            {/* Your Lottie animation here */}
                            <Lottie animationData={SocialMediaLottie} />
                        </div>

                        {/* Right Column */}
                        <div className="col-span-1">
                            {/* Text content in the right column */}
                            <h2 className="text-xl font-bold mb-6">Services We Offer</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <WorkflowCard title="Web Design" description="Stunning, user-friendly websites that captivate and convert." />

                                <WorkflowCard title="Web Development" description="Robust web solutions that bring your vision to life." />

                                <WorkflowCard title="SaaS (Software as a Service)" description="Streamlined and scalable software solutions for your business." />

                                <WorkflowCard title="Custom Solutions" description="Tailored technology solutions to meet your unique needs." />

                                <WorkflowCard title="SEO (Search Engine Optimization)" description="Boost online visibility and traffic with expert SEO." />

                                <WorkflowCard title="Paid Ads Management" description="Maximize ROI with targeted ad campaigns." />

                                <WorkflowCard title="Google Business Profile Setup" description="Enhance your local online presence with Google." />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkflowComponent;
