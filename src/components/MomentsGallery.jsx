
"use client";

import { useEffect, useState } from "react";
import { ImageIcon, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

export default function GallerySection() {
  const [events, setEvents] = useState([]);

 // GallerySection.
useEffect(() => {
  async function fetchGallery() {
    try {
      const token = await getTokenFromClient();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery-events`, {
        headers: {
          "Content-Type": "application/json",
          ...(token && { "authorization": `Bearer ${token}`}),
        },
      });
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchGallery();
}, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Section  */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
            <ImageIcon size={16} />
            <span>OUR GALLERY</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Moments That Inspire
          </h2>

          <p className="text-slate-500 mt-1">
            Real people. Lasting impact.
          </p>
        </div>

        <Link
          href="/upcoming-events"
          className="hidden sm:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
        >
          Upcoming Events
          <ArrowRight size={17} />
        </Link>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <div
            key={event._id}
            className="relative h-64 rounded-2xl overflow-hidden group"
          >
            {/*  Image */}
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

            {/* Title & Location */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-lg font-bold">
                {event.title}
              </h3>

              <div className="flex items-center gap-1 mt-1 text-sm text-white/90">
                <MapPin size={15} className="text-emerald-300" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


