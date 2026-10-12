import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import NotFound from "./NotFound";
export default function ProjectDetail() {
  const {id}=useParams(); const project=projects.find(p=>p.id===id);
  if(!project) return <NotFound/>;
  return <>
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-dark text-white md:min-h-[570px]"><img src={project.image} alt={project.title} className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/><div className="relative mx-auto w-[min(1240px,calc(100%-38px))] pb-12 pt-20"><Link to="/projects" className="mb-16 inline-flex items-center gap-2 text-xs"><ArrowLeft size={16}/> All projects</Link><span className="block text-[10px] font-bold tracking-[.2em] text-stone-200">{project.category}</span><h1 className="my-4 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">{project.title}</h1><p className="text-xs text-stone-200">{project.location} · {project.year}</p></div></section>
    <section className="py-20 md:py-28"><div className="mx-auto grid w-[min(1240px,calc(100%-38px))] gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-[10%]"><span className="text-[10px] font-bold tracking-[.2em] text-olive">PROJECT OVERVIEW</span><div><h2 className="mb-6 font-serif text-4xl leading-tight sm:text-5xl">A considered response to place, purpose and people.</h2><p className="text-sm text-muted">{project.description}</p><p className="mt-4 text-sm text-muted">This portfolio entry represents a design concept. Update specifications, completion status and photography with verified information before publication.</p><Link to="/contact" className="mt-6 inline-flex min-h-12 items-center gap-3 bg-dark px-5 text-xs text-white hover:bg-olive">Discuss a similar project <ArrowUpRight size={16}/></Link></div></div></section>
  </>;
}
