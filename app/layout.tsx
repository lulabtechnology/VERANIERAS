import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://veranieras.com"),
  title: "Veranieras | Accesorios hechos a mano en Panamá",
  description:
    "Accesorios artesanales hechos a mano en Panamá. Collares, pulseras, aretes, anillos y piezas únicas para elevar tu estilo.",
  keywords: [
    "accesorios Panamá",
    "joyería hecha a mano",
    "collares artesanales",
    "pulseras handmade",
    "aretes Panamá",
    "Veranieras",
    "arm cuff",
  ],
  openGraph: {
    title: "Veranieras | Accesorios hechos a mano en Panamá",
    description:
      "Accesorios artesanales hechos a mano en Panamá. Collares, pulseras, aretes, anillos y piezas únicas para elevar tu estilo.",
    url: "https://veranieras.com",
    siteName: "Veranieras",
    images: [
      {
        url: "/images/og-veranieras.jpg",
        width: 1200,
        height: 630,
        alt: "Veranieras accesorios tropicales hechos a mano",
      },
    ],
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veranieras | Accesorios hechos a mano en Panamá",
    description:
      "Accesorios artesanales hechos a mano en Panamá. Collares, pulseras, aretes, anillos y piezas únicas para elevar tu estilo.",
    images: ["/images/og-veranieras.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F1E5D2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
