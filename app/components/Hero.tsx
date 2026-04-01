const CALENDLY_URL = "https://calendly.com/bookthemove";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
          <span className="text-sm font-medium text-blue-700">
            One mover per county
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
          We Email Home Sellers For You.{" "}
          <span className="text-blue-600">They Reply, You Book The Move.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We find people listing their homes in your territory, verify their
          contact info, and send personalized emails on your behalf. You get the
          replies — and book the job.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg shadow-blue-600/20"
          >
            Book a Demo
          </a>
          <a
            href="#pricing"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See Pricing
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          No contracts. Cancel anytime. Setup in 24 hours.
        </p>
      </div>
    </section>
  );
}
