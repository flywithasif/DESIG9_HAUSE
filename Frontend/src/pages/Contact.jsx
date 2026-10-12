import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../data/navigation";
import ContactForm from "../components/contact/ContactForm";
export default function Contact() {
 return <>
  <section className="bg-[#eeeee7] py-20 md:py-28"><div className="mx-auto w-[min(1240px,calc(100%-38px))]"><span className="text-[10px] font-bold tracking-[.2em] text-olive">CONTACT THE STUDIO</span><h1 className="my-5 text-6xl leading-none sm:text-7xl md:text-8xl">Every project<br/>starts with <em className="font-serif font-normal text-olive">a hello.</em></h1><p className="max-w-xl text-sm text-muted">Tell us a little about what you're planning. We'd be happy to start a conversation.</p></div></section>
  <section className="py-16 md:py-24"><div className="mx-auto grid w-[min(1240px,calc(100%-38px))] items-start gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-[9%]">
   <aside><span className="text-[10px] font-bold tracking-[.2em] text-olive">GET IN TOUCH</span><h2 className="my-5 text-4xl leading-tight sm:text-5xl">Let's talk about<br/><em className="font-serif font-normal text-olive">your idea.</em></h2><p className="mb-8 text-sm text-muted">Share your goals, questions or early thoughts. You don't need to have every detail figured out yet.</p>
    <div className="mt-6 flex gap-4"><Mail className="shrink-0 text-olive" size={19}/><div><small className="block text-[9px] tracking-widest text-muted">EMAIL</small><a className="break-all text-xs" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div></div>
    <div className="mt-6 flex gap-4"><Phone className="shrink-0 text-olive" size={19}/><div><small className="block text-[9px] tracking-widest text-muted">PHONE</small><a className="text-xs" href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>{contactInfo.phone}</a></div></div>
    <div className="mt-6 flex gap-4"><MapPin className="shrink-0 text-olive" size={19}/><div><small className="block text-[9px] tracking-widest text-muted">LOCATION</small><span className="text-xs">{contactInfo.location}</span></div></div><p className="mt-8 text-[10px] text-muted">Verify phone number, email and location before publishing.</p>
   </aside><div className="bg-[#eeeee7] p-5 sm:p-8"><ContactForm/></div>
  </div></section>
 </>;
}
