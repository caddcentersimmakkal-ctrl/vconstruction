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
  switch (name) {
    case "Home":
      return <Home className="w-6 h-6" />;
    case "Building2":
      return <Building2 className="w-6 h-6" />;
    case "Armchair":
      return <Armchair className="w-6 h-6" />;
    case "Wrench":
      return <Wrench className="w-6 h-6" />;
    case "Compass":
      return <Compass className="w-6 h-6" />;
    case "ClipboardList":
      return <ClipboardList className="w-6 h-6" />;
    default:
      return <Home className="w-6 h-6" />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 border-b border-[#E5EDF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em] font-sans">
                OUR SERVICES
              </span>
              <div className="w-8 h-[2px] bg-[#1769B0]" />
            </div>
            <h2 className="font-heading text-[30px] sm:text-[36px] font-bold text-[#16283F]">
              What We Do
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1769B0] hover:text-[#1677C8] transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 SERVICE CARDS IN 1 ROW ON DESKTOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              className="group bg-white border border-[#E5EDF4] rounded-xl p-5 text-center flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769B0] hover:shadow-md h-full min-h-[200px]"
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-lg text-[#1769B0] bg-[#EAF5FC] group-hover:bg-[#1769B0] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shrink-0">
                {getIcon(service.iconName)}
              </div>

              {/* TITLE */}
              <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#16283F] group-hover:text-[#1769B0] transition-colors leading-tight mb-2 font-sans">
                {service.title}
              </h3>

              {/* SHORT DESCRIPTION */}
              <p className="text-[12px] text-[#718096] leading-snug font-sans mt-auto">
                &ldquo;{service.shortDescription}&rdquo;
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
