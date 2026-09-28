import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-[#E5EDF4] pt-10 pb-8 text-[#26384A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-[#1769B0]"
              >
                <path
                  d="M20 2L37 14L20 38L3 14L20 2Z"
                  fill="url(#footer_logo_grad)"
                  stroke="#1769B0"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M20 2V38" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
                <path d="M3 14H37" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
                <defs>
                  <linearGradient id="footer_logo_grad" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1677C8" />
                    <stop offset="1" stopColor="#1769B0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#16283F] font-bold text-[14px] uppercase tracking-tight font-sans">
                V CONSTRUCTION
              </span>
              <span className="text-[#1769B0] font-medium text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5">
                DESIGN STUDIO
              </span>
              <span className="text-[#718096] text-[7.5px] tracking-[0.1em] uppercase font-light mt-0.5">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* CENTER: SOCIAL MEDIA ICONS (SVG) */}
          <div className="flex items-center gap-4 text-[#718096]">
            {/* INSTAGRAM */}
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.416V8z" />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* YOUTUBE */}
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>

          {/* RIGHT: NAVIGATION LINKS */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#718096]">
            <Link href="/" className="hover:text-[#1769B0] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#1769B0] transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-[#1769B0] transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-[#1769B0] transition-colors">
              Projects
            </Link>
            <Link href="/gallery" className="hover:text-[#1769B0] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-[#1769B0] transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* DIVIDER LINE */}
        <div className="w-full h-[1px] bg-[#E5EDF4]" />

        {/* BOTTOM ROW */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#718096] gap-3">
          <p>© {new Date().getFullYear()} V Construction & Design Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#1769B0] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#1769B0] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
