import React from "react";
import { impactStats } from "@/data/impactStats";

export const ImpactSection: React.FC = () => {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#09283D] text-white"
    >
      {/* Decorative architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#082638] via-[#0B3048]/95 to-[#071B2A]/80" />

        <div className="absolute -right-16 -top-32 h-[420px] w-[420px] rotate-12 border border-white/10 bg-white/[0.025] sm:right-0" />

        <div className="absolute -right-8 top-0 h-full w-[42%] -skew-x-12 border-x border-white/[0.08] bg-white/[0.025]" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.8%,rgba(255,255,255,0.035)_50%,transparent_50.2%)] bg-[length:64px_64px] opacity-40" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-9 sm:px-6 sm:py-11 lg:px-8 lg:py-12">
        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BC9DB]">
            OUR IMPACT
          </p>

          <h2
            id="impact-heading"
            className="mt-1 font-heading text-2xl font-bold tracking-tight text-white sm:text-[28px]"
          >
            Numbers That Build Trust
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-y-0">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className={`flex items-center gap-3 px-3 sm:px-5 lg:px-7 ${
                  index % 2 === 0 ? "pl-0" : ""
                } ${
                  index > 0 ? "sm:border-l sm:border-white/20" : ""
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 text-[#A8D4E5] sm:h-8 sm:w-8"
                  strokeWidth={1.6}
                />

                <div>
                  <p className="font-heading text-[25px] font-bold leading-none tracking-tight text-white sm:text-[30px]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] leading-snug text-[#D2DFE8] sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
