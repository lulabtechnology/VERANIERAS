"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const pearls = [
  "#f7efe4",
  "#0F5A3A",
  "#B79552",
  "#2CA6A4",
  "#CF5A3A",
  "#f7efe4",
  "#174732",
  "#B79552",
];

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-cream text-coffee"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="font-display text-5xl tracking-[0.18em] md:text-7xl"
              initial={{ opacity: 0, y: 14, filter: "blur(7px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              VERANIERAS
            </motion.div>
            <motion.div
              className="mt-7 flex items-center gap-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.065,
                    delayChildren: 0.18,
                  },
                },
              }}
            >
              {pearls.map((color, index) => (
                <motion.span
                  key={`${color}-${index}`}
                  className="block h-3 w-3 rounded-full border border-white/70 shadow-sm"
                  style={{ backgroundColor: color }}
                  variants={{
                    hidden: { opacity: 0, y: -14, scale: 0.4 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 17 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
