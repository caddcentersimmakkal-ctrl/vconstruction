"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData, GalleryItem } from "@/data/gallery";
import { Maximize2, X } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const categories = ["All", "Exterior", "Interior", "Commercial", "Detail"];

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    selectedCat === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCat);

  return (
    <div className="w-full bg-white">
      {/* PAGE BANNER */}
      {/* <section className="bg-gradient-to-r from-[#EAF5FC] to-[#F5FAFE] py-14 lg:py-18 border-b border-[#E5EDF4]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">GALLERY</span>
            <div className="w-8 h-[2px] bg-[#1769B0]" />
          </div>
          <h1 className="font-heading text-[36px] sm:text-[48px] font-bold text-[#16283F] leading-tight">
            Architectural Photography Showcase
          </h1>
          <p className="text-[#718096] text-[15px] max-w-[600px] mt-2">
            A visual journal capturing structural form, daylight integration, interior craftsmanship, and geometric details.
          </p>
        </div>
      </section> */}

      <section className="py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                  selectedCat === cat
                    ? "bg-[#1769B0] text-white shadow-sm"
                    : "bg-[#F5FAFE] text-[#26384A] border border-[#E5EDF4] hover:bg-[#EAF5FC] hover:text-[#1769B0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-xl overflow-hidden border border-[#E5EDF4] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-[#16283F]"
              >
                <div className={`relative ${item.aspect} w-full`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16283F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#1677C8] tracking-widest block">
                        {item.category}
                      </span>
                      <h3 className="text-[16px] font-bold leading-snug">{item.title}</h3>
                    </div>
                    <div className="ml-auto w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#16283F] flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                className="object-contain bg-black"
              />
            </div>
            <div className="bg-[#16283F] p-4 text-white flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-bold">{lightboxItem.title}</h3>
                <span className="text-[12px] text-[#A0AEC0]">{lightboxItem.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
}
