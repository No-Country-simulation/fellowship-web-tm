const steps = [
  { numero: "01", titulo: "Challenge", descripcion: "Un problema concreto.", color: "border-[#ff00a0] text-[#ff00a0]" },
  { numero: "02", titulo: "Teams", descripcion: "Personas reales forman equipos.", color: "border-[#00d1ff] text-[#00d1ff]" },
  { numero: "03", titulo: "Execution", descripcion: "Cinco semanas de trabajo.", color: "border-[#a855f7] text-[#a855f7]" },
  { numero: "04", titulo: "Observation", descripcion: "La infraestructura registra lo que sucede.", color: "border-[#3b82f6] text-[#3b82f6]" },
  { numero: "05", titulo: "Evidence", descripcion: "La ejecución se convierte en evidencia observable.", color: "border-[#10b981] text-[#10b981]" },
];

export default function SimulationDefinition() {
  return (
    <section id="simulacion" className="bg-white text-black px-4 md:px-8 py-20">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#6b7280] uppercase tracking-widest">
            <span className="inline-block w-5 h-1 rounded bg-linear-to-r from-[#ff00a0] to-[#00d1ff]" />
            Simulación Laboral
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">¿Qué es la Simulación Laboral?</h2>
          <p className="text-lg text-[#6b7280] mt-3">
            De las credenciales a la evidencia de comportamiento y ejecución.
          </p>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold max-w-3xl mb-16">
          Creamos las condiciones para que el trabajo pueda ser observado.
        </h3>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6">
          {/* línea horizontal */}
          <div className="hidden md:block absolute top-6 left-10 right-10 h-px bg-gray-200" />

          {steps.map((step) => (
            <div
              key={step.numero}
              className="relative z-10 flex md:flex-col items-center md:text-center gap-4 md:gap-0 md:w-1/5"
            >
              <div
                className={`h-12 w-12 rounded-full bg-white border-2 flex items-center justify-center font-bold text-lg shrink-0 ${step.color}`}
              >
                {step.numero}
              </div>
              <div className="md:mt-4">
                <h4 className="font-bold text-lg">{step.titulo}</h4>
                <p className="text-sm text-[#9ca3af] mt-1 max-w-[160px]">{step.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}