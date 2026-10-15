export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "arun",
    name: "Arun Kumar",
    role: "Homeowner",
    quote:
      "V Construction delivered our dream home with exceptional quality and on-time completion. Their team was professional and supportive throughout the process.",
    initials: "AK",
    rating: 5,
  },
  {
    id: "priya",
    name: "Priya S",
    role: "Business Owner",
    quote:
      "Excellent design sense and flawless execution. They turned our office space into a modern and productive environment.",
    initials: "PS",
    rating: 5,
  },
  {
    id: "karthik",
    name: "Karthik R",
    role: "Project Client",
    quote:
      "From planning to handover, everything was smooth. Truly a team that understands client needs and delivers with care.",
    initials: "KR",
    rating: 5,
  },
  {
    id: "liyamol",
    name: "Liyamol",
    role: "Homeowner",
    quote:
      "V Construction delivered our dream home with exceptional quality and on-time completion. Their team was professional and supportive throughout the process.",
    initials: "LM",
    rating: 5,
  },
  {
    id: "shyam",
    name: "Shyam",
    role: "Business Owner",
    quote:
      "Excellent design sense and flawless execution. They turned our office space into a modern and productive environment.",
    initials: "SM",
    rating: 5,
  },
  {
    id: "manikandan",
    name: "Manikandan",
    role: "Project Client",
    quote:
      "From planning to handover, everything was smooth. Truly a team that understands client needs and delivers with care.",
    initials: "MK",
    rating: 5,
  },
];
