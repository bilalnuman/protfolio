export default function Hero() {
  return (
    <section className="container py-20 md:py-28">
      <p className="text-cyan-300 mb-4">Hi, I'm</p>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Muhammad Bilal, MERN Stack Developer
      </h1>
      <p className="mt-6 text-lg text-slate-300 max-w-2xl">
        I build fast, accessible, and scalable web apps using React, Node.js, Express, and MongoDB.
        Experienced with Agile delivery for clients across Pakistan, GCC, and the US.
      </p>
      <div className="mt-8 flex gap-3">
        <a className="btn" href="#projects">View Projects</a>
        <a className="btn" href="mailto:bilal.kalri@gmail.com">Hire Me</a>
      </div>
    </section>
  );
}
