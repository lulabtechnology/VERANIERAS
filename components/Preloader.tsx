"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const pearls = ["#f7efe4", "#B84C70", "#8A9636", "#B79552", "#0F5A3A", "#f7efe4"];

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-ivory text-coffee"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.div
              className="preloader-logo relative h-32 w-32 md:h-40 md:w-40"
              initial={{ opacity: 0, scale: 0.78, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/logo/veranieras-flor.png" alt="Logo Veranieras" fill priority className="object-contain" />
            </motion.div>

            <motion.div
              className="mt-4 font-display text-5xl tracking-[0.16em] md:text-7xl"
              initial={{ opacity: 0, y: 14, filter: "blur(7px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              VERANIERAS
            </motion.div>

            <motion.p
              className="mt-3 text-sm font-medium uppercase tracking-[0.28em] text-coffee/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Accesorios hechos a mano
            </motion.p>

            <motion.div
              className="mt-7 flex items-center gap-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.34 } },
              }}
            >
              {pearls.map((color, index) => (
                <motion.span
                  key={`${color}-${index}`}
                  className="block h-3 w-3 rounded-full border border-white/80 shadow-sm"
                  style={{ backgroundColor: color }}
                  variants={{
                    hidden: { opacity: 0, y: -12, scale: 0.5 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
