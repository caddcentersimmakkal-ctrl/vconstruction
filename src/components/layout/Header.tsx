"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { label: "Residential Construction", href: "/services#residential-construction" },
        { label: "Commercial Construction", href: "/services#commercial-construction" },
        { label: "Interior Design", href: "/services#interior-design" },
        // { label: "Renovation & Remodeling", href: "/services#renovation-remodeling" },
        // { label: "Architectural Design", href: "/services#architectural-design" },
        // { label: "Project Management", href: "/services#project-management" },
        { label: "Plots & Real Estate", href: "/services#plots-land-real-estate" },
      ],
    },
    {
      label: "Projects",
      href: "/projects",
      hasDropdown: true,
      dropdownItems: [
        { label: "All Projects", href: "/projects" },
        { label: "Residential", href: "/projects?category=Residential" },
        { label: "Commercial", href: "/projects?category=Commercial" },
        { label: "Interior", href: "/projects?category=Interior" },
        // { label: "Renovation", href: "/projects?category=Renovation" },
        { label: "Plots", href: "/projects?category=Plots" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (

    <header className={`sticky top-0 z-50 relative w-full border-b bg-white transition-all duration-300 ${scrolled ? "border-[#E5EDF4] shadow-sm" : "border-[#E5EDF4]"}`}>
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-5 lg:h-[76px] lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 group">
          {/* Architectural Diamond Icon Matching Reference */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-[#1769B0] transition-transform duration-300 group-hover:scale-105"
            >
              <path
                d="M20 2L37 14L20 38L3 14L20 2Z"
                fill="url(#logo_grad)"
                stroke="#1769B0"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M20 2V38" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
              <path d="M3 14H37" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
              <path d="M10 8L30 8" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
              <path d="M10 24L30 24" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
              <defs>
                <linearGradient id="logo_grad" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1677C8" />
                  <stop offset="1" stopColor="#1769B0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">

            <span className="whitespace-nowrap font-sans text-[13px] font-bold leading-tight tracking-tight text-[#16283F] sm:text-[15px] lg:text-[16px]">
              V CONSTRUCTION
            </span>
            <span className="text-[#1769B0] font-medium text-[10px] tracking-[0.18em] uppercase leading-none mt-0.5">
              DESIGN STUDIO
            </span>
            <span className="text-[#718096] text-[8px] tracking-[0.12em] uppercase font-light mt-0.5">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden lg:flex shrink-0 items-center gap-4 xl:gap-7 text-[13px] xl:text-[14px] font-medium text-[#26384A]">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <div
                key={item.label}
                className="relative group py-2"
                onMouseEnter={() => {
                  if (item.label === "Services") setServicesOpen(true);
                  if (item.label === "Projects") setProjectsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.label === "Services") setServicesOpen(false);
                  if (item.label === "Projects") setProjectsOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 transition-colors py-1 ${active ? "text-[#1769B0] font-semibold" : "hover:text-[#1769B0]"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-[#718096] group-hover:text-[#1769B0] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Active Indicator Underline matching reference */}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1769B0] rounded-full" />
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div
                    className={`absolute top-full left-0 w-56 bg-white border border-[#E5EDF4] rounded-lg shadow-lg py-2 transition-all duration-200 z-50 ${(item.label === "Services" && servicesOpen) || (item.label === "Projects" && projectsOpen)
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                      }`}
                  >
                    {item.dropdownItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-[13px] text-[#26384A] hover:bg-[#EAF5FC] hover:text-[#1769B0] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden lg:flex shrink-0 items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#1769B0] hover:bg-[#1677C8] text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4 stroke-[2]" />
            <span>Book a Consultation</span>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="shrink-0 p-2 text-[#16283F] hover:text-[#1769B0] focus:outline-none lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-[#E5EDF4] bg-white px-6 py-6 shadow-xl lg:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-[15px] font-medium border-b border-[#E5EDF4]/60 flex items-center justify-between ${isActive(item.href) ? "text-[#1769B0] font-semibold" : "text-[#26384A]"
                  }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#718096]" />
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#1769B0] text-white text-[14px] font-medium py-3 rounded-full text-center shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
