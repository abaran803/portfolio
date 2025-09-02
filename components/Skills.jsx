import Section from "@/components/Section";
const items = [
  { group: "Frontend", list: ["React.js", "Next.js", "Redux", "React Query", "React Hook Form", "Material UI", "Tailwind CSS", "Jest / RTL"] },
  { group: "Backend", list: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Kafka"] },
  { group: "DevOps & Tools", list: ["Docker", "Kubernetes (learning)", "GitHub Actions (CI/CD)", "REST APIs", "Postman", "VS Code"] },
  { group: "Languages", list: ["JavaScript", "TypeScript", "C++"] },
  { group: "Strengths", list: ["Problem Solving", "Debugging", "Workflow Automation"] },
];
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((cat) => (
          <div key={cat.group} className="card p-5">
            <div className="font-semibold mb-3">{cat.group}</div>
            <div className="flex flex-wrap gap-2">
              {cat.list.map((t) => (<span key={t} className="badge">{t}</span>))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
