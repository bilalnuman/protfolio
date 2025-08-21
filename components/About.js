export default function About() {
  const skills = ["React","Next.js","TypeScript","Tailwind","HeroUI","Redux","Material UI","Styled Components","Framer Motion","GraphQL","Docker","Vercel"];
  return (
    <section id="about" className="container py-12">
      <h2 className="section-title">About</h2>
      <div className="card mt-6">
        <p className="text-slate-300 leading-relaxed">
          I’m a Senior Frontend Developer with 3+ years of experience building scalable, SEO-optimized web and SaaS applications. I specialize in React, Next.js, and TypeScript — delivering high-performance, accessible, and user-centric solutions that drive business growth.
        </p>
        <div className="mt-4 flex flex-wrap">{skills.map((s,i)=>(<span key={i} className="badge">{s}</span>))}</div>
      </div>
    </section>
  );
}
