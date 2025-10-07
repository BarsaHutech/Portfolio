export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Realtime product analytics and cohort reports.",
    tags: ["Next.js", "Tailwind", "Charts"],
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
