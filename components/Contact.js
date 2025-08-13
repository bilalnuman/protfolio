import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mnnzrawp"); // replace with your ID
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShow(true);
      const t = setTimeout(()=> setShow(false), 4000);
      return () => clearTimeout(t);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="container py-12">
      <h2 className="section-title">Contact</h2>
      <div className="card mt-6">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input className="card !p-3" id="name" name="name" placeholder="Your name" required />
          <input className="card !p-3" id="email" name="email" type="email" placeholder="Email" required />
          <textarea className="card !p-3" id="message" name="message" rows="4" placeholder="Your message" required />
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <button className="btn justify-center" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </form>
        {show && (<p className="text-green-400 mt-3">✅ Thanks! Your message has been sent.</p>)}
      </div>
    </section>
  );
}
