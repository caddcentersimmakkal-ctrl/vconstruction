"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "BUILDING SPACES  |  CREATING LIFESTYLES",
    headingLine1: "Modern Homes.",
    headingLine2: "Timeless Values.",
    description:
      "V Construction & Design Studio crafts modern, functional and timeless spaces. From concept to completion, we build with quality, trust and innovation.",
    image: "/images/hero-villa.png",
    imageAlt: "Modern luxury architectural villa with warm light",
  },
  {
    id: 2,
    eyebrow: "ARCHITECTURAL EXCELLENCE  |  COMMERCIAL MASTERY",
    headingLine1: "Designed for Living.",
    headingLine2: "Built for Life.",
    description:
      "Transforming commercial and corporate landscapes with energy-efficient engineering, curtain glass architecture, and flexible spatial design.",
    image: "/images/hero-office.png",
    imageAlt: "Modern glass office building facade",
  },
  {
    id: 3,
    eyebrow: "INTERIOR ARCHITECTURE  |  ELEGANT SPACES",
    headingLine1: "Spaces That Inspire.",
    headingLine2: "Quality That Lasts.",
    description:
      "Creating bespoke interiors where light, materials, and form unite to deliver unforgettable living experiences.",
    image: "/images/hero-interior.png",
    imageAlt: "Luxury contemporary living room interior",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#EAF5FC] via-[#F5FAFE] to-white border-b border-[#E5EDF4]">
      <div className="max-w-[1700px] mx-auto min-h-[380px] lg:min-h-[480px] flex flex-col lg:flex-row items-center relative">
        {/* LEFT TEXT CONTAINER (Approx 45% width) */}
        <div className="w-full lg:w-[40%] px-6 sm:px-8 lg:pl-8 lg:pr-6 py-10 lg:py-14 z-10 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4 lg:space-y-5"
            >
              {/* EYEBROW */}
              <p className="text-[11px] sm:text-[12px] font-semibold text-[#1769B0] tracking-[0.2em] uppercase font-sans">
                {slide.eyebrow}
              </p>

              {/* HEADING (Serif elegant typography matching reference) */}
              <h1 className="font-heading text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.12] font-semibold tracking-tight">
                <span className="block text-[#16283F]">{slide.headingLine1}</span>
                <span className="block text-[#1769B0]">{slide.headingLine2}</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-[#718096] text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-[480px] font-sans">
                {slide.description}
              </p>

              {/* CTA BUTTON */}
              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 bg-[#1769B0] hover:bg-[#1677C8] text-white text-[13.5px] font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT IMAGE CONTAINER (Approx 54% width) */}
        <div className="w-full lg:w-[60%] h-[280px] sm:h-[350px] lg:h-[480px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Subtle architectural gradient overlay blending into left background */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5FAFE] to-transparent hidden lg:block" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PREVIOUS / NEXT CIRCULAR ARROW BUTTONS */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#16283F] hover:text-[#1769B0] shadow-md border border-[#E5EDF4] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#16283F] hover:text-[#1769B0] shadow-md border border-[#E5EDF4] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* BOTTOM CENTER SLIDER DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-7 h-2 bg-[#1769B0]"
                  : "w-2 h-2 bg-[#16283F]/30 hover:bg-[#16283F]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
