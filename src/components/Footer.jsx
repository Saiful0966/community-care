import React from "react";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#0d3b2c] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Main Footer  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/60">
            {/*  Brand Info & Socials icon */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Logo & Name */}
              <div className="flex items-center gap-3 mb-4 cursor-pointer">
                <div className="bg-white p-1.5 rounded-xl">
                  <Image
                    src="/logo2.png"
                    alt="Community-Care Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">
                    Community-Care
                  </span>
                  <span className="text-[10px] font-medium text-emerald-400 tracking-widest uppercase">
                    COMMUNITY • CARE
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 max-w-sm">
                Building stronger communities through kindness, <br />
                collaboration and action.
              </p>

              {/* Social icons (SVG) */}
              <div className="flex items-center gap-3">
                {/* facebook */}
                <a
                  href=""
                  className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href=""
                  className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href=""
                  className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition"
                  title="Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href=""
                  className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href=""
                  className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links  */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upcoming-events"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/*  Support  */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-4">
                Support
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-emerald-100/80 hover:text-white transition"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/*  Catchphrase */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center text-left lg:text-right">
              <div className="font-serif italic text-xl md:text-2xl text-emerald-200/90 leading-snug">
                Better Communities <br />
                <span className="not-italic font-sans text-lg md:text-xl font-medium text-white">
                  Brighter Futures
                </span>
              </div>
            </div>
          </div>

          {/*  Copyright & Made with love */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
            <p>© 2026 Community-Care. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-400">❤</span> for a better
              tomorrow
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
