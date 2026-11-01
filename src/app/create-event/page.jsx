// "use client";
// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import {
//   Sparkles,
//   MapPin,
//   Image as ImageIcon,
//   Type,
//   PlusCircle,
// } from "lucide-react";

// const CreateEventPage = () => {
//   const router = useRouter();
//   const [title, setTitle] = useState("");
//   const [eventType, setEventType] = useState("Donation");
//   const [eventDate, setEventDate] = useState("");
//   const [location, setLocation] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [description, setDescription] = useState("");

//   // user email login
//   const organizerEmail = "";

//   // Quick photo presets
//   const photoPresets = {
//     Donation:
//       "https://plus.unsplash.com/premium_photo-1683121341746-defea7bfc148?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     "Winter Clothes":
//       "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     "Blanket Relief":
//       "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     Cleanup:
//       "https://images.unsplash.com/photo-1758599668509-60f367e8fa16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     "Tree Plantation":
//       "https://plus.unsplash.com/premium_photo-1681140560745-db9be86fa713?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     "Food Drive":
//       "https://plus.unsplash.com/premium_photo-1683121611041-b2a4cee2dad4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     "Health Camp":
//       "https://images.unsplash.com/photo-1659718282962-452648b6eba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     Education:
//       "https://images.unsplash.com/photo-1589087394593-e1f8a7d30fed?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//   };

//   // handleSubmit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const eventData = {
//       title,
//       eventType,
//       eventDate,
//       location,
//       imageUrl,
//       description,
//       organizerEmail,
//     };

//     try {
//       const response = await fetch("http://localhost:5000/add-events", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(eventData),
//       });

//       const result = await response.json();
//       console.log(result);

//       if (response.ok) {
//         toast.success("Event successfully published!");

