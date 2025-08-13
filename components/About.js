export default function About() {
  const skills = ["React","Next.js","Node.js","Express","TypeScript","MongoDB","PostgreSQL","Tailwind","Redux","Jest","Docker","Vercel"];
  return (
    <section id="about" className="container py-12">
      <h2 className="section-title">About</h2>
      <div className="card mt-6">
        <p className="text-slate-300 leading-relaxed">
          Full‑stack developer with 4+ years delivering high‑impact web apps for e‑commerce and SaaS.
          Focus on performance, accessibility, and clean architectures that scale.
        </p>
        <div className="mt-4 flex flex-wrap">{skills.map((s,i)=>(<span key={i} className="badge">{s}</span>))}</div>
      </div>
    </section>
  );
}
