
import React from 'react';
import { TruckIcon, ArrowPathIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

const OurPolicy = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Exchange Policy */}
                <div className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-4 bg-indigo-100 rounded-full">
                            <ArrowPathIcon className="h-12 w-12 text-indigo-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Easy Exchange
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Hassle-free exchanges within 30 days
                        </p>
                    </div>
                </div>

                {/* Return Policy */}
                <div className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-4 bg-green-100 rounded-full">
                            <TruckIcon className="h-12 w-12 text-green-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Free Returns
                        </h3>
                        <p className="text-gray-600 text-lg">
                            7-day free return policy, no questions asked
                        </p>
                    </div>
                </div>

                {/* Support Policy */}
                <div className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-4 bg-blue-100 rounded-full">
                            <LifebuoyIcon className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            24/7 Support
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Round-the-clock customer assistance
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPolicy;