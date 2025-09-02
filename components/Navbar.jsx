"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/50 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="container-g flex items-center justify-between h-16">
        <Link href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="AB" className="h-7 w-7" />
          <span className="font-semibold">Ayush Baranwal</span>
        </Link>
        <nav className={clsx("md:flex items-center gap-6 font-medium", open ? "block" : "hidden md:block")}>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#blog" className="hover:opacity-80">Writing</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a href="/Ayush-Baranwal-Resume.pdf" className="badge">Resume</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="badge" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {mounted && resolvedTheme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button className="md:hidden badge" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <Menu size={18}/>
          </button>
        </div>
      </div>
    </header>
  );
}
