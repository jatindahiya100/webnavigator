import React from 'react';

const StatsCard = () => {
    return (
        <div className='container mx-auto'>
            <div className="text-white border-2 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-slate-500">Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-6 rounded-lg text-center">
                        <div className="text-lg font-semibold text-slate-800">Clients</div>
                        <div className="text-3xl font-bold mt-2 text-slate-600">100+</div>
                    </div>
                    <div className="p-6 rounded-lg text-center">
                        <div className="text-lg font-semibold text-slate-800">Projects Completed</div>
                        <div className="text-3xl font-bold mt-2 text-slate-600">200+</div>
                    </div>
                    <div className="p-6 rounded-lg text-center">
                        <div className="text-lg font-semibold text-slate-800">Team Members</div>
                        <div className="text-3xl font-bold mt-2 text-slate-600">20+</div>
                    </div>
                    {/* Add more stat cards as needed */}
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
