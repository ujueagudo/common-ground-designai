export function SesgosPost() {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-plum-900/80">
      <p>
        Los principios de este repositorio dan por supuesto algo que casi nunca se explicita:{" "}
        <strong className="font-semibold text-plum-900">
          que ni el diseñador ni el modelo son observadores neutrales.
        </strong>{" "}
        Cada uno llega a la colaboración con una forma característica de equivocarse. Conocerla es lo
        que permite repartir tareas con criterio en vez de por costumbre.
      </p>

      <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
        Cómo somos los humanos
      </h2>
      <p>
        Delegamos mejor de lo que revisamos. En cuanto una propuesta llega redactada, ordenada y con
        aspecto terminado, bajamos el nivel de escrutinio; y cuanto más avanza la sesión, menos
        energía queda para discutir.
      </p>
      <div className="rounded-2xl bg-plum-50 p-8">
        <ul className="space-y-3 text-base">
          <li>
            <strong className="font-semibold text-plum-900">Sesgo de automatización.</strong> Damos
            por buena la salida del sistema solo porque viene del sistema.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Fatiga por decisión.</strong> Tras varias
            iteraciones aceptamos la opción disponible, no la mejor.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Anclaje en la primera propuesta.</strong>{" "}
            El primer borrador fija el marco y el resto son variaciones suyas.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Aversión a la pérdida.</strong> Nos cuesta
            tirar trabajo hecho aunque el camino sea el equivocado.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Visión de túnel al converger.</strong> Al
            cerrar dejamos de ver alternativas que seguían siendo válidas.
          </li>
        </ul>
      </div>

      <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">Cómo es la IA</h2>
      <p>
        El modelo no duda en voz alta. Produce con la misma fluidez lo que sabe y lo que infiere, y
        tiende a acompañarnos antes que a contradecirnos.
      </p>
      <div className="rounded-2xl bg-plum-50 p-8">
        <ul className="space-y-3 text-base">
          <li>
            <strong className="font-semibold text-plum-900">Certeza alucinada.</strong> Formula con
            aplomo afirmaciones sin respaldo.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Complacencia con el usuario.</strong>{" "}
            Ajusta su criterio al nuestro cuando insistimos.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Sobreconfianza estadística.</strong>{" "}
            Prefiere lo frecuente a lo pertinente: converge hacia la media del sector.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Deriva de instrucción.</strong> En hilos
            largos pierde restricciones dadas al principio.
          </li>
          <li>
            <strong className="font-semibold text-plum-900">Falta de contexto tácito.</strong>{" "}
            Desconoce lo que nadie escribió: política interna, historia del proyecto, quién decide.
          </li>
        </ul>
      </div>

      <h2 className="pt-8 font-display text-2xl font-extrabold text-plum-900">
        Dónde se amplifican
      </h2>
      <p>
        El problema no son los sesgos por separado, sino sus parejas. La certeza alucinada del modelo
        encaja perfectamente con nuestro sesgo de automatización: uno afirma sin dudar y el otro no
        pregunta. La complacencia encaja con el anclaje: pedimos variaciones de una idea que ya
        habíamos decidido, y recibimos justificaciones de ella.
      </p>

      <blockquote className="my-10 border-l-4 border-plum-600 py-2 pl-6 font-medium italic text-plum-900">
        «Una buena colaboración no elimina los sesgos: coloca a cada parte donde los suyos hacen menos
        daño.»
      </blockquote>

      <p>
        De ahí salen los principios. No son reglas de etiqueta con la máquina, sino formas concretas
        de decidir quién actúa, cuándo se pregunta y qué se deja por escrito para que ninguno de los
        dos lados arrastre al otro por su punto ciego.
      </p>
    </div>
  );
}
