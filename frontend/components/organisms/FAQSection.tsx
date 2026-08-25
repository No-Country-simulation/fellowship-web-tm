const faqs = [
  {
    pregunta: "¿Qué es No Country?",
    respuesta:
      "No Country es una plataforma que valida talento junior mediante simulaciones laborales por equipos. Reemplaza el CV por evidencia real de trabajo, conectando formación y empleo.",
  },
  {
    pregunta: "¿Cómo funciona una simulación laboral?",
    respuesta:
      "Equipos multidisciplinarios ejecutan desafíos reales de empresas durante 5 semanas. La plataforma captura datos de comportamiento en tiempo real, permitiendo a las empresas observar el talento en acción.",
  },
  {
    pregunta: "¿Para quién es No Country?",
    respuesta:
      "Para talento que busca demostrar experiencia, empresas que quieren contratar sin riesgo, e instituciones educativas que desean mejorar la empleabilidad de sus estudiantes.",
  },
  {
    pregunta: "¿Cómo puedo participar como talento?",
    respuesta:
      "Inscribite en una simulación laboral abierta. Son gratuitas, 100% remotas y abiertas a cualquier persona que quiera demostrar cómo trabaja en equipo bajo presión real.",
  },
  {
    pregunta: "¿Cómo contratar talento validado?",
    respuesta:
      "Las empresas acceden a perfiles pre-validados conductualmente, con semanas de comportamiento documentado. Sin proceso de selección tradicional y con garantía de reemplazo en 72 horas.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-[#000115] text-white px-4 md:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.pregunta}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <summary className="font-semibold cursor-pointer text-lg">
                {faq.pregunta}
              </summary>
              <p className="mt-3 text-[#9ca3af] leading-relaxed">{faq.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}