const data = [
  {
    title: "WorkTrack — Remote Workforce Management",
    desc: "Time tracking, tasks, attendance & reporting for distributed teams.",
    stack: ["Next.js", "Node.js", "MongoDB", "JWT"],
    link: "#"
  },
  {
    title: "QuickMart — Multi‑Vendor E‑commerce",
    desc: "Multi‑vendor marketplace with Stripe/PayPal, vendor dashboards.",
    stack: ["React", "Express", "MongoDB", "Tailwind"],
    link: "#"
  },
  {
    title: "MedLink — Telemedicine Web App",
    desc: "Appointments, WebRTC video, chat, and medical record uploads.",
    stack: ["React", "Socket.IO", "Node.js", "Cloudinary"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <article key={i} className="card flex flex-col">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-slate-300 mt-2 flex-1">{p.desc}</p>
            <div className="mt-3">
              {p.stack.map((s, j) => <span key={j} className="badge">{s}</span>)}
            </div>
            <a className="btn mt-4" href={p.link} target="_blank" rel="noreferrer">View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
