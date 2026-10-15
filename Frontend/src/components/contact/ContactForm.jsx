import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const initial = {
  name: "",
  email: "",
  phone: "",
  projectType: "Architecture",
  message: "",
};

const label =
  "flex min-w-0 flex-col gap-2 text-xs font-semibold text-[#22221f]";

const input =
  "box-border w-full min-w-0 max-w-full rounded-none border border-stone-300 bg-paper px-3 py-3 text-sm font-normal text-[#22221f] outline-none transition-colors placeholder:text-stone-400 focus:border-olive focus:ring-2 focus:ring-olive/10";

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;

    setForm((old) => ({
      ...old,
      [name]: value,
    }));
  };

  async function submit(e) {
    e.preventDefault();

    if (busy) return;

    setBusy(true);

    const api =
      import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const res = await fetch(
        `${api.replace(/\/$/, "")}/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Enquiry submit nahi hui. Dobara try karein."
        );
      }

      setSubmitted(true);
      setForm(initial);
    } catch (err) {
      const subject = encodeURIComponent(
        `Project enquiry from ${form.name}`
      );

      const body = encodeURIComponent(
        `Name: ${form.name}\n` +
          `Email: ${form.email}\n` +
          `Phone: ${form.phone}\n` +
          `Project type: ${form.projectType}\n\n` +
          `Message:\n${form.message}`
      );

      window.location.href =
        `mailto:desig9hause@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="w-full min-w-0 max-w-full">
      {submitted ? (
        <div className="box-border w-full rounded-3xl border border-stone-200 bg-white px-4 py-10 text-center shadow-sm sm:px-8 sm:py-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c51f32]/30 bg-[#c51f32]/10 text-[#c51f32] sm:h-16 sm:w-16">
            <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>

          <h3 className="mt-5 font-serif text-xl leading-snug text-[#22221f] sm:text-2xl">
            Enquiry Submitted Successfully
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-600">
            Thank you. Our senior architectural coordinator
            will review your project details and get back to
            you shortly.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex min-h-11 max-w-full items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-center text-xs font-medium text-[#22221f] transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          className="flex w-full min-w-0 flex-col gap-5 sm:gap-6"
        >
          {/* Name and email */}
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
            <label className={label}>
              Your name *
              <input
                className={input}
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Full name"
                autoComplete="name"
                maxLength={120}
                required
              />
            </label>

            <label className={label}>
              Email address *
              <input
                className={input}
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>
          </div>

          {/* Phone and project type */}
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
            <label className={label}>
              Phone number
              <input
                className={input}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="+91"
                autoComplete="tel"
                maxLength={25}
              />
            </label>

            <label className={label}>
              Project type *
              <select
                className={`${input} cursor-pointer`}
                name="projectType"
                value={form.projectType}
                onChange={update}
                required
              >
                <option>Architecture</option>
                <option>Interior Design</option>
                <option>Landscape Design</option>
                <option>Commercial Project</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          {/* Project message */}
          <label className={label}>
            Tell us about your project *
            <textarea
              className={`${input} min-h-[130px] resize-y leading-relaxed sm:min-h-[150px]`}
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Location, approximate size, requirements and timeline..."
              rows={5}
              maxLength={5000}
              required
            />
          </label>

          {/* Submit button */}
          <div className="flex min-w-0 flex-col items-start gap-3">
            <button
              type="submit"
              disabled={busy}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[180px]"
            >
              {busy ? "Sending..." : "Send enquiry"}
              <Send size={15} aria-hidden="true" />
            </button>

            <p className="max-w-full text-[11px] leading-relaxed text-muted">
              Your information will only be used to respond
              to your enquiry.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
