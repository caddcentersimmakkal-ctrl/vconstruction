import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData, Service } from "@/data/services";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Our Services",
  description: "Comprehensive construction, architectural design, interior design, renovation, and project management services by V Construction & Design Studio.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* PAGE BANNER */}
      <section className="bg-gradient-to-r from-[#EAF5FC] to-[#F5FAFE] py-14 lg:py-18 border-b border-[#E5EDF4]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">OUR SERVICES</span>
            <div className="w-8 h-[2px] bg-[#1769B0]" />
          </div>
          {/* <h1 className="font-heading text-[36px] sm:text-[48px] font-bold text-[#16283F] leading-tight">
            Comprehensive Building & Design Solutions
          </h1> */}
          <p className="text-[#718096] text-[15px] max-w-[640px] mt-2">
            From initial architectural sketches to final key handover, we provide complete turnkey construction and interior services.
          </p>
        </div>
      </section>

      {/* ALL 6 SERVICES LISTED IN DETAIL */}
      <section className="py-16 lg:py-24 space-y-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-[#E5EDF4] pb-16 last:border-0 last:pb-0"
              >
                {/* TEXT CONTENT */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="inline-flex items-center gap-2 bg-[#EAF5FC] text-[#1769B0] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Service 0{idx + 1}
                  </div>

                  <h2 className="font-heading text-[30px] sm:text-[36px] font-bold text-[#16283F]">
                    {service.title}
                  </h2>

                  <p className="text-[#718096] text-[15px] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h3 className="text-[14px] font-bold text-[#16283F] uppercase tracking-wider">Key Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-[13.5px] text-[#26384A]">
                          <CheckCircle2 className="w-4 h-4 text-[#1769B0] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 bg-[#1769B0] hover:bg-[#1677C8] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-colors shadow-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book {service.title} Consultation</span>
                    </Link>
                  </div>
                </div>

                {/* IMAGE */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E5EDF4]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
