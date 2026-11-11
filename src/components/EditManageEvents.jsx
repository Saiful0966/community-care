"use client";
import React, { useState } from "react";
import {
  Edit,
  Type,
  MapPin,
  Image as ImageIcon,
  PlusCircle,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EditManageEvents = ({ event }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const organizerEmail = session?.user?.email || "";

  const [title, setTitle] = useState(event?.title || "");
  const [eventType, setEventType] = useState(event?.eventType || "Donation");
  const [eventDate, setEventDate] = useState(event?.eventDate || "");
  const [location, setLocation] = useState(event?.location || "");
  const [imageUrl, setImageUrl] = useState(event?.imageUrl || "");
  const [description, setDescription] = useState(event?.description || "");

  // Quick photo presets
  const photoPresets = {
    Donation:
      "https://plus.unsplash.com/premium_photo-1683121341746-defea7bfc148?q=80&w=1632&auto=format&fit=crop",
    "Winter Clothes":
      "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=1170&auto=format&fit=crop",
    "Blanket Relief":
      "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=1170&auto=format&fit=crop",
    Cleanup:
      "https://images.unsplash.com/photo-1758599668509-60f367e8fa16?q=80&w=1932&auto=format&fit=crop",
    "Tree Plantation":
      "https://plus.unsplash.com/premium_photo-1681140560745-db9be86fa713?q=80&w=687&auto=format&fit=crop",
    "Food Drive":
      "https://plus.unsplash.com/premium_photo-1683121611041-b2a4cee2dad4?q=80&w=1170&auto=format&fit=crop",
    "Health Camp":
      "https://images.unsplash.com/photo-1659718282962-452648b6eba6?q=80&w=1170&auto=format&fit=crop",
    Education:
      "https://images.unsplash.com/photo-1589087394593-e1f8a7d30fed?q=80&w=1167&auto=format&fit=crop",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      title,
      eventType,
      eventDate,
      location,
      imageUrl,
      description,
      organizerEmail,
    };

    try {
      const token = await getTokenFromClient();
      const response = await fetch(
        `http://localhost:5000/manage-events/${event._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(eventData),
        },
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Event successfully updated!");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(
          "Failed to update event: " + (result.message || "Unknown error"),
        );
      }
    } catch (error) {
      console.error("Error updating form:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <button
              type="button"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          }
        />

        <DialogContent className="sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Event Details</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                Event Title <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                  <Type size={18} />
                </span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50 text-gray-700"
                >
                  <option value="Donation">Donation</option>
                  <option value="Winter Relief">Winter Relief</option>
                  <option value="Blanket Relief"> Blanket Relief </option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Tree Plantation">Tree Plantation</option>
                  <option value="Food Drive">Food Drive</option>
                  <option value="Health Camp">Health Camp</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                  Event Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50 text-gray-700"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                  <MapPin size={18} />
                </span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                Image URL <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                  <ImageIcon size={18} />
                </span>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50"
                  required
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-500">
                <span className="font-medium text-gray-600">
                  Quick photo presets:
                </span>
                {Object.keys(photoPresets).map((presetName, index) => (
                  <React.Fragment key={presetName}>
                    {index > 0 && <span>•</span>}
                    <button
                      type="button"
                      onClick={() => setImageUrl(photoPresets[presetName])}
                      className="text-emerald-600 hover:underline font-medium"
                    >
                      {presetName}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain the purpose of the drive..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-gray-50/50 resize-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50/80 text-sm">
              <span className="text-gray-600 font-medium">
                Organizer Email attached:
              </span>
              <span className="font-semibold text-gray-900">
                {organizerEmail || "Loading..."}
              </span>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#0d826a] hover:bg-[#0b6b57] text-white font-medium py-3.5 px-6 rounded-xl transition shadow-sm text-sm"
            >
              <PlusCircle size={18} />
              Update Event
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditManageEvents;
