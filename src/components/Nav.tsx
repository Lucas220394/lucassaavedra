"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <a
            href="#hero"
            className="font-display text-lg tracking-tight"
            aria-label={`${site.name} — inicio`}
          >
            {site.name}
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-sm text-muted-strong transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href={site.contactHref} className="btn btn--sm hidden md:inline-flex">
            {site.contactCta}
          </a>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-foreground transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[1.5px] w-6 -translate-y-1/2 bg-foreground transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-foreground transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-background px-6 pt-28 transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display block border-b border-line py-5 text-4xl"
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.contactHref}
          onClick={() => setOpen(false)}
          className="btn mt-10 w-full"
        >
          {site.contactCta}
        </a>
      </div>
    </header>
  );
}
