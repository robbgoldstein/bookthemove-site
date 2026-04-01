import Image from "next/image";

const logos = [
  { name: "Fast Fietz Moving Company", src: "/logos/fast-fietz.png" },
  { name: "Unicorn Moving and Storage", src: "/logos/unicorn.png" },
  { name: "Lyons Moving", src: "/logos/lyons.png" },
  { name: "The Gentle Giant of Movers", src: "/logos/gentle-giant.png" },
  { name: "Presto Logistics", src: "/logos/presto.png" },
];

export default function LogoBar() {
  return (
    <section className="py-12 px-6 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by moving companies across the country
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-16 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 h-10 w-40 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
