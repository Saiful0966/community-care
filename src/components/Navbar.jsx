
'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, Settings, CalendarCheck, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = () => {
    authClient.signOut();
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-50 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
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
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-1"
            >
              Home
            </Link>
            <Link
              href="/upcoming-events"
              className="text-gray-600 hover:text-emerald-700 font-medium transition"
            >
              Upcoming Events
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-emerald-700 font-medium transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-emerald-700 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Right Side: User Profile or Login/Signup */}
          <div className="flex items-center gap-4">
            {user ? (
              <Popover>
                {/* কোন asChild ছাড়া সরাসরি div ব্যবহার করা হয়েছে */}
                <PopoverTrigger>
                  <div className="cursor-pointer rounded-full ring-offset-2 hover:ring-2 hover:ring-emerald-500 transition flex items-center">
                    <Avatar>
                      <AvatarImage referrerPolicy="no-referrer" src={user?.image || ""} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-800 font-bold">
                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-64 p-4 shadow-xl rounded-2xl border border-gray-100 bg-white" align="end">
                  <PopoverHeader className="space-y-3 text-center flex flex-col items-center">
                    <div className="border-b pb-3 w-full text-center">
                      <PopoverTitle className="font-bold text-gray-900 text-base">
                        {user?.name}
                      </PopoverTitle>
                      <PopoverDescription className="text-xs text-gray-500 truncate">
                        {user?.email}
                      </PopoverDescription>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-1 w-full">
                      <Button asChild variant="outline" className="w-full justify-start px-4 py-2.5 border-gray-200 hover:bg-emerald-50 hover:text-emerald-700">
                        <Link href="/create-event" className="flex items-center gap-4 w-full">
                          <PlusCircle size={18} className="shrink-0" />
                          <span className="text-sm font-medium">Create Event</span>
                        </Link>
                      </Button>

                      <Button asChild variant="outline" className="w-full justify-start px-4 py-2.5 border-gray-200 hover:bg-emerald-50 hover:text-emerald-700">
                        <Link href="/manage-events" className="flex items-center gap-4 w-full">
                          <Settings size={18} className="shrink-0" />
                          <span className="text-sm font-medium">Manage Events</span>
                        </Link>
                      </Button>

                      <Button asChild variant="outline" className="w-full justify-start px-4 py-2.5 border-gray-200 hover:bg-emerald-50 hover:text-emerald-700">
                        <Link href="/events/joined" className="flex items-center gap-4 w-full">
                          <CalendarCheck size={18} className="shrink-0" />
                          <span className="text-sm font-medium">Joined Events</span>
                        </Link>
                      </Button>

                      <Button 
                        onClick={handleSignOut} 
                        variant="destructive" 
                        className="w-full justify-start px-4 py-2.5 mt-2 bg-red-50 text-red-600 hover:bg-red-100 shadow-none border border-red-200"
                      >
                        <div className="flex items-center gap-4 w-full">
                          <LogOut size={18} className="shrink-0" />
                          <span className="text-sm font-medium">SignOut</span>
                        </div>
                      </Button>
                    </div>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2 rounded-full font-medium transition shadow-sm text-sm"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2 rounded-full font-medium transition shadow-sm text-sm"
                >
                  SignUp
                </Link>
              </div>
            )}
          </div>

        </div>
      </nav>
      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;