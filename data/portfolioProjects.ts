export type PortfolioFilter = "website" | "app" | "automation";

export type PortfolioProject = {
  id: string;
  imageSrc: string;
  alt: string;
  businessLabel: string;
  title: string;
  description: string;
  keyResult: string;
  filters: PortfolioFilter[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "streetfuel-freshpress",
    imageSrc: "/previews/image1.png",
    alt: "StreetFuel & FreshPress food truck and juice bar website preview",
    businessLabel: "FOOD TRUCK & JUICE BAR",
    title: "StreetFuel & FreshPress Ordering Website",
    description:
      "Designed a conversion-focused landing + ordering experience for a combined food truck and juice bar so office teams can pre-order meals and smoothies in one tap.",
    keyResult: "+22% increase in average order value within 6 weeks.",
    filters: ["website", "app"],
  },
  {
    id: "fadehouse-barbers",
    imageSrc: "/previews/image2.png",
    alt: "Fadehouse Barbers booking website preview",
    businessLabel: "BARBERSHOP",
    title: "Fadehouse Barbers Booking Experience",
    description:
      "Built a cinematic, dark-theme booking site for an appointment-first barbershop with live availability and a frictionless mobile flow.",
    keyResult: "80%+ bookings now happen online instead of phone calls.",
    filters: ["website"],
  },
  {
    id: "masala-court",
    imageSrc: "/previews/image3.png",
    alt: "Masala Court modern Indian dining website preview",
    businessLabel: "MODERN INDIAN RESTAURANT",
    title: "Masala Court Dining Website",
    description:
      "Created a copper-and-purple dining experience online for a modern Indian restaurant with attention on tasting menus and reservation-first intent.",
    keyResult: "+35% reservations from mobile users after redesign.",
    filters: ["website"],
  },
  {
    id: "swarna-atelier",
    imageSrc: "/previews/image4.png",
    alt: "Swarna Atelier Indian bridal jewellery landing page preview",
    businessLabel: "BRIDAL JEWELLERY BOUTIQUE",
    title: "Swarna Atelier Showcase Website",
    description:
      "Designed a luxurious tray-style browsing experience for a fine Indian jewellery boutique featuring polki, kundan, and private viewing appointments.",
    keyResult: "Reduced enquiry-to-appointment back-and-forth by 50%.",
    filters: ["website"],
  },
  {
    id: "ironpulse-club",
    imageSrc: "/previews/image5.png",
    alt: "IronPulse fitness club neon-themed website preview",
    businessLabel: "24/7 TRAINING CLUB",
    title: "IronPulse Gym Membership Website",
    description:
      "Developed a neon-inspired membership site for a strength & conditioning gym with tiered pricing, schedules, and class previews.",
    keyResult: "+27% new membership conversions during launch month.",
    filters: ["website"],
  },
];
