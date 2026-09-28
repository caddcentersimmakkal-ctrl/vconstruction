export interface GalleryItem {
  id: string;
  title: string;
  category: "Exterior" | "Interior" | "Commercial" | "Detail";
  image: string;
  aspect: "aspect-square" | "aspect-video" | "aspect-[4/3]" | "aspect-[3/4]";
}

export const galleryData: GalleryItem[] = [
  { id: "1", title: "Luxury Villa Exterior", category: "Exterior", image: "/images/hero-villa.png", aspect: "aspect-[4/3]" },
  { id: "2", title: "Glass Curtain Office Facade", category: "Commercial", image: "/images/hero-office.png", aspect: "aspect-video" },
  { id: "3", title: "Contemporary Lounge Interior", category: "Interior", image: "/images/hero-interior.png", aspect: "aspect-[4/3]" },
  { id: "4", title: "Renovated Residence Garden", category: "Exterior", image: "/images/project-renovation.png", aspect: "aspect-[3/4]" },
  { id: "5", title: "Skyscraper Geometry", category: "Detail", image: "/images/cta-building.png", aspect: "aspect-square" },
  { id: "6", title: "Modern Living Architecture", category: "Interior", image: "/images/project-interior.png", aspect: "aspect-video" },
];
