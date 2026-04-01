const stats = [
  { value: "6%+", label: "Reply Rate", detail: "Industry avg is under 1%" },
  { value: "10,000+", label: "Emails Sent", detail: "For movers nationwide" },
  { value: "24hr", label: "Setup Time", detail: "Campaigns launch next day" },
  { value: "100%", label: "Exclusive", detail: "One mover per county" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-slate-400">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
