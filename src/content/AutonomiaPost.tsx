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
          Hace años, un consultor sénior explicaba con cierto orgullo de estatus que ya no
          preparaba sus propias presentaciones: tenía a un equipo a su cargo que las elaboraba por
          completo.
        </p>
        <p>
          A primera vista puede parecer una gestión eficiente del tiempo, pero esconde un riesgo
          sutil. Cuando alguien debe defender una propuesta ante un cliente sin haber atravesado
          el proceso de decidir qué conceptos incluir, cuáles descartar y por qué, la solidez de
          su discurso se resiente. El resultado visual o la estructura del documento pueden ser
          impecables, pero se ha perdido el hilo del proceso causal que llevó a esas conclusiones.
        </p>
        <p>
          En psicología se conoce como la{" "}
          <strong className="font-semibold text-plum-900">
            ilusión de profundidad explicativa
          </strong>
          : la tendencia a creer que entendemos un proceso o un sistema complejo mucho mejor de lo
          que realmente lo hacemos, una creencia que suele desmoronarse en cuanto intentamos
          explicarlo paso a paso<sup className="px-0.5 text-plum-600">2</sup>.
        </p>
        <p>
          Este fenómeno, previo a la llegada de la inteligencia artificial generativa, es el que
          Eric Horvitz empezó a formalizar en Microsoft en 1999.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          El criterio original: incertidumbre y coste de error
        </h2>
        <p>
          Horvitz buscaba responder a una pregunta clave para la interacción entre personas y
          tecnología:{" "}
          <strong className="font-semibold text-plum-900">
            ¿cuándo debe un sistema automatizado actuar por su cuenta y cuándo debe detenerse a
            consultar?
          </strong>
        </p>
        <p>
          Para investigarlo creó <em>LookOut</em>, un asistente que analizaba el correo
          electrónico y, al detectar que alguien proponía una cita, decidía si agendarla
          directamente o preguntar primero
          <sup className="px-0.5 text-plum-600">1</sup>. La aportación de Horvitz fue señalar que
          la decisión de automatizar no dependía del tipo de tarea en sí, sino de la combinación
          de dos variables:
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li>
              <strong className="font-semibold text-plum-900">La incertidumbre:</strong> cuánta
              certeza existe sobre la intención real de la persona.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">El coste del error:</strong> qué
              impacto tiene equivocarse y cómo de complejo resulta deshacer la acción.
            </li>
          </ul>
        </div>
        <p>
          Cuando la incertidumbre era baja y el error resultaba barato y reversible, actuar sin
          preguntar tenía sentido. Si la incertidumbre era alta o el error resultaba costoso,
          convenía detenerse y consultar.
        </p>
        <p>
          Aunque este planteamiento sigue siendo una referencia válida, los sistemas actuales
          introducen dinámicas que Horvitz no tuvo que abordar: memorias entre sesiones,
          colaboración sostenida en el tiempo y capacidad para asumir tareas ambiguas
          <sup className="px-0.5 text-plum-600">3</sup>.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          El debate sobre la delegación: capacidad vs. criterio
        </h2>
        <p>
          Existe una tendencia habitual a abordar la delegación de tareas planteando que la
          tecnología asuma el trabajo mecánico o exploratorio, mientras la persona retiene el
          criterio y la evaluación. Otra aproximación sugiere repartir el trabajo según la fase
          del proceso creativo: dejar que la IA explore e idee al inicio y reservar el juicio
          humano para las decisiones finales.
        </p>
        <p>
          Sin embargo,{" "}
          <strong className="font-semibold text-plum-900">
            la capacidad técnica para realizar una tarea no constituye por sí sola el criterio
            para delegarla
          </strong>
          .
        </p>
        <p>
          Un estudio sobre equipos humano-IA en entornos complejos mostró que cuando un sistema
          asume autonomía en decisiones que involucran valores o responsabilidad directa, la
          sensación de control, la confianza y el compromiso de la persona con el resultado
          disminuyen, incluso si la decisión tomada por el sistema fue acertada
          <sup className="px-0.5 text-plum-600">4</sup>.
        </p>
        <p>
          Lo que está en juego en muchos entornos profesionales no es únicamente si el sistema
          puede generar un buen resultado, sino si la persona puede comprenderlo, hacerlo propio y
          sostenerlo.
        </p>
        <p>
          Un diseñador gráfico que utiliza IA generativa no suele dividir su trabajo de forma
          rígida entre "fases exploratorias" para la máquina y "fases ejecutivas" para él. Puede
          delegar la recopilación de referentes en la fase inicial, pero también solicitar código
          o maquetación en fases avanzadas. Lo que preserva bajo su control directo son aquellas
          decisiones conceptuales y estéticas que constituyen el núcleo de su trabajo y definen su
          responsabilidad ante el cliente. Para poder explicarlas y defenderlas, necesita haber
          participado activamente en el proceso de decisión.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Sesgos de la herramienta y fatiga de supervisión
        </h2>
        <p>Analizar la delegación requiere tener en cuenta los sesgos de ambas partes:</p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li>
              <strong className="font-semibold text-plum-900">
                El sesgo de acción del modelo:
              </strong>{" "}
              los modelos de lenguaje actuales tienden a la sobreejecución. Ante un contexto o una
              instrucción ambigua, su comportamiento por defecto es generar el artefacto final
              inmediatamente en lugar de detenerse a verificar si el usuario solo buscaba aportar
              antecedentes o iniciar una conversación.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Tendencias de razonamiento:</strong>{" "}
              los modelos pueden incurrir en cierre prematuro (dar por válida una solución
              temprana para optimizar el esfuerzo computacional) o utilizar atajos de lectura
              (priorizar información fácilmente accesible o de su entrenamiento frente a la
              verificación exhaustiva).
            </li>
            <li>
              <strong className="font-semibold text-plum-900">
                La fatiga de supervisión humana:
              </strong>{" "}
              la literatura sobre automatización documenta ampliamente que las personas tienden a
              aceptar por defecto las propuestas de un sistema por pura reducción de esfuerzo
              cognitivo. Disponer de la capacidad técnica de corregir a un sistema no garantiza
              que esa corrección se ejerza de forma activa
              <sup className="px-0.5 text-plum-600">6</sup>.
            </li>
          </ul>
        </div>
        <p>
          Un análisis sobre más de 400.000 sesiones de código asistido por IA refleja este
          fenómeno: ante niveles similares de autonomía del asistente, los usuarios novatos
          abandonan la tarea con una frecuencia significativamente mayor (19%) que los expertos
          (5-7%)<sup className="px-0.5 text-plum-600">5</sup>. La diferencia radica en la
          capacidad del usuario para detectar cuándo un resultado requiere una revisión crítica.
        </p>

        {/* La regla */}
        <div className="my-16 rounded-3xl bg-plum-900 p-10 text-cream shadow-2xl">
          <h2 className="mb-6 font-display text-xl font-extrabold uppercase tracking-tight">
            La regla
          </h2>
          <p className="mb-8 leading-relaxed opacity-90">
            Para evitar que el sistema actúe de forma prematura y para proteger el espacio de
            decisión del usuario, la instrucción que regula al asistente debe ser explícita. A
            continuación, un marco estructurado en dos niveles para guiar la interacción.
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            1. Filtro autoral
          </p>
          <p className="mb-8 leading-relaxed opacity-90">
            Si la solicitud del usuario involucra una decisión interpretativa, estratégica o
            conceptual, el asistente no debe generar la solución final directamente. En su lugar,
            debe señalar la distinción y ofrecer opciones: <em>"Esta tarea tiene un componente
            interpretativo. Puedo realizar la estructura o recopilación de datos inicial y dejarte
            la redacción/definición final, o proponerte preguntas para desarrollarla juntos."</em>
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            2. Evaluación de ejecución (incertidumbre y coste)
          </p>
          <p className="mb-4 leading-relaxed opacity-90">
            Para tareas de ejecución directa, el asistente evaluará dos condiciones antes de
            actuar de forma autónoma:
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre baja (claridad sobre lo que
              el usuario requiere) y coste de error bajo (reversibilidad sencilla): actuar
              directamente.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Cumplimiento de solo una condición: actuar,
              declarando explícitamente qué decisión se ha tomado y por qué.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Incertidumbre alta y coste de error alto:
              detenerse y solicitar confirmación antes de proceder.
            </li>
          </ul>
          <p className="mt-8 leading-relaxed opacity-90">
            <strong className="font-semibold text-cream">Ajuste dinámico:</strong> si una
            categoría de decisión es validada repetidamente por el usuario sin modificaciones, se
            reduce el umbral de consulta para ese tipo de tarea. Si el usuario realiza correcciones
            sobre una decisión, se eleva el umbral de supervisión.
          </p>
        </div>
        <p className="text-sm italic text-plum-900/50">
          Las dinámicas de interacción a lo largo del tiempo y el impacto de la supervisión pasiva
          en entornos de alta responsabilidad quedan identificados como aspectos a desarrollar en
          posteriores análisis.
        </p>

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
              Sobreejecución ante un contexto o una instrucción ambigua.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Cierre prematuro.</strong> Dar por
              válida una solución temprana para optimizar el esfuerzo computacional.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Atajos de lectura.</strong>{" "}
              Priorizar información fácilmente accesible frente a la verificación exhaustiva.
            </li>
            <li>
              <strong className="font-semibold text-plum-900">Fatiga de supervisión.</strong>{" "}
              Aceptar por defecto las propuestas de un sistema por reducción de esfuerzo
              cognitivo.
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
            <span className="mr-2 font-medium text-plum-900">[1]</span> Horvitz, E. (1999).
            Principles of Mixed-Initiative User Interfaces. Proceedings of the SIGCHI Conference
            on Human Factors in Computing Systems (CHI '99), 159-166. ACM.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[2]</span> Rozenblit, L., & Keil, F.
            (2002). The misunderstood limits of folk science: An illusion of explanatory depth.
            Cognitive Science, 26(5), 521-562.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[3]</span> Zhu, H., Wang, C., Xiao,
            Q., & Shen, H. (2026). Design Principles for Human-Agent Interaction. arXiv:2606.20630.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[4]</span> Verhagen, R. S., Neerincx,
            M. A., & Tielman, M. L. (2025). Agent Allocation of Moral Decisions in Human-Agent
            Teams. Proceedings of FAccT '25, 2302-2317.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[5]</span> Hitzig, Z., Massenkoff,
            M., Lyubich, E., Heller, R., & McCrory, P. (2026). Agentic coding and persistent
            returns to expertise. Anthropic Research.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[6]</span> Parasuraman, R., & Riley,
            V. (1997). Humans and Automation: Use, Misuse, Disuse, Abuse. Human Factors, 39(2),
            230-253.
          </li>
        </ol>
      </div>
    </>
  );
}
