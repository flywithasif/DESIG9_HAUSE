
export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mb-8 w-full max-w-2xl sm:mb-10">
      {eyebrow && (
        <span className="text-[10px] font-bold tracking-[0.2em] text-olive sm:text-[11px]">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 break-words font-serif text-3xl leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
