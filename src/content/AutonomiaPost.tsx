import ilustracionAutoridad from "@/assets/principio-autoridad.jpg";

export function AutonomiaPost() {
  return (
    <>
      <img
        src={ilustracionAutoridad}
        alt="Una balanza con una mano humana en un platillo y un chip en el otro"
        width={1024}
        height={768}
        className="mb-12 aspect-[4/3] w-full rounded-3xl object-cover"
      />

      <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">
        <p>
          Un sistema de IA no debe asumir autonomía basándose en su capacidad para ejecutar una
          tarea, sino en{" "}
          <strong className="font-semibold text-plum-900">
            la preservación de la responsabilidad autoral del usuario, el nivel de incertidumbre y
            el coste del error
          </strong>
          .
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Complacencia y pérdida de criterio
        </h2>
        <p>
          Delegar de forma indiscriminada tareas interpretativas o decisiones intermedias genera
          la{" "}
          <strong className="font-semibold text-plum-900">
            ilusión de profundidad explicativa
          </strong>
          : la falsa sensación de dominar un proceso o resultado que en realidad no se sabría
          justificar paso a paso<sup className="px-0.5 text-plum-600">1</sup>.
        </p>
        <p>
          Además, los modelos de lenguaje tienden a la sobreejecución (sesgo de acción) y al
          cierre prematuro para optimizar cómputo. Si el sistema actúa por defecto sin calibrar la
          ambigüedad, reduce la supervisión activa del usuario por pura fatiga cognitiva.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Dos capas de delegación
        </h2>
        <p>La autonomía del sistema se gestiona evaluando dos preguntas consecutivas.</p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <p className="mb-4 font-semibold text-plum-900">
            ¿La tarea requiere juicio interpretativo o autoral?
          </p>
          <ul className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="font-semibold text-plum-600">Sí →</span>
              <span>filtro autoral. Detenerse y ofrecer despiece.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-plum-600">No →</span>
              <span>evaluar incertidumbre y coste de error.</span>
            </li>
          </ul>
          <div className="mt-3 flex gap-3 pl-1">
            <span className="text-plum-600">↓</span>
            <ul className="flex-1 space-y-2 text-plum-900/70">
              <li className="flex gap-3">
                <span className="shrink-0 text-plum-600">→</span> Incertidumbre baja y coste bajo:
                actuar.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-plum-600">→</span> Solo una de las dos es alta:
                actuar y declarar.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-plum-600">→</span> Incertidumbre alta y coste alto:
                preguntar antes.
              </li>
            </ul>
          </div>
        </div>
        <p>
          <strong className="font-semibold text-plum-900">1. Filtro autoral.</strong> El trabajo
          no se reparte por fases ("la IA al principio, la persona al final"), sino por
          responsabilidad. Todo lo que constituya el núcleo conceptual que el usuario deba
          defender o sostener queda bajo su control explícito
          <sup className="px-0.5 text-plum-600">3</sup>.
        </p>
        <p>
          <strong className="font-semibold text-plum-900">2. Matriz de Horvitz.</strong> Para
          tareas operativas, el nivel de autonomía se calibra según la incertidumbre (cuánta
          certeza existe sobre la intención real del usuario) y el coste de error (qué impacto
          tiene el fallo y cómo de fácil es revertirlo)
          <sup className="px-0.5 text-plum-600">2</sup>.
        </p>

        {/* La regla */}
        <div className="my-16 rounded-3xl bg-plum-900 p-10 text-cream shadow-2xl">
          <h2 className="mb-6 font-display text-xl font-extrabold uppercase tracking-tight">
            La regla
          </h2>
          <p className="mb-8 leading-relaxed opacity-90">
            Copiar en las instrucciones del asistente.
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            1. Filtro autoral
          </p>
          <p className="mb-8 leading-relaxed opacity-90">
            Si la solicitud involucra una decisión interpretativa, estratégica o autoral, no
            generar el resultado final directamente. Ofrecer el despiece:{" "}
            <em>
              "Esta tarea tiene un componente interpretativo. Puedo realizar la estructura o los
              datos y dejarte la redacción o definición final, o proponerte preguntas para
              desarrollarla juntos."
            </em>
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            2. Matriz de ejecución
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre baja y coste bajo: actuar
              directamente.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre alta o coste alto (solo una):
              actuar, declarando qué se ha decidido y por qué.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre alta y coste alto: detenerse
              y solicitar confirmación explícita antes de proceder.
            </li>
          </ul>
          <p className="mt-8 leading-relaxed opacity-90">
            <strong className="font-semibold text-cream">Ajuste dinámico:</strong> si el usuario
            valida reiteradamente un tipo de decisión, baja el umbral de consulta para ese
            contexto. Si el usuario corrige una decisión, sube el umbral de supervisión de
            inmediato.
          </p>
        </div>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Sesgos en juego
        </h2>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li>
              <strong className="font-semibold text-plum-900">
                Ilusión de profundidad explicativa.
              </strong>{" "}
              Creer que se entiende un proceso mucho mejor de lo que realmente se hace.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Sesgo de acción del modelo.</strong>{" "}
              Sobreejecución y cierre prematuro ante un contexto o una instrucción ambigua, para
              optimizar cómputo.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-plum-100 pt-12">
        <h2 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-plum-600">
          Notas
        </h2>
        <ol className="space-y-3 text-xs leading-relaxed text-plum-900/60">
          <li>
            <span className="mr-2 font-medium text-plum-900">[1]</span> Rozenblit, L., & Keil, F.
            (2002). The misunderstood limits of folk science: An illusion of explanatory depth.
            Cognitive Science, 26(5), 521-562.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[2]</span> Horvitz, E. (1999).
            Principles of Mixed-Initiative User Interfaces. Proceedings of the SIGCHI Conference
            on Human Factors in Computing Systems (CHI '99), 159-166. ACM.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[3]</span> Verhagen, R. S., Neerincx,
            M. A., & Tielman, M. L. (2025). Agent Allocation of Moral Decisions in Human-Agent
            Teams. Proceedings of FAccT '25, 2302-2317.
          </li>
        </ol>
      </div>
    </>
  );
}
