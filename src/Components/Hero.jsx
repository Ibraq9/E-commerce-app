
import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden bg-gray-900">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-r from-gray-900/95 to-gray-800/80">
                    <div className="w-full h-full bg-[url('assets\My_assets\background.jpg')] bg-cover bg-center mix-blend-overlay" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Title Section */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-white/50" />
                        <h1 className="font-medium text-white text-4xl md:text-6xl tracking-wide">
                            Latest Fashion
                        </h1>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <h1 className="font-medium text-white text-4xl md:text-6xl tracking-wide">
                            BestSellers
                        </h1>
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-white/50" />
                    </div>
                </div>

                {/* Button with animated underline */}
                <NavLink to="/Collections">
                    <button className="group relative text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300">
                        Shop Now
                        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                </NavLink>

                {/* Animated scroll indicator */}
                <div className="absolute bottom-8 animate-bounce">
                    <div className="w-8 h-14 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-scroll" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;