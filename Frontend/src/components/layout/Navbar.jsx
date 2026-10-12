import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [pressed, setPressed] = useState(null);

  const close = () => {
    setOpen(false);
    setHovered(null);
  };

  const linkStyle = (isActive, isHovered, isPressed) => ({
    color: isActive ? "#c51f32" : "#22221f",
    transform: isPressed
      ? "perspective(700px) translateY(1px) scale(.96)"
      : isHovered
      ? "perspective(700px) translateY(-3px) rotateX(5deg)"
      : "perspective(700px) translateY(0) rotateX(0)",
    textShadow: isHovered
      ? "0 5px 18px rgba(197,31,50,.12)"
      : "none",
    transition:
      "color 300ms ease, transform 350ms cubic-bezier(.2,.8,.2,1), text-shadow 350ms ease",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.07] bg-[#fbfaf7]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[88px] w-[min(1440px,calc(100%-64px))] items-center justify-between gap-8 max-md:min-h-[76px] max-md:w-[calc(100%-32px)]">
        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={close}
          className="group relative flex shrink-0 items-center"
          aria-label="DESIG9 HAUSE home"
        >
          <span className="relative block overflow-hidden">
            <img
              src="/logo/desig9-hause-logo.png"
              alt="DESIG9 HAUSE"
              className="block h-[68px] w-[68px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.045] max-md:h-[58px] max-md:w-[58px]"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[130%]" />
          </span>
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 shrink-0 place-items-center border border-black/10 text-[#22221f] transition duration-300 hover:border-[#c51f32] hover:text-[#c51f32] active:scale-90 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* NAVIGATION LINKS */}
        <nav
          onMouseLeave={() => setHovered(null)}
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col border-b border-black/10 bg-[#fbfaf7] px-6 pb-6 shadow-xl shadow-black/[0.04] lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={close}
              onMouseEnter={() => setHovered(index)}
              onMouseDown={() => setPressed(index)}
              onMouseUp={() => setPressed(null)}
              onTouchStart={() => setPressed(index)}
              onTouchEnd={() => setPressed(null)}
              style={({ isActive }) =>
                linkStyle(
                  isActive,
                  hovered === index,
                  pressed === index
                )
              }
              className="group relative inline-flex items-center self-start py-4 text-[13px] font-medium tracking-[0.015em] lg:self-auto lg:py-3"
            >
              <span className="relative z-10">{item.label}</span>

              {/* Fine red underline + light sweep */}
              <span className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-[#c51f32] transition-transform duration-300 ease-out group-hover:scale-x-100 lg:bottom-1" />

              <span className="pointer-events-none absolute -inset-x-2 inset-y-1 -z-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-y-0 w-1/2 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#c51f32]/[0.07] to-transparent transition-transform duration-700 group-hover:translate-x-[250%]" />
              </span>
            </NavLink>
          ))}

          {/* MAIN RED CTA BUTTON - FREE SITE VISIT */}
          <Link
            to="/free-site-visit"
            onClick={close}
            onMouseEnter={() => setHovered("cta")}
            onMouseLeave={() => setHovered(null)}
            className="group relative mt-4 inline-flex min-h-[49px] items-center justify-center gap-4 overflow-hidden border border-[#c51f32] bg-[#c51f32] px-6 text-[12px] font-semibold tracking-[0.035em] text-white transition-[background-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#a71929] hover:shadow-[0_10px_28px_rgba(197,31,50,0.18)] active:translate-y-0 active:scale-[0.98] lg:mt-0 lg:ml-2"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10 whitespace-nowrap uppercase tracking-wider text-[11px]">
              Free Site Visit
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </nav>
      </div>
    </header>
  );
}