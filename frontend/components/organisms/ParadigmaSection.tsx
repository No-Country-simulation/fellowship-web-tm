export default function ParadigmaSection() {
  return (
    <section className="bg-neutral-50 dark:bg-zinc-950 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xl md:text-2xl font-medium text-neutral-800 dark:text-zinc-200 leading-relaxed">
          “Entre la formación y el empleo hay un eslabón
          <br className="hidden md:block" />
          que no existe en ningún sistema tradicional.”
        </p>
        <p className="mt-4 text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white">
          No Country es ese eslabón.
        </p>
      </div>
    </section>
  );
}