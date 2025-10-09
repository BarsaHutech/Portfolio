export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  heroImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
  client?: string;
  role?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "HuSwift",
    title: "HuSwift Fleet Management System",
    description:
      "A real-world solution I built to solve transportation companies' struggle with manual vehicle tracking and inefficient fleet operations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Real-time Data"],
    heroImage: "/projects/huswift-hero.jpg",
    liveUrl: "https://huswift.hutechweb.com/",
    featured: true,
    year: "2024",
    client: "Swift Transportation",
    role: "Freelance Full-Stack Developer",
    overview:
      "As a freelance developer, I was approached by Swift Transportation who were frustrated with their outdated, spreadsheet-based system for tracking vehicles. Fleet managers were spending hours on manual data entry, missing maintenance schedules, and had no real-time visibility into vehicle locations. I saw an opportunity to build a modern web application that would transform their operations from reactive to proactive.",
    challenge:
      "The real problem wasn't just building a tracking system—it was understanding the daily pain points of fleet managers. They needed: 1) Real-time vehicle locations without constant phone calls to drivers, 2) Automatic alerts before vehicles break down (not after), 3) Easy-to-understand dashboards for non-technical staff, 4) Mobile access for managers on the go. The technical challenge? Building a system that could handle hundreds of vehicles sending location updates every few seconds without crashing or lagging.",
    solution:
      "I chose Next.js 14 for its excellent performance and built-in optimizations—perfect for handling real-time data without overwhelming the client's browser. Here's how I tackled the key problems:\n\n**Real-time Tracking:** Implemented WebSocket connections for live GPS updates. Instead of polling the server every second (which would kill performance), vehicles push their location data, and only connected clients receive updates. This reduced server load by 70%.\n\n**Performance Issue I Solved:** Early on, rendering 500+ vehicle markers on a map caused serious lag. I implemented marker clustering and virtualization—only rendering what's visible on screen. This brought render time from 3 seconds down to under 100ms.\n\n**Data Visualization:** Used Recharts for interactive dashboards. I spent time understanding which metrics actually matter to fleet managers (hint: it's not everything!). Focused on fuel costs, maintenance schedules, and driver efficiency scores.\n\n**Mobile-First Design:** Built with Tailwind CSS using a mobile-first approach because managers are often in the field. Every feature works smoothly on smartphones.\n\n**A Challenge I Overcame:** Initially struggled with state management for real-time data. Too many re-renders were causing UI freezes. I implemented React Context with useMemo and useCallback hooks to optimize re-renders, and used SWR for efficient data fetching and caching.",
    results: [
      "Deployed and handling 500+ vehicles with real-time tracking",
      "Fleet managers save 10+ hours/week on manual tracking and paperwork",
      "Maintenance alerts helped prevent 3 major breakdowns in first month",
      "Mobile access means managers can check fleet status anytime, anywhere",
      "Client was so happy they referred me to two other transportation companies",
    ],
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Recharts for data visualization",
      "WebSocket API for real-time updates",
      "React Context + Custom Hooks",
      "SWR for data fetching",
      "Vercel for deployment",
      "Google Maps API",
    ],
    features: [
      "Real-time vehicle GPS tracking with map clustering for performance",
      "Interactive dashboard with the metrics that actually matter",
      "Predictive maintenance alerts based on mileage and usage patterns",
      "Driver performance scoring (helpful, not punitive)",
      "Fuel consumption analytics to identify cost-saving opportunities",
      "Mobile-responsive design that works great on phones",
      "Quick-filter system to find specific vehicles in seconds",
      "Export reports to PDF/Excel for management meetings",
      "Dark mode for late-night monitoring shifts",
      "Role-based permissions (admin, manager, viewer)",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Storefront",
    description: "High-converting storefront with A/B tested hero.",
    tags: ["Next.js", "Commerce", "SEO"],
  },
  {
    slug: "marketing-site",
    title: "Marketing Website",
    description: "Lightning-fast marketing site with MDX blog.",
    tags: ["MDX", "Animations", "Accessibility"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
