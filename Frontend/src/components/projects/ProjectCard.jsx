import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index = 0 }) {
  if (!project) return null;

  const projectLink = `/projects/${project.id}`;

  return (
    <article
      className="
        group relative min-w-0 w-full
        overflow-hidden
        rounded-2xl sm:rounded-3xl
        border border-stone-200
        bg-white
        p-3 sm:p-4 lg:p-5
        transition-all duration-500 ease-out
        hover:border-[#c51f32]
        hover:shadow-xl lg:hover:shadow-2xl
      "
    >
      {/* Project Image */}
      <Link
        to={projectLink}
        aria-label={`View ${project.title}`}
        className="
          relative block w-full
          aspect-[1.15/1]
          xs:aspect-[1.25/1]
          sm:aspect-[1.3/1]
          lg:aspect-[1.3/1]
          overflow-hidden
          rounded-xl sm:rounded-2xl
          bg-stone-900
          isolate
        "
      >
        <img
          src={project.image}
          alt={project.title || "Architecture project"}
          loading={index > 1 ? "lazy" : "eager"}
          decoding="async"
          className="
            block size-full
            object-cover object-center
            opacity-95
            transition-transform duration-700 lg:duration-1000
            ease-out
            motion-safe:group-hover:scale-105
            lg:motion-safe:group-hover:scale-110
            group-hover:opacity-100
          "
        />

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-black/60 via-black/5 to-transparent
            opacity-80
            transition-opacity duration-500
            lg:group-hover:opacity-30
          "
        />

        {/* Location & Year */}
        <div
          className="
            absolute left-2 top-2
            max-w-[calc(100%-1rem)]
            rounded-full
            border border-white/10
            bg-black/75
            px-2.5 py-1
            text-[9px] sm:text-[10px]
            font-mono uppercase tracking-wide
            text-stone-100
            backdrop-blur-md
          "
        >
          <span className="break-words">
            {project.location || "Location"}
            {project.year ? ` · ${project.year}` : ""}
          </span>
        </div>

        {/* Hover Action — visible on touch devices too */}
        <span
          className="
            absolute bottom-2 right-2
            grid size-9 sm:size-10 lg:size-12
            place-items-center
            rounded-full
            bg-[#c51f32] text-white
            shadow-lg
            transition-all duration-300
            lg:opacity-0
            lg:group-hover:opacity-100
            lg:group-hover:scale-105
          "
          aria-hidden="true"
        >
          <ArrowUpRight size={18} />
        </span>
      </Link>

      {/* Project Information */}
      <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">

        {/* Category */}
        <div
          className="
            flex flex-wrap
            items-center justify-between
            gap-x-3 gap-y-1
            text-[9px] sm:text-[10px]
            font-mono uppercase tracking-wider
            text-[#c51f32]
          "
        >
          <span className="min-w-0 break-words">
            CATEGORY // {project.category || "Architecture"}
          </span>

          <span className="shrink-0 text-stone-400">
            COMMISSIONED
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            min-w-0
            font-serif
            text-xl sm:text-2xl lg:text-3xl
            leading-tight
            text-[#22221f]
            transition-colors duration-300
            lg:group-hover:text-[#c51f32]
            break-words
          "
        >
          <Link
            to={projectLink}
            className="
              rounded-sm
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#c51f32]
              focus-visible:ring-offset-2
            "
          >
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p
          className="
            text-xs sm:text-sm
            font-light leading-relaxed
            text-stone-600
            line-clamp-2
            break-words
          "
        >
          {project.description}
        </p>

        {/* Footer */}
        <div
          className="
            flex flex-wrap
            items-center justify-between
            gap-x-3 gap-y-3
            border-t border-stone-100
            pt-3 sm:pt-4
          "
        >
          <Link
            to={projectLink}
            className="
              group/link
              inline-flex min-w-0
              items-center gap-1.5
              text-[10px] sm:text-xs
              font-semibold uppercase tracking-wide
              text-[#22221f]
              transition-colors duration-300
              hover:text-[#c51f32]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#c51f32]
              focus-visible:ring-offset-2
            "
          >
            <span className="break-words">
              Inspect Blueprint Case Study
            </span>

            <ArrowUpRight
              size={14}
              className="
                shrink-0
                transition-transform duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />
          </Link>

          <span
            className="
              shrink-0
              text-[9px] sm:text-[10px]
              font-mono text-stone-400
            "
          >
            ARCH 1:1
          </span>
        </div>
      </div>
    </article>
  );
}
