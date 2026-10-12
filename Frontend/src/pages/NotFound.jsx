import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
 return <section className="py-32"><div className="mx-auto w-[min(1240px,calc(100%-38px))]"><span className="text-[10px] font-bold tracking-[.2em] text-olive">404 — PAGE NOT FOUND</span><h1 className="my-5 text-6xl leading-tight sm:text-7xl">Looks like this<br/>space is <em className="font-serif font-normal text-olive">empty.</em></h1><p className="mb-7 max-w-lg text-sm text-muted">The page you are looking for may have moved or may no longer exist.</p><Link to="/" className="inline-flex min-h-12 items-center gap-3 bg-dark px-5 text-xs text-white hover:bg-olive"><ArrowLeft size={16}/> Back to home</Link></div></section>;
}
