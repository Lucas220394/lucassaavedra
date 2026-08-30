import Image from "next/image";
import Nav from "@/components/Nav";
import HeroWaves from "@/components/HeroWaves";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import {
  about,
  contact,
  faq,
  hero,
  services,
  site,
  stats,
  testimonials,
  works,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ---------------- HERO ---------------- */}
        <section
          id="hero"
          className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]"
          />
          <HeroWaves />
          <div className="container-x relative z-10">
            <Reveal as="p" className="eyebrow">
              {hero.eyebrow}
            </Reveal>

            <h1 className="font-display mt-6 text-[15vw] leading-[0.92] sm:text-[11vw] lg:text-[112px]">
              <Reveal as="span" delay={60} className="block">
                {hero.titleTop}
              </Reveal>
              <Reveal as="span" delay={140} className="block text-muted-strong">
                {hero.titleBottom}
              </Reveal>
            </h1>

            <Reveal
              delay={220}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-strong sm:text-lg"
            >
              {hero.subtitle}
            </Reveal>

            <Reveal
              delay={300}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a href={site.contactHref} className="btn">
                {site.contactCta}
              </a>
              <span className="text-sm text-muted">{hero.note}</span>
            </Reveal>
          </div>
        </section>

        {/* ---------------- SERVICIOS ---------------- */}
        <section id="servicios" className="scroll-mt-24 py-24 sm:py-32">
          <div className="container-x">
            <SectionHeading eyebrow={services.eyebrow} title={services.title} />

            <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
              {services.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 80} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="work-card__img object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="font-display mt-6 text-2xl sm:text-[32px]">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-strong">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Marquee />

        {/* ---------------- TRABAJOS ---------------- */}
        <section id="trabajos" className="scroll-mt-24 py-24 sm:py-32">
          <div className="container-x">
            <SectionHeading eyebrow={works.eyebrow} title={works.title} />
            <Reveal
              as="p"
              className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-strong sm:text-base"
            >
              {works.intro}
            </Reveal>

            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {works.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card group block"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-card">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="work-card__img object-cover"
                      />
                      <span className="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1.5 text-xs backdrop-blur-md">
                        {works.listenLabel}
                      </span>
                    </div>
                    <h3 className="font-display mt-5 text-base">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted">{item.roles}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- NOSOTROS ---------------- */}
        <section id="nosotros" className="scroll-mt-24 py-24 sm:py-32">
          <div className="container-x">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
              <div>
                <Reveal
                  as="p"
                  className="text-base leading-relaxed text-muted-strong sm:text-lg"
                >
                  {about.lead}
                </Reveal>

                <div className="mt-14 grid gap-y-12 sm:grid-cols-2 sm:gap-x-10">
                  {about.cards.map((card, i) => (
                    <Reveal key={card.title} delay={i * 80}>
                      <span className="font-display block text-6xl text-muted sm:text-7xl">
                        {i + 1}
                      </span>
                      <h3 className="font-display mt-4 text-2xl sm:text-[28px]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-strong">
                        {card.body}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={120} className="mt-14">
                  <a href={site.contactHref} className="btn">
                    {site.contactCta}
                  </a>
                </Reveal>
              </div>

              <Reveal delay={120}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line bg-card lg:sticky lg:top-28">
                  <Image
                    src={about.image}
                    alt={about.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- STATS ---------------- */}
        <section className="border-y border-line py-16 sm:py-20">
          <div className="container-x grid grid-cols-2 gap-y-10 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <div className="font-display text-5xl sm:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- TESTIMONIOS ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="container-x">
            <SectionHeading
              eyebrow={testimonials.eyebrow}
              title={testimonials.title}
            />

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {testimonials.items.map((item, i) => (
                <Reveal
                  key={item.name}
                  delay={i * 80}
                  className="flex flex-col rounded-2xl border border-line bg-card p-8"
                >
                  <h3 className="font-display text-lg">{item.quote}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-strong">
                    {item.body}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-line">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-muted">— {item.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section id="preguntas" className="scroll-mt-24 py-24 sm:py-32">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* ---------------- CONTACTO ---------------- */}
        <section
          id="contacto"
          className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 sm:py-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]"
          />
          <div className="container-x relative">
            <Reveal as="p" className="eyebrow">
              {contact.eyebrow}
            </Reveal>
            <h2 className="font-display mt-4 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[104px]">
              <Reveal as="span" className="block">
                {contact.titleTop}
              </Reveal>
              <Reveal as="span" delay={120} className="block text-muted-strong">
                {contact.titleBottom}
              </Reveal>
            </h2>

            <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <Reveal>
                <p className="max-w-md text-base leading-relaxed text-muted-strong">
                  {contact.subtitle}
                </p>
                <div className="mt-10 flex flex-col gap-2 text-sm">
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-underline w-fit text-muted-strong transition-colors hover:text-foreground"
                  >
                    {contact.email}
                  </a>
                  <span className="text-muted">{contact.phone}</span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-[48px]">
        {title}
      </h2>
    </Reveal>
  );
}
