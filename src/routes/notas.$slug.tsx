import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactElement } from "react";

import { SesgosPost } from "@/content/SesgosPost";
import { notes } from "@/data/notes";

const bodies: Record<string, () => ReactElement> = {
  sesgos: SesgosPost,
};

export const Route = createFileRoute("/notas/$slug")({
  loader: ({ params }) => {
    const note = notes.find((n) => n.slug === params.slug && n.published);
    if (!note || !bodies[params.slug]) throw notFound();
    return { note };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "No disponible — Common Ground" }, { name: "robots", content: "noindex" }],
      };
    }
    const { note } = loaderData;
    const title = `${note.title} — Common Ground`;
    return {
      meta: [
        { title },
        { name: "description", content: note.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: note.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: NotePost,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl font-extrabold">Esta nota aún no está publicada</h1>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full border border-plum-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-plum-600 transition-colors hover:bg-plum-600 hover:text-cream"
      >
        Volver al índice
      </Link>
    </main>
  ),
});

function NotePost() {
  const { note } = Route.useLoaderData();
  const Body = bodies[note.slug];

  return (
    <main className="mx-auto max-w-3xl border-t border-plum-100 px-6 py-24">
      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-plum-600">
          <span>{note.kicker}</span>
          <span className="h-px w-8 bg-plum-600/30"></span>
          <span>Nota</span>
        </div>
        <h1 className="mb-8 font-display text-4xl font-extrabold leading-tight md:text-5xl">
          {note.title}
        </h1>
        <p className="text-lg leading-relaxed text-plum-900/70">{note.summary}</p>
      </header>

      <Body />

      <footer className="mt-24 flex items-center justify-between border-t border-plum-100 pt-12 text-xs font-bold uppercase tracking-widest text-plum-600">
        <div>Common Ground · Principios de colaboración Humano × IA</div>
        <Link
          to="/"
          className="rounded-full border border-plum-600 px-4 py-2 transition-colors hover:bg-plum-600 hover:text-cream"
        >
          Volver al índice
        </Link>
      </footer>
    </main>
  );
}
