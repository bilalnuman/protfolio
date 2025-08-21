const data = [
  { title: "Mental Edge (AI Coaching Platform)", desc: " Created a scalable AI coaching web app offering personalized content and payments. Implemented with React.js, AWS Amplify, and Stripe.", stack: ["Next.js","Tailwind CSS","Django","MongoDB","JWT"], link: "https://portal.mentaledge.ai" },
  { title: "Gnizzel (Dental Appointment System)", desc: "Web-based appointment system for dental clinics, enabling seamless booking and schedule management. Powered by Next.js and AWS.", stack: ["React","Express","MongoDB","AntDesign"], link: "https://www.gnizzel.com/" },
  { title: "Watchlytics (E-commerce for Watches)", desc: "Developed a modern e-commerce site for luxury watches with fast product search, filtering, and checkout. Optimized with React and TypeScript", stack: ["Next.js","Tailwind CSS","Django","Stripe"], link: "https://staging.watchlytics.io/dashboard" },
  { title: "Camp Genie", desc: "Built Camp Genie, an online system to manage kids’ summer camp enrollments. Designed with scalability and ease of use in mind.", stack: ["Next.js","TypeScript","Supabase","Tailwind CSS"], link: "https://develop.thisiscampgenie.com/" }
];
export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-6 mt-6" style={{gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))"}}>
        {data.map((p,i)=>(
          <article key={i} className="card flex flex-col">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-slate-300 mt-2 flex-1">{p.desc}</p>
            <div className="mt-3">{p.stack.map((s,j)=>(<span key={j} className="badge">{s}</span>))}</div>
            <a className="btn mt-4" href={p.link} target="_blank" rel="noreferrer">View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
