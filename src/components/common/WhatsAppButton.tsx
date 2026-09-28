"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* TOOLTIP */}
      <div
        className={`mr-3 bg-[#16283F] text-white text-[12px] font-medium px-3.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat on WhatsApp
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-13 h-13 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-[#25D366]" />
      </a>
    </div>
  );
};
