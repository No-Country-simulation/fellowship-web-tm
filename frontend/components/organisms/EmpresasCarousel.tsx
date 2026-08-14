const empresas = [
  "Viamatica",
  "Oracle (ONE)",
  "Alura",
  "Viamatica",
  "Oracle (ONE)",
  "Alura",
];

export default function EmpresasCarousel() {
  return (
    <section className="w-full overflow-hidden py-8 bg-neutral-100 dark:bg-zinc-900">
      <div className="animate-marquee flex w-max gap-8 items-center">
        {/* Duplicamos la lista para el efecto infinito */}
        {[...empresas, ...empresas].map((empresa, idx) => (
          <div
            key={idx}
            className="px-10 py-6 bg-neutral-300 dark:bg-zinc-800 rounded-xl flex items-center justify-center min-w-[180px]"
          >
            <span className="font-bold text-neutral-800 dark:text-zinc-200">{empresa}</span>
          </div>
        ))}
      </div>
    </section>
  );
}