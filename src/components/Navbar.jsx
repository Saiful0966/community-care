
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, User } from "lucide-react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        
        {/* Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo2.png"
            alt="CommunityCare Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-emerald-900 tracking-tight">
              Community-Care
            </span>
            <span className="text-[10px] font-medium text-emerald-600 tracking-widest uppercase">
              COMMUNITY • CARE
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-1"
          >
            Home
          </Link>
          <Link
            href="upcoming-events"
            className="text-gray-600 hover:text-emerald-700 font-medium transition"
          >
            Upcoming Events
          </Link>
          <Link
            href="about"
            className="text-gray-600 hover:text-emerald-700 font-medium transition"
          >
            About
          </Link>
          <Link
            href="contact"
            className="text-gray-600 hover:text-emerald-700 font-medium transition"
          >
            Contact
          </Link>
        </div>

        {/* Right Theme Toggle & Login) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2 rounded-full font-medium transition shadow-sm"
          >
            <User size={18} />
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;