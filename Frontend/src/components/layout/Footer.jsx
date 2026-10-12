import { Link } from "react-router-dom";
import { ArrowUpRight, Camera, Mail, Phone } from "lucide-react";
import { contactInfo } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-dark py-14 text-stone-100">
      <div className="mx-auto w-[min(1240px,calc(100%-38px))]">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.6fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              {/* Logo Image */}
              <img 
                src="/logo/desig9-hause-logo.png" 
                alt="DESIG9 HAUSE Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="flex flex-col gap-1">
                <strong className="text-xs tracking-[.15em]">DESIG9 HAUSE</strong>
                <small className="text-[8px] tracking-[.14em] text-stone-400">ARCHITECTURE · INTERIORS</small>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-xs text-stone-300">
              Thoughtful spaces. Timeless forms. Design shaped around the way people live, work and connect.
            </p>
          </div>
          
          <div className="flex flex-col items-start gap-3 text-xs">
            <h3 className="mb-2 font-semibold tracking-wide">Explore</h3>
            <Link className="text-stone-300 hover:text-white" to="/projects">Projects</Link>
            <Link className="text-stone-300 hover:text-white" to="/studio">Studio</Link>
            <Link className="text-stone-300 hover:text-white" to="/services">Services</Link>
            <Link className="text-stone-300 hover:text-white" to="/journal">Journal</Link>
          </div>

          <div className="flex flex-col items-start gap-4 text-xs">
            <h3 className="font-semibold tracking-wide">Get in touch</h3>
            <a className="flex items-center gap-2 break-all text-stone-300 hover:text-white" href={`mailto:${contactInfo.email}`}>
              <Mail size={14}/>{contactInfo.email}
            </a>
            <a className="flex items-center gap-2 text-stone-300 hover:text-white" href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>
              <Phone size={14}/>{contactInfo.phone}
            </a>
            <span className="text-stone-300">{contactInfo.location}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DESIG9 HAUSE. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}