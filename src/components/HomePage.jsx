
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full py-8 md:py-10 bg-gradient-to-b from-[#eaf8f8] to-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left side */}
        <div className="flex flex-col items-start">
          
          <div className="flex items-center gap-2 bg-emerald-100/70 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Local People • Real Impact
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Small Actions <br />
            <span className="text-gray-900">Create Big Changes</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-md">
            Join our community-driven platform and be a part of social service
            events. Help those in need, build a cleaner environment, and
            create a better tomorrow — together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/upcoming-events
"
              className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-6 py-3 rounded-full transition shadow-sm text-sm"
            >
              Upcoming Events  <ArrowRight size={18} />
            </Link>

            <Link
              href="/create-event"
              className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium px-6 py-3 rounded-full transition text-sm shadow-sm"
            >
              <Sparkles size={18} className="text-emerald-600" />
              Create an Event
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center">
          <Image
            src="/banner-img.png"
            alt="Community volunteers planting trees"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default HomePage;