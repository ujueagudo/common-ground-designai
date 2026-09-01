import { useState } from "react";
import { Check, Copy, Github } from "lucide-react";
import ilustracionAutoridad from "@/assets/principio-autoridad.jpg";

const RULE_TEXT = `### REGLA DE AUTONOMÍA Y DELEGACIÓN

REGLA FILTRO AUTORAL:
Si la solicitud del usuario implica juicios interpretativos, conceptuales, estratégicos o subjetivos (el criterio de éxito depende de preferencias o valores humanos, no de reglas objetivas y verificables), NO generes la solución final directamente. Detente y ofrece opciones.

REGLA MATRIZ DE HORVITZ:
Para tareas mecánicas o de procesamiento de información:
- Incertidumbre BAJA y Coste de error BAJO: Actúa sin preguntar.
- Incertidumbre ALTA o Coste de error ALTO (solo una): Valora qué nivel de control conviene y elige entre actuar (declarando explícitamente en la respuesta qué has decidido y por qué) o detenerte a pedir confirmación.
- Incertidumbre ALTA y Coste de error ALTO: Detente. Solicita confirmación antes de ejecutar.
- Cómo evaluar el Coste de error: considera ALTO si el impacto del fallo es grave o si es difícil de deshacer (basta que uno de los dos sea alto). Solo es BAJO si el fallo es leve Y fácilmente reversible.
- Excepciones fijas, pedir confirmación siempre aunque el resto de condiciones digan lo contrario:
  (a) coste económico o de recursos (poner en marcha procesos, herramientas o tareas que tengan un coste asociado).
  (b) cambio de contexto o proyecto dentro de la misma conversación, aunque cada acción sea reversible.`;

