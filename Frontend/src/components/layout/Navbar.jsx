import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [pressed, setPressed] = useState(null);

  const location = useLocation();

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setOpen(false);
    setHovered(null);
    setPressed(null);
  }, [location.pathname]);

  // Lock background scrolling while the menu is open.
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
      ? "translateY(1px) scale(.98)"
      : isHovered
        ? "translateY(-2px)"
        : "translateY(0)",
    transition:
      "color 300ms ease, transform 300ms ease",
  });

  const navLinkClass =
    "group relative inline-flex min-h-12 w-full items-center py-3 text-sm font-medium tracking-wide lg:min-h-0 lg:w-auto lg:self-auto";

  const underlineClass =
    "pointer-events-none absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-[#c51f32] transition-transform duration-300 group-hover:scale-x-100 lg:bottom-1";

  const renderNavLink = (item, index) => (
    <NavLink
      key={item.path}
      to={item.path}
      end={item.path === "/"}
      onClick={close}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
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
    <header className="sticky top-0 z-[100] border-b border-black/[0.07] bg-[#fbfaf7]">
      {/* NAVBAR */}
      <div className="relative mx-auto flex h-[76px] w-[calc(100%-32px)] max-w-[1440px] items-center justify-between gap-3 sm:h-[84px] sm:w-[calc(100%-48px)] lg:h-[88px] lg:w-[calc(100%-64px)] lg:gap-6">

        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={close}
          className="group relative z-[120] flex min-w-0 shrink-0 items-center"
          aria-label="DESIG9 HAUSE home"
        >
          <img
            src="/logo/desig9-hause-logo.png"
            alt="DESIG9 HAUSE"
            className="block h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-14 sm:w-14 lg:h-[68px] lg:w-[68px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          onMouseLeave={() => setHovered(null)}
          className="hidden min-w-0 flex-1 items-center justify-end gap-x-4 lg:flex xl:gap-x-7"
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

          {/* DESKTOP CTA */}
          <Link
            to="/free-site-visit"
            className="group relative ml-1 inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 overflow-hidden border border-[#c51f32] bg-[#c51f32] px-3 text-[11px] font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#a71929] xl:ml-2 xl:gap-3 xl:px-5"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10 whitespace-nowrap">
              Free Site Visit
            </span>
            <ArrowUpRight
              size={16}
              className="relative z-10 shrink-0"
            />
          </Link>
        </nav>

        {/* MOBILE / TABLET TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-[120] grid size-11 shrink-0 place-items-center border border-black/10 bg-[#fbfaf7] text-[#22221f] transition hover:border-[#c51f32] hover:text-[#c51f32] active:scale-95 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-[76px] z-[110] overflow-x-hidden overflow-y-auto overscroll-contain bg-[#fbfaf7] transition-[opacity,visibility,transform] duration-300 ease-out sm:top-[84px] lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Mobile main navigation"
          className="mx-auto flex min-h-full w-full max-w-[640px] flex-col px-6 pb-10 pt-5 sm:px-10 sm:pt-7"
        >
          <div className="flex flex-col divide-y divide-black/[0.08]">
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
                  onTouchStart={() => setPressed(item.id)}
                  onTouchEnd={() => setPressed(null)}
                  style={({ isActive }) =>
                    linkStyle(
                      isActive,
                      hovered === item.id,
                      pressed === item.id
                    )
                  }
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
            className="group relative mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-4 overflow-hidden border border-[#c51f32] bg-[#c51f32] px-6 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#a71929] active:scale-[0.99]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">
              Free Site Visit
            </span>
            <ArrowUpRight
              size={17}
              className="relative z-10"
            />
          </Link>

          <p className="mt-8 text-center text-[10px] leading-5 tracking-[0.15em] text-[#77736c]">
            DESIG9 HAUSE — ARCHITECTURE · INTERIORS
          </p>
        </nav>
      </div>
    </header>
  );
}
