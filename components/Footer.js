export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="container py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Muhammad Bilal. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a className="link" href="https://github.com/bilalnuman" target="_blank" rel="noreferrer">GitHub</a>
          <a className="link" href="https://www.linkedin.com/in/muhammad-bilal-eng/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link" href="mailto:bilal.kalri@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
