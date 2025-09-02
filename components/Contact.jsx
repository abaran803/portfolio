import Section from "@/components/Section";
export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something">
      <div className="card p-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div><div className="text-sm text-slate-500">Email</div><a className="link" href="mailto:abaran803@gmail.com">abaran803@gmail.com</a></div>
          <div><div className="text-sm text-slate-500">Phone</div><a className="link" href="tel:+919795725293">+91 97957 25293</a></div>
          <div><div className="text-sm text-slate-500">LinkedIn</div><a className="link" target="_blank" href="https://linkedin.com/in/ayush-baranwal">linkedin.com/in/ayush-baranwal</a></div>
          <div><div className="text-sm text-slate-500">GitHub</div><a className="link" target="_blank" href="https://github.com/abaran803">github.com/abaran803</a></div>
        </div>
        <p className="mt-6">Open to <strong>SDE1/2</strong> roles in MERN/full‑stack development.</p>
      </div>
    </Section>
  );
}
