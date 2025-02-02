
import React from 'react';
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Subscribe = () => {
    const submitHandle = (event) => {
        event.preventDefault();
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="max-w-2xl mx-auto text-center">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Join Our Style Club
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get exclusive offers, early access to new collections, and style tips
                    </p>
                </div>

                {/* Subscription Form */}
                <form onSubmit={submitHandle} className="relative max-w-md mx-auto">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <EnvelopeIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                        >
                            Subscribe
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </form>

                {/* Bonus Text */}
                <p className="mt-4 text-sm text-gray-500">
                    *10% off your first order when you subscribe
                </p>
            </div>
        </div>
    )
}

export default Subscribe;