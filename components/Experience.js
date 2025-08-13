export default function Experience() {
  const items = [
    {
      role: "MERN Stack Developer",
      company: "[Software House], Karachi",
      period: "Jun 2022 – Present",
      bullets: [
        "Built B2B/B2C apps for international clients; on‑time delivery across sprints.",
        "Optimized React components and API caching, cutting TTFB by ~35%.",
        "Implemented JWT auth, RBAC, and CI/CD pipelines (GitHub + Vercel)."
      ]
    },
    {
      role: "Full Stack Developer (MERN)",
      company: "[Software House], Lahore",
      period: "Jan 2021 – May 2022",
      bullets: [
        "Shipped SaaS analytics dashboards with aggregation pipelines.",
        "Migrated legacy modules to Node.js microservices on AWS.",
        "Collaborated with QA using Jira; 85%+ unit coverage with Jest."
      ]
    }
  ];

  return (
    <section id="experience" className="container py-12">
      <h2 className="section-title">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((x, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-semibold">{x.role}</h3>
            <p className="text-slate-400">{x.company}</p>
            <p className="text-slate-400 text-sm">{x.period}</p>
            <ul className="list-disc ml-5 mt-3 space-y-1 text-slate-300">
              {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
