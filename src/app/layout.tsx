import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucassaavedra.com"),
  title: {
    default: "LucasSaavedra — Productor Musical & Estudio de Grabación",
    template: "%s — LucasSaavedra",
  },
  description:
    "Lucas Saavedra: cantante, compositor y productor musical uruguayo, fundador de PM Music Records. Producción, mezcla, masterización y sesiones de grabación en Montevideo.",
  keywords: [
    "Lucas Saavedra",
    "PM Music Records",
    "productor musical",
    "música cristiana",
    "Montevideo",
    "Uruguay",
    "mezcla",
    "masterización",
  ],
  authors: [{ name: "Lucas Saavedra" }],
  openGraph: {
    title: "LucasSaavedra — Productor Musical & Estudio de Grabación",
    description:
      "Producción, mezcla, masterización y sesiones de grabación. Fundador de PM Music Records, Montevideo.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
