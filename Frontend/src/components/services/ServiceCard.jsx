import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="group relative border border-stone-200 bg-white p-6 sm:p-8 transition-all duration-700 hover:border-[#c51f32] hover:shadow-2xl">
      
      {/* Top Tag Header */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <span className="text-sm font-mono font-bold tracking-widest text-[#c51f32]">
          DIV // {service.number}
        </span>
        <span className="text-[9px] uppercase tracking-[.25em] text-stone-400 font-mono">
          DESIG9 HAUSE
        </span>
      </div>

      {/* Service Image with Smooth Zoom */}
      {service.image && (
        <div className="mt-6 relative h-[260px] sm:h-[300px] w-full overflow-hidden bg-stone-900 rounded-sm">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#22221f]/70 via-transparent to-transparent"></div>
          
          {service.subtitle && (
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic tracking-wide bg-[#22221f]/80 backdrop-blur-md p-2 border-l-2 border-[#c51f32]">
              {service.subtitle}
            </div>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="mt-6 font-serif text-3xl sm:text-4xl text-[#22221f] group-hover:text-[#c51f32] transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-stone-600 font-light leading-relaxed">
        {service.description}
      </p>

      {/* Scope of Work Items */}
      {service.items && service.items.length > 0 && (
        <div className="mt-6 pt-6 border-t border-stone-100">
          <h4 className="text-[10px] uppercase font-mono font-bold tracking-widest text-stone-400 mb-3">
            SPECIFIED SCOPE OF WORK:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-2 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c51f32] shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Action */}
      <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#22221f] group-hover:text-[#c51f32] transition-colors"
        >
          <span>Discuss Commission</span>
          <ArrowUpRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <span className="text-[10px] font-mono text-stone-400">SCALE 1:1</span>
      </div>

    </article>
  );
}