"use client";

import { motion } from "framer-motion";
export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="section">
      <div className="container-g">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <div className="text-sm uppercase tracking-widest text-slate-500">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
