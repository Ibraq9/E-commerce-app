
import React from "react";
import Title from "../Components/Title";
import { SparklesIcon, TruckIcon, TagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Title text1={'About '} text2={'Us'} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={assets.logo}
              alt="About Us"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Since <span className="text-indigo-600">1999</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to TrendThreads, your ultimate destination for curated fashion that combines
              contemporary style with timeless elegance. We're passionate about delivering looks that
              empower confidence while maintaining exceptional comfort and quality.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <SparklesIcon className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Curated Collections</h3>
                <p className="text-gray-600">Handpicked pieces from global designers</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <TruckIcon className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">2-3 day delivery on all orders</p>
              </div>
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-6">
                We meticulously source sustainable materials and partner with ethical manufacturers
                to bring you fashion that feels good inside and out. Every stitch tells a story of
                craftsmanship and care.
              </p>
              <div className="flex items-center gap-4 text-indigo-600">
                <TagIcon className="h-6 w-6" />
                <span className="font-medium">100% Price Match Guarantee</span>
                <HeartIcon className="h-6 w-6 ml-4" />
                <span className="font-medium">Made with Love</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">24+</div>
            <div className="text-gray-600">Years in Fashion</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">500K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">50+</div>
            <div className="text-gray-600">Designer Brands</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">150+</div>
            <div className="text-gray-600">Global Partners</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;




