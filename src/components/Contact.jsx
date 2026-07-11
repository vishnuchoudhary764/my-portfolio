import React, { useState } from "react";
import { Mail, MapPin, Send, Check, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PROFILE } from "../utils/data";
import { Reveal, Eyebrow, FigureLabel } from "./Ui";

const initialForm = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Tell me your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "Add a few more details (10+ characters).";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Wire this up to your own backend, form service, or mailto link.
    // Left as a client-side confirmation so the component works standalone.
    setStatus("sent");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="py-20 grid-line-border relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-60" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <Reveal>
          <FigureLabel n="06" title="Contact" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14 items-center ">
          <div>
            <Reveal delay={60}>
              <h2 className="font-display text-4xl sm:text-5xl ink-text max-w-md">
                Let's build something worth shipping.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="ink-soft mt-5 max-w-md leading-relaxed">
                Currently open to select full-time and internships opportunities. Reach out and
                I'll get back within a couple of hours.
              </p>
            </Reveal>

            <Reveal delay={180}>

             <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.12em] px-6 py-3 bg-white text-paper rounded-sm mt-8 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={15} /> {PROFILE.email}
              </a>
             
            </Reveal>
             <Reveal delay={180}>
              <a
                href="https://wa.me/917877691126?text=Hi%20Vasana%20Ram,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.12em] px-6 py-3 bg-green-500 text-white rounded-sm mt-4 hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp size={15} /> WhatsApp Me
              </a>
            </Reveal>


          </div>

          <Reveal delay={140}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5  border ink-border rounded-sm p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mono text-[10px] uppercase tracking-[0.15em] ink-soft">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border-b-2 grid-line-border focus:accent-border-b outline-none py-2 text-sm ink-text transition-colors duration-300"
                  placeholder="your name"
                  autoComplete="name"
                />
                {errors.name && <p className="mono text-[11px] mt-1.5 text-[#B85450]">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mono text-[10px] uppercase tracking-[0.15em] ink-soft">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border-b-2 grid-line-border focus:accent-border-b outline-none py-2 text-sm ink-text transition-colors duration-300"
                  placeholder="your email"
                  autoComplete="email"
                />
                {errors.email && <p className="mono text-[11px] mt-1.5 text-[#B85450]">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mono text-[10px] uppercase tracking-[0.15em] ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border-b-2 grid-line-border focus:accent-border-b outline-none py-2 text-sm ink-text resize-none transition-colors duration-300"
                  placeholder="What are you working on?"
                />
                {errors.message && <p className="mono text-[11px] mt-1.5 text-[#B85450]">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sent"}
                className="w-full mono text-xs uppercase tracking-[0.12em] px-6 py-3.5 accent-bg text-paper rounded-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 disabled:opacity-70"
              >
                {status === "sent" ? (
                  <>
                    <Check size={14} /> Message sent
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send message
                  </>
                )}
              </button>

            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}