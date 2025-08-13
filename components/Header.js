export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur border-b border-slate-800">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="font-bold tracking-wide">Muhammad Bilal</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="/resume.pdf" className="btn">Download CV</a>
      </nav>
    </header>
  );
}
