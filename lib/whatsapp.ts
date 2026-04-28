export const WHATSAPP_NUMBER = "50766364206";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Hola Veranieras, me interesa comprar un accesorio. Mi nombre es: _____. Estoy interesada en: _____.";
