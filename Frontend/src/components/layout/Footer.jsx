import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../../data/navigation";

// Updated Email as requested
const emailAddress = "hello@desig9hause.com";

// Updated Address as requested
const fullAddress = "D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030";

// Updated WhatsApp Number
const whatsappNumber = "916386994478";

export default function Footer() {
  return (
    <footer className="bg-dark py-14 text-stone-100 border-t border-white/10">
      <div className="mx-auto w-[min(1240px,calc(100%-38px))]">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_1fr_1fr]">
          
          {/* Brand & Logo Section */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-flex items-center gap-3">
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
            <p className="mt-5 max-w-sm text-xs text-stone-300 leading-relaxed">
              Thoughtful spaces. Timeless forms. Design shaped around the way people live, work and connect.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start gap-3 text-xs">
            <h3 className="mb-2 font-semibold tracking-wide text-white">Explore</h3>
            <Link className="text-stone-300 hover:text-white transition-colors" to="/projects">Projects</Link>
            <Link className="text-stone-300 hover:text-white transition-colors" to="/studio">Studio</Link>
            <Link className="text-stone-300 hover:text-white transition-colors" to="/services">Services</Link>
            <Link className="text-stone-300 hover:text-white transition-colors" to="/journal">Journal</Link>
            <Link className="text-stone-300 hover:text-white transition-colors" to="/free-site-visit">Free Site Visit</Link>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col items-start gap-4 text-xs">
            <h3 className="font-semibold tracking-wide text-white">Get in touch</h3>
            
            <a 
              className="flex items-center gap-2 break-all text-stone-300 hover:text-white transition-colors" 
              href={`mailto:${emailAddress}`}
            >
              <Mail size={14} className="shrink-0 text-[#c51f32]" />
              {emailAddress}
            </a>

            <a 
              className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors" 
              href={`tel:+916386994478`}
            >
              <Phone size={14} className="shrink-0 text-[#c51f32]" />
              +91 63869 94478
            </a>

            <span className="flex items-start gap-2 text-stone-300 leading-relaxed">
              <MapPin size={14} className="shrink-0 text-[#c51f32] mt-0.5" />
              {fullAddress}
            </span>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-start gap-3 text-xs">
            <h3 className="mb-2 font-semibold tracking-wide text-white">Connect With Us</h3>
            <div className="flex flex-wrap gap-2.5">
              
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-stone-300 hover:text-white hover:border-[#E1306C] hover:bg-[#E1306C]/20 transition-all text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#E1306C]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-stone-300 hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2]/20 transition-all text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
                Facebook
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Desig9%20Hause,%20I%20would%20like%20to%20discuss%20an%20architectural%20project.`}
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-stone-300 hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-stone-300 hover:text-white hover:border-[#FF0000] hover:bg-[#FF0000]/20 transition-all text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#FF0000]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-stone-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DESIG9 HAUSE. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <a href="#top" className="flex items-center gap-1 hover:text-white transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}