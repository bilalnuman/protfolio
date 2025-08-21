import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container pt-10">
      <motion.p className="text-cyan-300 mb-3" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>Hi, I'm</motion.p>
      <motion.h1 className={`text-4xl md:text-6xl font-extrabold leading-tight`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        Muhammad Bilal<br/> Senior Frontend Developer
      </motion.h1>
      <motion.p className="mt-6 text-lg text-slate-300 max-w-2xl" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        Frontend Developer with <b className=" text-pink-600 font-normal"> 3+ years of experience</b> building high-performance, scalable, and user-friendly
        applications using <b className=" text-pink-600 font-normal"> React.js, Next.js, and TypeScript</b>. Skilled in <b className=" text-pink-600 font-normal"> real-time communication systems (chat,
          audio, video), API integrations (OpenAI, Google APIs, Stripe, Maps)</b>, and <b className=" text-pink-600 font-normal"> AI-powered applications</b>.
        Strong focus on <b className=" text-pink-600 font-normal">UI/UX best practices</b>, clean architecture, and delivering solutions that improve
        performance and user engagement. Seeking opportunities in <b className=" text-pink-600 font-normal">leading tech companies</b> to build innovative
        products at scale.
      </motion.p>
      <motion.div className="mt-8 flex flex-wrap gap-3 pt-20" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <a className="btn" href="#projects">View Projects</a>
        <a className="btn" href="mailto:bilal.kalri@gmail.com">Hire Me</a>
        <a className="btn" href="https://www.linkedin.com/in/muhammad-bilal-eng/" target="_blank" rel="noreferrer">LinkedIn</a>
      </motion.div>
    </section>
  );
}
