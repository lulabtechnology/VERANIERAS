"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#coleccion", label: "Colección" },
  { href: "#hecho-a-mano", label: "Hecho a mano" },
  { href: "#comprar", label: "Comprar" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappHref = buildWhatsAppUrl(defaultWhatsAppMessage);

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-4 md:top-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/55 bg-ivory/78 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full bg-ivory shadow-sm">
            <Image src="/logo/veranieras-flor.png" alt="Logo Veranieras" fill className="object-contain p-1" priority />
          </span>
          <span className="font-display text-2xl tracking-[0.08em] text-coffee md:text-3xl">VERANIERAS</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-coffee/78 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-verde">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-verde px-5 py-2.5 text-sm font-semibold text-ivory shadow-green transition hover:-translate-y-0.5 hover:bg-verde2 md:flex"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>

        <button
          className="rounded-full border border-coffee/10 bg-white/70 p-2.5 text-coffee md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-coffee/28 p-4 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="ml-auto min-h-[420px] w-full max-w-sm rounded-[2rem] bg-ivory p-6 shadow-soft"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl tracking-wide">VERANIERAS</span>
                <button
                  className="rounded-full bg-cream p-2 text-coffee"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-5 text-lg">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-coffee/8 bg-white/40 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-verde px-5 py-3.5 font-semibold text-ivory shadow-green"
              >
                <MessageCircle size={18} />
                Comprar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
