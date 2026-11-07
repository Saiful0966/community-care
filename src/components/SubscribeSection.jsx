"use client";

import Image from "next/image";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-900 px-6 py-8 md:px-12 md:py-10">
        
        {/* Left Image */}
        <div className="absolute left-0 bottom-0 opacity-70">
          <Image
            src="/si-image.png"
            alt="Leaf decoration"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 opacity-70">
          <Image
            src="/si-image.png"
            alt="Leaf decoration"
            width={110}
            height={110}
            className="object-contain scale-x-[-1]"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Content */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-emerald-200 text-sm">
              <Mail size={16} />
              <span>Stay Connected</span>
            </div>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Get the Latest Updates
            </h2>

            <p className="mt-2 text-sm leading-6 text-emerald-100">
              Subscribe to our newsletter and be the first to know about
              upcoming events, success stories, and more.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="flex w-full max-w-xl rounded-full bg-white p-1.5 shadow-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-full px-5 py-3 text-sm text-slate-700 outline-none"
            />

            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Subscribe
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}