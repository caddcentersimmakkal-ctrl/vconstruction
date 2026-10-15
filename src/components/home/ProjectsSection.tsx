// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MapPin, ArrowRight } from "lucide-react";
// import { projectsData } from "@/data/projects";

// export const ProjectsSection: React.FC = () => {
//   const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

//   return (
//     <section className="w-full bg-[#F5FAFE] py-16 lg:py-24 border-b border-[#E5EDF4]">
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* HEADER ROW */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
//           <div>
//             <div className="flex items-center gap-3 mb-2">
//               <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em] font-sans">
//                 OUR PROJECTS
//               </span>
//               <div className="w-8 h-[2px] bg-[#1769B0]" />
//             </div>
//             <h2 className="font-heading text-[30px] sm:text-[36px] font-bold text-[#16283F]">
//               Featured Projects
//             </h2>
//           </div>

//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1769B0] hover:text-[#1677C8] transition-colors group"
//           >
//             <span>View All Projects</span>
//             <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
//           </Link>
//         </div>

//         {/* FOUR PROJECT CARDS IN ONE ROW ON DESKTOP */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredProjects.map((project) => (
//             <Link
//               key={project.id}
//               href={`/projects?id=${project.id}`}
//               className="group bg-white rounded-xl overflow-hidden border border-[#E5EDF4] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* IMAGE CONTAINER WITH CATEGORY BADGE */}
//               <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16283F]/5">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                 />

//                 {/* CATEGORY BADGE OVER IMAGE BOTTOM-LEFT */}
//                 <div className="absolute bottom-3 left-3 bg-[#16283F]/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded">
//                   {project.category}
//                 </div>
//               </div>

//               {/* CARD DETAILS BELOW IMAGE */}
//               <div className="p-4 flex items-center justify-between">
//                 <div>
//                   <h3 className="text-[15px] font-bold text-[#16283F] group-hover:text-[#1769B0] transition-colors font-sans">
//                     {project.title}
//                   </h3>
//                   <div className="flex items-center gap-1 text-[#718096] text-[12px] mt-1 font-sans">
//                     <MapPin className="w-3.5 h-3.5 text-[#1769B0]" />
//                     <span>{project.location}</span>
//                   </div>
//                 </div>

//                 <div className="w-8 h-8 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center group-hover:bg-[#1769B0] group-hover:text-white transition-colors duration-200 shrink-0">
//                   <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };



"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Plots",
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProjects = useMemo(() => {
    const projects = projectsData.filter((project) => project.featured);

    if (activeCategory === "All") {
      return projects.slice(0, 4);
    }

    return projects
      .filter(
        (project) =>
          project.category.toLowerCase() === activeCategory.toLowerCase()
      )
      .slice(0, 4);
  }, [activeCategory]);

  return (
    <section className="w-full border-b border-[#E5EDF4] bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* HEADER + CATEGORY FILTERS */}
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* SECTION TITLE */}
          <div className="shrink-0">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1769B0]">
              OUR PROJECTS
            </p>

            <h2 className="font-heading text-[27px] font-bold leading-tight tracking-tight text-[#16283F] sm:text-[30px]">
              Featured Projects
            </h2>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:justify-center">
            {categories
              .filter((category) => category !== "All")
              .map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-4 py-2 text-[11px] font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-[#1769B0] text-white shadow-sm"
                      : "bg-transparent text-[#536477] hover:bg-[#EAF5FC] hover:text-[#1769B0]"
                  }`}
                >
                  {category}
                </button>
              ))}
          </div>

          {/* VIEW ALL */}
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-[#1769B0] transition-colors hover:text-[#1677C8]"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* PROJECT CARDS */}
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects?id=${project.id}`}
                className="group overflow-hidden rounded-lg border border-[#E5EDF4] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C5D9E9] hover:shadow-[0_8px_24px_rgba(22,40,63,0.08)]"
              >
                {/* PROJECT IMAGE */}
                <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#EDF3F8]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* CATEGORY BADGE */}
                  <span className="absolute bottom-2 left-2 rounded-sm bg-[#16283F]/90 px-2 py-1 text-[9px] font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* PROJECT DETAILS */}
                <div className="flex min-h-[60px] items-center justify-between gap-2 px-3 py-2.5">
                  <div className="min-w-0">
                    <h3 className="truncate text-[12px] font-bold text-[#24364A] transition-colors group-hover:text-[#1769B0]">
                      {project.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-[10px] text-[#718096]">
                      <MapPin className="h-3 w-3 shrink-0 text-[#1769B0]" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 shrink-0 text-[#1769B0] transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[#D6E2EC] py-12 text-center">
            <p className="text-sm font-medium text-[#536477]">
              No featured projects found in this category.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-3 text-sm font-semibold text-[#1769B0] hover:underline"
            >
              View all featured projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
