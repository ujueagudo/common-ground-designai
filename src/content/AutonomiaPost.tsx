import ilustracionAutoridad from "@/assets/principio-autoridad.jpg";

export function AutonomiaPost() {
  return (
    <>
      {/* Lead hook */}
      <div className="mb-8 border-l-4 border-plum-600 pl-5 md:pl-6">
        <p className="text-xl font-medium leading-relaxed text-plum-900/70 md:text-2xl">
          Tienes que preparar una presentación para un cliente. En el proceso habitual,
          hubieses pensado activamente cada frase y decidido qué datos destacar y cuáles
          descartar. Como ahora tienes IA, decides delegarle la tarea. Y sin ser consciente, tu
          foco de atención se desplaza de construir el discurso a revisar su trabajo. El
          resultado impresiona y todo parece coherente hasta que el cliente te hace una
          pregunta que no sabes responder y descubres que has perdido el control sobre tu
          propio razonamiento.
        </p>
      </div>

      <img
        src={ilustracionAutoridad}
        alt="Una balanza con una mano humana en un platillo y un chip en el otro"
        width={1024}
        height={768}
        className="mb-12 aspect-[21/9] w-full rounded-3xl object-cover"
      />

      <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          El principio
        </h2>
        <p>
          Un sistema de IA no debe asumir autonomía basándose en su capacidad técnica para
          realizar una tarea, sino en tres factores:{" "}
          <strong className="font-semibold text-plum-900">
            la preservación de la responsabilidad autoral del usuario, el nivel de incertidumbre y
            el coste de error
          </strong>
          .
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Qué es este principio
        </h2>
        <p>
          Es un marco de decisión para calibrar cuándo una IA debe actuar por su cuenta y cuándo
          debe detenerse a preguntar. Evita que el asistente tome la iniciativa en decisiones
          críticas o interpretativas, de forma que la persona mantenga el control real sobre el
          proceso, no solo sobre el resultado final.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Por qué ocurre el problema
        </h2>
        <p>
          Cuando se colabora con modelos de lenguaje se cruzan dos dinámicas que dificultan la
          supervisión.
        </p>
        <p>
          <strong className="font-semibold text-plum-900">1. Los sesgos de la IA.</strong>
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li>
              <strong className="font-semibold text-plum-900">
                Sesgo de sobreejecución (bias towards action):
              </strong>{" "}
              la IA tiende a entregar el trabajo terminado de inmediato ante cualquier instrucción
              ambigua, en lugar de preguntar si solo se buscaba aportarle contexto.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Cierre prematuro:</strong> el modelo
              suele dar por buena una solución temprana para optimizar recursos computacionales,
              sin explorar más alternativas.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Atajos de lectura:</strong> tiende a
              apoyarse en su memoria de entrenamiento o en la información más accesible antes que
              verificar de forma exhaustiva los datos del contexto.
            </li>
          </ul>
        </div>
        <p>
          <strong className="font-semibold text-plum-900">2. La fatiga de supervisión humana.</strong>{" "}
          La investigación sobre automatización demuestra que las personas tienden a aceptar por
          defecto lo que el sistema propone, por pura economía cognitiva. Tener la posibilidad de
          corregir a la IA no significa que esa corrección se ejerza de verdad.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          El riesgo: la ilusión de profundidad explicativa
        </h2>
        <p>
          Delegar de forma indiscriminada tareas interpretativas o decisiones intermedias genera
          la{" "}
          <strong className="font-semibold text-plum-900">
            ilusión de profundidad explicativa
          </strong>
          : la falsa sensación de que se entiende un proceso o una propuesta simplemente porque el
          resultado final es coherente y estético
          <sup className="px-0.5 text-plum-600">1</sup>.
        </p>
        <p>
          Cuando una persona no ha atravesado el proceso de decidir qué entra, qué sale y por qué,
          pierde la capacidad de defender y justificar esa propuesta ante un cliente o un equipo.
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-plum-900/60">
            Lo que dicen los datos
          </p>
          <p>
            En análisis de proyectos asistidos por IA, los usuarios novatos abandonan la tarea un{" "}
            <strong className="font-semibold text-plum-900">19% de las veces</strong> frente al{" "}
            <strong className="font-semibold text-plum-900">5%</strong> de los expertos
            <sup className="px-0.5 text-plum-600">2</sup>. La diferencia no está en la
            herramienta, sino en saber reconocer cuándo un resultado requiere supervisión crítica.
          </p>
        </div>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Cómo aplicar el principio: dos capas
        </h2>
        <p>
          Para calibrar la autonomía del asistente, la interacción se filtra en dos niveles
          consecutivos.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-plum-50 p-8">
          <pre className="font-mono text-sm leading-loose text-plum-900/80">
            {`¿La tarea requiere juicio interpretativo o autoral?
 ├── SÍ  ──► Capa 1: filtro autoral (detenerse y ofrecer despiece)
 └── NO  ──► Capa 2: matriz de Horvitz (incertidumbre + coste)
              ├── Incertidumbre baja + coste bajo ──► Actuar
              ├── Solo una de las dos es alta ──► Valorar el control:
              │     actuar y declarar, o detenerse y preguntar
              └── Incertidumbre alta + coste alto ──► Detenerse y preguntar`}
          </pre>
        </div>
        <p>
          <strong className="font-semibold text-plum-900">Capa 1: el filtro autoral.</strong> El
          trabajo no se reparte por fases ("la IA al principio, la persona al final"), sino por
          responsabilidad. Todo lo que constituya el núcleo conceptual, interpretativo o
          estratégico que la persona deba defender debe permanecer bajo su control directo
          <sup className="px-0.5 text-plum-600">3</sup>.
        </p>
        <p>
          <strong className="font-semibold text-plum-900">Capa 2: la matriz de Horvitz.</strong>{" "}
          Para tareas operativas o mecánicas, la autonomía se rige por dos variables formuladas
          por Eric Horvitz en 1999<sup className="px-0.5 text-plum-600">4</sup>:
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li>
              <strong className="font-semibold text-plum-900">Incertidumbre:</strong> cuánta
              certeza existe sobre la intención real del usuario.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Coste de error:</strong> qué impacto
              tiene un fallo y cómo de fácil es deshacerlo.
            </li>
          </ul>
        </div>

        {/* La regla */}
        <div className="my-16 rounded-3xl bg-plum-900 p-10 text-cream shadow-2xl">
          <h2 className="mb-6 font-display text-xl font-extrabold uppercase tracking-tight">
            La regla
          </h2>
          <p className="mb-8 leading-relaxed opacity-90">
            Copiar en las instrucciones del asistente
            <sup className="px-0.5 text-plum-300">*</sup>.
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            1. Filtro autoral
          </p>
          <p className="mb-8 leading-relaxed opacity-90">
            Si la solicitud involucra decisiones interpretativas, conceptuales o estratégicas, no
            generar la solución final directamente. Detenerse y ofrecer opciones:{" "}
            <em>
              "Esta tarea tiene un componente interpretativo. Puedo realizar la
              recopilación/estructura inicial y dejarte la definición final, o proponerte
              preguntas para desarrollarla juntos."
            </em>
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            2. Evaluación de ejecución (matriz de Horvitz)
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre baja y coste de error bajo:
              actuar sin preguntar.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre alta o coste de error alto
              (solo una): valorar qué nivel de control conviene y elegir entre actuar
              (declarando explícitamente qué se ha decidido y por qué) o detenerse a pedir
              confirmación.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre alta y coste de error alto:
              detenerse y solicitar confirmación antes de ejecutar.
            </li>
          </ul>
          <p className="mb-2 mt-8 text-sm font-bold uppercase tracking-wide text-cream/70">
            3. Recalibración dinámica (con excepciones)
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Si el usuario aprueba reiteradamente un
              tipo de decisión mecánica sin correcciones, se puede reducir la necesidad de
              consultar en ese terreno concreto.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Si el usuario corrige una decisión, se
              eleva el umbral de supervisión de inmediato, en ese terreno y en los adyacentes.
            </li>
          </ul>
          <p className="mb-2 mt-6 text-sm font-bold uppercase tracking-wide text-cream/70">
            Sin excepción, no recalibrable por historial de aprobaciones
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Coste económico o de recursos (poner en
              marcha procesos, herramientas o tareas que tengan un coste asociado): preguntar
              siempre.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Cambio de contexto o proyecto dentro de la
              misma conversación: parar y confirmar antes de pasar de uno a otro, aunque cada
              acción sea reversible.
            </li>
          </ul>
        </div>
        <p className="-mt-2 text-xs leading-relaxed text-plum-900/50">
          <span className="mr-1 font-medium text-plum-900/70">*</span>
          Para usar esta instrucción, pégala en: ChatGPT, Instrucciones personalizadas; Gemini,
          instrucciones de un Gem; Claude (chat), Instrucciones personalizadas o de Proyecto;
          Claude Code y Claude Cowork, un archivo CLAUDE.md. El peso que le da cada modelo no
          tiene por qué ser igual: probada con Claude Code, no verificada en el resto.
        </p>
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
            <span className="mr-2 font-medium text-plum-900">[2]</span> Hitzig, Z., Massenkoff,
            M., Lyubich, E., Heller, R., & McCrory, P. (2026). Agentic coding and persistent
            returns to expertise. Anthropic Research.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[3]</span> Verhagen, R. S., Neerincx,
            M. A., & Tielman, M. L. (2025). Agent Allocation of Moral Decisions in Human-Agent
            Teams. Proceedings of FAccT '25, 2302-2317.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[4]</span> Horvitz, E. (1999).
            Principles of Mixed-Initiative User Interfaces. Proceedings of the SIGCHI Conference
            on Human Factors in Computing Systems (CHI '99), 159-166. ACM.
          </li>
        </ol>
      </div>
    </>
  );
}
