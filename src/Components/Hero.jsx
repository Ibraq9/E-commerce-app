import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden bg-gray-900 text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-r from-gray-900/90 to-gray-800/80">
                    <div
                        className="w-full h-full bg-[url('./assets/My_assets/background.jpg')] bg-cover bg-center mix-blend-overlay"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                {/* Title Section */}
                <div className="space-y-4 mb-10">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-white/40" />
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                            Latest Fashion
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                            BestSellers
                        </h1>
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-white/40" />
                    </div>
                </div>

                {/* Call to Action */}
                <NavLink to="/Collections">
                    <button className="relative group mt-4 text-lg font-semibold text-white hover:text-yellow-300 transition-colors duration-300">
                        Shop Now
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </button>
                </NavLink>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 animate-bounce">
                    <div className="w-8 h-14 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
                        <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
