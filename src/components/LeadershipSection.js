import React from 'react';

const LeadershipSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Meet the dedicated individuals who lead our team to success. Their expertise and leadership drive our company forward, ensuring that we deliver the best products and services to our customers.</p>
                </div>
                <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQHksx-XVgjPBA/profile-displayphoto-shrink_400_400/0/1693050106033?e=1699488000&v=beta&t=oP5ZY-Yo9dv-QyUiB-16Ji8V9oh0pacGTzCqAdapj8s" alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Jatin Dahiya</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Founder / Developer</p>
                            </div>
                        </div>
                    </li>

                    {/* Additional people */}
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/C4E03AQGFUbtKjjyM6w/profile-displayphoto-shrink_800_800/0/1635584386676?e=1699488000&v=beta&t=NePJTgl4GBupyW6zmhd3zOc5tdOKT7bPxg0fDxfDU5E" alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Shubhangi Gupta</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Developer</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/C5603AQEIrdURlO12hw/profile-displayphoto-shrink_800_800/0/1630053000638?e=1699488000&v=beta&t=A4ZKvsobw4Z94lRbGs98QD-eV0C4rNCo0KfSMfRQBH4" alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Simran Ahitaan</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">UI Designer</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFRVvvpr_rC8Q/profile-displayphoto-shrink_400_400/0/1680177162024?e=1699488000&v=beta&t=b8ge9y22SaygKZ0WuyRJ1sh55kfIe1VoZ9hAJEYTG8I" alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Saurabh Sharma</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Marketing Head</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default LeadershipSection;
