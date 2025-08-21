import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="font-bold tracking-wide">Muhammad Bilal</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-white">{i.label}</a>
          ))}
          <a href="/Muhammad Bilal.pdf" className="btn">Download CV</a>
        </div>
        <button className="md:hidden btn" aria-label="Menu" onClick={()=>setOpen(!open)}>
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/70">
          <div className="container py-3 flex flex-col gap-2">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="py-2" onClick={()=>setOpen(false)}>{i.label}</a>
            ))}
            <a href="/resume.pdf" className="btn w-full text-center" onClick={()=>setOpen(false)}>Download CV</a>
          </div>
        </div>
      )}
    </header>
  );
}
