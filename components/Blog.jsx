import Section from "@/components/Section";
const posts = [
  { title: "Improving Workflow Validation in React Flow", desc: "A deep dive into building reliable, user-friendly validation for complex workflows.", href: "#" },
  { title: "Debugging Complex React Apps Like a Pro", desc: "Patterns, tips, and tools that helped me reduce time-to-fix in large codebases.", href: "#" },
  { title: "Docker for Developers — A Practical Journey", desc: "Notes and exercises from my path to becoming confident with Docker.", href: "#" },
];
export default function Blog() {
  return (
    <Section id="blog" eyebrow="Writing" title="Notes & Case Studies">
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((p) => (
          <a key={p.title} href={p.href} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="font-semibold">{p.title}</div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
            <div className="mt-4 link">Read →</div>
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">Tip: connect your real blog or add MDX later.</p>
    </Section>
  );
}
