import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-stone-200 bg-white p-4 transition-all duration-700 hover:border-[#c51f32] hover:shadow-2xl sm:p-6 lg:p-8">
      {/* Top Tag Header */}
      <div className="flex min-w-0 items-center justify-between gap-3 border-b border-stone-100 pb-4">
        <span className="shrink-0 font-mono text-xs font-bold tracking-widest text-[#c51f32] sm:text-sm">
          DIV // {service.number}
        </span>

        <span className="truncate text-right font-mono text-[8px] uppercase tracking-[0.16em] text-stone-400 sm:text-[9px] sm:tracking-[0.25em]">
          DESIG9 HAUSE
        </span>
      </div>

      {/* Service Image */}
      {service.image && (
        <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-sm bg-stone-900 sm:mt-6 sm:aspect-[5/4] lg:aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title || "DESIG9 HAUSE service"}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100 sm:group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#22221f]/70 via-transparent to-transparent" />

          {service.subtitle && (
            <div className="absolute bottom-2 left-2 right-2 border-l-2 border-[#c51f32] bg-[#22221f]/80 p-2 text-xs font-serif italic leading-relaxed tracking-wide text-white backdrop-blur-md sm:bottom-3 sm:left-3 sm:right-3 sm:p-3 sm:text-sm">
              {service.subtitle}
            </div>
          )}
        </div>
      )}

      {/* Service Content */}
      <div className="flex flex-1 flex-col">
        {/* Title */}
        <h3 className="mt-5 break-words font-serif text-2xl leading-tight text-[#22221f] transition-colors duration-300 group-hover:text-[#c51f32] sm:mt-6 sm:text-3xl lg:text-4xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 break-words text-sm font-light leading-6 text-stone-600 sm:leading-7">
          {service.description}
        </p>

        {/* Scope of Work */}
        {service.items && service.items.length > 0 && (
          <div className="mt-5 border-t border-stone-100 pt-5 sm:mt-6 sm:pt-6">
            <h4 className="mb-3 font-mono text-[9px] font-bold uppercase leading-relaxed tracking-[0.12em] text-stone-400 sm:text-[10px] sm:tracking-widest">
              SPECIFIED SCOPE OF WORK:
            </h4>

            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 text-xs text-stone-700 sm:grid-cols-2 sm:gap-y-2.5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-2 font-light leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c51f32]" />
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4 sm:mt-8 sm:flex-nowrap">
        <Link
          to="/contact"
          className="inline-flex min-h-10 min-w-0 items-center gap-2 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#22221f] transition-colors hover:text-[#c51f32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32] sm:text-xs sm:tracking-widest"
        >
          <span>Discuss Commission</span>

          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

        <span className="shrink-0 font-mono text-[9px] text-stone-400 sm:text-[10px]">
          SCALE 1:1
        </span>
      </div>
    </article>
  );
}
