
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HomePageEventCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/upcoming-events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  // Date 
  const formatDate = (date) => {
    if (!date) return "";

    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header Section  */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-green-600 text-sm font-semibold mb-2">
              UPCOMING INITIATIVES
            </p>

            <h2 className="text-3xl font-bold">
              Recent Upcoming Events
            </h2>

            <p className="text-gray-500 mt-2">
              Discover community events and make a positive impact.
            </p>
          </div>

          <Link
            href="/upcoming-events"
            className="text-green-600 font-semibold hover:underline"
          >
            View All Events →
          </Link>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Event Image */}
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold mb-3">
                  {event.title}
                </h3>

                {/* Location */}
                <p className="text-sm text-gray-500 mb-2">
                  📍 {event.location}
                </p>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-3">
                  📅 {formatDate(event.eventDate)}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5 line-clamp-2">
                  {event.description}
                </p>

                {/* Details Button */}
                <Link
                  href={`/upcoming-events/${event._id}`}
                  className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View Event →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageEventCard;