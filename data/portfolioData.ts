export type PortfolioTag = "Website" | "App" | "Automation";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  businessType: string;
  servicesProvided: string[];
  shortDescription: string;
  keyResults: string[];
  techStack: string[];
  tags: PortfolioTag[];
  imageUrl?: string;
  overview: string;
  clientSituation: string;
  solution: string;
  resultsDetails: string[];
  techDetails: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "clinic-website-refresh",
    slug: "clinic-website-refresh",
    title: "Local Clinic Website Refresh",
    businessType: "Family medical clinic",
    servicesProvided: ["Website redesign", "Conversion copy", "Local SEO"],
    shortDescription:
      "Modernized a dated clinic site into a clear, mobile-friendly experience that made it simple to book appointments.",
    keyResults: ["+40% online bookings", "+22% increase in contact form enquiries"],
    techStack: ["Next.js", "Tailwind CSS", "Analytics & tracking"],
    tags: ["Website"],
    imageUrl: "/previews/image1.png",
    overview:
      "This family clinic had a dated site that didn't work well on phones and made it hard for new patients to understand services or book.",
    clientSituation:
      "Most new patients were still calling the front desk because the website was confusing on mobile and didn't clearly show how to book or which doctors were taking new patients.",
    solution:
      "We redesigned the site around clear service pages, prominent calls-to-action, and a streamlined booking flow that connects directly to their existing scheduling system.",
    resultsDetails: [
      "Online bookings became the primary way new patients scheduled appointments.",
      "Staff reported fewer back-and-forth phone calls to clarify basic information.",
      "Analytics now show exactly which service pages drive the most enquiries.",
    ],
    techDetails:
      "We implemented a responsive Next.js site with Tailwind CSS, connected existing booking tools via secure embeds, and set up basic analytics to track bookings by page.",
  },
  {
    id: "cafe-loyalty-app",
    slug: "cafe-loyalty-app",
    title: "Neighborhood Cafe Loyalty App",
    businessType: "Independent cafe",
    servicesProvided: ["Mobile app", "Loyalty program", "Push notifications"],
    shortDescription:
      "Launched a simple loyalty app that rewards regulars and brings them back in with timely offers.",
    keyResults: ["+30% increase in repeat visits", "Over 1,000 loyalty signups in first 90 days"],
    techStack: ["Cross-platform mobile", "Push notifications", "Simple CMS"],
    tags: ["App"],
    imageUrl: "/previews/image2.png",
    overview:
      "A busy neighborhood cafe wanted a lightweight way to reward regular customers without adding complexity for staff.",
    clientSituation:
      "Paper punch cards were getting lost, staff had to remember promos, and there was no simple way to let regulars know about new menu items or time-sensitive offers.",
    solution:
      "We designed a branded loyalty app with digital stamp cards, simple offers, and push notifications tied to slow periods and new product launches.",
    resultsDetails: [
      "Regular customers quickly adopted the app as their main way to track rewards.",
      "The team can now promote daily specials with a few taps instead of relying on in-store signage only.",
      "The owner has a clearer view of which offers actually drive visits.",
    ],
    techDetails:
      "We used a cross-platform framework to ship both iOS and Android from one codebase, integrated basic push notification tooling, and connected a lightweight CMS so staff can update offers without code.",
  },
  {
    id: "home-services-automation",
    slug: "home-services-automation",
    title: "Home Services Automation Toolkit",
    businessType: "Multi-crew home services company",
    servicesProvided: ["Custom software", "Scheduling automation", "CRM integration"],
    shortDescription:
      "Built a small internal toolkit that handles scheduling, reminders, and follow-ups so the team could focus on jobs, not admin.",
    keyResults: ["Saved ~10 hours of admin work per week", "More consistent follow-ups on quotes"],
    techStack: ["Internal web app", "API integrations", "Automation workflows"],
    tags: ["Automation"],
    imageUrl: "/previews/image3.png",
    overview:
      "A growing home services team was juggling jobs across whiteboards, spreadsheets, and individual calendars.",
    clientSituation:
      "Coordinators were retyping the same information into multiple tools and relying on memory for follow-ups, which led to missed opportunities and scheduling mistakes.",
    solution:
      "We created a simple internal web app that centralizes jobs, syncs key data between tools, and automatically sends reminders and follow-up messages.",
    resultsDetails: [
      "Coordinators now manage schedules from a single view instead of three different tools.",
      "Automated follow-ups on quotes led to a noticeable uptick in accepted jobs.",
      "Leadership has a clearer sense of workload and pipeline each week.",
    ],
    techDetails:
      "We built a secure internal web app that talks to the client's existing CRM and calendar tools via APIs, then layered in automation workflows for reminders and follow-ups.",
  },
];
