// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Calendar, ArrowRight } from "lucide-react";

// export const CTASection: React.FC = () => {
//   return (
//     <section className="w-full bg-[#16283F] relative overflow-hidden text-white">
//       <div className="max-w-[1280px] mx-auto min-h-[320px] sm:min-h-[360px] flex flex-col md:flex-row items-center relative z-10">
        
//         {/* LEFT CONTENT (Approx 55% width) */}
//         <div className="w-full md:w-[58%] px-6 sm:px-10 py-12 lg:py-16 space-y-4">
//           <p className="text-[11px] sm:text-[12px] font-semibold text-[#1677C8] tracking-[0.2em] uppercase font-sans">
//             LET&apos;S BUILD TOGETHER
//           </p>

//           <h2 className="font-heading text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] font-bold text-white">
//             Ready to Build Your Dream Space?
//           </h2>

//           <p className="text-[#A0AEC0] text-[14px] sm:text-[15px] leading-relaxed max-w-[500px] font-sans">
//             Get in touch with us for a free consultation and take the first step towards your dream project.
//           </p>

//           <div className="pt-3">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2.5 bg-white text-[#16283F] hover:bg-[#EAF5FC] text-[13.5px] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
//             >
//               <Calendar className="w-4 h-4 text-[#1769B0]" />
//               <span>Book a Consultation</span>
//               <ArrowRight className="w-4 h-4 text-[#1769B0] transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT SIDE ARCHITECTURAL IMAGE WITH DIAGONAL COMPOSITION */}
//         <div className="w-full md:w-[42%] h-[240px] md:h-[360px] relative overflow-hidden">
//           <Image
//             src="/images/cta-building.png"
//             alt="Modern architectural glass facade skyscraper"
//             fill
//             className="object-cover object-center"
//             sizes="(max-width: 768px) 100vw, 42vw"
//           />
//           {/* Subtle dark navy diagonal gradient overlay matching reference */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#16283F] via-[#16283F]/70 to-transparent" />
//         </div>

//       </div>
//     </section>
//   );
// };






"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const CTASection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#F5F9FC] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <motion.div
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 18,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-[1280px] overflow-hidden rounded-xl bg-[#07539B] text-white shadow-sm"
      >
        {/* BACKGROUND ARCHITECTURAL IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-building.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>

        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07539B]/95 via-[#07539B]/90 to-[#064782]/85" />

        {/* SUBTLE DECORATIVE LIGHT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(40,145,220,0.22),transparent_55%)]"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[112px] flex-col justify-center gap-5 px-5 py-5 sm:min-h-[120px] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 lg:px-10">
          {/* LEFT TEXT */}
          <div className="max-w-[620px]">
            <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B8DFFF] sm:text-[9px]">
              LET&apos;S BUILD TOGETHER
            </p>

            <h2 className="font-heading text-[19px] font-bold leading-tight text-white sm:text-[21px] lg:text-[23px]">
              Your Dream Project Awaits
            </h2>

            <p className="mt-1.5 max-w-[480px] text-[10px] leading-[1.65] text-white/85 sm:text-[11px]">
              Get in touch with our team for a free consultation and take
              the first step towards your dream space.
            </p>
          </div>

          {/* RIGHT CTA BUTTON */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="group inline-flex min-h-[36px] items-center justify-center gap-2 rounded-md bg-white px-3.5 py-2 text-[10px] font-semibold text-[#16446F] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF5FC] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07539B] sm:text-[10px]"
            >
              <Calendar className="h-3 w-3 text-[#1769B0]" />

              <span>Book a Consultation</span>

              <ArrowRight className="h-3 w-3 text-[#1769B0] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};