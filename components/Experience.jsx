import Section from "@/components/Section";
function ExpItem({ role, company, period, points }) {
  return (
    <div className="card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="text-lg md:text-xl font-semibold">
          {role} - {company}
        </div>
        <div className="text-sm text-slate-500">{period}</div>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <div className="grid gap-4">
        <ExpItem
          role="Software Development Engineer 1"
          company="Fynd"
          period="Aug 2023 – Aug 2025"
          points={[
            "Enhanced workflow automation platform with multi-node deletion, validation, and disconnected-node highlighting.",
            "Added import/export/share, autosave, semantic versioning, and execution/version tables.",
            "Improved IfActivity, trigger validation, fit view; converted Swirl to React; added serverless template and forms.",
            "Built robust React.js + MUI components; achieved ~95% component test coverage with Jest/RTL.",
            "Led debugging/UX polish; collaborated with backend/design for seamless delivery.",
          ]}
        />
        <ExpItem
          role="Software Developer"
          company="Webkul"
          period="Jul 2021 – Aug 2023"
          points={[
            "Developed custom e‑commerce extensions and plugins with React.js and REST APIs.",
            "Shipped scalable frontend solutions; improved plugin performance and modularity.",
            "Maintained code quality with best practices and clean architecture.",
          ]}
        />
      </div>
    </Section>
  );
}
