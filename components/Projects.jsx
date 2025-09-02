import Section from "@/components/Section";
const data = [
  {
    title: "Workflow Automation (Fynd)",
    desc: "React Flow-based execution & validation with versioning and import/export/share.",
    highlights: ["React Flow", "Versioning", "Autosave", "Validation"],
    links: [{ label: "Case Study", href: "#blog" }],
  },
  {
    title: "E‑Commerce Extensions (Webkul)",
    desc: "Custom integrations & extensions for Shopify/Magento; performance tuning.",
    highlights: ["React", "REST APIs", "Plugins"],
    links: [{ label: "Overview", href: "#experience" }],
  },
];
function ProjectCard({ p }) {
  return (
    <div className="card p-6 flex flex-col">
      <div className="text-lg font-semibold">{p.title}</div>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.highlights.map((h) => (
          <span key={h} className="badge">
            {h}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {p.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" className="link">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid sm:grid-cols-2 gap-4">
        {data.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
