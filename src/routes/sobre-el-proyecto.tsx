import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre-el-proyecto")({
  head: () => ({
    meta: [
      { title: "Sobre el proyecto — Criterio Compartido" },
      {
        name: "description",
        content:
          "Por qué existe este cuaderno de principios sobre colaboración entre personas e inteligencia artificial.",
      },
      { property: "og:title", content: "Sobre el proyecto — Criterio Compartido" },
      {
        property: "og:description",
        content:
          "Por qué existe este cuaderno de principios sobre colaboración entre personas e inteligencia artificial.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-3xl border-t border-sage-100 px-6 py-24">
      <h1 className="mb-8 font-display text-4xl font-extrabold leading-tight md:text-5xl">
        Sobre el proyecto
      </h1>
      <div className="space-y-6 text-lg leading-relaxed text-sage-900/80">
        <p>
          Este cuaderno recoge, uno a uno, los principios que regulan cómo deberían colaborar las
          personas y los sistemas de IA. Cada principio se publica como un texto independiente:
          de dónde viene la idea, qué evidencia la sostiene, dónde falla y qué regla concreta se
          puede copiar y usar.
        </p>
        <p>
          No es un manifiesto ni una lista de buenas intenciones. Cada entrada termina en algo que
          se pueda escribir en una instrucción persistente, una guía de equipo o un documento de
          referencia, y que se pueda revisar con los casos reales que la ponen a prueba.
        </p>
      </div>
      <div className="mt-16 border-t border-sage-100 pt-12">
        <Link
          to="/"
          className="rounded-full border border-sage-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sage-600 transition-colors hover:bg-sage-600 hover:text-cream"
        >
          Volver al índice
        </Link>
      </div>
    </main>
  );
}
