import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="w-full bg-[#F5FAFE] py-16 lg:py-24 border-b border-[#E5EDF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em] font-sans">
                OUR PROJECTS
              </span>
              <div className="w-8 h-[2px] bg-[#1769B0]" />
            </div>
            <h2 className="font-heading text-[30px] sm:text-[36px] font-bold text-[#16283F]">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1769B0] hover:text-[#1677C8] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* FOUR PROJECT CARDS IN ONE ROW ON DESKTOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects?id=${project.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-[#E5EDF4] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* IMAGE CONTAINER WITH CATEGORY BADGE */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16283F]/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* CATEGORY BADGE OVER IMAGE BOTTOM-LEFT */}
                <div className="absolute bottom-3 left-3 bg-[#16283F]/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  {project.category}
                </div>
              </div>

              {/* CARD DETAILS BELOW IMAGE */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-[15px] font-bold text-[#16283F] group-hover:text-[#1769B0] transition-colors font-sans">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#718096] text-[12px] mt-1 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#1769B0]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center group-hover:bg-[#1769B0] group-hover:text-white transition-colors duration-200 shrink-0">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
