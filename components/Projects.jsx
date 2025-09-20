import Section from "@/components/Section";

const data = [
  {
    title: "Recipe Sharing API",
    desc: "A comprehensive, production-ready REST API for sharing and discovering recipes, built with modern backend technologies and best practices.",
    highlights: ["NodeJS", "ExpressJS", "PostgreSQL", "Swagger"],
    links: [
      {
        label: "Project Link",
        href: "https://github.com/abaran803/masteringbackend-project",
      },
    ],
  },
  {
    title: "B Visualizer",
    desc: "Visual representation of Backtracking Algorithms like N-Queen, Rat in the maze and Sudoku Solver",
    highlights: ["React", "Backtracking", "Algorithms"],
    links: [
      {
        label: "Project Link",
        href: "https://github.com/abaran803/B-Visualizer",
      },
    ],
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
