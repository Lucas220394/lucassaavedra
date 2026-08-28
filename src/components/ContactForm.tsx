"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";

type Status = "idle" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Sin backend por ahora: se muestra el estado de éxito.
    // Conectar aquí un endpoint / servicio de formularios cuando esté disponible.
    setStatus("sent");
  }

  const f = contact.fields;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* honeypot anti-spam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={f.name.label} placeholder={f.name.placeholder} />
        <Field
          id="email"
          type="email"
          label={f.email.label}
          placeholder={f.email.placeholder}
        />
      </div>

      <Field
        id="subject"
        label={f.subject.label}
        placeholder={f.subject.placeholder}
      />

      <label className="flex flex-col gap-2">
        <span className="eyebrow">{f.message.label}</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={f.message.placeholder}
          className="resize-none rounded-2xl border border-line bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-foreground/40"
        />
      </label>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn">
          {contact.submit}
        </button>
        {status === "sent" && (
          <p className="text-sm text-muted-strong" role="status">
            {contact.success}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="h-12 rounded-full border border-line bg-card px-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-foreground/40"
      />
    </label>
  );
}
