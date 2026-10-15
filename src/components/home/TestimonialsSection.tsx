"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const total = testimonials.length;
  const visibleCount = isDesktop ? 2 : 1;
  const maxIndex = Math.max(0, total - visibleCount);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateScreen = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateScreen();
    mediaQuery.addEventListener("change", updateScreen);

    return () => mediaQuery.removeEventListener("change", updateScreen);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [paused, maxIndex]);

  if (total === 0) return null;

  const previous = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-b border-[#E5EDF4] bg-[#F6F9FC] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1769B0]">
              TESTIMONIALS
            </p>

            <h2
              id="testimonials-heading"
              className="mt-1 font-heading text-2xl font-bold text-[#16283F] sm:text-[27px]"
            >
              What Our Clients Say
            </h2>
          </div>

          {maxIndex > 0 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonials"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#1769B0] transition-all hover:border-[#1769B0] hover:bg-[#1769B0] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#1769B0] transition-all hover:border-[#1769B0] hover:bg-[#1769B0] hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* CAROUSEL */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget as Node | null
              )
            ) {
              setPaused(false);
            }
          }}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div
            className="flex items-stretch transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{
              transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 px-2 first:pl-0 last:pr-0 lg:w-1/2"
                style={{ flexBasis: `${100 / visibleCount}%` }}
              >
                <article className="flex h-full min-h-[180px] flex-col justify-between rounded-lg border border-[#E6EDF4] bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:min-h-[165px] sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5EFF7] text-xs font-bold text-[#245E91]">
                      {testimonial.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <Quote
                        className="mb-2 h-4 w-4 text-[#1769B0]/60"
                        aria-hidden="true"
                      />

                      <p className="text-xs leading-7 text-[#526174] sm:text-sm">
                        “{testimonial.quote}”
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#EEF2F6] pt-3">
                    <div>
                      <h3 className="text-xs font-bold text-[#24364A]">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-[10px] text-[#8491A0]">
                        {testimonial.role}
                      </p>
                    </div>

                    <div
                      className="flex shrink-0 gap-0.5"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <Star
                            key={index}
                            className="h-3.5 w-3.5 text-[#1769B0]"
                            fill="currentColor"
                            aria-hidden="true"
                          />
                        )
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION */}
        {maxIndex > 0 && (
          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial group ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-[#1769B0]"
                    : "w-2 bg-[#C5D3E0] hover:bg-[#1769B0]/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
