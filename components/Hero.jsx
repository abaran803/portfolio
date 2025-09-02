"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="pt-12 md:pt-20">
      <div className="container-g grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 badge mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Open to SDE1/2 roles
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Full‑Stack Developer <span className="opacity-60">|</span> React.js
            Expert
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            I build scalable web apps with clean design, efficient code, and
            modern engineering practices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="badge">
              View Projects
            </a>
            <a
              href="https://github.com/abaran803"
              target="_blank"
              className="badge"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ayush-baranwal"
              target="_blank"
              className="badge"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-8"
        >
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-slate-500">Experience</div>
              <div className="text-2xl font-semibold">2.8 yrs</div>
            </div>
            <div>
              <div className="text-slate-500">Primary</div>
              <div className="text-2xl font-semibold">React.js</div>
            </div>
            <div>
              <div className="text-slate-500">Stack</div>
              <div className="text-2xl font-semibold">MERN</div>
            </div>
            <div>
              <div className="text-slate-500">Location</div>
              <div className="text-2xl font-semibold">India</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
