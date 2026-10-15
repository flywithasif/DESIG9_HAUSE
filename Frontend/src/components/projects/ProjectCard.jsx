import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className="group min-w-0 bg-white border border-stone-200 p-5 rounded-3xl transition-all duration-500 hover:border-[#c51f32] hover:shadow-2xl">
      
      {/* Project Image Container */}
      <Link 
        to={`/projects/${project.id}`} 
        className="relative block aspect-[1.3/1] overflow-hidden rounded-2xl bg-stone-900" 
        aria-label={`View ${project.title}`}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          loading={index > 1 ? "lazy" : "eager"} 
          className="size-full object-cover transition duration-1000 group-hover:scale-110 opacity-95 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity" />
        
        {/* Floating Action Badge */}
        <span className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-[#c51f32] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 shadow-xl">
          <ArrowUpRight size={20}/>
        </span>

        {/* Location & Year Tag */}
        <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-stone-200 uppercase tracking-wider">
          {project.location} · {project.year}
        </div>
      </Link>

      {/* Card Info */}
      <div className="mt-5 space-y-2">
        <div className="flex justify-between items-center text-[10px] font-mono text-[#c51f32] tracking-widest uppercase">
          <span>CATEGORY // {project.category}</span>
          <span>COMMISSIONED</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#22221f] group-hover:text-[#c51f32] transition-colors">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>

        <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-stone-100">
          <Link 
            to={`/projects/${project.id}`} 
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#22221f] group-hover:text-[#c51f32] transition-colors"
          >
            <span>Inspect Blueprint Case Study</span>
            <ArrowUpRight size={14}/>
          </Link>
          <span className="text-[10px] font-mono text-stone-400">ARCH 1:1</span>
        </div>
      </div>

    </article>
  );
}