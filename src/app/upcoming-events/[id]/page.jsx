import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Leaf,
  CheckCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default async function Detailspage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/upcoming-events/${id}`, {
    cache: "no-store",
  });
  const eventData = await res.json();

  if (!eventData) {
    return (
      <div className="p-8 text-center text-xl font-bold">
        Event khuje paoa jayni!
      </div>
    );
  }

  // Ekhane nij theke guidelines type kore dewa holo karon eta database-e nei
  const guidelines = [
    "Arrive 15 minutes before the schedule.",
    "Wear comfortable clothes suitable for physical work.",
    "Bring water bottle and necessary items if requested.",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-slate-50 min-h-screen text-slate-800">
      {/* Back Button */}

      <Link
        href="/upcoming-events"
        className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-4 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Upcoming Events
      </Link>

      {/* Header Banner Image */}
      <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-sm">
        <img
          src={eventData?.imageUrl}
          alt={eventData?.title}
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <Leaf className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-semibold text-slate-800">
            {eventData?.eventType}
          </span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Content Area (2 Columns) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
          {/* Title & Metadata */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {eventData?.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-600 font-medium text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin size={18} className="text-emerald-600" />
                {eventData?.location}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={18} className="text-emerald-600" />
                {eventData?.eventDate}
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              About this Initiative
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {eventData?.description}
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Volunteer Guidelines */}
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900 text-lg mb-4">
              <Leaf className="w-5 h-5 text-emerald-600" />
              Volunteer Guidelines
            </div>
            <ul className="space-y-3">
              {guidelines.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-600"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar Area (1 Column) */}
        <div className="flex flex-col gap-6">
          {/* Action Button */}
          <div className="w-full py-3.5 px-6 rounded-xl font-semibold bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:bg-emerald-700 transition-all">
            <CheckCircle size={20} />
            Joined Event
            <ChevronRight size={18} className="ml-auto" />
          </div>

          {/* Organizer Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Initiative Organizer
            </h3>
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Organizer"
                className="w-14 h-14 rounded-full object-cover border border-slate-200"
              />
              <div className="overflow-hidden">
                <h4 className="text-base font-bold text-slate-900 truncate">
                  {eventData?.organizerEmail
                    ? eventData.organizerEmail.split("@")[0]
                    : "Rony"}
                </h4>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Platform Member
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
