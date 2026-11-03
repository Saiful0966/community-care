"use client";
import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
// import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Leaf,
  CheckCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function Detailspage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/upcoming-events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEventData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event:", err);
        setLoading(false);
      });
  }, [id]);

  const handleJoinedEvent = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login first to join the event!");
      return;
    }

    const volunteerData = {
      name: user?.name || user?.email?.split("@")[0],
      email: user?.email,
      image: user?.image || null,
    };

    try {
      const res = await fetch(
        `http://localhost:5000/upcoming-events/join/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(volunteerData),
        },
      );

      const result = await res.json();
      if (res.ok) {
        toast.success("Successfully joined the event!");
        setEventData((prev) => ({
          ...prev,
          volunteers: [...(prev.volunteers || []), volunteerData],
        }));
      } else {
        toast.error(result.message || "Failed to join event");
      }
    } catch (error) {
      console.error("Error joining event:", error);
      toast.error("Something went wrong!");
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-xl font-bold">Loading...</div>;
  }

  if (!eventData) {
    return (
      <div className="p-8 text-center text-xl font-bold">
        Event khuje paoa jayni!
      </div>
    );
  }

  const guidelines = [
    "Arrive 15 minutes before the schedule.",
    "Wear comfortable clothes suitable for physical work.",
    "Bring water bottle and necessary items if requested.",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-slate-50 min-h-screen text-slate-800">
      <Toaster position="top-center" reverseOrder={false} />

      <Link
        href="/upcoming-events"
        className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-4 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Upcoming Events
      </Link>

      <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-sm">
        <img
          src={eventData?.imageUrl}
          alt={eventData?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <Leaf className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-semibold text-slate-800">
            {eventData?.eventType}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
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

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              About this Initiative
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {eventData?.description}
            </p>
          </div>

          <hr className="border-slate-100" />

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

        <div className="flex flex-col gap-6">
          <button
            onClick={handleJoinedEvent}
            className="w-full py-3.5 px-6 rounded-xl font-semibold bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:bg-emerald-700 transition-all"
          >
            <CheckCircle size={20} />
            <span>Joined Event</span>
            <ChevronRight size={18} className="ml-auto" />
          </button>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 w-full text-left">
              Initiative Organizer
            </h3>

            {user?.image ? (
              <img
                src={user.image}
                alt="User"
                className="w-14 h-14 rounded-full object-cover border border-slate-200 mb-3"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-3 uppercase shadow-sm">
                {user?.name
                  ? user.name.charAt(0)
                  : user?.email
                    ? user.email.charAt(0)
                    : "U"}
              </div>
            )}

            <div className="w-full">
              <h4 className="text-base font-bold text-slate-900 truncate">
                {user?.name ||
                  (user?.email ? user.email.split("@")[0] : "Not Logged In")}
              </h4>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                {user?.email || "Please login to continue"}
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 font-medium mt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Platform Member
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Confirmed Volunteers ({eventData?.volunteers?.length || 0})
            </h3>
            <div className="space-y-3">
              {eventData?.volunteers && eventData.volunteers.length > 0 ? (
                eventData.volunteers.map((vol, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {vol.image && !vol.image.includes("pravatar") ? (
                      <img
                        src={vol.image}
                        alt={vol.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold uppercase shadow-sm shrink-0">
                        {vol.name ? vol.name.charAt(0) : "V"}
                      </div>
                    )}
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {vol.name}
                      </h4>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500">
                  Ekhono kew join koreni.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
