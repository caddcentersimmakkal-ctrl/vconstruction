import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CTASection } from "@/components/home/CTASection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <ServicesSection />
      <ProjectsSection />
      <ImpactSection />
      <ClientsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
