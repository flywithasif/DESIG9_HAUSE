import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
export default function Services() {
 return <>
  <section className="bg-[#eeeee7] py-20 md:py-28"><div className="mx-auto w-[min(1240px,calc(100%-38px))]"><span className="text-[10px] font-bold tracking-[.2em] text-olive">OUR SERVICES</span><h1 className="my-5 text-6xl leading-none sm:text-7xl md:text-8xl">Good ideas,<br/><em className="font-serif font-normal text-olive">made tangible.</em></h1><p className="max-w-xl text-sm text-muted">Design support shaped around your project, from early thinking to considered details.</p></div></section>
  <section className="py-20 md:py-28"><div className="mx-auto grid w-[min(1240px,calc(100%-38px))] gap-x-10 md:grid-cols-2">{services.map(s=><ServiceCard key={s.number} service={s}/>)}</div></section>
  <section className="bg-olive py-16 text-white md:py-24"><div className="mx-auto flex w-[min(1240px,calc(100%-38px))] flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><span className="text-[10px] font-bold tracking-[.2em] text-stone-200">NOT SURE WHERE TO START?</span><h2 className="mt-5 text-5xl sm:text-6xl">Let's find the<br/><em className="font-serif font-normal">right direction.</em></h2></div><Link to="/contact" className="inline-flex min-h-12 items-center gap-3 bg-paper px-5 text-xs font-semibold text-ink">Talk to the studio <ArrowUpRight size={16}/></Link></div></section>
 </>;
}
