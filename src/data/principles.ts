export type Principle = {
  number: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  published: boolean;
  accent: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    slug: "autoridad",
    category: "Autoridad",
    title: "La autoridad se reparte por tipo de decisión, no por tema.",
    summary:
      "Lo que decide si la IA puede actuar sola no es de qué trata la tarea, sino la confianza en la intención y el coste de deshacer el error.",
    published: true,
    accent: "--color-accent-magenta",
  },
  {
    number: "02",
    slug: "declaracion",
    category: "Declaración",
    title: "Lo que no se declara, no se puede corregir.",
    summary:
      "Poder anular una decisión no es lo mismo que ejercer esa corrección. Si el sistema no la hace visible, pasa desapercibida.",
    published: false,
    accent: "--color-accent-violet",
  },
  {
    number: "03",
    slug: "fases",
    category: "Fases",
    title: "Divergir admite libertad; converger exige aprobación.",
    summary:
      "Mientras se exploran opciones nada está comprometido. Al cerrar un resultado, el error deja de ser gratis.",
    published: false,
    accent: "--color-accent-coral",
  },
  {
    number: "04",
    slug: "memoria",
    category: "Memoria",
    title: "El contexto compartido es una trayectoria, no un estado.",
    summary:
      "El control sostenido entre sesiones cambia el problema: ya no es una decisión puntual, es una relación.",
    published: false,
    accent: "--color-accent-amber",
  },
  {
    number: "05",
    slug: "umbrales",
    category: "Umbrales",
    title: "Los umbrales se recalibran con los aciertos y las correcciones.",
    summary:
      "Si un tipo de decisión se acierta sin corrección, baja el umbral. Si la misma corrección se repite, súbelo.",
    published: false,
    accent: "--color-accent-teal",
  },
  {
    number: "06",
    slug: "experiencia",
    category: "Experiencia",
    title: "La autonomía correcta depende de quién supervisa.",
    summary:
      "Con el mismo reparto de autoridad, quien distingue peor un acierto de un error se encuentra en apuros mucho más veces.",
    published: false,
    accent: "--color-accent-blue",
  },
];
