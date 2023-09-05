import React from 'react';
import Lottie from 'lottie-react';
import SocialMediaLottie from '../assets/images/Lottie/Social-Media-Lottie-01.json';

const WorkflowCard = ({ icon, title, description }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-opacity-10 backdrop-blur-lg bg-gradient-to-r from-white via-gray-100 to-white">
            <span className="text-sm font-bold text-blue-600 text-left">{title}</span>
            <p className="text-lg text-slate-700 mt-4">{description}</p>
        </div>
    );
};

const WorkflowComponent = () => {
    return (
        <section className="bg-[url(./assets/images/bg-gradient.png)] bg-cover bg-no-repeat bg-center min-h-screen flex items-center py-12 px-6 max-w-7xl mx-auto rounded-2xl mt-12">
            <div className="container mx-auto">
                <span className="text-lg font-bold text-blue-600">
                    How We'll Help You?
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize mt-4 mb-8">
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
                        <h2 className="text-xl font-bold mb-6">Our Workflow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <WorkflowCard title="Web Development" description="We create custom websites tailored to your business needs." />

                            <WorkflowCard title="Web Analysis and Fix" description="We analyze and fix issues on your website to improve performance." />

                            <WorkflowCard title="Social Media Profile Analysis" description="We evaluate and optimize your social media profiles for better engagement." />

                            <WorkflowCard title="Google Business Profile" description="We help you register and improve your Google Business Profile for better online visibility." />

                            <WorkflowCard title="Paid Ads Campaign" description="We create and manage targeted paid advertising campaigns to reach potential customers and increase your earnings." />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowComponent;
