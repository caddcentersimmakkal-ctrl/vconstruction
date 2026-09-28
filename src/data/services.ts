export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "Home" | "Building2" | "Armchair" | "Wrench" | "Compass" | "ClipboardList";
  slug: string;
  features: string[];
  image: string;
}

export const servicesData: Service[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    shortDescription: "Your dream home, our priority.",
    fullDescription:
      "From bespoke luxury villas to contemporary multi-family residences, we construct homes crafted around your lifestyle. We handle everything from structural engineering to ultra-fine interior finishes.",
    iconName: "Home",
    slug: "residential-construction",
    features: [
      "Custom Luxury Villa Construction",
      "Structural Engineering & Blueprinting",
      "Sustainable & Eco-friendly Materials",
      "Turnkey Project Execution",
    ],
    image: "/images/hero-villa.png",
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    shortDescription: "Spaces for greater growth.",
    fullDescription:
      "State-of-the-art office towers, retail complexes, and corporate headquarters built for longevity, energy efficiency, and modern business workflows.",
    iconName: "Building2",
    slug: "commercial-construction",
    features: [
      "Corporate Office Buildings",
      "Retail & Showroom Outlets",
      "High-Load Structural Engineering",
      "Safety & Regulatory Compliance",
    ],
    image: "/images/hero-office.png",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortDescription: "Spaces that inspire.",
    fullDescription:
      "Refined interior space planning, bespoke furniture design, luxury lighting, and high-end material selection that transform indoor environments into living art.",
    iconName: "Armchair",
    slug: "interior-design",
    features: [
      "Space Planning & Concept 3D Renderings",
      "Bespoke Woodwork & Joinery",
      "Acoustic & Ambient Lighting Design",
      "Luxury Finishes & Textures",
    ],
    image: "/images/hero-interior.png",
  },
  // {
  //   id: "renovation-remodeling",
  //   title: "Renovation & Remodeling",
  //   shortDescription: "Give new life to your space.",
  //   fullDescription:
  //     "Transform older structures into contemporary masterpieces. We revitalize facades, reconfigure floor layouts, and upgrade technical infrastructure seamlessly.",
  //   iconName: "Wrench",
  //   slug: "renovation-remodeling",
  //   features: [
  //     "Full House & Villa Upgrades",
  //     "Structural Retrofitting & Reinforcement",
  //     "Facade Modernization",
  //     "Kitchen & Bath Transformations",
  //   ],
  //   image: "/images/project-renovation.png",
  // },
  {
    id: "real-estate-plots",
    title: "Plots & Real Estate",
    shortDescription: "Invest in the right location.",
    fullDescription:
      "Explore residential plots and land opportunities in promising locations, with verified property information, site assistance, and guidance to help you make confident real estate decisions.",
    iconName: "Compass",
    slug: "plots-land-real-estate",
    features: [
      "Residential Plots & Land",
      "DTCP / RERA Approved Properties",
      "Prime Location Opportunities",
      "Site Visits & Property Guidance",
    ],
    image: "/images/cta-building.png",
  }
  // {
  //   id: "architectural-design",
  //   title: "Architectural Design",
  //   shortDescription: "Thoughtful design, better living.",
  //   fullDescription:
  //     "Innovative architectural concepts combining aesthetic elegance, daylight integration, spatial flow, and environmental sustainability.",
  //   iconName: "Compass",
  //   slug: "architectural-design",
  //   features: [
  //     "Conceptual Architecture & Site Layouts",
  //     "3D Visualizations & Walkthroughs",
  //     "Zoning & Building Permit Approvals",
  //     "Passive Solar & Climate Design",
  //   ],
  //   image: "/images/hero-villa.png",
  // },
  // {
  //   id: "project-management",
  //   title: "Project Management",
  //   shortDescription: "On time. On budget. Always.",
  //   fullDescription:
  //     "Rigorous end-to-end construction oversight ensuring zero cost overruns, strict safety standards, and exact adherence to architectural blueprints.",
  //   iconName: "ClipboardList",
  //   slug: "project-management",
  //   features: [
  //     "Cost Estimation & Budget Control",
  //     "Vendor & Subcontractor Oversight",
  //     "Quality Assurance Testing",
  //     "On-Time Project Delivery",
  //   ],
  //   image: "/images/cta-building.png",
  // },
];
