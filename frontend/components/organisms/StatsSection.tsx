const stats = [
  { valor: "30,000+", label: "TALENTS", color: "text-[#ff00a0]" },
  { valor: "5000+", label: "TEAMS", color: "text-[#00d1ff]" },
  {
    valor: "100+",
    label: "COUNTRIES",
    color: "bg-linear-to-r from-[#ff00a0] to-[#00d1ff] bg-clip-text text-transparent",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#040414] px-4 py-12 pb-20">
      <div className="max-w-[1300px] mx-auto border-t border-[#1c1b29] pt-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-8 relative ${idx !== 2 ? "md:after:absolute md:after:right-0 md:after:top-2 md:after:h-12 md:after:w-px md:after:bg-[#2d2b40]" : ""}`}
          >
            <div className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}>{stat.valor}</div>
            <div className="text-[13px] font-bold text-[#6b7280] tracking-widest mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}