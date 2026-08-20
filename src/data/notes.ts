export type Note = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  published: boolean;
  accent: string;
};

export const notes: Note[] = [
  {
    slug: "sesgos",
    kicker: "Contexto",
    title: "Cómo somos los humanos y cómo es la IA cuando colaboramos",
    summary:
      "Un mapa de los sesgos que se activan a ambos lados de la mesa: los nuestros al delegar y revisar, y los de la IA al proponer y afirmar.",
    published: false,
    accent: "--color-accent-violet",
  },
];
