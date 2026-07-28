import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre-el-proyecto")({
  head: () => ({
    meta: [
      { title: "Sobre el proyecto — Common Ground" },
      {
        name: "description",
        content:
          "Repositorio de los principios que regulan el reparto de tareas y la búsqueda de la sinergia entre diseñadores e IA.",
      },
      { property: "og:title", content: "Sobre el proyecto — Common Ground" },
      {
        property: "og:description",
        content:
          "Repositorio de los principios que regulan el reparto de tareas y la búsqueda de la sinergia entre diseñadores e IA.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-3xl border-t border-plum-100 px-6 py-24">
      <h1 className="mb-8 font-display text-4xl font-extrabold leading-tight md:text-5xl">
        Sobre el proyecto
      </h1>
      <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">
        <p>
          Common Ground es un repositorio vivo de los principios que regulan el reparto de tareas
          y la búsqueda de la sinergia entre diseñadores e inteligencia artificial.
        </p>
        <p>
          No es un manifiesto ni una lista de buenas intenciones. Cada principio se publica como un
          texto independiente — de dónde viene la idea, qué evidencia la sostiene, dónde falla y
          qué regla concreta se puede copiar y usar en una instrucción persistente, una guía de
          equipo o un documento de referencia.
        </p>
      </div>
      <div className="mt-16 border-t border-plum-100 pt-12">
        <Link
          to="/"
          className="rounded-full border border-plum-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-plum-600 transition-colors hover:bg-plum-600 hover:text-cream"
        >
          Volver al índice
        </Link>
      </div>
    </main>
  );
}
