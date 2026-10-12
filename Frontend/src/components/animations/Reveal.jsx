import { useEffect, useRef } from "react";
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { node.classList.add("is-visible"); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); } }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
