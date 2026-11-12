
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { authClient } from "@/lib/auth-client";
import {
  Sparkles,
  Search,
  PlusCircle,
  MapPin,
  Calendar,
  Tag,
  LayoutGrid,
  HeartHandshake,
  Trash2,
  Trees,
  CloudSnow,
  Utensils,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

const UpcomingEventspage = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Date format
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

   

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       const { data } = await authClient.token();
  //       const token = data?.token;

  //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-events`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "authorization": `Bearer ${token}`, 
  //         },
  //       });
  //       const result = await res.json();
  //       setEvents(result);
  //     } catch (err) {
  //       console.error("Error fetching events:", err);
  //     }
  //   }

  //   fetchEvents();
  // }, []);

  useEffect(() => {
  async function fetchEvents() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upcoming-events`
      );

      const result = await res.json();

      if (res.ok && Array.isArray(result)) {
        setEvents(result);
      } else {
        console.error("Failed to fetch events:", result);
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    }
  }

  fetchEvents();
  }, []);


  // Categories list with icons
  const categories = [
    { name: "All", icon: <LayoutGrid size={15} /> },
    { name: "Donation", icon: <HeartHandshake size={15} /> },
    { name: "Cleanup", icon: <Trash2 size={15} /> },
    { name: "Plantation", icon: <Trees size={15} /> },
    { name: "Winter Relief", icon: <CloudSnow size={15} /> },
    { name: "Food Drive", icon: <Utensils size={15} /> },
    { name: "Health Camp", icon: <Stethoscope size={15} /> },
    { name: "Education", icon: <GraduationCap size={15} /> },
  ];

  // Filtered events
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" ||
      event.eventType?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === "" ||
      event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner & Header Section */}
        <div
          className="rounded-3xl shadow-sm border border-emerald-200/60 p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          style={{ backgroundColor: "#c6ebe1" }}
        >
          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 text-emerald-900 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
              <Sparkles size={14} className="text-emerald-700" />
              Future Community Drives
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Upcoming Events
            </h1>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              Be part of verified volunteer initiatives, scheduled for upcoming
              dates. <br />
              Past events are automatically excluded <br />
              so you can focus on active drives that need your support.
            </p>
          </div>

          {/* Banner image */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-end z-10">
            <div className="relative w-full h-[180px]">
              <Image
                src="/banner-img2.png"
                alt="Upcoming Events Banner"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition shadow-sm ${
                selectedCategory === cat.name
                  ? "bg-[#0d826a] text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar & Create Event Button */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-3 flex items-center gap-3 flex-1 w-full">
            <Search size={18} className="text-gray-400 ml-2" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events or areas..."
              className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
            />
          </div>

          <Link
            href="/create-event"
            className="inline-flex items-center justify-center gap-2 bg-[#0d826a] hover:bg-[#0b6b57] text-white px-6 py-3.5 rounded-2xl font-medium text-sm transition shadow-sm whitespace-nowrap w-full sm:w-auto"
          >
            <PlusCircle size={18} />
            Create Event →
          </Link>
        </div>

        {/* Event Cards */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">
              No events found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition relative"
              >
                <div>
                  {/* Image */}
                  <div className="relative w-full h-52 bg-gray-100">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />

                    <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 text-xs font-medium text-white bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                      <Tag size={12} className="text-emerald-300" />
                      {event.eventType}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-1">
                      {event.title}
                    </h3>

                    {/* Location */}
                    <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      {event.location}
                    </p>

                    {/* Date  */}
                    <p className="text-xs text-gray-400 mb-4 flex items-center gap-1">
                      <Calendar size={13} className="text-gray-400" />
                      {formatDate(event.eventDate)}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Details Button */}
                <div className="p-5 pt-0">
                  <Link href={`/upcoming-events/${event._id}`}>
                    <button className="w-full bg-[#0d826a] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#0b6b57] transition">
                      View Event →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventspage;