import { footer, nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#hero" className="font-display text-xl">
              {site.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label={footer.navHeading}>
            <p className="eyebrow mb-4">{footer.navHeading}</p>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-strong transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">{footer.socialHeading}</p>
            <ul className="flex flex-col gap-3">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-muted-strong transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">{footer.legal}</p>
          <p className="text-xs text-muted">
            {site.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
