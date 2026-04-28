"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type FormState = {
  nombre: string;
  telefono: string;
  accesorio: string;
  mensaje: string;
};

const initialState: FormState = {
  nombre: "",
  telefono: "",
  accesorio: "",
  mensaje: "",
};

export function WhatsAppForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<FormState> = {};
    if (!form.nombre.trim()) nextErrors.nombre = "Escribe tu nombre.";
    if (!form.telefono.trim()) nextErrors.telefono = "Escribe tu teléfono.";
    if (!form.accesorio.trim()) nextErrors.accesorio = "Indica el accesorio que deseas.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      `Hola Veranieras, mi nombre es ${form.nombre.trim()}.`,
      `Mi teléfono es ${form.telefono.trim()}.`,
      `Estoy interesada en ${form.accesorio.trim()}.`,
      form.mensaje.trim() ? `Mensaje: ${form.mensaje.trim()}.` : "",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/60 bg-white/50 p-4 shadow-soft backdrop-blur md:p-7"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-coffee/60">
            Nombre
          </span>
          <input
            className="input-soft"
            value={form.nombre}
            onChange={(event) => updateField("nombre", event.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
          />
          {errors.nombre ? <small className="mt-2 block text-coral">{errors.nombre}</small> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-coffee/60">
            Teléfono
          </span>
          <input
            className="input-soft"
            value={form.telefono}
            onChange={(event) => updateField("telefono", event.target.value)}
            placeholder="Tu número de WhatsApp"
            autoComplete="tel"
          />
          {errors.telefono ? <small className="mt-2 block text-coral">{errors.telefono}</small> : null}
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-coffee/60">
          Accesorio que desea comprar
        </span>
        <input
          className="input-soft"
          value={form.accesorio}
          onChange={(event) => updateField("accesorio", event.target.value)}
          placeholder="Ej. Collar de perlas y estrella de mar"
        />
        {errors.accesorio ? <small className="mt-2 block text-coral">{errors.accesorio}</small> : null}
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-coffee/60">
          Mensaje opcional
        </span>
        <textarea
          className="input-soft min-h-32 resize-none"
          value={form.mensaje}
          onChange={(event) => updateField("mensaje", event.target.value)}
          placeholder="Color, estilo, cantidad o cualquier detalle que quieras contarnos."
        />
      </label>

      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-verde px-6 py-4 font-semibold text-ivory shadow-green transition hover:-translate-y-0.5 hover:bg-verde2 md:w-auto"
      >
        <MessageCircle size={19} />
        Enviar por WhatsApp
        <Send size={16} />
      </button>
    </motion.form>
  );
}
