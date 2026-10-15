// import React from "react";
// import Link from "next/link";
// import { siteConfig } from "@/config/site";

// export const Footer: React.FC = () => {
//   return (
//     <footer className="w-full bg-white border-t border-[#E5EDF4] pt-10 pb-8 text-[#26384A]">
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* TOP ROW */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
//           {/* LEFT: LOGO */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="w-9 h-9 flex items-center justify-center">
//               <svg
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-9 h-9 text-[#1769B0]"
//               >
//                 <path
//                   d="M20 2L37 14L20 38L3 14L20 2Z"
//                   fill="url(#footer_logo_grad)"
//                   stroke="#1769B0"
//                   strokeWidth="1.8"
//                   strokeLinejoin="round"
//                 />
//                 <path d="M20 2V38" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
//                 <path d="M3 14H37" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
//                 <defs>
//                   <linearGradient id="footer_logo_grad" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#1677C8" />
//                     <stop offset="1" stopColor="#1769B0" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[#16283F] font-bold text-[14px] uppercase tracking-tight font-sans">
//                 V CONSTRUCTION
//               </span>
//               <span className="text-[#1769B0] font-medium text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5">
//                 DESIGN STUDIO
//               </span>
//               <span className="text-[#718096] text-[7.5px] tracking-[0.1em] uppercase font-light mt-0.5">
//                 {siteConfig.tagline}
//               </span>
//             </div>
//           </Link>

//           {/* CENTER: SOCIAL MEDIA ICONS (SVG) */}
//           <div className="flex items-center gap-4 text-[#718096]">
//             {/* INSTAGRAM */}
//             <a
//               href={siteConfig.links.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
//               aria-label="Instagram"
//             >
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//               </svg>
//             </a>

//             {/* FACEBOOK */}
//             <a
//               href={siteConfig.links.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
//               aria-label="Facebook"
//             >
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.416V8z" />
//               </svg>
//             </a>

//             {/* LINKEDIN */}
//             <a
//               href={siteConfig.links.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
//               aria-label="LinkedIn"
//             >
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//               </svg>
//             </a>

//             {/* YOUTUBE */}
//             <a
//               href={siteConfig.links.youtube}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full hover:text-[#1769B0] hover:bg-[#EAF5FC] transition-colors"
//               aria-label="YouTube"
//             >
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//               </svg>
//             </a>
//           </div>

//           {/* RIGHT: NAVIGATION LINKS */}
//           <nav className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#718096]">
//             <Link href="/" className="hover:text-[#1769B0] transition-colors">
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-[#1769B0] transition-colors">
//               About
//             </Link>
//             <Link href="/services" className="hover:text-[#1769B0] transition-colors">
//               Services
//             </Link>
//             <Link href="/projects" className="hover:text-[#1769B0] transition-colors">
//               Projects
//             </Link>
//             <Link href="/gallery" className="hover:text-[#1769B0] transition-colors">
//               Gallery
//             </Link>
//             <Link href="/contact" className="hover:text-[#1769B0] transition-colors">
//               Contact
//             </Link>
//           </nav>
//         </div>

//         {/* DIVIDER LINE */}
//         <div className="w-full h-[1px] bg-[#E5EDF4]" />

//         {/* BOTTOM ROW */}
//         <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#718096] gap-3">
//           <p>© {new Date().getFullYear()} V Construction & Design Studio. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <Link href="/contact" className="hover:text-[#1769B0] transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="/contact" className="hover:text-[#1769B0] transition-colors">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };



"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ];

  const socialLinks = [
  { label: "Facebook", href: siteConfig.links.facebook },
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "YouTube", href: siteConfig.links.youtube },
];

  const SocialIcon = ({ name }: { name: string }) => {
    const common = {
      className: "h-[15px] w-[15px]",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": true as const,
    };

    switch (name) {
      case "Facebook":
        return (
          <svg {...common}>
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4V10H7v3h2.9v8h3.6Z" />
          </svg>
        );

      case "Instagram":
        return (
          <svg {...common}>
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="17.5" cy="6.8" r="1.2" />
          </svg>
        );

      case "LinkedIn":
        return (
          <svg {...common}>
            <path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.2 9h3.6v12H3.2V9Zm5.8 0h3.4v1.6h.1A3.8 3.8 0 0 1 16 8.7c3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9V9Z" />
          </svg>
        );

      case "YouTube":
        return (
          <svg {...common}>
            <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.8 15.7V8.3l6.3 3.7-6.3 3.7Z" />
          </svg>
        );

      default:
        return null;
    }
  };


  return (
    <footer className="w-full border-t border-white/10 bg-[#071521] text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* MAIN FOOTER ROW */}
        <div className="flex flex-col gap-6 py-7 lg:min-h-[86px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-4">
          {/* BRAND LOGO */}
          <Link
            href="/"
            aria-label="V Construction & Design Studio home"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M20 2L37 14L20 38L3 14L20 2Z"
                  fill="url(#footer-logo-gradient)"
                  stroke="#65B8F4"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 2V38M3 14H37M10 8H30M10 24H30"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  opacity="0.75"
                />
                <defs>
                  <linearGradient
                    id="footer-logo-gradient"
                    x1="20"
                    y1="2"
                    x2="20"
                    y2="38"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#64C2FF" />
                    <stop offset="1" stopColor="#1264B0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-[12px] font-bold uppercase leading-tight tracking-wide text-white sm:text-[13px]">
                V CONSTRUCTION
              </span>
              <span className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-[0.17em] text-[#9CCDF0]">
                DESIGN STUDIO
              </span>
              <span className="mt-1 text-[7px] uppercase tracking-[0.1em] text-white/45">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* CENTER NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-medium text-white/80 sm:gap-x-6 lg:justify-center lg:gap-x-5 xl:gap-x-7"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-[#62B8F3]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* SOCIAL LINKS */}
          <div className="flex shrink-0 items-center gap-3.5">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#62B8F3]"
              >
                <SocialIcon name={label} />
              </a>
            ))}
          </div>
        </div>

        {/* COPYRIGHT ROW */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[9px] leading-relaxed text-white/55">
            © {new Date().getFullYear()} V Construction &amp; Design Studio.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[9px] text-white/55">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/15" aria-hidden="true" />

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
