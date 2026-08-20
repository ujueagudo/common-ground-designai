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
    slug: "autonomia",
    category: "Autonomía",
    title: "Cuándo (no) delegar en la IA",
    summary:
      "Lo que decide si la IA puede actuar sola no es de qué trata la tarea, sino la incertidumbre sobre la intención y el coste de deshacer el error.",
    published: true,
    accent: "--color-accent-magenta",
  },
  {
    number: "02",
    slug: "anclaje",
    category: "Anclaje",
    title: "Cuándo (no) ver la respuesta de la IA antes de pensar la tuya",
    summary:
      "Ver la propuesta de una IA antes de formar tu propio juicio ancla tu pensamiento a ella, incluso si es errónea. No depende de la calidad de la respuesta, sino del momento en que la recibes.",
    published: true,
    accent: "--color-accent-violet",
  },
  {
    number: "03",
    slug: "fases",
    category: "Principio 03",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: false,
    accent: "--color-accent-coral",
  },
  {
    number: "04",
    slug: "memoria",
    category: "Principio 04",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: false,
    accent: "--color-accent-amber",
  },
  {
    number: "05",
    slug: "umbrales",
    category: "Principio 05",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: false,
    accent: "--color-accent-teal",
  },
  {
    number: "06",
    slug: "experiencia",
    category: "Principio 06",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: false,
    accent: "--color-accent-blue",
  },
];
