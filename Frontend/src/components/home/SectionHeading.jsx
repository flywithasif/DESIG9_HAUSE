export default function SectionHeading({ eyebrow, title, description }) {
  return <div className="mb-10 max-w-2xl"><span className="text-[10px] font-bold tracking-[.2em] text-olive">{eyebrow}</span><h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{title}</h2>{description && <p className="mt-4 max-w-xl text-sm text-muted">{description}</p>}</div>;
}
