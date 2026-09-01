"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    pregunta: "¿Qué es No Country?",
    respuesta:
      "No Country es una infraestructura de Simulación Laboral que permite a instituciones educativas, programas de formación y organizaciones crear experiencias de trabajo colaborativo con proyectos, equipos y desafíos concretos. La plataforma permite ejecutar y observar estas experiencias, capturar señales de colaboración y comunicación y generar insights sobre cómo trabajan los participantes.",
  },
  {
    pregunta: "¿Qué es una Simulación Laboral?",
    respuesta:
      "Una Simulación Laboral es una experiencia estructurada que reproduce dinámicas del trabajo real dentro de un entorno controlado. Los participantes trabajan en equipos sobre desafíos concretos, colaboran durante un período determinado, se comunican, toman decisiones y generan entregables. A diferencia de una actividad formativa tradicional, la Simulación Laboral permite observar cómo las personas aplican sus conocimientos mientras trabajan con otras.",
  },
  {
    pregunta: "¿Para quién está diseñada la infraestructura de No Country?",
    respuesta:
      "No Country está diseñada principalmente para instituciones educativas, bootcamps, academias, universidades, programas de formación y organizaciones que desarrollan talento y necesitan incorporar experiencia laboral, colaboración y evidencia de empleabilidad a sus programas. También permite involucrar empresas, empleadores, mentores, jurados y otros actores del ecosistema.",
  },
  {
    pregunta: "¿Cómo funciona una Simulación Laboral?",
    respuesta:
      "La experiencia se estructura alrededor de un desafío y equipos de trabajo. Los participantes son convocados y asignados a equipos, colaboran durante un período determinado utilizando herramientas de comunicación y trabajo, desarrollan proyectos y presentan sus resultados. Durante el proceso, la plataforma registra señales de participación, comunicación y colaboración que pueden utilizarse para generar insights sobre la experiencia.",
  },
  {
    pregunta: "¿Qué observa No Country durante una Simulación Laboral?",
    respuesta:
      "No Country observa señales que surgen durante la experiencia de trabajo colaborativo, como participación, comunicación, interacción entre integrantes, colaboración, actividad de los equipos, evolución y contribución al proyecto. Estas señales pueden combinarse para generar insights sobre cómo las personas y los equipos se desempeñan en una dinámica de trabajo realista.",
  },
  {
    pregunta: "¿Qué tipo de insights genera una Simulación Laboral?",
    respuesta:
      "Los insights pueden ayudar a comprender cómo participan y colaboran las personas y los equipos durante una experiencia de trabajo. Dependiendo de la configuración de la experiencia, pueden abarcar dimensiones como comunicación, colaboración, participación, interacción y evolución. Los insights complementan la información tradicional de una formación con evidencia proveniente de la ejecución y el comportamiento observado.",
  },
  {
    pregunta: "¿Qué beneficios tiene una Simulación Laboral para un programa de formación?",
    respuesta:
      "Una Simulación Laboral permite incorporar experiencia práctica al recorrido formativo, fortalecer la empleabilidad y generar evidencia sobre cómo trabajan los participantes. También puede activar la comunidad, conectar a los participantes con empresas y otros actores del ecosistema y generar contenido orgánico asociado a la experiencia y a la marca del programa.",
  },
  {
    pregunta: "¿Qué pueden observar las instituciones y empresas durante la experiencia?",
    respuesta:
      "La experiencia puede ser observada desde diferentes roles según los permisos definidos para cada programa. El equipo responsable de la institución puede disponer de una visión de la experiencia y sus equipos, mientras que empresas, empleadores, jurados, profesores y mentores pueden acceder a determinados proyectos, actividades o instancias de evaluación. De esta forma, una misma experiencia puede conectar participantes con todo el ecosistema que participa en su desarrollo profesional.",
  },
  {
    pregunta: "¿Qué diferencia a una Simulación Laboral de un curso, proyecto o hackathon?",
    respuesta:
      "Una Simulación Laboral no busca reemplazar la formación ni ser solamente una competencia. Su objetivo es crear un entorno donde los participantes puedan experimentar dinámicas de trabajo colaborativo y donde esas dinámicas puedan ser observadas. A diferencia de un proyecto aislado, la experiencia integra equipos, comunicación, ejecución, seguimiento, observación e insights dentro de una misma infraestructura.",
  },
  {
    pregunta: "¿Quién participa en las experiencias de No Country?",
    respuesta:
      "Las experiencias de No Country reúnen talento tecnológico y profesional de distintos países y disciplinas. Los participantes pueden trabajar en equipos sobre proyectos y desafíos concretos, colaborar con personas de distintos perfiles y generar experiencia y evidencia a través de la ejecución.",
  },
  {
    pregunta: "¿Cómo participa el talento en No Country?",
    respuesta:
      "El talento participa en experiencias de Simulación Laboral de forma remota y 100% gratuita donde trabaja en equipos sobre proyectos y desafíos concretos. A través de la plataforma, los participantes colaboran, se comunican, realizan reuniones, desarrollan entregables y construyen una trayectoria de trabajo observable. Esta experiencia les permite desarrollar práctica profesional, generar evidencia de sus capacidades y conectarse con otros talentos, instituciones y empresas.",
  },
];

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-colors duration-300 hover:border-white/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-base"
      >
        {pregunta}
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#9ca3af] transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[#9ca3af] leading-relaxed">{respuesta}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-[#000115] text-white px-4 md:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-tight text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.pregunta} pregunta={faq.pregunta} respuesta={faq.respuesta} />
          ))}
        </div>
      </div>
    </section>
  );
}
