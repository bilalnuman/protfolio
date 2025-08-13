export default function About() {
  return (
    <section id="about" className="container py-12">
      <h2 className="section-title">About</h2>
      <div className="card">
        <p className="text-slate-300 leading-relaxed">
          MERN developer with 3+ years of experience in software houses, building SaaS dashboards,
          e‑commerce, and real‑time apps. Strong focus on performance, clean architecture, and DX.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm text-slate-300">
          <li className="badge">React</li><li className="badge">Next.js</li><li className="badge">Node.js</li><li className="badge">Express</li>
          <li className="badge">MongoDB</li><li className="badge">TailwindCSS</li><li className="badge">Redux</li><li className="badge">AWS</li>
        </ul>
      </div>
    </section>
  );
}
