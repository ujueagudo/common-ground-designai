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
    title: "Autonomía según incertidumbre y coste de error",
    summary:
      "Lo que decide si la IA puede actuar sola no es de qué trata la tarea, sino la incertidumbre sobre la intención y el coste de deshacer el error.",
    published: true,
    accent: "--color-accent-magenta",
  },
  {
    number: "02",
    slug: "declaracion",
    category: "Principio 02",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: false,
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
