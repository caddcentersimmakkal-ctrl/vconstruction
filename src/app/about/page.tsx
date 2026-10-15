import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Flag,
  Award,
  CalendarDays,
  Users,
  Compass,
  Ruler,
  HardHat,
  ClipboardCheck,
  KeyRound,
  Trophy,
  Target,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "About Us | V Construction & Design Studio",
  description:
    "Discover V Construction & Design Studio, our journey, vision, mission, team, achievements and structured approach to architecture and construction.",
};

export default function AboutPage() {
  /* =========================================================
     OUR JOURNEY
  ========================================================= */

  const journey = [
    {
      year: "2018",
      title: "The Beginning",
      desc: "V Construction & Design Studio began with a vision to create thoughtfully designed spaces built around quality, functionality and trust.",
    },
    {
      year: "2020",
      title: "Expanding Our Expertise",
      desc: "Our capabilities expanded across residential construction, architectural design, interiors and renovation projects.",
    },
    {
      year: "2022",
      title: "Growing With Our Clients",
      desc: "We strengthened our project execution capabilities and developed long-term relationships with homeowners and businesses.",
    },
    {
      year: "2024",
      title: "A Complete Design & Build Approach",
      desc: "We brought architecture, construction, interiors and project management together under one integrated workflow.",
    },
    {
      year: "2025",
      title: "Building the Future",
      desc: "Today, we continue to pursue better design, better execution and better experiences for every project we undertake.",
    },
  ];

  /* =========================================================
     VISION & MISSION
  ========================================================= */

  const visionMission = [
    {
      type: "VISION",
      title: "Designing Spaces That Last",
      desc: "To become a trusted design and construction studio known for creating meaningful, functional and timeless spaces that improve the way people live and work.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      type: "MISSION",
      title: "Turning Ideas Into Reality",
      desc: "To deliver thoughtful architecture, quality construction and transparent project execution while making every stage of the journey clear and comfortable for our clients.",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  /* =========================================================
     TEAM
  ========================================================= */

  const team = [
    {
      name: "Venkatesh Raman",
      role: "Founder & CEO",
      image: siteConfig.founder.image,
    },
    {
      name: "Project Architecture Team",
      role: "Architecture & Design",
      image: "/images/team-architect.jpg",
    },
    {
      name: "Construction Team",
      role: "Engineering & Execution",
      image: "/images/team-construction.jpg",
    },
    {
      name: "Interior Design Team",
      role: "Interior & Spatial Design",
      image: "/images/team-interior.jpg",
    },
  ];

  /* =========================================================
     AWARDS & ACHIEVEMENTS
     
     Replace the sample titles/year/details below with
     the company's actual awards and achievements.
  ========================================================= */

  const achievements = [
    {
      year: "01",
      title: "Quality-Focused Execution",
      desc: "A structured approach to materials, workmanship and site execution across every project.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "02",
      title: "Growing Project Portfolio",
      desc: "Experience across residential, commercial, interior and renovation projects.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      year: "03",
      title: "Client-Centric Approach",
      desc: "Building lasting relationships through transparent communication and project coordination.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "04",
      title: "Integrated Design & Build",
      desc: "Architecture, construction, interiors and project management brought together through one workflow.",
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  /* =========================================================
     OUR PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Consultation",
      desc: "We understand your requirements, lifestyle, site conditions, budget and project expectations.",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Planning & Design",
      desc: "Our team develops concepts, layouts, architectural drawings, materials and visual references.",
      icon: <Ruler className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Approval & Estimation",
      desc: "Plans, specifications, project scope and estimated costs are reviewed before execution begins.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Construction",
      desc: "Our engineering and site teams execute the project with continuous quality and progress monitoring.",
      icon: <HardHat className="w-6 h-6" />,
    },
    {
      number: "05",
      title: "Quality Inspection",
      desc: "Workmanship, finishes and project details are reviewed carefully before final handover.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      number: "06",
      title: "Handover",
      desc: "The completed space is handed over with a final walkthrough and project completion support.",
      icon: <KeyRound className="w-6 h-6" />,
    },
  ];

  return (
    <main className="w-full bg-white">

      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      {/* <section className="relative overflow-hidden border-b border-[#E5EDF4] bg-gradient-to-r from-[#EAF5FC] to-[#F5FAFE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-[780px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.22em]">
                ABOUT US
              </span>

              <div className="w-10 h-[2px] bg-[#1769B0]" />
            </div>

            <h1 className="font-heading text-[38px] sm:text-[52px] lg:text-[60px] font-bold text-[#16283F] leading-[1.08]">
              Building Ideas.
              <br />
              <span className="text-[#1769B0]">
                Creating Possibilities.
              </span>
            </h1>

            <p className="mt-5 text-[15px] sm:text-[16px] text-[#718096] leading-relaxed max-w-[650px]">
              V Construction & Design Studio brings together architecture,
              construction and interior design to create spaces that are
              thoughtfully planned, beautifully executed and built to last.
            </p>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          ABOUT COMPANY — OFFICE IMAGE
      ====================================================== */}

      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* IMAGE */}

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5EDF4] shadow-lg">

                <Image
                  src={siteConfig.founder.image} 
                  alt={siteConfig.founder.name}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-xl shadow-md">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#718096] font-semibold">
                    V Construction & Design Studio
                  </p>

                  <p className="text-[15px] font-bold text-[#16283F] mt-1">
                    Designing With Purpose
                  </p>
                </div>

              </div>
            </div>

            {/* CONTENT */}

            <div className="lg:col-span-6">

              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">
                  OUR COMPANY
                </span>

                <div className="w-8 h-[2px] bg-[#1769B0]" />
              </div>

              <h2 className="font-heading text-[32px] sm:text-[42px] font-bold text-[#16283F] leading-tight">
                More Than Construction.
                <br />
                <span className="text-[#1769B0]">
                  We Create Experiences.
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-[15px] text-[#718096] leading-relaxed">

                <p>
                  V Construction & Design Studio is a design and construction
                  studio focused on creating modern residential, commercial
                  and interior spaces.
                </p>

                <p>
                  From the first conversation to the final handover, we bring
                  together creative design, technical planning, engineering
                  expertise and disciplined project execution.
                </p>

                <p>
                  Our approach is simple — understand the client, plan every
                  detail, execute with care and deliver a space that continues
                  to create value for years to come.
                </p>

              </div>

              {/* HIGHLIGHTS */}

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="border-l-2 border-[#1769B0] pl-4">
                  <p className="text-[22px] font-bold text-[#16283F]">
                    Design
                  </p>
                  <p className="text-[12px] text-[#718096] mt-1">
                    Thoughtful & Functional
                  </p>
                </div>

                <div className="border-l-2 border-[#1769B0] pl-4">
                  <p className="text-[22px] font-bold text-[#16283F]">
                    Quality
                  </p>
                  <p className="text-[12px] text-[#718096] mt-1">
                    Built To Last
                  </p>
                </div>

                <div className="border-l-2 border-[#1769B0] pl-4">
                  <p className="text-[22px] font-bold text-[#16283F]">
                    Trust
                  </p>
                  <p className="text-[12px] text-[#718096] mt-1">
                    Transparent Process
                  </p>
                </div>

                <div className="border-l-2 border-[#1769B0] pl-4">
                  <p className="text-[22px] font-bold text-[#16283F]">
                    Delivery
                  </p>
                  <p className="text-[12px] text-[#718096] mt-1">
                    Structured Execution
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY TIMELINE
      ====================================================== */}

      <section className="py-16 lg:py-24 bg-[#F5FAFE] border-y border-[#E5EDF4]">

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[650px] mx-auto mb-16">

            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">
              OUR JOURNEY
            </span>

            <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-[#16283F] mt-2">
              Growing Through Every Project
            </h2>

            <p className="text-[14px] text-[#718096] mt-4 leading-relaxed">
              Our journey is shaped by the spaces we create, the people we
              work with and the experience we gain with every project.
            </p>

          </div>

          <div className="relative">

            {/* TIMELINE LINE */}

            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[#D8E5EF] md:-translate-x-1/2" />

            <div className="space-y-10">

              {journey.map((item, index) => (

                <div
                  key={item.year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >

                  {/* CONTENT */}

                  <div
                    className={`pl-12 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:pl-14"
                    }`}
                  >

                    <span className="text-[13px] font-bold text-[#1769B0] tracking-[0.15em]">
                      {item.year}
                    </span>

                    <h3 className="text-[19px] font-bold text-[#16283F] mt-1">
                      {item.title}
                    </h3>

                    <p className="text-[13px] text-[#718096] leading-relaxed mt-2">
                      {item.desc}
                    </p>

                  </div>

                  {/* DOT */}

                  <div className="absolute left-[20px] md:left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1769B0] ring-4 ring-[#F5FAFE]" />

                  {/* EMPTY SIDE */}

                  <div className="hidden md:block" />

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}

      <section className="py-16 lg:py-24">

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[650px] mx-auto mb-12">

            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">
              OUR DIRECTION
            </span>

            <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-[#16283F] mt-2">
              Vision & Mission
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {visionMission.map((item) => (

              <div
                key={item.type}
                className="relative overflow-hidden rounded-2xl border border-[#E5EDF4] bg-white p-8 lg:p-10 shadow-sm"
              >

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAF5FC] rounded-bl-full opacity-70" />

                <div className="relative">

                  <div className="w-12 h-12 rounded-xl bg-[#EAF5FC] flex items-center justify-center text-[#1769B0]">
                    {item.icon}
                  </div>

                  <span className="block text-[11px] font-bold text-[#1769B0] tracking-[0.2em] mt-7">
                    {item.type}
                  </span>

                  <h3 className="font-heading text-[26px] font-bold text-[#16283F] mt-2">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#718096] leading-relaxed mt-4 max-w-[500px]">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR TEAM
      ====================================================== */}

      {/* <section className="py-16 lg:py-24 bg-[#F5FAFE] border-y border-[#E5EDF4]">

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">

            <div>

              <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">
                OUR TEAM
              </span>

              <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-[#16283F] mt-2">
                People Behind The Projects
              </h2>

              <p className="text-[14px] text-[#718096] max-w-[600px] mt-3">
                A collaborative team bringing together design thinking,
                engineering knowledge and project execution.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {team.map((member) => (

              <div
                key={member.name}
                className="group bg-white rounded-xl overflow-hidden border border-[#E5EDF4] hover:border-[#1769B0] transition-all duration-300"
              >

                <div className="relative aspect-[4/4.2] overflow-hidden bg-[#EAF5FC]">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-[16px] font-bold text-[#16283F]">
                    {member.name}
                  </h3>

                  <p className="text-[12px] text-[#1769B0] font-medium mt-1">
                    {member.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section> */}

      {/* =====================================================
          AWARDS & ACHIEVEMENTS
      ====================================================== */}

      {/* <section className="py-16 lg:py-24">

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[680px] mx-auto mb-12">

            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">
              AWARDS & ACHIEVEMENTS
            </span>

            <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-[#16283F] mt-2">
              Milestones That Matter
            </h2>

            <p className="text-[14px] text-[#718096] mt-3 leading-relaxed">
              Every completed project, client relationship and milestone
              contributes to our journey of continuous improvement.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {achievements.map((item) => (

              <div
                key={item.year}
                className="group relative border border-[#E5EDF4] rounded-xl p-6 bg-white hover:border-[#1769B0] hover:shadow-md transition-all duration-300"
              >

                <div className="flex items-start justify-between">

                  <div className="w-11 h-11 rounded-lg bg-[#EAF5FC] flex items-center justify-center text-[#1769B0]">
                    {item.icon}
                  </div>

                  <span className="text-[28px] font-bold text-[#1769B0]/15 group-hover:text-[#1769B0]/30 transition-colors">
                    {item.year}
                  </span>

                </div>

                <h3 className="text-[16px] font-bold text-[#16283F] mt-6">
                  {item.title}
                </h3>

                <p className="text-[13px] text-[#718096] leading-relaxed mt-2">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section> */}

      {/* =====================================================
          OUR PROCESS
      ====================================================== */}

      <section className="py-16 lg:py-24 bg-[#F5FAFE] border-y border-[#E5EDF4]">

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[700px] mx-auto mb-14">

            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">
              OUR PROCESS
            </span>

            <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-[#16283F] mt-2">
              From First Idea To Final Handover
            </h2>

            <p className="text-[14px] text-[#718096] mt-4 leading-relaxed">
              A structured and transparent workflow designed to keep your
              project moving from concept to completion.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {process.map((item) => (

              <div
                key={item.number}
                className="group relative bg-white border border-[#E5EDF4] rounded-xl p-7 hover:border-[#1769B0] hover:shadow-md transition-all duration-300"
              >

                <div className="flex items-start justify-between">

                  <div className="w-11 h-11 rounded-lg bg-[#EAF5FC] flex items-center justify-center text-[#1769B0]">
                    {item.icon}
                  </div>

                  <span className="font-mono text-[28px] font-bold text-[#1769B0]/15 group-hover:text-[#1769B0] transition-colors">
                    {item.number}
                  </span>

                </div>

                <h3 className="text-[17px] font-bold text-[#16283F] mt-6">
                  {item.title}
                </h3>

                <p className="text-[13px] text-[#718096] leading-relaxed mt-2">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-[#1769B0]">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <CTASection />

    </main>
  );
}