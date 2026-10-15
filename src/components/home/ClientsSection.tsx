import React from "react";
import { clients } from "@/data/clients";

export const ClientsSection: React.FC = () => {
  const LogoGroup = ({ copy = false }: { copy?: boolean }) => (
    <div
      className="clients-marquee-track"
      aria-hidden={copy ? true : undefined}
    >
      {clients.map((client) => (
        <div
          key={`${copy ? "copy-" : ""}${client.id}`}
          className="flex w-28 shrink-0 flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-110 sm:w-32"
        >
          <span className="font-heading text-3xl font-bold text-[#A3ADB8] transition-colors duration-300 hover:text-[#1769B0]">
            {client.monogram}
          </span>

          <span className="mt-2 text-[10px] font-bold tracking-wider text-[#6B7785]">
            {client.name}
          </span>

          <span className="mt-0.5 text-[8px] tracking-widest text-[#8995A2]">
            {client.subtitle}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      aria-labelledby="clients-heading"
      className="overflow-hidden border-b border-[#E5EDF4] bg-white"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-6 px-5 py-8 sm:px-6 md:grid-cols-[0.9fr_1.6fr] lg:px-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1769B0]">
            OUR CLIENTELE
          </p>

          <h2
            id="clients-heading"
            className="mt-1 font-heading text-2xl font-bold text-[#16283F]"
          >
            Our Esteemed Clients
          </h2>

          <p className="mt-2 max-w-[350px] text-xs leading-relaxed text-[#64748B]">
            Building lasting relationships through trust, quality and
            professional excellence.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          aria-label="Client logos"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

          <div className="clients-marquee">
            <LogoGroup />
            <LogoGroup copy />
          </div>
        </div>
      </div>
    </section>
  );
};
