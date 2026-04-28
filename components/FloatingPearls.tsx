"use client";

import { motion } from "framer-motion";

const colors = ["#0F5A3A", "#B79552", "#2CA6A4", "#CF5A3A", "#FBF5EA"];

export function FloatingPearls() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-3 w-3 rounded-full border border-white/65 shadow-sm"
          style={{
            left: `${8 + ((index * 13) % 86)}%`,
            top: `${12 + ((index * 19) % 72)}%`,
            backgroundColor: colors[index % colors.length],
          }}
          animate={{
            y: [0, -12, 0],
            x: [0, index % 2 ? 8 : -8, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.13,
          }}
        />
      ))}
    </div>
  );
}
