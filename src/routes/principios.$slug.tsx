import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { AutoridadPost } from "@/content/AutoridadPost";
import { principles } from "@/data/principles";

const bodies: Record<string, () => React.ReactElement> = {
  autoridad: AutoridadPost,
};

export const Route = createFileRoute("/principios/$slug")({
  loader: ({ params }) => {
    const principle = principles.find((p) => p.slug === params.slug && p.published);
    if (!principle || !bodies[params.slug]) throw notFound();
    return { principle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "No disponible — Criterio Compartido" }, { name: "robots", content: "noindex" }],
      };
    }
    const { principle } = loaderData;
    const title = `${principle.title} — Criterio Compartido`;
    return {
      meta: [
        { title },
        { name: "description", content: principle.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: principle.summary },
      ],
    };
  },
  component: PrinciplePost,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl font-extrabold">Este principio aún no está publicado</h1>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full border border-sage-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sage-600 transition-colors hover:bg-sage-600 hover:text-cream"
      >
        Volver al índice
      </Link>
    </main>
  ),
});

function PrinciplePost() {
  const { principle } = Route.useLoaderData();
  const Body = bodies[principle.slug];

  return (
    <main className="mx-auto max-w-3xl border-t border-sage-100 px-6 py-24">
      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-sage-600">
          <span>Principio {principle.number}</span>
          <span className="h-px w-8 bg-sage-600/30"></span>
          <span>{principle.category}</span>
        </div>
        <h1 className="mb-8 font-display text-4xl font-extrabold leading-tight md:text-5xl">
          La autoridad se reparte por tipo de decisión, no por tema
        </h1>
        <Body />
      </header>

      <footer className="mt-24 flex items-center justify-between border-t border-sage-100 pt-12 text-xs font-bold uppercase tracking-widest text-sage-600">
        <div>VER TAMBIÉN: Declaración, Fases, Umbrales</div>
        <Link
          to="/"
          className="rounded-full border border-sage-600 px-4 py-2 transition-colors hover:bg-sage-600 hover:text-cream"
        >
          Volver al índice
        </Link>
      </footer>
    </main>
  );
}
