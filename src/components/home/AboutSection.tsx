import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, UserCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#E5EDF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN (Approx 4.5 cols) */}
          <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-4">
            {/* EYEBROW WITH THIN LINE */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em] font-sans">
                ABOUT US
              </span>
              <div className="w-8 h-[2px] bg-[#1769B0]" />
            </div>

            {/* HEADING */}
            <h2 className="font-heading text-[32px] sm:text-[40px] leading-[1.18] font-bold text-[#16283F]">
              Turning Visions <br />
              Into Reality
            </h2>

            {/* BODY TEXT */}
            <p className="text-[#718096] text-[14px] sm:text-[14.5px] leading-relaxed font-sans">
              At V Construction & Design Studio, we believe in more than just buildings — we create spaces that inspire. With a commitment to quality, innovation and client satisfaction, we bring your dream spaces to life.
            </p>

            {/* SIGNATURE SECTION */}
            <div className="pt-3 space-y-1">
              {/* Handwritten style signature */}
              <div className="font-serif italic text-[26px] text-[#16283F] tracking-wide font-normal font-sans">
                {siteConfig.founder.signatureText}
              </div>
              <div className="text-[14px] font-bold text-[#16283F]">
                {siteConfig.founder.name}
              </div>
              <div className="text-[12px] text-[#718096] uppercase tracking-wider font-medium">
                {siteConfig.founder.title}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: FOUNDER PORTRAIT IN ARCHITECTURAL FRAME (Approx 4 cols) */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden group shadow-xl">
              {/* Background architectural light blue offset card shape */}
              <div className="absolute inset-0 bg-[#EAF5FC] transform -rotate-2 rounded-[24px] -z-10 transition-transform duration-300 group-hover:rotate-0" />
              
              <Image
                src={siteConfig.founder.image}
                alt={siteConfig.founder.name}
                fill
                className="object-cover object-top rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 80vw, 340px"
              />

              <div className="absolute inset-0 rounded-[20px] ring-1 ring-black/5" />
            </div>
          </div>

          {/* RIGHT COLUMN: HIGHLIGHT & 3 FEATURES (Approx 3.5 cols) */}
          <div className="lg:col-span-3 space-y-6 lg:pl-4">
            {/* THIN ACCENT LINE */}
            <div className="w-10 h-[2px] bg-[#1769B0]" />

            {/* HIGHLIGHT QUOTE */}
            <h3 className="text-[17px] sm:text-[18px] font-medium text-[#26384A] leading-snug font-sans">
              We turn your ideas into <br />
              <span className="font-semibold text-[#16283F]">beautiful,</span> <br />
              <span className="font-semibold text-[#16283F]">lasting spaces.</span>
            </h3>

            {/* THREE FEATURE POINTS WITH THIN CIRCULAR OUTLINED BLUE ICONS */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#1769B0] flex items-center justify-center text-[#1769B0] bg-white group-hover:bg-[#EAF5FC] transition-colors shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[14px] font-semibold text-[#26384A] group-hover:text-[#1769B0] transition-colors font-sans">
                  Quality Craftsmanship
                </span>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#1769B0] flex items-center justify-center text-[#1769B0] bg-white group-hover:bg-[#EAF5FC] transition-colors shrink-0">
                  <Clock className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[14px] font-semibold text-[#26384A] group-hover:text-[#1769B0] transition-colors font-sans">
                  On-Time Delivery
                </span>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#1769B0] flex items-center justify-center text-[#1769B0] bg-white group-hover:bg-[#EAF5FC] transition-colors shrink-0">
                  <UserCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[14px] font-semibold text-[#26384A] group-hover:text-[#1769B0] transition-colors font-sans">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
