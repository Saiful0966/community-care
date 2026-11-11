
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

import {
  CalendarCheck,
  Users,
  MapPin,
  CalendarDays,
  ArrowRight,
  Leaf,
  Search,
  Heart,
  Droplets,
} from "lucide-react";

export default function JoinedEventsPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

   async function fetchJoinedEvents() {
      try {
        const token = await getTokenFromClient();

        const res = await fetch(`http://localhost:5000/joined-events/${user.email}`, {
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchJoinedEvents();
  }, [user?.email]);

  // Date format
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Event type icon
  const getEventIcon = (eventType) => {
    const type = eventType?.toLowerCase();

    if (type?.includes("water")) {
      return <Droplets size={16} className="text-blue-500" />;
    }

    if (type?.includes("donation")) {
      return <Heart size={16} className="text-red-500 fill-red-500" />;
    }

    return <Leaf size={16} className="text-emerald-600" />;
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Banner */}
        <section className="relative overflow-hidden rounded-3xl h-[190px] sm:h-[220px] mb-7">

          {/* banner image */}
          <img
            src="/si-banner.png"
            alt="Community Care Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Banner Text and Icon */}
          <div className="relative z-10 flex items-center h-full px-6 sm:px-16">
            <div className="flex items-center gap-5 sm:gap-6">

              {/* Calendar Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
                <CalendarCheck
                  size={42}
                  className="text-emerald-600 sm:w-12 sm:h-12"
                />
              </div>

              {/* Text */}
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-emerald-950">
                  My Joined Events
                </h1>

                <p className="text-slate-600 mt-2 text-sm sm:text-base">
                  Here are the events you have successfully joined.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Total Events */}
        <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 shadow-sm rounded-full px-4 py-2 mb-5">
          <Users size={18} className="text-emerald-600" />

          <span className="font-semibold text-slate-800">
            Total Events: {events.length}
          </span>
        </div>

        {/* Events Cards */}
        {events.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                {/* Event Image */}
                <div className="relative h-52">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Event Type */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
                    {getEventIcon(event.eventType)}

                    <span className="text-sm font-semibold text-slate-800">
                      {event.eventType}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-slate-900 truncate">
                    {event.title}
                  </h2>

                  <p className="text-slate-500 text-sm mt-1 line-clamp-1">
                    {event.description}
                  </p>

                  {/* Location and Date */}
                  <div className="flex items-center gap-3 text-sm text-slate-600 mt-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={17} className="text-emerald-600" />
                      <span>{event.location}</span>
                    </div>

                    <span className="text-slate-300">|</span>

                    <div className="flex items-center gap-1.5">
                      <CalendarDays
                        size={17}
                        className="text-emerald-600"
                      />
                      <span>{formatDate(event.eventDate)}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="border-t border-slate-100 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users size={16} className="text-emerald-600" />
                    </div>

                    <span className="text-emerald-700 font-medium">
                      Your Role:
                    </span>

                    <span className="text-slate-700">
                      Volunteer
                    </span>
                  </div>

                  <Link
                    href={`/upcoming-events/${event._id}`}
                    className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors rounded-full px-4 py-2 text-sm font-semibold"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Empty State */}
        {events.length === 0 && (
          <section className="mt-5 rounded-3xl bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border border-emerald-100 py-12 px-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-sm">
              <CalendarCheck size={32} className="text-emerald-600" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-4">
              No Joined Events Yet!
            </h2>

            <p className="text-slate-500 mt-2">
              Join some events to be a part of our community initiatives.
            </p>

            <Link
              href="/upcoming-events"
              className="inline-flex items-center gap-2 mt-5 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
            >
              <Search size={17} />
              Explore Upcoming Events
            </Link>
          </section>
        )}

      </div>
    </main>
  );
}