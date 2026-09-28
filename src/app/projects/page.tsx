"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData, Project } from "@/data/projects";
import { MapPin, ArrowRight, X, Calendar, Layers } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const categories = ["All", "Residential", "Commercial", "Interior", "Renovation", "Architecture"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-white">
      {/* PAGE BANNER */}
      <section className="bg-gradient-to-r from-[#EAF5FC] to-[#F5FAFE] py-14 lg:py-18 border-b border-[#E5EDF4]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">PORTFOLIO</span>
            <div className="w-8 h-[2px] bg-[#1769B0]" />
          </div>
          <h1 className="font-heading text-[36px] sm:text-[48px] font-bold text-[#16283F] leading-tight">
            Our Architectural Portfolio
          </h1>
          <p className="text-[#718096] text-[15px] max-w-[600px] mt-2">
            Explore our completed residential villas, corporate office complexes, contemporary interior projects, and structural renovations.
          </p>
        </div>
      </section>

      {/* FILTER BAR & GRID */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#1769B0] text-white shadow-sm"
                    : "bg-[#F5FAFE] text-[#26384A] border border-[#E5EDF4] hover:bg-[#EAF5FC] hover:text-[#1769B0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProjectModal(project)}
                className="group bg-white rounded-xl overflow-hidden border border-[#E5EDF4] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16283F]/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#16283F]/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#16283F] group-hover:text-[#1769B0] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#718096] text-[13px] mt-1">
                      <MapPin className="w-4 h-4 text-[#1769B0]" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center group-hover:bg-[#1769B0] group-hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT MODAL */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#16283F] flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full">
              <Image
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#16283F]/80 text-white text-[12px] font-medium px-3 py-1 rounded-md">
                {activeProjectModal.category}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[22px] font-bold text-[#16283F]">{activeProjectModal.title}</h2>
                  <p className="text-[13px] text-[#718096] flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1769B0]" />
                    <span>{activeProjectModal.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-[14px] text-[#718096] leading-relaxed">{activeProjectModal.description}</p>

              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#E5EDF4] text-[13px]">
                <div>
                  <span className="block text-[#718096] text-[11px]">Completion</span>
                  <span className="font-bold text-[#16283F]">{activeProjectModal.completionYear}</span>
                </div>
                <div>
                  <span className="block text-[#718096] text-[11px]">Area</span>
                  <span className="font-bold text-[#16283F]">{activeProjectModal.area}</span>
                </div>
                <div>
                  <span className="block text-[#718096] text-[11px]">Client</span>
                  <span className="font-bold text-[#16283F]">{activeProjectModal.client}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1769B0] text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#1677C8] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Similar Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
}
