import { createFileRoute, Link } from "@tanstack/react-router";


import { principles } from "@/data/principles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Common Ground — Principios de colaboración Diseño × IA" },
      {
        name: "description",
        content:
          "Repositorio de los principios que regulan el reparto de tareas y la búsqueda de la sinergia entre diseñadores e IA.",
      },
      { property: "og:title", content: "Common Ground — Principios de colaboración Diseño × IA" },
      {
        property: "og:description",
        content:
          "Un decálogo de la colaboración entre diseño e inteligencia artificial.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <h1 className="mb-4 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] md:text-8xl">
          Common Ground
        </h1>
        <p className="mb-8 max-w-2xl font-display text-2xl font-extrabold leading-tight text-plum-900 md:text-3xl">
          Principios de colaboración Diseño × IA
        </p>
        <p className="max-w-xl text-lg leading-relaxed text-plum-900/70">
          Un repositorio vivo de los principios que regulan el reparto de tareas y la búsqueda de la
          sinergia entre diseñadores e inteligencia artificial.
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
                style={{ backgroundColor: `var(${p.accent})` }}
                className="flex min-h-[180px] cursor-pointer flex-col justify-between rounded-3xl p-6 text-cream shadow-xl shadow-plum-900/10 transition-transform hover:-translate-y-1 md:aspect-[4/5] md:p-8"
              >
                <div>
                  <div className="mb-6 flex items-start justify-between md:mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                      {p.category}
                    </span>
                    <span className="font-display font-bold">{p.number}</span>
                  </div>
                  <h2 className="mb-4 font-display text-xl font-extrabold leading-tight md:text-3xl">
                    {p.title}
                  </h2>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium md:mt-8">
                  LEER PRINCIPIO <span className="text-lg">→</span>
                </div>
              </Link>
            ) : (
              <article
                key={p.slug}
                style={{ borderColor: `color-mix(in oklab, var(${p.accent}) 35%, white)` }}
                className="group flex min-h-[180px] flex-col justify-between rounded-3xl border bg-white p-6 transition-transform hover:-translate-y-1 md:aspect-[4/5] md:p-8"
              >
                <div>
                  <div className="mb-6 flex items-start justify-between md:mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: `var(${p.accent})` }}>
                      {p.category}
                    </span>
                    <span className="font-display font-bold opacity-40" style={{ color: `var(${p.accent})` }}>
                      {p.number}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-extrabold leading-tight text-plum-900 md:text-3xl">
                    {p.title}
                  </h2>
                </div>
                <div className="text-sm font-medium" style={{ color: `var(${p.accent})` }}>PRÓXIMAMENTE</div>
              </article>
            ),
          )}
        </div>
      </section>
    </>
  );
}
