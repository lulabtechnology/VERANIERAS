"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Los accesorios son hechos a mano?",
    answer:
      "Sí, nuestras piezas son elaboradas de forma artesanal con combinaciones pensadas para que cada accesorio tenga personalidad.",
  },
  {
    question: "¿Qué materiales utilizan?",
    answer:
      "Trabajamos con cuentas, dijes, perlas, piezas doradas y detalles decorativos seleccionados según cada diseño. Si quieres saber el material específico de una pieza, puedes escribirnos por WhatsApp.",
  },
  {
    question: "¿Cómo puedo comprar?",
    answer:
      "Puedes escribirnos por WhatsApp, decirnos qué accesorio te interesa y te guiaremos con disponibilidad, precio y entrega.",
  },
  {
    question: "¿Hacen piezas personalizadas?",
    answer:
      "Sí, puedes contarnos qué estilo, color o accesorio tienes en mente y revisamos opciones disponibles.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos en Panamá.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[1.35rem] border border-coffee/10 bg-white/45 backdrop-blur"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-coffee md:px-6"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                <Plus size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-coffee/70 md:px-6">{faq.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
