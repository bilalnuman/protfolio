export default function Skills() {
  const skills = ["React", "Next.js", "Redux", "Node.js", "Express", "MongoDB", "TypeScript", "TailwindCSS", "Jest", "Docker", "AWS", "Vercel"];
  return (
    <section id="skills" className="container py-12">
      <h2 className="section-title">Skills</h2>
      <div className="card">
        <div className="flex flex-wrap">
          {skills.map((s, i) => <span key={i} className="badge">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
