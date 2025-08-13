export default function Testimonials() {
  const items = [
    { name: "Client A", role: "PM, SaaS Startup", quote: "Delivered on time with excellent performance and SEO." },
    { name: "Client B", role: "CTO, E‑commerce", quote: "Clean architecture and strong communication across sprints." }
  ];
  return (
    <section className="container py-12">
      <h2 className="section-title">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((t,i)=>(
          <blockquote key={i} className="card">
            <p className="italic text-slate-300">“{t.quote}”</p>
            <p className="mt-3 text-slate-400">— {t.name}, {t.role}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
