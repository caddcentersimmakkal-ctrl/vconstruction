// 


import React from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Armchair,
  Wrench,
  Compass,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { servicesData, Service } from "@/data/services";

const getIcon = (name: Service["iconName"]) => {
  const iconClass = "h-7 w-7 stroke-[1.7]";

  switch (name) {
    case "Home":
      return <Home className={iconClass} />;
    case "Building2":
      return <Building2 className={iconClass} />;
    case "Armchair":
      return <Armchair className={iconClass} />;
    case "Wrench":
      return <Wrench className={iconClass} />;
    case "Compass":
      return <Compass className={iconClass} />;
    case "ClipboardList":
      return <ClipboardList className={iconClass} />;
    default:
      return <Home className={iconClass} />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full border-b border-[#E5EDF4] bg-[#F7FAFC] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.95fr_1.65fr] lg:gap-12 xl:gap-14">
          {/* LEFT: SECTION INTRODUCTION */}
          <div className="flex flex-col items-start">
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1769B0]">
              OUR SERVICES
            </span>

            <h2 className="max-w-[440px] font-heading text-[28px] font-bold leading-[1.12] tracking-tight text-[#16283F] sm:text-[32px] lg:text-[34px]">
              Comprehensive Construction
              <br className="hidden xl:block" /> &amp; Design Solutions
            </h2>

            <p className="mt-4 max-w-[410px] text-[14px] leading-[1.8] text-[#536477]">
              We offer end-to-end solutions for residential, commercial and
              interior projects, combining creativity, quality and professional
              expertise.
            </p>

            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 rounded-md border border-[#A9C6DC] bg-transparent px-4 py-2.5 text-[12px] font-semibold text-[#1769B0] transition-all duration-300 hover:border-[#1769B0] hover:bg-[#1769B0] hover:text-white"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT: SERVICE CARDS */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.slug}`}
                className="group flex min-h-[116px] flex-col justify-between rounded-lg border border-[#E5EDF4] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#A9C6DC] hover:shadow-[0_8px_24px_rgba(22,40,63,0.07)] sm:p-5"
              >
                {/* ICON */}
                <div className="mb-3 text-[#245E91] transition-transform duration-300 group-hover:scale-105">
                  {getIcon(service.iconName)}
                </div>

                {/* TITLE + DESCRIPTION + ARROW */}
                <div className="mt-auto">
                  <h3 className="pr-1 text-[12px] font-bold leading-snug text-[#24364A] transition-colors duration-200 group-hover:text-[#1769B0] sm:text-[12.5px]">
                    {service.title}
                  </h3>

                  <div className="mt-1.5 flex items-end justify-between gap-2">
                    <p className="text-[11px] leading-[1.5] text-[#718096]">
                      {service.shortDescription}
                    </p>

                    <ArrowRight className="mb-0.5 h-4 w-4 shrink-0 text-[#1769B0] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
