import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
export default function Projects() {
  const [category, setCategory] = useState("All");
  const filtered = useMemo(()=>category==="All"?projects:projects.filter(p=>p.category===category),[category]);
  return <>
    <section className="bg-[#eeeee7] py-20 md:py-28"><div className="mx-auto w-[min(1240px,calc(100%-38px))]"><span className="text-[10px] font-bold tracking-[.2em] text-olive">OUR PORTFOLIO</span><h1 className="my-5 text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl">Work that starts<br/>with <em className="font-serif font-normal text-olive">listening.</em></h1><p className="max-w-xl text-sm text-muted">A selection of architectural, interior and landscape design explorations.</p></div></section>
    <section className="py-16 md:py-24"><div className="mx-auto w-[min(1240px,calc(100%-38px))]"><div className="flex flex-wrap gap-2 border-b border-stone-200 pb-6" aria-label="Filter projects">{projectCategories.map(item=><button key={item} onClick={()=>setCategory(item)} aria-pressed={category===item} className={`border px-3 py-2 text-[10px] transition ${category===item?"border-olive bg-olive text-white":"border-stone-300 hover:border-olive"}`}>{item}</button>)}</div><p className="my-5 text-xs text-muted">{filtered.length} {filtered.length===1?"project":"projects"}</p><div className="grid gap-x-7 gap-y-12 md:grid-cols-2">{filtered.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div><div className="mt-14 flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm">Have a project in mind? We'd love to hear about it.</p><Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold">Start a conversation <ArrowUpRight size={16}/></Link></div></div></section>
  </>;
}
