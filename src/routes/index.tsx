import { createFileRoute, Link } from "@tanstack/react-router";

import ilustracionAutoridad from "@/assets/principio-autoridad.jpg";
import { principles } from "@/data/principles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Criterio Compartido — Principios de colaboración humano-IA" },
      {
        name: "description",
        content:
          "Índice de principios que regulan cómo deben colaborar personas y sistemas de IA: autoridad, declaración, fases, memoria y umbrales.",
      },
      { property: "og:title", content: "Criterio Compartido — Principios de colaboración humano-IA" },
      {
        property: "og:description",
        content:
          "Un cuaderno de principios sobre autonomía, autoridad y criterio compartido entre personas e IA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <h1 className="mb-8 max-w-3xl font-display text-5xl font-extrabold leading-[0.9] md:text-7xl">
          Cómo somos las personas y la IA cuando{" "}
          <span className="text-sage-600">colaboramos.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-sage-900/70">
          Un repositorio vivo de los principios que regulan el reparto de autoridad entre la
          intuición humana y la autonomía artificial.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((p) =>
            p.published ? (
              <Link
                key={p.slug}
                to="/principios/$slug"
                params={{ slug: p.slug }}
                className="flex aspect-[4/5] cursor-pointer flex-col justify-between rounded-3xl bg-sage-600 p-8 text-cream shadow-xl shadow-sage-900/10"
              >
                <div>
                  <div className="mb-12 flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                      {p.category}
                    </span>
                    <span className="font-display font-bold">{p.number}</span>
                  </div>
                  <h2 className="mb-4 font-display text-3xl font-extrabold leading-tight">
                    {p.title}
                  </h2>
                  <img
                    src={ilustracionAutoridad}
                    alt="Una balanza con una mano humana en un platillo y un chip en el otro"
                    width={1024}
                    height={768}
                    className="mt-6 aspect-[4/3] w-full rounded-xl object-cover"
                  />
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium">
                  LEER PRINCIPIO <span className="text-lg">→</span>
                </div>
              </Link>
            ) : (
              <article
                key={p.slug}
                className="group flex aspect-[4/5] flex-col justify-between rounded-3xl border border-sage-100 bg-white p-8 transition-colors hover:border-sage-600"
              >
                <div>
                  <div className="mb-12 flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-sage-600">
                      {p.category}
                    </span>
                    <span className="font-display font-bold text-sage-100 group-hover:text-sage-600">
                      {p.number}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-extrabold leading-tight text-sage-900">
                    {p.title}
                  </h2>
                </div>
                <div className="text-sm font-medium text-sage-600">PRÓXIMAMENTE</div>
              </article>
            ),
          )}
        </div>
      </section>
    </>
  );
}
