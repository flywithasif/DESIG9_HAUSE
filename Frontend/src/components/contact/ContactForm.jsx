import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const initial = { name: "", email: "", phone: "", projectType: "Architecture", message: "" };
const label = "flex flex-col gap-2 text-xs font-semibold";
const input = "w-full min-w-0 border border-stone-300 bg-paper px-3 py-3 text-xs font-normal outline-none focus:border-olive focus:ring-2 focus:ring-olive/10";

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  const update = (e) => setForm((old) => ({ ...old, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault(); 
    setBusy(true);

    const api = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const res = await fetch(`${api.replace(/\/$/, "")}/enquiries`, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(form) 
      });

      if (!res.ok) throw new Error("Enquiry submit nahi hui. Dobara try karein.");
      
      setSubmitted(true);
      setForm(initial);
    } catch (err) { 
      // Fallback to mailto if server is unreachable
      const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject type: ${form.projectType}\n\nMessage:\n${form.message}`);
      setSubmitted(true);
      window.location.href = `mailto:desig9hause@gmail.com?subject=${subject}&body=${body}`;
    } finally { 
      setBusy(false); 
    }
  }

  return (
    <>
      {submitted ? (
        <div className="py-12 px-6 text-center space-y-4 bg-white border border-stone-200 rounded-3xl shadow-sm">
          <div className="w-16 h-16 bg-[#c51f32]/10 text-[#c51f32] rounded-full flex items-center justify-center mx-auto border border-[#c51f32]/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif text-[#22221f]">Enquiry Submitted Successfully</h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
            Thank you. Our senior architectural coordinator will review your project details and get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2.5 rounded-full border border-stone-300 text-xs text-[#22221f] hover:bg-black hover:text-white transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={label}>
              Your name *
              <input className={input} name="name" value={form.name} onChange={update} placeholder="Full name" autoComplete="name" required/>
            </label>
            <label className={label}>
              Email address *
              <input className={input} type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" required/>
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className={label}>
              Phone number
              <input className={input} type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91" autoComplete="tel"/>
            </label>
            <label className={label}>
              Project type *
              <select className={input} name="projectType" value={form.projectType} onChange={update} required>
                <option>Architecture</option>
                <option>Interior Design</option>
                <option>Landscape Design</option>
                <option>Commercial Project</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <label className={label}>
            Tell us about your project *
            <textarea className={input} name="message" value={form.message} onChange={update} placeholder="Location, approximate size, requirements and timeline..." rows={5} required/>
          </label>

          <button type="submit" disabled={busy} className="inline-flex min-h-12 self-start items-center gap-3 bg-dark px-5 text-xs font-semibold text-white hover:bg-olive disabled:opacity-60 transition-all">
            {busy ? "Sending..." : "Send enquiry"} <Send size={15}/>
          </button>

          <small className="text-[10px] text-muted">Your information will only be used to respond to your enquiry.</small>
        </form>
      )}
    </>
  );
}