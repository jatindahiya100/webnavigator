import React from 'react';

const StatsCard = () => {
    return (
        <div className="container mx-auto px-4 sm:px-0 overflow-hidden">
            <div className="border-2 rounded-lg p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-slate-900 text-center mt-12" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Trusted by businesses worldwide</h3>
                <p className='text-center text-slate-500' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">We're proud to share our achievements in serving clients,
                    completing projects, and growing our dedicated team.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
                    {/* Client Stats Card */}
                    <div className="p-6 rounded-lg text-center bg-slate-100 transition duration-300 transform hover:scale-105" data-aos="zoom-out-left">
                        <div className="text-3xl font-bold mt-2 text-slate-900">20+</div>
                        <div className="text-sm font-bold text-gray-500">Clients</div>
                    </div>

                    {/* Projects Completed Stats Card */}
                    <div className="p-6 rounded-lg text-center bg-slate-100 transition duration-300 transform hover:scale-105" data-aos="zoom-out-left">
                        <div className="text-3xl font-bold mt-2 text-slate-900">13+</div>
                        <div className="text-sm font-bold text-gray-500">Projects Completed</div>

                    </div>

                    {/* Team Members Stats Card */}
                    <div className="p-6 rounded-lg text-center bg-slate-100 transition duration-300 transform hover:scale-105" data-aos="zoom-out-left">
                        <div className="text-3xl font-bold mt-2 text-slate-900">5+</div>
                        <div className="text-sm font-bold text-gray-500">Team Members</div>

                    </div>

                    {/* Countries Stats Card */}
                    <div className="p-6 rounded-lg text-center bg-slate-100 transition duration-300 transform hover:scale-105" data-aos="zoom-out-left">
                        <div className="text-3xl font-bold mt-2 text-slate-900">30k+</div>
                        <div className="text-sm font-bold text-gray-500">Revenue</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
