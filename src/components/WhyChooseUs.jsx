
import React from 'react';
import { Users, Calendar, Heart, Leaf } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="w-full py-17 bg-gradient-to-b from-[#eaf8f8]/60 via-[#f0fbfb]/40 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Community-Care Can Make A Difference
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We connect passionate people with meaningful opportunities to serve their communities and create lasting change.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1 */}
            <div className="bg-white/80 border border-emerald-100/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Join Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect with like-minded people and be part of a growing community.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 border border-emerald-100/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Find Events</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover local events that match your interests and skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 border border-emerald-100/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Make Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contribute to real change in your neighborhood and beyond.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/80 border border-emerald-100/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Build a Better Future</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Together we can create a cleaner, healthier and more sustainable world.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}