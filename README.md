# VERANIERAS Landing Page

Landing page boutique, one page y responsive para **VERANIERAS**, una marca de accesorios tropicales hechos a mano en Panamá.

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- Compatible con Vercel

## Cómo correr localmente

```bash
npm install
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube esta carpeta completa a GitHub.
2. En Vercel, elige **New Project**.
3. Conecta el repositorio.
4. Framework: **Next.js**.
5. Build Command: `npm run build`.
6. Output: Vercel lo detecta automáticamente.
7. Deploy.

## Funcionalidades incluidas

- Preloader animado con estética de perlas/cuentas.
- Navbar flotante responsive con menú mobile.
- Hero visual tipo editorial tropical.
- Galería tipo Instagram/Pinterest.
- Categorías: collares, pulseras, aretes, anillos, arm cuff y piezas personalizadas.
- Sección “Hecho a mano”.
- Sección lifestyle.
- Beneficios visuales.
- CTA de compra por WhatsApp.
- Formulario frontend que arma mensaje automático para WhatsApp.
- FAQ con acordeón animado.
- Footer premium con contacto y redes.
- Metadata SEO y Open Graph.

## WhatsApp

Número configurado:

```txt
+507 6636-4206
```

Archivo donde está la configuración:

```txt
lib/whatsapp.ts
```

## Imágenes

Las imágenes están en:

```txt
public/images/
```

Las imágenes actuales fueron armadas/cortadas desde la referencia visual compartida para mantener la estética tropical boutique. También se incluye:

```txt
IMAGE_PROMPTS.md
```

Ese archivo contiene prompts para generar o reemplazar imágenes finales con fotos oficiales de la marca.
