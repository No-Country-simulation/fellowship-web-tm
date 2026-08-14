const metricas = [
  { valor: "+800", descripcion: "Equipos ágiles e interconectados formados" },
  { valor: "+1200", descripcion: "Casos de éxito documentados" },
  { valor: "+20", descripcion: "Países con talento activo" },
  { valor: "94%", descripcion: "Índice de satisfacción" },
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="bg-white dark:bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-10 text-center md:text-left">
          Una comunidad global de ejecución real
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Mapa placeholder */}
          <div className="relative bg-neutral-200 dark:bg-zinc-800 rounded-2xl h-[350px] md:h-[400px] flex items-center justify-center">
            <span className="text-neutral-500 dark:text-zinc-400 uppercase tracking-widest text-sm">
              Mapa global (próximamente)
            </span>
            {/* Pines de ejemplo */}
            <div className="absolute top-1/4 left-1/3 h-3 w-3 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute top-1/2 right-1/4 h-3 w-3 bg-blue-400 rounded-full animate-ping" />
            <div className="absolute bottom-1/4 left-1/2 h-3 w-3 bg-pink-400 rounded-full animate-ping" />
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metricas.map((metrica) => (
              <div
                key={metrica.descripcion}
                className="bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 rounded-xl p-6"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">
                  {metrica.valor}
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-zinc-400">
                  {metrica.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}