import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="w-full overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1240px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        <span className="text-[10px] font-bold tracking-[0.2em] text-olive sm:text-xs">
          404 — PAGE NOT FOUND
        </span>

        <h1 className="my-5 text-4xl leading-[1.15] sm:text-6xl sm:leading-tight lg:text-7xl">
          Looks like this
          <br />
          space is{" "}
          <em className="font-serif font-normal text-olive">
            empty.
          </em>
        </h1>

        <p className="mb-7 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
          The page you are looking for may have moved or may no longer exist.
        </p>

        <Link
          to="/"
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-dark px-5 py-3 text-xs font-medium text-white transition-colors duration-300 hover:bg-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}