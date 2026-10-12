import { ArrowUpRight } from "lucide-react";
import { journal } from "../data/journal";
export default function Journal() {
 return <>
  <section className="bg-[#eeeee7] py-20 md:py-28"><div className="mx-auto w-[min(1240px,calc(100%-38px))]"><span className="text-[10px] font-bold tracking-[.2em] text-olive">NOTES FROM THE STUDIO</span><h1 className="my-5 text-6xl leading-none sm:text-7xl md:text-8xl">Thoughts on<br/><em className="font-serif font-normal text-olive">space and place.</em></h1><p className="max-w-xl text-sm text-muted">Ideas, observations and inspiration from the world of design.</p></div></section>
  <section className="py-16 md:py-24"><div className="mx-auto grid w-[min(1240px,calc(100%-38px))] gap-10 md:grid-cols-2 lg:grid-cols-3">{journal.map(a=><article key={a.id} className="group"><div className="aspect-[.95/1] overflow-hidden bg-stone-200"><img src={a.image} alt="" loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105"/></div><div className="my-4 flex justify-between gap-3 text-[10px] text-muted"><span>{a.category}</span><span>{a.date}</span></div><h2 className="font-serif text-2xl leading-snug">{a.title}</h2><p className="mt-3 text-xs text-muted">{a.excerpt}</p><span className="inline-flex items-center gap-2 text-xs font-semibold">Studio note <ArrowUpRight size={15}/></span></article>)}</div><p className="mx-auto mt-12 w-[min(1240px,calc(100%-38px))] text-xs text-muted">These are editorial placeholders. Replace them with original articles before publishing.</p></section>
 </>;
}
