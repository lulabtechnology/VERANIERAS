import Image from "next/image";
import {
  Gift,
  Gem,
  HandHeart,
  Instagram,
  MessageCircle,
  PalmTree,
  Sparkles,
  Star,
  Sun,
  Waves,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/FAQ";
import { FloatingPearls } from "@/components/FloatingPearls";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppUrl(defaultWhatsAppMessage);

const gallery = [
  { src: "/images/collar-coco.jpg", label: "Hecho a mano", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/bandeja-collares.jpg", label: "Piezas únicas", className: "md:col-span-2" },
  { src: "/images/modelo-accesorios.jpg", label: "Verano todos los días", className: "md:row-span-2" },
  { src: "/images/plato-turquesa.jpg", label: "Detalles que elevan", className: "" },
  { src: "/images/mano-tropical.jpg", label: "Brilla con color", className: "md:col-span-2" },
  { src: "/images/galeria-02.jpg", label: "Dijes marinos", className: "" },
];

const categories = [
  {
    title: "Collares",
    src: "/images/bandeja-collares.jpg",
    text: "Capas, colores y dijes que convierten cualquier outfit en algo especial.",
  },
  {
    title: "Pulseras",
    src: "/images/pulseras-playa.jpg",
    text: "Detalles ligeros, coloridos y fáciles de combinar todos los días.",
  },
  {
    title: "Aretes",
    src: "/images/aretes-sol.jpg",
    text: "Piezas con brillo, movimiento y personalidad.",
  },
  {
    title: "Anillos",
    src: "/images/plato-turquesa.jpg",
    text: "Pequeños acentos para completar tu estilo.",
  },
  {
    title: "Arm cuff",
    src: "/images/galeria-04.jpg",
    text: "Un statement piece para looks atrevidos, playeros y editoriales.",
  },
  {
    title: "Piezas personalizadas",
    src: "/images/collar-coco.jpg",
    text: "Cuéntanos tu idea y creemos algo que se sienta tuyo.",
  },
];

const benefits = [
  { icon: Sparkles, title: "Eleva outfits sencillos", text: "Un toque de color cambia todo." },
  { icon: HandHeart, title: "Hecho a mano", text: "Cada pieza nace con intención." },
  { icon: Gem, title: "Piezas con personalidad", text: "Detalles únicos para tu estilo." },
  { icon: MessageCircle, title: "Compra fácil", text: "Te atendemos directo por WhatsApp." },
  { icon: PalmTree, title: "Inspiración tropical", text: "Mar, sol y Panamá en cada detalle." },
  { icon: Gift, title: "Ideal para regalar", text: "Accesorios especiales y memorables." },
];

const lifestyle = [
  "Para un look casual",
  "Para días de playa",
  "Para una salida especial",
  "Para regalar",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Preloader />
      <Navbar />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-verde text-ivory shadow-green transition hover:-translate-y-1 hover:bg-verde2 md:h-16 md:w-16"
        aria-label="Comprar por WhatsApp"
      >
        <MessageCircle size={27} />
      </a>

      <section id="inicio" className="relative min-h-screen px-4 pb-20 pt-28 md:px-8 md:pt-32">
        <FloatingPearls />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ivory/75 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-verde">
              <Sun size={15} className="text-gold" />
              Hecho en Panamá
            </div>

            <h1 className="font-display text-[4.1rem] leading-[0.92] tracking-[-0.045em] text-coffee md:text-[6.6rem] lg:text-[7.4rem]">
              Accesorios que se sienten como verano
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-coffee/72 md:text-xl">
              Piezas hechas a mano para elevar tu outfit, contar tu historia y llevar un pedacito de sol contigo.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-verde px-7 py-4 font-semibold text-ivory shadow-green transition hover:-translate-y-0.5 hover:bg-verde2"
              >
                <MessageCircle size={20} />
                Comprar por WhatsApp
              </a>

              <a
                href="#coleccion"
                className="inline-flex items-center justify-center rounded-full border border-coffee/20 bg-white/45 px-7 py-4 font-semibold text-coffee backdrop-blur transition hover:-translate-y-0.5 hover:border-verde/40 hover:text-verde"
              >
                Ver colección
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 text-sm text-coffee/70">
              <div className="rounded-3xl border border-white/50 bg-white/35 p-4 backdrop-blur">
                <span className="block font-display text-3xl text-verde">01</span>
                Piezas artesanales
              </div>
              <div className="rounded-3xl border border-white/50 bg-white/35 p-4 backdrop-blur">
                <span className="block font-display text-3xl text-verde">02</span>
                Dijes marinos
              </div>
              <div className="rounded-3xl border border-white/50 bg-white/35 p-4 backdrop-blur">
                <span className="block font-display text-3xl text-verde">03</span>
                Color tropical
              </div>
            </div>
          </div>

          <div className="relative min-h-[560px] lg:min-h-[700px]">
            <div className="image-glow absolute inset-0">
              <Image
                src="/images/hero-veranieras.jpg"
                alt="Accesorios tropicales Veranieras sobre tela cálida"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="rounded-[2.6rem] object-cover shadow-sun"
              />
            </div>

            <div className="absolute -bottom-7 left-4 hidden w-52 overflow-hidden rounded-[2rem] border-4 border-ivory shadow-soft md:block">
              <Image src="/images/plato-turquesa.jpg" alt="Collar turquesa sobre plato" width={420} height={520} className="h-64 w-full object-cover" />
            </div>

            <div className="absolute -right-5 top-24 hidden w-44 overflow-hidden rounded-[999px] border-4 border-ivory shadow-soft lg:block">
              <Image src="/images/modelo-accesorios.jpg" alt="Modelo usando accesorios tropicales" width={360} height={500} className="h-72 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2.5rem] border border-white/55 bg-ivory/58 p-7 shadow-soft backdrop-blur md:grid-cols-[1.2fr_.8fr] md:p-12">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <Star size={16} />
              Manifiesto
            </span>
            <p className="font-display text-4xl leading-tight tracking-[-0.035em] text-coffee md:text-6xl">
              Cada pieza de Veranieras nace para acompañarte en esos días donde quieres sentirte tú: libre, luminosa y auténtica.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
            <Image src="/images/mano-tropical.jpg" alt="Mano con accesorios Veranieras frente a hojas tropicales" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="galeria" className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-verde">
                <Instagram size={16} />
                Galería visual
              </span>
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
                Mood tropical boutique
              </h2>
            </div>
            <p className="max-w-md leading-7 text-coffee/70">
              Sol fuerte, cuentas coloridas, perlas, dijes marinos y composiciones que se sienten como vacaciones.
            </p>
          </div>

          <div className="grid auto-rows-[260px] grid-cols-2 gap-3 md:auto-rows-[290px] md:grid-cols-5 md:gap-4">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-[1.7rem] bg-sand shadow-soft ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/55 via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-4 left-4 rounded-full bg-ivory/86 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-verde backdrop-blur">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="coleccion" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <Waves size={16} />
              Colección
            </span>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Piezas para llevar el verano
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-white/50 bg-ivory/56 p-3 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden rounded-[1.55rem]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-4xl tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-2 min-h-14 text-sm leading-6 text-coffee/70">{item.text}</p>
                  <a
                    href={buildWhatsAppUrl(`Hola Veranieras, me interesa consultar por ${item.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-verde/25 px-5 py-3 text-sm font-semibold text-verde transition hover:bg-verde hover:text-ivory"
                  >
                    Consultar por WhatsApp
                    <MessageCircle size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="hecho-a-mano" className="texture px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <HandHeart size={16} />
              Hecho a mano
            </span>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Hecho a mano, pensado para sentirse único
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-coffee/72">
              En Veranieras cada accesorio se crea con intención: colores, texturas, dijes y combinaciones que reflejan una forma libre y creativa de vestir.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Diseños artesanales", "Inspiración tropical", "Piezas para personalizar tu estilo"].map((item) => (
                <div key={item} className="rounded-3xl border border-coffee/10 bg-white/45 p-5 text-sm font-semibold text-verde">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden rounded-[2.5rem] shadow-sun">
            <Image src="/images/galeria-02.jpg" alt="Detalle de cuentas y collares hechos a mano" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] shadow-sun">
            <Image src="/images/modelo-accesorios.jpg" alt="Lifestyle Veranieras con accesorios tropicales" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>

          <div className="rounded-[2.5rem] border border-white/55 bg-ivory/65 p-7 shadow-soft backdrop-blur md:p-12">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <Sun size={16} />
              Lifestyle
            </span>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Del café al atardecer
            </h2>
            <p className="mt-7 text-lg leading-8 text-coffee/72">
              Úsalos con camisas frescas, vestidos, tops básicos, bikinis, looks de playa o piezas más elegantes. Veranieras está hecho para acompañar tu estilo, no para limitarlo.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {lifestyle.map((item, index) => (
                <div key={item} className="rounded-[1.5rem] border border-coffee/10 bg-white/42 p-5">
                  <span className="font-display text-4xl text-gold">0{index + 1}</span>
                  <p className="mt-2 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.7rem] border border-white/55 bg-white/45 p-5 shadow-soft backdrop-blur lg:min-h-48">
                  <Icon className="mb-5 text-verde" size={28} strokeWidth={1.55} />
                  <h3 className="font-display text-3xl leading-none">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-coffee/65">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="comprar" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto overflow-hidden rounded-[2.7rem] bg-verde text-ivory shadow-green">
          <div className="grid min-h-[360px] items-center gap-8 p-7 md:grid-cols-[1fr_.85fr] md:p-12 lg:p-16">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-sand">
                <MessageCircle size={16} />
                Compra por WhatsApp
              </span>
              <h2 className="max-w-3xl font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
                ¿Viste una pieza que te encantó?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/75">
                Escríbenos por WhatsApp y te ayudamos a elegir el accesorio perfecto para ti o para regalar.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-4 font-semibold text-verde shadow-soft transition hover:-translate-y-0.5"
              >
                Comprar por WhatsApp
                <MessageCircle size={19} />
              </a>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-ivory/18">
              <Image src="/images/collar-coco.jpg" alt="Collar sobre coco tropical" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <MessageCircle size={16} />
              Pide por WhatsApp
            </span>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Escríbenos y haz tu pedido
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-coffee/70">
              Cuéntanos qué accesorio deseas y te responderemos lo antes posible.
            </p>
          </div>

          <WhatsAppForm />
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <Sparkles size={16} />
              Preguntas frecuentes
            </span>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Lo que necesitas saber
            </h2>
          </div>
          <FAQ />
        </div>
      </AnimatedSection>

      <footer className="bg-coffee px-4 py-12 text-ivory md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div>
            <h2 className="font-display text-5xl tracking-wide">VERANIERAS</h2>
            <p className="mt-4 max-w-sm leading-7 text-ivory/70">
              Accesorios hechos a mano para llevar el verano contigo.
            </p>
            <p className="mt-5 text-sm text-sand">veranieras.com</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sand">Contacto</h3>
            <div className="mt-4 space-y-3 text-sm text-ivory/75">
              <p>veranieras.info@gmail.com</p>
              <p>WhatsApp: +507 6636-4206</p>
              <p>Panamá</p>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sand">Redes</h3>
            <div className="mt-4 space-y-3 text-sm text-ivory/75">
              <a className="block transition hover:text-sand" href="https://www.instagram.com/veranieras?igsh=bDYwYzg4M25nNG0z" target="_blank" rel="noreferrer">
                Instagram · @veranieras
              </a>
              <a className="block transition hover:text-sand" href="https://www.tiktok.com/@veranierass?_r=1&_t=ZS-95mx7wPAojc" target="_blank" rel="noreferrer">
                TikTok · @veranierass
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sand">Enlaces rápidos</h3>
            <div className="mt-4 space-y-3 text-sm text-ivory/75">
              <a className="block transition hover:text-sand" href="#inicio">Inicio</a>
              <a className="block transition hover:text-sand" href="#coleccion">Colección</a>
              <a className="block transition hover:text-sand" href="#hecho-a-mano">Hecho a mano</a>
              <a className="block transition hover:text-sand" href="#comprar">Comprar</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
