import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Person",
          "name":"Muhammad Bilal",
          "url":"https://your-portfolio.vercel.app",
          "sameAs":["https://www.linkedin.com/in/muhammad-bilal-eng/","https://github.com/yourusername"],
          "jobTitle":"Senior Full-Stack Developer"
        }) }}
      />
    </main>
  );
}
