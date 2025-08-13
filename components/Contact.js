import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnnzrawp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset(); // clear inputs
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container py-12">
      <h2 className="section-title">Contact</h2>
      <div className="card">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input className="card !p-3" name="name" placeholder="Your name" required />
          <input className="card !p-3" name="email" type="email" placeholder="Email" required />
          <textarea className="card !p-3" name="message" rows="4" placeholder="Your message" required />

          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input
            type="text"
            name="_honeypot"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />

          <button
            className="btn justify-center"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 mt-3">✅ Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-3">❌ Something went wrong. Please try again.</p>
        )}

        <p className="text-sm text-slate-400 mt-3">
          Tip: add <code>localhost:3000</code> and your Vercel domain in Formspree settings → Domains.
        </p>
      </div>
    </section>
  );
}
