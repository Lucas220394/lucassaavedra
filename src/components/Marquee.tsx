import type { CSSProperties } from "react";
import { marqueeLines } from "@/content/site";

/** Cinta de texto en desplazamiento infinito (CSS puro, se pausa al pasar el cursor). */
export default function Marquee() {
  const line = marqueeLines.join("  —  ");
  const content = `${line}  —  `;

  return (
    <section
      aria-label="Manifiesto"
      className="border-y border-line py-8 sm:py-10"
    >
      <div
        className="marquee"
        style={{ "--marquee-duration": "36s" } as CSSProperties}
      >
        {[0, 1].map((i) => (
          <div className="marquee__track" key={i} aria-hidden={i === 1}>
            <span className="font-display text-2xl text-muted-strong sm:text-4xl">
              {content.repeat(2)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
