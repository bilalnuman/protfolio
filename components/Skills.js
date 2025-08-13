export default function Skills() {
  const groups = [
    { title: "Frontend", items: ["React","Next.js","Vue.js","Angular.js","TypeScript","Tailwind","MUI","HeroUi","Shadcn","Redux","Zustand","Formik","ElectronJS"] },
    { title: "Backend", items: ["Node.js","Express","Nest.js","REST","GraphQL","Microservices"] },
    { title: "Data & Cloud", items: ["MongoDB","PostgreSQL","Prisma","Docker","AWS","Vercel","Shared Hosting","CI/CD","Serverless Functions"] }
  ];
  return (
    <section id="skills" className="container py-12">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {groups.map((g,i)=>(
          <div key={i} className="card">
            <h3 className="font-semibold mb-2">{g.title}</h3>
            <div className="flex flex-wrap">{g.items.map((s,j)=>(<span key={j} className="badge">{s}</span>))}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