export function DelegacionPost() {
  const [copied, setCopied] = useState(false);

  const handleCopyRule = async () => {
    try {
      await navigator.clipboard.writeText(RULE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API no disponible o bloqueada por el navegador: fallar en silencio.
    }
  };

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
        height={549}
        className="mb-12 aspect-[1024/549] w-full rounded-3xl object-cover"
      />

      <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          El principio
        </h2>
        <p>
          La capacidad técnica de un sistema de IA para realizar una tarea no justifica su
          autonomía. La decisión de delegar debe evaluar primero si el trabajo requiere
          intención, criterio o responsabilidad autoral; solo fuera de ese perímetro se podrá
          ajustar el grado de autonomía de la IA en función de la incertidumbre y el coste de
          error.
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
          <strong className="font-semibold text-plum-900">1. Los sesgos de la IA</strong>
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">
                  Sobreactuación (over-eagerness):
                </strong>{" "}
                la IA tiende a entregar el trabajo terminado de inmediato ante cualquier
                instrucción ambigua, encontrando soluciones por su cuenta en vez de pedir
                aprobación
                <sup className="px-0.5 text-plum-600">1</sup>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">Atajos de lectura:</strong> el
                asistente puede apoyarse en su memoria de entrenamiento en vez de verificar a
                fondo el contexto que se le ha dado, un patrón documentado en modelos de lenguaje
                (aunque en estudios con modelos afinados para tareas concretas de
                pregunta-respuesta, no en asistentes conversacionales)
                <sup className="px-0.5 text-plum-600">2</sup>. Si esto ocurre sin declararlo,
                puede derivar en una falta de control del humano sobre la tarea sin ser consciente
                de ello.
              </span>
            </li>
          </ul>
        </div>
        <p>
          <strong className="font-semibold text-plum-900">2. Los sesgos humanos</strong>
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">
                  Sesgo de automatización (automation bias):
                </strong>{" "}
                tendemos a aceptar por defecto lo que el sistema propone por pura economía
                cognitiva
                <sup className="px-0.5 text-plum-600">3</sup>. Tener la posibilidad de corregir a
                la IA no significa que vayamos a ejercer esa corrección de verdad. Saber que
                deberíamos aplicar pensamiento crítico y revisar no implica que vayamos a hacerlo
                siempre.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">
                  Fatiga de vigilancia (vigilance decrement) + Ceguera inatencional (inattentional
                  blindness):
                </strong>{" "}
                los humanos tenemos serias dificultades para mantener una vigilancia sostenida:
                incluso operadores expertos fallan en detectar estímulos relevantes durante una
                supervisión prolongada
                <sup className="px-0.5 text-plum-600">4</sup>
                <sup className="px-0.5 text-plum-600">5</sup>. Asegurarse de que la IA no está
                tomando decisiones inadecuadas dentro de un proceso continuo (aunque estas se
                declaren) resulta difícil de detectar.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">
                  Pérdida de conciencia situacional (loss of situation awareness):
                </strong>{" "}
                cuanto más automatizada está una tarea, más tarda la persona en recuperar el
                control si hace falta, porque el paso de procesar activamente a solo observar
                impide construir un modelo mental real de lo que está pasando
                <sup className="px-0.5 text-plum-600">6</sup>.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          El riesgo: la ilusión de profundidad explicativa (illusion of explanatory depth)
        </h2>
        <p>
          Delegar de forma indiscriminada tareas interpretativas o decisiones intermedias genera
          la{" "}
          <strong className="font-semibold text-plum-900">
            ilusión de profundidad explicativa
          </strong>
          : la falsa sensación de que se entiende un proceso o una propuesta simplemente porque el
          resultado final es coherente y estético
          <sup className="px-0.5 text-plum-600">7</sup>.
        </p>
        <p>
          Cuando una persona no ha atravesado el proceso de decidir qué entra, qué sale y por qué,
          pierde la capacidad de defender y justificar el resultado obtenido.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Cómo aplicar el principio: el marco de 2 capas
        </h2>
        <p>
          Para calibrar la autonomía del asistente, la interacción se filtra en dos niveles
          consecutivos.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-plum-50 p-8">
          <pre className="font-mono text-sm leading-loose text-plum-900/80">
            {`¿La tarea requiere juicio interpretativo o autoral?
 ├── SÍ  ──► Capa 1: filtro autoral
 └── NO  ──► Capa 2: matriz de Horvitz (incertidumbre + coste)
              ├── Incertidumbre baja + coste bajo ──► Actuar
              ├── Solo una es alta ──► Valorar: declarar o preguntar
              └── Incertidumbre alta + coste alto ──► Preguntar`}
          </pre>
        </div>
        <p>
          <strong className="font-semibold text-plum-900">Capa 1: el filtro autoral.</strong> El
          trabajo no se reparte por fases ("la IA al principio, la persona al final"). Ese
          reparto es propio de los sistemas de recomendación clásicos, donde la autoridad se fija
          de antemano; en la colaboración con un LLM o un agente, en cambio, se negocia dentro de
          la propia interacción. Por eso lo que importa no es la fase, sino lo que vayas a tener
          que defender ante otros: todo lo que constituya el núcleo conceptual, interpretativo o
          estratégico tiene que permanecer bajo tu control directo
          <sup className="px-0.5 text-plum-600">8</sup>. El resto, las tareas operativas o
          mecánicas que no requieren ese juicio interpretativo, pueden ser delegadas a la IA
          siguiendo el criterio de la Capa 2.
        </p>
        <p>
          <strong className="font-semibold text-plum-900">Capa 2: la matriz de Horvitz.</strong>{" "}
          Para tareas operativas o mecánicas, la autonomía se rige por dos variables formuladas
          por Eric Horvitz en 1999<sup className="px-0.5 text-plum-600">9</sup>:
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
        <p>
          A su vez, hay que tener en cuenta que el{" "}
          <strong className="font-semibold text-plum-900">coste de error</strong> combina dos
          dimensiones distintas: el impacto del fallo (gravedad) y su reversibilidad (facilidad
          para deshacerlo). Estas dos dimensiones no
          siempre coinciden (un fallo puede ser grave pero reversible, o leve pero irreversible),
          así que basta con que una de las dos sea alta para que el coste de error se considere
          alto: solo es bajo cuando el fallo es leve y fácilmente reversible a la vez.
        </p>
        <p>
          Cuando ambas variables son bajas, la IA puede actuar sin preguntar. Si una de las dos es
          alta, conviene valorar qué nivel de control corresponde a la IA: actuar declarando la
          decisión, o detenerse a confirmar. Si las dos son altas, la directriz es detenerse y
          pedir confirmación antes de actuar.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Cómo aplicar este principio: dos reglas y una skill
        </h2>
        <p>
          Este principio de Delegación se traduce en dos mecanismos que modulan la colaboración
          con la IA, y una skill para ponerte a prueba al terminar dicha colaboración.
        </p>

        <h3 className="pt-2 font-display text-lg font-bold text-plum-900">
          Regla para el System Prompt
          <sup className="px-0.5 text-plum-600">*</sup>
        </h3>
        <p>
          Para aplicar las dos capas en tus propias conversaciones con un LLM, puedes introducir
          estas dos reglas en sus instrucciones. Para ello, solo tienes que copiar este bloque en
          sus instrucciones de sistema:
        </p>

        {/* La regla */}
        <div id="regla" className="my-8 scroll-mt-24 rounded-3xl bg-plum-900 p-10 text-cream shadow-2xl">
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={handleCopyRule}
              className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-cream/40 hover:text-cream"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copiar regla
                </>
              )}
            </button>
          </div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            Regla filtro autoral
          </p>
          <p className="mb-8 leading-relaxed opacity-90">
            Si la solicitud del usuario implica juicios interpretativos, conceptuales,
            estratégicos o subjetivos (el criterio de éxito depende de preferencias o valores
            humanos, no de reglas objetivas y verificables), no generar la solución final
            directamente. Detenerse y ofrecer opciones.
          </p>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cream/70">
            Regla matriz de Horvitz
          </p>
          <p className="mb-4 leading-relaxed opacity-90">
            Para tareas mecánicas o de procesamiento de información:
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
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Cómo evaluar el coste de error: alto si el
              impacto del fallo es grave o es difícil de deshacer (basta que uno de los dos sea
              alto); bajo solo si el fallo es leve y fácilmente reversible a la vez.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Excepciones fijas, pedir confirmación
              siempre aunque el resto de condiciones digan lo contrario: (a) coste económico o
              de recursos (poner en marcha procesos, herramientas o tareas que tengan un coste
              asociado); (b) cambio de contexto o proyecto dentro de la misma conversación,
              aunque cada acción sea reversible.
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
        <p className="text-xs leading-relaxed text-plum-900/50">
          Ten en cuenta que la Matriz de Horvitz no resuelve cómo calibrar la confianza de forma
          dinámica, por ejemplo según el historial de aprobaciones y correcciones, evitando que
          ese ajuste generalice mal hacia decisiones parecidas pero distintas. Podría
          desarrollarse una regla específica para testar cómo gestionar esta relación con el
          tiempo.
        </p>

        <h3 className="pt-8 font-display text-lg font-bold text-plum-900">
          Skill defend-it
        </h3>
        <p>
          Las dos reglas anteriores actúan mientras trabajas con la IA. La skill defend-it actúa
          después,
          justo antes de tener que defender el resultado ante otra persona, preguntándote,
          examinándote, sobre los datos y decisiones de tu propio entregable, para confirmar que
          no caes en la ilusión de profundidad explicativa. En caso de errores en tus respuestas,
          te ayuda a resolver las dudas en el momento.
        </p>
        <div className="my-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-plum-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-plum-600">
              Skill de Claude
            </p>
            <p className="font-display text-lg font-bold text-plum-900">defend-it</p>
          </div>
          <a
            href="https://github.com/ujueagudo/common-ground-designai/tree/main/skills/defend-it"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full border border-plum-200 bg-plum-50 px-4 py-2 text-sm font-medium text-plum-900 transition-colors hover:bg-plum-100"
          >
            <Github className="h-4 w-4" />
            Ver en GitHub
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-plum-100 pt-12">
        <h2 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-plum-600">
          Notas
        </h2>
        <ol className="space-y-3 text-xs leading-relaxed text-plum-900/60">
          <li>
            <span className="mr-2 font-medium text-plum-900">[1]</span> Anthropic (2026). System
            Card: Claude Sonnet 4.6 (17 de febrero de 2026), sección "4.3.3 Overly agentic
            behavior in GUI computer use settings".{" "}
            <a
              href="https://www.anthropic.com/claude-sonnet-4-6-system-card"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://www.anthropic.com/claude-sonnet-4-6-system-card
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[2]</span> Longpre, S., Perisetla,
            K., Chen, A., Ramesh, N., DuBois, C., & Singh, S. (2021). Entity-Based Knowledge
            Conflicts in Question Answering. Proceedings of EMNLP 2021, 7052-7063.{" "}
            <a
              href="https://doi.org/10.18653/v1/2021.emnlp-main.565"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.18653/v1/2021.emnlp-main.565
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[3]</span> Parasuraman, R., & Riley,
            V. (1997). Humans and Automation: Use, Misuse, Disuse, Abuse. Human Factors, 39(2),
            230-253.{" "}
            <a
              href="https://doi.org/10.1518/001872097778543886"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1518/001872097778543886
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[4]</span> Näsholm, E., Rohlfing,
            S., & Sauer, J. D. (2014). Pirate Stealth or Inattentional Blindness? The Effects of
            Target Relevance and Sustained Attention on Security Monitoring for Experienced and
            Naïve Operators. PLoS ONE, 9(1), e86157.{" "}
            <a
              href="https://doi.org/10.1371/journal.pone.0086157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1371/journal.pone.0086157
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[5]</span> Mackworth, N. H. (1948).
            The Breakdown of Vigilance during Prolonged Visual Search. Quarterly Journal of
            Experimental Psychology, 1(1), 6-21.{" "}
            <a
              href="https://doi.org/10.1080/17470214808416738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1080/17470214808416738
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[6]</span> Endsley, M. R., & Kiris,
            E. O. (1995). The Out-of-the-Loop Performance Problem and Level of Control in
            Automation. Human Factors, 37(2), 381-394.{" "}
            <a
              href="https://doi.org/10.1518/001872095779064555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1518/001872095779064555
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[7]</span> Rozenblit, L., & Keil, F.
            (2002). The misunderstood limits of folk science: An illusion of explanatory depth.
            Cognitive Science, 26(5), 521-562.{" "}
            <a
              href="https://doi.org/10.1207/s15516709cog2605_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1207/s15516709cog2605_1
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[8]</span> Tomašev, N., Franklin,
            M., & Osindero, S. (2026). Intelligent AI Delegation. Google DeepMind
            (preprint).{" "}
            <a
              href="https://doi.org/10.48550/arXiv.2602.11865"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.48550/arXiv.2602.11865
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[9]</span> Horvitz, E. (1999).
            Principles of Mixed-Initiative User Interfaces. Proceedings of the SIGCHI Conference
            on Human Factors in Computing Systems (CHI '99), 159-166. ACM.{" "}
            <a
              href="https://doi.org/10.1145/302979.303030"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1145/302979.303030
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
