"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Calendar } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Construction",
    location: "Madurai",
    budget: "₹25 Lakhs - ₹50 Lakhs",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg("Please fill in your Name, Phone, and Email address.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-white">
      {/* PAGE BANNER */}
      <section className="bg-gradient-to-r from-[#EAF5FC] to-[#F5FAFE] py-14 lg:py-18 border-b border-[#E5EDF4]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">GET IN TOUCH</span>
            <div className="w-8 h-[2px] bg-[#1769B0]" />
          </div>
          <h1 className="font-heading text-[36px] sm:text-[48px] font-bold text-[#16283F] leading-tight">
            Book an Architectural Consultation
          </h1>
          <p className="text-[#718096] text-[15px] max-w-[620px] mt-2">
            Have an upcoming residential villa, commercial space, or renovation project? Speak directly with our lead architects and project engineers.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + SITE DETAILS */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* CONTACT DETAILS & STUDIO INFO (Approx 5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[12px] font-bold text-[#1769B0] uppercase tracking-[0.2em]">OUR STUDIO</span>
                <h2 className="font-heading text-[28px] sm:text-[34px] font-bold text-[#16283F]">
                  V Construction & Design Studio
                </h2>
                <p className="text-[#718096] text-[14.5px] leading-relaxed">
                  Visit our design office for material sample reviews, 3D project walkthroughs, and budget estimations.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#16283F]">Office Address</h3>
                    <p className="text-[13.5px] text-[#718096] leading-snug mt-0.5">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#16283F]">Phone / WhatsApp</h3>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-[13.5px] text-[#1769B0] hover:underline font-medium block mt-0.5">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#16283F]">Email Address</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[13.5px] text-[#1769B0] hover:underline font-medium block mt-0.5">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#16283F]">Working Hours</h3>
                    <p className="text-[13.5px] text-[#718096] mt-0.5">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* MAP PLACEHOLDER FRAME */}
              <div className="w-full h-[200px] rounded-2xl bg-[#EAF5FC] border border-[#E5EDF4] flex flex-col items-center justify-center text-center p-6 space-y-2">
                <MapPin className="w-8 h-8 text-[#1769B0]" />
                <span className="text-[14px] font-bold text-[#16283F]">Studio Location: Madurai, Tamil Nadu</span>
                <span className="text-[12px] text-[#718096]">Landmark: Near KK Nagar Park Arch</span>
              </div>
            </div>

            {/* ENQUIRY FORM (Approx 7 cols) */}
            <div className="lg:col-span-7 bg-[#F5FAFE] border border-[#E5EDF4] rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="mb-6">
                <h3 className="text-[22px] font-bold text-[#16283F]">Project Consultation Form</h3>
                <p className="text-[13.5px] text-[#718096] mt-1">
                  Fill in your details below and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white border border-[#1769B0]/30 rounded-xl p-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#EAF5FC] text-[#1769B0] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                  </div>
                  <h4 className="text-[20px] font-bold text-[#16283F]">Consultation Request Received!</h4>
                  <p className="text-[14px] text-[#718096] max-w-[420px] mx-auto">
                    Thank you, <span className="font-semibold text-[#16283F]">{formData.name}</span>. Our lead architectural consultant will call you at <span className="font-semibold text-[#16283F]">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        projectType: "Residential Construction",
                        location: "Madurai",
                        budget: "₹25 Lakhs - ₹50 Lakhs",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1769B0] hover:underline pt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Madurai / Chennai"
                        className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                      >
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        <option value="Architectural Design">Architectural Design</option>
                        <option value="Project Management">Project Management</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                      >
                        <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                        <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                        <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                        <option value="₹1 Crore+">₹1 Crore+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your plot size, architectural preferences, timeline expectations..."
                      className="w-full bg-white border border-[#E5EDF4] rounded-lg px-4 py-2.5 text-[14px] text-[#26384A] focus:outline-none focus:border-[#1769B0]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1769B0] hover:bg-[#1677C8] text-white font-medium text-[14px] py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Request a Consultation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
