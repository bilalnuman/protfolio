export default function Experience() {
  const items = [
    { role: "Senior Full‑Stack Developer", company: "Software House — Karachi", period: "Jun 2023 – Present",
      bullets: ["Led SEO‑optimized SaaS, +50% organic traffic.", "Node.js microservices & Next.js app routing; 40% faster deploys.", "Observability & CI/CD on Vercel/GitHub Actions."] },
    { role: "Full‑Stack Developer", company: "Software House — Lahore", period: "Jan 2021 – May 2023",
      bullets: ["E‑commerce modules with SSR/ISR (Next.js).", "Analytics via MongoDB aggregations.", "Agile delivery with Jira & Scrum."] }
  ];
  return (
    <section id="experience" className="container py-12">
      <h2 className="section-title">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((x,i)=>(
          <article key={i} className="card">
            <h3 className="text-xl font-semibold">{x.role}</h3>
            <p className="text-slate-400">{x.company}</p>
            <p className="text-slate-500 text-sm">{x.period}</p>
            <ul className="list-disc ml-5 mt-3 space-y-1 text-slate-300">
              {x.bullets.map((b,j)=>(<li key={j}>{b}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