//         setTitle("");
//         setEventDate("");
//         setLocation("");
//         setImageUrl("");
//         setDescription("");
//       } else {
//         toast.error(
//           "Failed to publish event: " + (result.message || "Unknown error"),
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div>
//       {/* <Toaster position="rigth-center" reverseOrder={false} /> */}
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         toastOptions={{
//           success: {
//             style: {
//               background: "#10b978", // Sabuj (Green) color
//               color: "#fff",
//             },
//             iconTheme: {
//               primary: "#fff",
//               secondary: "#10B981",
//             },
//           },
//           error: {
//             style: {
//               background: "#EF4444", // Lal (Red) color
//               color: "#fff",
//             },
//             iconTheme: {
//               primary: "#fff",
//               secondary: "#EF4444",
//             },
//           },
//         }}
//       />
//       <div className="min-h-screen bg-gradient-to-b from-[#eaf8f8]/60 via-[#f0fbfb]/30 to-white py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-emerald-100/80 p-8 md:p-12">
//           {/* Top Header */}
//           <div className="mb-8">
//             <div className="inline-flex items-center gap-2 bg-emerald-100/70 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
//               <Sparkles size={14} className="text-emerald-600" />
//               Social Service Drive
//             </div>
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//               Create a Community-Care Event
//             </h1>
//             <p className="text-gray-600 text-sm">
//               Organize a local relief effort, environmental cleanup, or
//               community support drive.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Event Title */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
//                 Event Title <span className="text-red-500">*</span>
//               </label>
//               <div className="relative flex items-center">
//                 <span className="absolute left-4 text-gray-400">
//                   <Type size={18} />
//                 </span>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
//                   className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Event Type & Event Date */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Event Type */}
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
//                   Event Type <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   value={eventType}
//                   onChange={(e) => setEventType(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50 text-gray-700"
//                 >
//                   <option value="Donation">Donation</option>
//                   <option value="Winter Relief">Winter Relief</option>
//                   <option value="Blanket Relief"> Blanket Relief </option>
//                   <option value="Cleanup">Cleanup</option>
//                   <option value="Tree Plantation">Tree Plantation</option>
//                   <option value="Food Drive">Food Drive</option>
//                   <option value="Health Camp">Health Camp</option>
//                   <option value="Education">Education</option>
//                 </select>
//               </div>

//               {/* Event Date */}
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
//                   Event Date <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative flex items-center">
//                   <input
//                     type="date"
//                     value={eventDate}
//                     onChange={(e) => setEventDate(e.target.value)}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50 text-gray-700"
//                     required
//                   />
//                 </div>
//                 <p className="text-[11px] text-gray-400 mt-1">
//                   Dates must be in the future (today or later)
//                 </p>
//               </div>
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
//                 Location <span className="text-red-500">*</span>
//               </label>
//               <div className="relative flex items-center">
//                 <span className="absolute left-4 text-gray-400">
//                   <MapPin size={18} />
//                 </span>
//                 <input
//                   type="text"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   placeholder="e.g. Mohammadpur Town Hall, Dhaka"
//                   className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50"
//                   required
//                 />
//               </div>
//             </div>

//             {/*  Image URL */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
//                 Image URL <span className="text-red-500">*</span>
//               </label>
//               <div className="relative flex items-center">
//                 <span className="absolute left-4 text-gray-400">
//                   <ImageIcon size={18} />
//                 </span>
//                 <input
//                   type="url"
//                   value={imageUrl}
//                   onChange={(e) => setImageUrl(e.target.value)}
//                   placeholder="https://images.unsplash.com/photo-..."
//                   className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50"
//                   required
//                 />
//               </div>

//               {/* Quick Presets  */}
//               <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-500">
//                 <span className="font-medium text-gray-600">
//                   Quick photo presets:
//                 </span>
//                 {Object.keys(photoPresets).map((presetName, index) => (
//                   <React.Fragment key={presetName}>
//                     {index > 0 && <span>•</span>}
//                     <button
//                       type="button"
//                       onClick={() => setImageUrl(photoPresets[presetName])}
//                       className="text-emerald-600 hover:underline font-medium"
//                     >
//                       {presetName}
//                     </button>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>

//             {/* Event Description */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
//                 Event Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows={4}
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
//                 className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50 resize-none"
//                 required
//               ></textarea>
//             </div>

//             {/* Organizer Email*/}
//             <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50/80 text-sm">
//               <span className="text-gray-600 font-medium">
//                 Organizer Email attached:
//               </span>
//               <span className="font-semibold text-gray-900">
//                 {organizerEmail}
//               </span>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d826a] hover:bg-[#0b6b57] text-white font-medium py-3.5 px-6 rounded-xl transition shadow-sm text-sm"
//             >
//               <PlusCircle size={18} />
//               Publish Event
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateEventPage;






"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  MapPin,
  Image as ImageIcon,
  Type,
  PlusCircle,
} from "lucide-react";

const CreateEventPage = () => {
  // Router declare kora holo

  const router = useRouter();  

  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("Donation");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  // user email login
  const organizerEmail = "";

  // Quick photo presets
  const photoPresets = {
    Donation:
      "https://plus.unsplash.com/premium_photo-1683121341746-defea7bfc148?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "Winter Clothes":
      "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "Blanket Relief":
      "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    Cleanup:
      "https://images.unsplash.com/photo-1758599668509-60f367e8fa16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "Tree Plantation":
      "https://plus.unsplash.com/premium_photo-1681140560745-db9be86fa713?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "Food Drive":
      "https://plus.unsplash.com/premium_photo-1683121611041-b2a4cee2dad4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "Health Camp":
      "https://images.unsplash.com/photo-1659718282962-452648b6eba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    Education:
      "https://images.unsplash.com/photo-1589087394593-e1f8a7d30fed?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  };

  // handleSubmit
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
      const response = await fetch("http://localhost:5000/add-events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("Event successfully published!");

        setTitle("");
        setEventDate("");
        setLocation("");
        setImageUrl("");
        setDescription("");

        // Success hoile 1 second por Upcoming Events page-e niye jabe
        setTimeout(() => {
          router.push("/upcoming-events");
        }, 1000);

      } else {
        toast.error(
          "Failed to publish event: " + (result.message || "Unknown error"),
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "#0daf4b", 
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#0daf4b",
            },
          },
          error: {
            style: {
              background: "#EF4444", 
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#EF4444",
            },
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-[#eaf8f8]/60 via-[#f0fbfb]/30 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-emerald-100/80 p-8 md:p-12">
          {/* Top Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100/70 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
              <Sparkles size={14} className="text-emerald-600" />
              Social Service Drive
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Create a Community-Care Event
            </h1>
            <p className="text-gray-600 text-sm">
              Organize a local relief effort, environmental cleanup, or
              community support drive.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Title */}
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
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50"
                  required
                />
              </div>
            </div>

            {/* Event Type & Event Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50 text-gray-700"
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

              {/* Event Date */}
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">
                  Event Date <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50 text-gray-700"
                    required
                  />
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  Dates must be in the future (today or later)
                </p>
              </div>
            </div>

            {/* Location */}
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
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50"
                  required
                />
              </div>
            </div>

            {/* Image URL */}
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
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50"
                  required
                />
              </div>

              {/* Quick Presets */}
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

            {/* Event Description */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50/50 resize-none"
                required
              ></textarea>
            </div>

            {/* Organizer Email */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50/80 text-sm">
              <span className="text-gray-600 font-medium">
                Organizer Email attached:
              </span>
              <span className="font-semibold text-gray-900">
                {organizerEmail}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#0d826a] hover:bg-[#0b6b57] text-white font-medium py-3.5 px-6 rounded-xl transition shadow-sm text-sm"
            >
              <PlusCircle size={18} />
              Publish Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;