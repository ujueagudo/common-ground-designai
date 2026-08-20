import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import ilustracionAnclaje from "@/assets/principio-anclaje.png";

export function AnclajePost() {
  return (
    <>
      {/* Lead hook */}
      <div className="mb-8 border-l-4 border-plum-600 pl-5 md:pl-6">
        <p className="text-xl font-medium leading-relaxed text-plum-900/70 md:text-2xl">
          Tienes que resolver un problema o tomar una decisión compleja. Antes de sentarte a
          esbozar tus propias ideas, abres tu asistente de IA y le pides una primera propuesta
          "para inspirarte". Lees su respuesta: parece razonable, bien estructurada y convincente.
          A partir de ese momento, intentas pensar alternativas por tu cuenta, pero todas tus
          ideas gravitan de forma inevitable alrededor del enfoque que la IA te acaba de dar. Sin
          darte cuenta, tu pensamiento no ha sido libre: ha quedado anclado a la primera opción
          que obtuviste.
        </p>
      </div>

      <img
        src={ilustracionAnclaje}
        alt="Un ancla encadenada a un chip, con una nube de pensamiento sobre el ancla mostrando una meta distinta en una montaña"
        width={1448}
        height={1086}
        className="mb-12 aspect-[21/9] w-full rounded-3xl object-cover"
      />

      <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">
        <p>
          Este es el mecanismo en el que se basan algunos trucos de magia y fue demostrado en un
          experimento de psicología. En él, un mago colocaba sobre la mesa siete cartas boca
          abajo: seis con dorso rojo rodeaban a una central de dorso marrón, que era su
          predicción. El participante debía elegir una carta roja y comprobar al levantarla si
          coincidía con la predicción del mago. Pero antes de hacerlo, éste le advertía de que era
          capaz de influir en las decisiones simplemente tocando a diferentes ritmos los dorsos de
          las seis cartas rojas. Tras ello, la persona elegía una carta, la volteaba (jota de
          corazones) y, al voltear la predicción del mago de la carta marrón, resultaba ser
          también la jota de corazones. ¿El secreto? Las siete cartas eran exactamente la misma,
          pero la advertencia del mago de que podía influir en las decisiones, aunque falsa,
          impedía a los participantes descubrir la verdad. De quienes recibieron la advertencia,
          solo el 17% consiguió adivinar el truco, frente al 83% de quienes no recibieron. Además,
          entre los que fallaron, el 80% siguió sin descubrirlo aún después de que se les invitara
          explícitamente a buscar otra explicación
          <sup className="px-0.5 text-plum-600">1</sup>.
        </p>
        <p>
          Llevado al terreno de la IA, en una investigación propia pedimos a un grupo de
          participantes que juzgaran la culpabilidad de acusados a partir de testimonios, viendo la
          sugerencia de una IA antes o después de tomar su propia decisión. Cuando la IA se
          equivocaba, las personas que juzgaron{" "}
          <strong className="font-semibold text-plum-900">antes</strong> de ver la IA acertaron el{" "}
          <strong className="font-semibold text-plum-900">66%</strong> de las veces. Las que vieron
          la propuesta de la IA <strong className="font-semibold text-plum-900">antes</strong> de
          tomar su decisión, se anclaron en dicha propuesta y solo acertaron en el{" "}
          <strong className="font-semibold text-plum-900">37%</strong> de las ocasiones
          <sup className="px-0.5 text-plum-600">2</sup>.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">El principio</h2>
        <p>
          Ver la propuesta de una IA antes de formar tu propio juicio ancla tu pensamiento a ella,
          incluso si la respuesta es errónea. El efecto de este anclaje no depende de la calidad de
          la respuesta, sino del momento en que la recibes: antes o después de pensar por ti.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Qué resuelve este principio
        </h2>
        <p>
          Es una pauta de interacción para preservar el pensamiento crítico al colaborar con
          modelos de lenguaje. Evita que una sugerencia prematura de la IA condicione tus ideas
          antes de haber reflexionado, asegurando que tu planteamiento sea una construcción
          realmente propia y no un simple ajuste sobre la propuesta del algoritmo.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Por qué ocurre el problema
        </h2>
        <p>
          Cuando trabajamos con IA, el anclaje surge de la colisión entre cómo están entrenados los
          modelos y cómo funciona nuestra mente.
        </p>
        <p>
          <strong className="font-semibold text-plum-900">1. El sesgo de la IA</strong>
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">
                  Sobreactuación (over-eagerness):
                </strong>{" "}
                ante una petición ambigua o abierta, la IA tiende a entregar una solución cerrada
                de inmediato asumiendo la intención del usuario, en lugar de detenerse a pedir
                aclaración
                <sup className="px-0.5 text-plum-600">3</sup>. Y es que, a pesar de que suele
                detectar internamente que la instrucción es ambigua, rara vez lo verbaliza en su
                respuesta
                <sup className="px-0.5 text-plum-600">4</sup>. Este sesgo se origina en el propio
                entrenamiento con preferencias humanas: quienes evalúan las respuestas tienden a
                premiar una respuesta directa y completa, aunque sea presuntuosa, por encima de una
                pregunta de aclaración. Así, el sistema termina optimizado para darte una respuesta
                inmediata que puede actuar como ancla en el usuario
                <sup className="px-0.5 text-plum-600">5</sup>.
              </span>
            </li>
          </ul>
        </div>
        <p>
          <strong className="font-semibold text-plum-900">2. El sesgo humano</strong>
        </p>
        <div className="rounded-2xl bg-plum-50 p-8">
          <ul className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span>
              <span>
                <strong className="font-semibold text-plum-900">
                  Efecto Einstellung (fijación):
                </strong>{" "}
                recibir una propuesta de solución, sea esta buena o mejorable, genera un bloqueo
                que impide descubrir soluciones mejores. El psicólogo Abraham S. Luchins describió
                este fenómeno en 1942: tras seguir un mismo procedimiento para resolver diversos
                problemas, ante un problema nuevo la mayoría de participantes no lograba
                desligarse del procedimiento utilizado, atascándose en su resolución, mientras que
                quienes afrontaban el ejercicio por primera vez encontraban la solución sin
                dificultad
                <sup className="px-0.5 text-plum-600">6</sup>. Décadas después, Bilalić y colegas
                replicaron el efecto en ajedrecistas expertos: ante una solución conocida de cinco
                movimientos y otra, menos familiar, de solo tres, la mayoría se anclaba en la
                conocida, incluso aunque buscaran activamente una alternativa: el seguimiento
                ocular mostró que su mirada quedaba atrapada en las piezas de la solución familiar
                <sup className="px-0.5 text-plum-600">7</sup>. No hace falta valorar en gran medida
                la primera idea para quedar anclado: basta con haber estado expuesto a ella.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Cómo aplicar el principio
        </h2>
        <p>
          Aplicar el principio no consiste únicamente en detenerse a reflexionar antes de usar la
          IA. Se trata de estructurar la interacción para que el sistema abra el problema desde
          diferentes ángulos sin anticipar sus propias soluciones hasta que tú hayas fijado tu
          postura.
        </p>
        <p>
          En la práctica, este principio se apoya en la{" "}
          <Link
            to="/principios/$slug"
            params={{ slug: "autonomia" }}
            hash="regla"
            className="text-plum-700 underline hover:text-plum-900"
          >
            REGLA FILTRO AUTORAL
          </Link>
          , definida en{" "}
          <Link
            to="/principios/$slug"
            params={{ slug: "autonomia" }}
            className="text-plum-700 underline hover:text-plum-900"
          >
            PRINCIPIO 01 - AUTONOMÍA
          </Link>
          , y se complementa con una skill diseñada específicamente para evitar el anclaje en
          procesos de análisis y toma de decisiones.
        </p>

        <h3 className="pt-8 font-display text-lg font-bold text-plum-900">
          Skill grill-me-socratic
        </h3>
        <p>
          Para llevar esta pauta a la práctica, hemos desarrollado una variante de la skill
          grill-me, adaptándola para que el asistente adopte un enfoque socrático ante un reto o
          problema complejo. Invocando grill-me-socratic, la IA formula preguntas incisivas desde
          distintos ángulos sin adelantar su propia recomendación. Solo ofrecerá su propuesta si se
          le pide explícitamente, dándote así el tiempo y la oportunidad para definir tu propia
          postura.
        </p>
        <p>
          Como en el truco de cartas, el proceso adecuado nunca fue pensar durante más tiempo sobre
          la respuesta que ya se tenía delante, sino evitar que una propuesta ajena anclara la
          propia.
        </p>
        <div className="my-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-plum-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-plum-600">
              Skill de Claude
            </p>
            <p className="font-display text-lg font-bold text-plum-900">grill-me-socratic</p>
          </div>
          <a
            href="https://github.com/ujueagudo/common-ground-designai/tree/main/skills/grill-me-socratic"
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
            <span className="mr-2 font-medium text-plum-900">[1]</span> Thomas, C., & Didierjean,
            A. (2016). Magicians fix your mind: How unlikely solutions block obvious ones.
            Cognition, 154, 169-173.{" "}
            <a
              href="https://doi.org/10.1016/j.cognition.2016.06.002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1016/j.cognition.2016.06.002
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[2]</span> Agudo, U., Liberal, K. G.,
            Arrese, M., & Matute, H. (2024). The impact of AI errors in a human-in-the-loop
            process. Cognitive Research: Principles and Implications, 9(1), 1.{" "}
            <a
              href="https://doi.org/10.1186/s41235-023-00529-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1186/s41235-023-00529-3
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[3]</span> Anthropic (2026).
            Transparency Hub: Model Report, Claude Sonnet 4.6, sección "Alignment Evaluations".{" "}
            <a
              href="https://www.anthropic.com/transparency/model-report"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://www.anthropic.com/transparency/model-report
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[4]</span> Su, Z., & Cardie, C.
            (2026). Knowing but Not Showing: LLMs Recognize Ambiguity but Rarely Ask Clarifying
            Questions. arXiv:2605.25284.{" "}
            <a
              href="https://arxiv.org/abs/2605.25284"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://arxiv.org/abs/2605.25284
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[5]</span> Wang, W., Shi, J., Ling,
            Z., Chan, Y.-K., Wang, C., Lee, C., Yuan, Y., Huang, J., Jiao, W., & Lyu, M. R. (2024).
            Learning to Ask: When LLM Agents Meet Unclear Instruction. arXiv:2409.00557 (v4,
            revisado 29 de abril de 2026).{" "}
            <a
              href="https://arxiv.org/abs/2409.00557"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://arxiv.org/abs/2409.00557
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[6]</span> Luchins, A. S. (1942).
            Mechanization in problem solving: The effect of Einstellung. Psychological Monographs,
            54(6), Whole No. 248.{" "}
            <a
              href="https://doi.org/10.1037/h0093502"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1037/h0093502
            </a>
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[7]</span> Bilalić, M., McLeod, P., &
            Gobet, F. (2008). Inflexibility of experts: reality or myth? Quantifying the
            Einstellung effect in chess masters. Cognitive Psychology, 56(2), 73-102.{" "}
            <a
              href="https://doi.org/10.1016/j.cogpsych.2007.02.001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-700 underline hover:text-plum-900"
            >
              https://doi.org/10.1016/j.cogpsych.2007.02.001
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
