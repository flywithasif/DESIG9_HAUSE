import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
  return <article className="border-b border-stone-200 py-8"><span className="text-xs tracking-widest text-olive">{service.number}</span><h3 className="mt-5 font-serif text-3xl">{service.title}</h3><p className="mt-3 max-w-lg text-sm text-muted">{service.description}</p><ul className="my-6 grid grid-cols-2 gap-3 text-xs text-stone-600">{service.items.map((item) => <li key={item}>— {item}</li>)}</ul><Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold hover:text-olive">Discuss your project <ArrowUpRight size={15}/></Link></article>;
}
