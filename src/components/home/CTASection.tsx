import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#16283F] relative overflow-hidden text-white">
      <div className="max-w-[1280px] mx-auto min-h-[320px] sm:min-h-[360px] flex flex-col md:flex-row items-center relative z-10">
        
        {/* LEFT CONTENT (Approx 55% width) */}
        <div className="w-full md:w-[58%] px-6 sm:px-10 py-12 lg:py-16 space-y-4">
          <p className="text-[11px] sm:text-[12px] font-semibold text-[#1677C8] tracking-[0.2em] uppercase font-sans">
            LET&apos;S BUILD TOGETHER
          </p>

          <h2 className="font-heading text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] font-bold text-white">
            Ready to Build Your Dream Space?
          </h2>

          <p className="text-[#A0AEC0] text-[14px] sm:text-[15px] leading-relaxed max-w-[500px] font-sans">
            Get in touch with us for a free consultation and take the first step towards your dream project.
          </p>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-[#16283F] hover:bg-[#EAF5FC] text-[13.5px] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Calendar className="w-4 h-4 text-[#1769B0]" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#1769B0] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE ARCHITECTURAL IMAGE WITH DIAGONAL COMPOSITION */}
        <div className="w-full md:w-[42%] h-[240px] md:h-[360px] relative overflow-hidden">
          <Image
            src="/images/cta-building.png"
            alt="Modern architectural glass facade skyscraper"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          {/* Subtle dark navy diagonal gradient overlay matching reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#16283F] via-[#16283F]/70 to-transparent" />
        </div>

      </div>
    </section>
  );
};
