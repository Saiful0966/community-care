// import React from 'react';

// const UpcomingEventspage = async () => {
//     const res = await fetch('http://localhost:5000/Upcoming-Events')
//     const data = await res.json()
//     console.log(data)
//     return (
//         <div>

//         </div>
//     );
// };

// export default UpcomingEventspage;

import React from "react";
import Image from "next/image";

const UpcomingEventspage = async () => {
  // ব্যাকএন্ডের সঠিক রুট অনুযায়ী fetch করা হচ্ছে
  const res = await fetch("http://localhost:5000/upcoming-events", {
    cache: "no-store",
  });
  const events = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Upcoming Events
        </h1>

        {/* Dynamic Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {event.eventType}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  📍 {event.location}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  📅 {event.eventDate}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {event.description}
                </p>
                <button className="w-full bg-[#0d826a] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#0b6b57] transition">
                  View Event →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventspage;
