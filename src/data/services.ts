export type Service = {
  slug: "impresion-personalizacion" | "gran-formato" | "pop-corporativo";
  title: string;
  short: string;
  bullets: string[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "impresion-personalizacion",
    title: "Impresión y personalización",
    short: "Personaliza productos con acabados profesionales para tu marca o eventos.",
    bullets: [
      "Sublimación y personalización de productos",
      "Playeras, gorras, termos, tazas y más",
      "Diseño / ajuste de artes y revisión antes de producir",
      "Producción por pieza o por volumen",
    ],
    note: "Ideal para regalos, uniformes, eventos y merchandising.",
  },
  {
    slug: "gran-formato",
    title: "Publicidad visual y gran formato",
    short: "Impresión e instalación para que tu negocio se vea y destaque.",
    bullets: [
      "Lonas, banners y vinil impreso",
      "Rotulación y señalética",
      "Acabados: ojillos, bastillas, laminado (según material)",
      "Asesoría según uso interior/exterior",
    ],
    note: "Perfecto para fachadas, promociones, puntos de venta y campañas.",
  },
  {
    slug: "pop-corporativo",
    title: "Material publicitario (POP y corporativo)",
    short: "Papelería, piezas POP y materiales para tu identidad corporativa.",
    bullets: [
      "Tarjetas, volantes, stickers y etiquetas",
      "Menús, catálogos y material de mostrador",
      "Branding corporativo (papelería y aplicaciones)",
      "Paquetes para negocios y emprendedores",
    ],
    note: "Para presencia de marca, ventas y presentación profesional.",
  },
];
