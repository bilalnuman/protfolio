export default function Experience() {
  const items = [
    { role: "Senior Frontend Developer", company: "Zweidevs Pvt. Ltd. — Lahore", period: "Feb 2025 – Present",
      bullets: ["Built and optimized UIs with React.js, TypeScript, Tailwind CSS.", "Eveloped reusable component library improving dev efficiency by 30%.", "Integrated backend APIs for real-time data sync and smooth workflows.","Mentored junior developers and led UI code reviews."] },
    { role: "Frontend Developer", company: "BitCloud Solutions — Lahore", period: "April 2023 – Sep 2024",
      bullets: ["Built responsive interfaces with Next.js, improving load times by 40%.", "Implemented lazy loading & code splitting for performance optimization.", "Collaborated with design/QA teams ensuring accessibility compliance.","Enhanced user experience through modern UI patterns."] }
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
