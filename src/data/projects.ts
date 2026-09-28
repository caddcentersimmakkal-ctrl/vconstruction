export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Interior" | "Plots";
  location: string;
  image: string;
  slug: string;
  completionYear: string;
  area: string;
  client: string;
  description: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "modern-villa",
    title: "Modern Villa",
    category: "Residential",
    location: "Madurai",
    image: "/images/project-villa.png",
    slug: "modern-villa",
    completionYear: "2024",
    area: "4,500 sq.ft",
    client: "Private Owner",
    description: "A luxury minimalist villa featuring expansive glass facades, open-plan spatial arrangements, integrated infinity landscaping, and custom teak millwork.",
    featured: true,
  },
  {
    id: "office-space",
    title: "Office Space",
    category: "Commercial",
    location: "Madurai",
    image: "/images/project-office.png",
    slug: "office-space",
    completionYear: "2024",
    area: "18,000 sq.ft",
    client: "Tech Corporate HQ",
    description: "A sleek modern corporate office complex with curtain glass walls, sustainable energy systems, and high-productivity ergonomic interior spaces.",
    featured: true,
  },
  {
    id: "contemporary-living-room",
    title: "Contemporary Living Room",
    category: "Interior",
    location: "Madurai",
    image: "/images/project-interior.png",
    slug: "contemporary-living-room",
    completionYear: "2025",
    area: "1,200 sq.ft",
    client: "Private Residence",
    description: "High-end bespoke interior architecture emphasizing natural stone textures, accent wooden panelling, and customized warm lighting fixtures.",
    featured: true,
  },
  {
    id: "home-renovation",
    title: "Home Renovation",
    category: "Plots",
    location: "Madurai",
    image: "/images/project-renovation.png",
    slug: "home-renovation",
    completionYear: "2024",
    area: "3,200 sq.ft",
    client: "Heritage Restoration",
    description: "Complete modern redesign and structural overhaul of a 25-year-old family estate into an ultra-modern eco-conscious sanctuary.",
    featured: true,
  },
  {
    id: "horizon-skyline-tower",
    title: "Horizon Architecture Pavilion",
    category: "Plots",
    location: "Madurai",
    image: "/images/cta-building.png",
    slug: "horizon-architecture-pavilion",
    completionYear: "2024",
    area: "12,000 sq.ft",
    client: "Civic Foundation",
    description: "An iconic modern architectural pavilion demonstrating geometric glass structures, daylight optimization, and structural innovation.",
    featured: false,
  },
  {
    id: "zenith-corporate-park",
    title: "Zenith Business Hub",
    category: "Commercial",
    location: "Madurai",
    image: "/images/hero-office.png",
    slug: "zenith-business-hub",
    completionYear: "2025",
    area: "25,000 sq.ft",
    client: "Zenith Group",
    description: "Multi-tenant commercial complex boasting state-of-the-art HVAC systems, glass atriums, and premium retail plazas.",
    featured: false,
  },
];
