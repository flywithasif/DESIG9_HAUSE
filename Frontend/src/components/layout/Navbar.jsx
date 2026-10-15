import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [pressed, setPressed] = useState(null);

  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
    setHovered(null);
    setPressed(null);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setHovered(null);
    setPressed(null);
  };

  const linkStyle = (isActive, isHovered, isPressed) => ({
    color: isActive ? "#c51f32" : "#22221f",
    transform: isPressed
      ? "perspective(700px) translateY(1px) scale(.98)"
      : isHovered
        ? "perspective(700px) translateY(-2px) rotateX(3deg)"
        : "perspective(700px) translateY(0) rotateX(0)",
    textShadow: isHovered
      ? "0 5px 18px rgba(197,31,50,.12)"
      : "none",
    transition:
      "color 300ms ease, transform 350ms cubic-bezier(.2,.8,.2,1), text-shadow 350ms ease",
  });

  const navLinkClass =
    "group relative inline-flex min-h-11 items-center self-stretch py-3 text-[13px] font-medium tracking-[0.015em] lg:min-h-0 lg:self-auto lg:py-3";

  const underlineClass =
    "pointer-events-none absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-[#c51f32] transition-transform duration-300 ease-out group-hover:scale-x-100 lg:bottom-1";

  const renderNavLink = (item, index) => (
    <NavLink
      key={item.path}
      to={item.path}
      end={item.path === "/"}
      onClick={close}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
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
      className={navLinkClass}
    >
      <span className="relative z-10">{item.label}</span>
      <span className={underlineClass} />
    </NavLink>
  );

  const extraLinks = [
    { label: "About Us", path: "/about", id: "about" },
    { label: "Team", path: "/team", id: "team" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.07] bg-[#fbfaf7]/95 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-[88px] w-[calc(100%-40px)] max-w-[1440px] items-center justify-between gap-4 sm:w-[calc(100%-48px)] md:gap-6 lg:min-h-[88px] lg:w-[calc(100%-64px)] lg:gap-8">
        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={close}
          className="group relative z-[60] flex min-w-0 shrink-0 items-center"
          aria-label="DESIG9 HAUSE home"
        >
          <span className="relative block overflow-hidden">
            <img
              src="/logo/desig9-hause-logo.png"
              alt="DESIG9 HAUSE"
              className="block h-[54px] w-[54px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.045] sm:h-[60px] sm:w-[60px] lg:h-[68px] lg:w-[68px]"
            />

            <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[130%]" />
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          onMouseLeave={() => setHovered(null)}
          className="hidden min-w-0 flex-1 items-center justify-end gap-x-4 xl:gap-x-7 lg:flex"
        >
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-4 xl:gap-x-7">
            {navigation.map((item, index) =>
              renderNavLink(item, index)
            )}

            {extraLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={({ isActive }) =>
                  linkStyle(
                    isActive,
                    hovered === item.id,
                    false
                  )
                }
                className={navLinkClass}
              >
                <span className="relative z-10">
                  {item.label}
                </span>
                <span className={underlineClass} />
              </NavLink>
            ))}
          </div>

          {/* FREE SITE VISIT CTA */}
          <Link
            to="/free-site-visit"
            onMouseEnter={() => setHovered("cta")}
            onMouseLeave={() => setHovered(null)}
            className="group relative ml-1 inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 overflow-hidden border border-[#c51f32] bg-[#c51f32] px-3 text-[11px] font-semibold tracking-[0.035em] text-white transition-[background-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#a71929] hover:shadow-[0_10px_28px_rgba(197,31,50,0.18)] active:translate-y-0 active:scale-[0.98] xl:ml-2 xl:gap-3 xl:px-5"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10 whitespace-nowrap uppercase tracking-wider">
              Free Site Visit
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </nav>

        {/* MOBILE / TABLET MENU TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-[60] grid size-11 shrink-0 place-items-center border border-black/10 bg-transparent text-[#22221f] transition duration-300 hover:border-[#c51f32] hover:text-[#c51f32] active:scale-95 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE / TABLET NAVIGATION */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto overscroll-contain bg-[#fbfaf7] transition-[opacity,visibility,transform] duration-300 ease-out lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="mx-auto flex min-h-full w-full max-w-[640px] flex-col px-6 pb-10 pt-5 sm:px-10">
          <div className="flex flex-col divide-y divide-black/[0.07]">
            {navigation.map((item, index) => (
              <div key={item.path}>
                {renderNavLink(item, index)}
              </div>
            ))}

            {extraLinks.map((item) => (
              <div key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={close}
                  style={({ isActive }) =>
                    linkStyle(
                      isActive,
                      hovered === item.id,
                      pressed === item.id
                    )
                  }
                  onTouchStart={() => setPressed(item.id)}
                  onTouchEnd={() => setPressed(null)}
                  className={navLinkClass}
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  <span className={underlineClass} />
                </NavLink>
              </div>
            ))}
          </div>

          {/* MOBILE CTA */}
          <Link
            to="/free-site-visit"
            onClick={close}
            className="group relative mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-4 overflow-hidden border border-[#c51f32] bg-[#c51f32] px-6 text-[12px] font-semibold tracking-wider text-white transition-colors duration-300 hover:bg-[#a71929] active:scale-[0.99]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10 uppercase">
              Free Site Visit
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <p className="mt-8 text-center text-[10px] tracking-[0.18em] text-[#77736c]">
            DESIG9 HAUSE — ARCHITECTURE · INTERIORS
          </p>
        </nav>
      </div>
    </header>
  );
}
