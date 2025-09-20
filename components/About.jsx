import Section from "@/components/Section";
export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Hi, I’m Ayush">
      <div className="prose dark:prose-invert max-w-none">
        <p>
          I’m a full‑stack developer with 2.8 years of experience at{" "}
          <strong>Fynd</strong> and <strong>Webkul</strong>. I specialize in{" "}
          <strong>React.js</strong> and the <strong>MERN</strong> stack, with a
          passion for building clean, scalable, and high‑performance
          applications.
        </p>
        <p>
          I love problem solving, learning DevOps topics like{" "}
          <strong>Docker</strong>, <strong>CI/CD</strong> and{" "}
          <strong>Kubernetes</strong>, and turning complex requirements into
          smooth user experiences.
        </p>
        <p>
          Recently, I worked on a workflow automation platform: added multi‑node
          deletion, workflow validation, import/export/share, autosave, semantic
          versioning, execution/version tables, IfActivity enhancements, trigger
          validation, fit‑view, and more. I also wrote extensive unit tests
          (~95% component coverage) with Jest/RTL.
        </p>
      </div>
    </Section>
  );
}
