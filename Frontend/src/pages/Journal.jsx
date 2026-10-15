
import { ArrowUpRight } from "lucide-react";
import { journal } from "../data/journal";

export default function Journal() {
  return (
    <>
      {/* Journal Hero */}
      <section className="overflow-hidden bg-[#eeeee7] py-14 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1240px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
          <span className="text-[9px] font-bold tracking-[0.2em] text-olive sm:text-[10px]">
            NOTES FROM THE STUDIO
          </span>

          <h1 className="my-5 max-w-full break-words text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl md:my-6 md:text-7xl lg:text-8xl">
            Thoughts on
            <br />
            <em className="font-serif font-normal text-olive">
              space and place.
            </em>
          </h1>

          <p className="max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Ideas, observations and inspiration from the world of design.
          </p>
        </div>
      </section>

      {/* Journal Articles */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 gap-x-7 gap-y-10 sm:w-[calc(100%-48px)] sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:w-[calc(100%-64px)] lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {journal.map((a) => (
            <article key={a.id} className="group min-w-0">
              {/* Article Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 sm:aspect-[0.95/1]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                />
              </div>

              {/* Category and Date */}
              <div className="my-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[10px] leading-4 text-muted sm:my-5 sm:text-[11px]">
                <span className="font-semibold uppercase tracking-[0.12em]">
                  {a.category}
                </span>

                <span>{a.date}</span>
              </div>

              {/* Article Title */}
              <h2 className="break-words font-serif text-xl leading-snug sm:text-2xl">
                {a.title}
              </h2>

              {/* Article Description */}
              <p className="mt-3 text-xs leading-6 text-muted sm:text-sm sm:leading-6">
                {a.excerpt}
              </p>

              {/* Studio Note */}
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold sm:mt-6">
                <span>Studio note</span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Notice */}
        <p className="mx-auto mt-10 w-[calc(100%-32px)] max-w-[1240px] text-[11px] leading-5 text-muted sm:mt-12 sm:w-[calc(100%-48px)] sm:text-xs lg:w-[calc(100%-64px)]">
          These are editorial placeholders. Replace them with original
          articles before publishing.
        </p>
      </section>
    </>
  );
}
