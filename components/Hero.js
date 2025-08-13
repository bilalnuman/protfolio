import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container py-20 md:py-28">
      <motion.p className="text-cyan-300 mb-3" initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}}>Hi, I'm</motion.p>
      <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        Muhammad Bilal Senior Full‑Stack Developer
      </motion.h1>
      <motion.p className="mt-6 text-lg text-slate-300 max-w-2xl" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        I build scalable, SEO‑optimized web & SaaS solutions using React, Next.js, Node.js, TypeScript, and Microservices.
      </motion.p>
      <motion.div className="mt-8 flex flex-wrap gap-3" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        <a className="btn" href="#projects">View Projects</a>
        <a className="btn" href="mailto:you@example.com">Hire Me</a>
        <a className="btn" href="https://www.linkedin.com/in/muhammad-bilal-eng/" target="_blank" rel="noreferrer">LinkedIn</a>
      </motion.div>
    </section>
  );
}
