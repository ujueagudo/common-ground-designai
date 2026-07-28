import ilustracionAutoridad from "@/assets/principio-autoridad.jpg";

export function AutoridadPost() {
  return (
    <>
      <img
        src={ilustracionAutoridad}
        alt="Una balanza con una mano humana en un platillo y un chip en el otro"
        width={1024}
        height={768}
        className="mb-12 aspect-[4/3] w-full rounded-3xl object-cover"
      />

      {/* Tabla de sesgos en juego */}
      <div className="mb-12 rounded-2xl bg-plum-50 p-8">
        <div className="mb-6 grid grid-cols-2 gap-8 border-b border-plum-200 pb-4">
          <div className="text-[10px] font-bold uppercase tracking-widest text-plum-600">
            Sesgos humanos
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-plum-600">
            Sesgos de la IA
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm leading-relaxed">
          <div className="space-y-2">
            <p>• Sesgo de automatización</p>
            <p>• Fatiga por decisión</p>
            <p>• Aversión a la pérdida</p>
            <p>• Visión de túnel al converger</p>
          </div>
          <div className="space-y-2">
            <p>• Certeza alucinada</p>
            <p>• Complacencia con el usuario</p>
            <p>• Sobreconfianza estadística</p>
            <p>• Deriva de instrucción en hilos largos</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">
        <p>
          En 1999, Eric Horvitz planteó un problema que sigue sin resolverse del todo:{" "}
          <strong className="font-semibold text-plum-900">
            ¿cuándo debería un sistema automatizado actuar por su cuenta, y cuándo debería esperar a
            que decida la persona?
          </strong>
        </p>
        <p>
          Su ejemplo era modesto: LookOut, un asistente que vigilaba el correo y, al detectar que
          alguien proponía quedar, se ofrecía a agendarlo de forma automatizada
          <sup className="px-0.5 text-plum-600">1</sup>. Su criterio no era el tema de la tarea, sino
          dos preguntas: cuánta incertidumbre hay sobre lo que la persona realmente quiere, y cuánto
          costaría un error si actúa solo y se equivoca. Con incertidumbre baja y un error barato de
          deshacer, actuar sin preguntar tiene sentido. Con incertidumbre alta o un error caro,
          conviene preguntar en vez de adivinar.
        </p>

        <blockquote className="my-10 border-l-4 border-plum-600 py-2 pl-6 font-medium italic text-plum-900">
          «Lo que decide si conviene actuar sin preguntar no es de qué trata la tarea, sino qué tipo
          de paso es dentro de ella.»
        </blockquote>

        <p>
          Trasladado a una colaboración con un asistente de texto, esto se traduce así: lo que decide
          si conviene actuar sin preguntar no es de qué trata la tarea, sino qué tipo de paso es
          dentro de ella (mecánico y verificable, o interpretativo y con criterio propio de por medio)
          y cuánta incertidumbre y cuánto coste de error hay en ese paso concreto.
        </p>
        <p>
          El propio ejemplo de Horvitz señala su límite: es una decisión puntual y aislada, del tipo
          «¿agendo esto, sí o no?». Un paper de 2026 que construye sobre su propuesta lo documenta
          con precisión: sus principios «se pensaron principalmente para tareas acotadas y discretas
          […]. Los agentes contemporáneos introducen nuevos retos: control compartido sostenido,
          memoria entre sesiones, recuperación de fallos complejos, que los principios existentes no
          capturan del todo»<sup className="px-0.5 text-plum-600">5</sup>. En 1999 no existían
          agentes que sostuvieran semanas de colaboración con memoria de lo anterior; el criterio de
          confianza y coste seguía siendo válido, pero no bastaba por sí solo para ese tipo de
          relación sostenida.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Divergir y converger
        </h2>
        <p>
          Sobre esa base, y no como parte de la carencia original de Horvitz, el mismo paper de 2026
          propone que la autonomía debería negociarse también según la fase de la tarea
          <sup className="px-0.5 text-plum-600">5</sup>. Conviene ser más concretos que «fase": lo
          relevante es si se está divergiendo (explorando qué hacer, generando opciones) o
          convergiendo (decidiendo ya, cerrando un resultado). El coste de un error no es el mismo en
          los dos momentos. Mientras se diverge, nada está comprometido todavía, una propuesta que
          no convence se descarta sin más y se sigue explorando. Al converger, la decisión se queda
          fija, y ceder ese momento a la IA sí tiene un coste real, no porque decida peor (eso no
          está medido aquí), sino porque un error en esa fase ya no es gratis de deshacer. Esta
          distinción explícita aparece en el caso de un copiloto de IA para diseñadores
          <sup className="px-0.5 text-plum-600">6</sup>, en un marco de cuatro fases que puede
          repetirse varias veces dentro de un mismo proyecto
          <sup className="px-0.5 text-plum-600">7</sup>, y en un estudio con expertos en
          co-creatividad que describe el control como una trayectoria que sube y baja, no un punto
          fijo<sup className="px-0.5 text-plum-600">8</sup>.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">Un ejemplo</h2>
        <p>
          Alguien está diseñando la campaña de una marca con ayuda de un asistente de IA. Al
          principio, mientras explora qué dirección visual tomar, deja que la IA genere media docena
          de propuestas distintas sin pedirle nada muy concreto todavía: algunas no sirven y se
          descartan sin coste, y de una de ellas surge una idea que sí interesa seguir. Ahí cambia
          el momento. Ya no se trata de explorar, sino de cerrar un diseño concreto para producción.
          Si en ese punto la IA sigue proponiendo variaciones con la misma libertad que antes, sin
          que la persona apruebe cada cambio, el resultado final puede alejarse de lo que se había
          decidido sin que nadie lo note hasta que ya esté cerrado. La autonomía que era útil
          explorando se vuelve un riesgo cerrando.
        </p>

        <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
          Por qué esto importa
        </h2>
        <p>
          Que esto no sea solo un matiz teórico se ve en los números. Un análisis de cerca de
          400.000 sesiones reales de código asistido por IA encuentra que, con el mismo nivel de
          autonomía otorgado al agente, las personas novatas abandonan la tarea el 19% de las veces
          frente al 5-7% en expertas<sup className="px-0.5 text-plum-600">11</sup>. La diferencia no
          está en la herramienta: está en si quien la usa sabe reconocer cuándo un resultado
          necesita más supervisión. Con el mismo reparto de autoridad, quien distingue peor un
          acierto de un error se encuentra en apuros muchas más veces. Es la misma idea de fondo: la
          autonomía correcta no es una constante, depende de quién decide y de qué está en juego.
        </p>
        <p>
          Tampoco es un problema que la investigación tenga resuelto. Una revisión de 134 sistemas de
          co-creación humano-IA encuentra que ni siquiera la literatura académica vincula de forma
          sistemática el nivel de autonomía con la criticidad del dominio o la experiencia de quien
          lo usa<sup className="px-0.5 text-plum-600">12</sup>. No es que haya estudios que
          contradigan lo anterior: es que nadie, ni en la práctica ni en la investigación que la
          estudia, lo ha sistematizado todavía.
        </p>
        <p>
          Hay además una idea equivocada de fondo: que más autonomía de la IA implica necesariamente
          menos control humano, como si fuera un único dial
          <sup className="px-0.5 text-plum-600">10</sup>. No tiene por qué serlo, al menos en el
          diseño: un sistema puede dar mucha autonomía a la máquina y dejar, a la vez, abierta la
          puerta a que la persona la anule en cualquier momento. Pero que la puerta esté abierta no
          significa que se cruce. La investigación sobre automatización lleva décadas mostrando que
          las personas tienden a aceptar por defecto lo que el sistema ya decidió, y que anular esa
          decisión exige un esfuerzo consciente contra ese hábito
          <sup className="px-0.5 text-plum-600">13</sup>. Poder corregir algo no es lo mismo que
          ejercer esa corrección de verdad. Por eso declarar una decisión importa tanto como poder
          deshacerla: si la decisión no se hace visible, no hay nada que activamente aceptar o
          rechazar, solo algo que pasa desapercibido.
        </p>

        {/* La regla */}
        <div className="my-16 rounded-3xl bg-plum-900 p-10 text-cream shadow-2xl">
          <h2 className="mb-6 font-display text-xl font-extrabold uppercase tracking-tight">
            La regla
          </h2>
          <p className="mb-8 leading-relaxed opacity-90">
            Todo lo anterior se puede escribir como una regla concreta, dirigida a quien configura o
            da instrucciones a un asistente de IA. No como intención vaga: algo que se pueda copiar
            tal cual.
          </p>
          <p className="mb-8 leading-relaxed opacity-90">
            Antes de actuar de forma autónoma sobre algo ambiguo o interpretativo, comprobar dos
            cosas: si la incertidumbre sobre lo que la persona quiere realmente es baja, y si es
            barato deshacer el resultado en caso de error.
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Si las dos son ciertas: actuar sin preguntar.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Si solo una lo es: actuar, pero declarar en la
              misma respuesta qué se decidió y por qué.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Si ninguna lo es: detenerse y preguntar antes
              de actuar. No basta con declarar.
            </li>
            <li className="flex gap-3">
              <span className="text-plum-600">●</span> Además: si un mismo tipo de decisión se ha
              acertado repetidamente sin corrección, bajar el umbral para actuar sin preguntar en ese
              terreno; si la misma corrección se ha repetido más de una vez, subirlo.
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
            Principles of Mixed-Initiative User Interfaces. Proceedings of CHI '99.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[5]</span> Revisión de los principios
            de iniciativa mixta para agentes contemporáneos (2026).
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[6]</span> Estudio de caso: copiloto de
            IA para equipos de diseño.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[7]</span> Marco de cuatro fases de
            colaboración iterativa.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[8]</span> Estudio con expertos en
            co-creatividad humano-IA.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[10]</span> Crítica al modelo de la
            autonomía como dial único.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[11]</span> Análisis de ~400.000
            sesiones de programación asistida por IA.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[12]</span> Revisión sistemática de 134
            sistemas de co-creación humano-IA.
          </li>
          <li>
            <span className="mr-2 font-medium text-plum-900">[13]</span> Literatura sobre sesgo de
            automatización y complacencia.
          </li>
        </ol>
      </div>
    </>
  );
}
