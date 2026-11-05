
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, Search, MapPin, Edit, Trash2, Eye, Plus, Users, Tag } from 'lucide-react';
 
import EditManageEvents from '@/components/EditManageEvents';

const ManageEventspage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const userEmail = user?.email;

    let events = [];
    if (userEmail) {
        try {
            const res = await fetch(`http://localhost:5000/manage-events/${userEmail}`, {
                cache: 'no-store'
            });
            events = await res.json();
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    }

    // Dynamic current date and calendar
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); 
    const todayDate = currentDate.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[currentMonth];

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDayIndex; i++) {
        calendarDays.push(null);
    }
    for (let i = 1; i <= totalDays; i++) {
        calendarDays.push(i);
    }

    return (
        <div className="min-h-screen bg-[#f4fbf7] py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Banner Section */}
                <div className="relative rounded-3xl overflow-hidden shadow-sm border border-emerald-100 bg-emerald-50">
                    <div className="relative h-44 sm:h-52 w-full">
                        <img 
                            src="/si-banner.png" 
                            alt="Manage Events Banner" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 via-emerald-900/30 to-transparent flex flex-col justify-center px-8 sm:px-12">
                            <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/50 w-max px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                Organizer Dashboard
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                                Manage My Events
                            </h1>
                            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
                                View, edit, and manage the social drives you have published. Only you have permission to edit or delete your created initiatives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Stats & Create Button Bar */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
                    <div className="flex items-center gap-4">
                        <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-700">
                            <CalendarIcon size={26} />
                        </div>
                        <div>
                            <span className="text-3xl font-bold text-gray-900">{events.length}</span>
                            <p className="text-sm text-gray-500 font-medium">Total Events Created</p>
                        </div>
                    </div>
                    
                    <Link 
                        href="/create-event" 
                        className="bg-[#0d826a] hover:bg-[#0b6b57] text-white text-sm font-semibold px-6 py-3 rounded-2xl shadow-md transition flex items-center gap-2"
                    >
                        <Plus size={18} /> Create Event
                    </Link>
                </div>

                {/* Main Layout Table Section & Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Search & Table */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* Search & Filter Bar */}
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="relative w-full sm:w-80">
                                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Search events..." 
                                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                                />
                            </div>
                            <select className="w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none bg-gray-50/50">
                                <option value="all">All Events</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        {/* Modern Table Component */}
                        <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 overflow-hidden">
                            {events.length === 0 ? (
                                <div className="p-12 text-center text-gray-500">
                                    <p className="text-sm">Apnar kono event pawa jayni!</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                                                <th className="py-4 px-6">Event</th>
                                                <th className="py-4 px-6">Category</th>
                                                <th className="py-4 px-6">Date </th>
                                                <th className="py-4 px-6">Participants</th>
                                                <th className="py-4 px-6 text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm">
                                            {events.map((event) => (
                                                <tr key={event._id} className="hover:bg-gray-50/80 transition">
                                                    {/* Event Image & Title */}
                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center gap-3">
                                                            <img 
                                                                src={event.imageUrl} 
                                                                alt={event.title} 
                                                                className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm"
                                                            />
                                                            <div>
                                                                <h4 className="font-bold text-gray-900">{event.title}</h4>
                                                                <p className="text-xs text-gray-500 line-clamp-1 flex items-center gap-1">
                                                                    {/* <MapPin size={12} className="text-red-500" /> {event.location} */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Category / Type */}
                                                    <td className="py-4 px-6">
                                                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-medium text-xs px-3 py-1 rounded-full">
                                                            <Tag size={12} />
                                                            {event.eventType}
                                                        </span>
                                                    </td>

                                                    {/* Date & Time */}
                                                    <td className="py-4 px-6 text-gray-600 text-xs">
                                                        <div className="flex items-center gap-1.5">
                                                            <CalendarIcon size={13} className="text-emerald-600" />
                                                            {/* {event.eventDate} */}
                                                            {event.eventDate ? event.eventDate.split("-").reverse().join("/") : ""}
                                                        </div>
                                                    </td>

                                                    {/* Participants */}
                                                    <td className="py-4 px-6 text-gray-600 text-xs font-medium">
                                                        <div className="flex items-center gap-1">
                                                            <Users size={13} className="text-gray-400" />
                                                            {event.volunteers?.length || 0}
                                                        </div>
                                                    </td>

                                                    {/* Actions */}


                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center justify-center gap-1.5">
                                                            <Link 
                                                                href={`/upcoming-events/${event._id}`} 
                                                                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition inline-flex items-center" 
                                                                title="View"
                                                            >
                                                                <Eye size={16} />
                                                            </Link>
                            
                                                            <EditManageEvents event={event} />

                                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete">
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Calendar  */}
                    <div className="space-y-6">

                        {/* Dynamic Calendar */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                                    <CalendarIcon size={16} className="text-emerald-600" /> {monthName} {currentYear}
                                </h3>
                                <div className="flex gap-1 text-gray-400">
                                    <button className="p-1 hover:bg-gray-100 rounded">&lt;</button>
                                    <button className="p-1 hover:bg-gray-100 rounded">&gt;</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
                                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                            </div>
                            <div className="grid grid-cols-7 text-center text-xs gap-y-2 text-gray-600">
                                {calendarDays.map((day, index) => (
                                    <span 
                                        key={index} 
                                        className={`py-1.5 ${
                                            day === todayDate 
                                                ? 'bg-emerald-600 text-white rounded-full font-bold shadow-sm' 
                                                : day ? 'hover:bg-gray-50 rounded-full' : ''
                                        }`}
                                    >
                                        {day || ''}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stronger Together */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-100 relative overflow-hidden flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-gray-900 text-base mb-1">Stronger Together</h4>
                                <p className="text-xs text-gray-600 mb-4">Building a healthier, kinder community.</p>
                                <button className="bg-[#0d826a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow hover:bg-[#0b6b57] transition">
                                    Learn More →
                                </button>
                            </div>
                            <div className="shrink-0 ml-4">
                                <img 
                                    src="/logo2.png" 
                                    alt="Logo" 
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageEventspage;